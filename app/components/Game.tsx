'use client'

import React, { useState, useEffect } from 'react'

interface GameProps {
  stage: string
  player1: string
  player2: string
  onEndGame: () => void
}

export default function Game({ stage, player1, player2, onEndGame }: GameProps) {
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1)
  const [question, setQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const displayName = (playerNum: number) => {
    if (playerNum === 1) {
      return player1 || 'Player 1'
    }
    return player2 || 'Player 2'
  }

  const fetchNewQuestion = async () => {
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stage }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch question')
      }

      const data = await response.json()
      setQuestion(data.question)
    } catch (err) {
      setError('Failed to load question. Please try again.')
      console.error('Error fetching question:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNewQuestion()
  }, [])

  const handleNextQuestion = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
    fetchNewQuestion()
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 text-center">
      <div className="space-y-4">
        <h2 className="text-2xl font-playfair text-gray-700">
          {displayName(currentPlayer)}'s Turn
        </h2>
        
        <div className="min-h-[120px] flex items-center justify-center">
          {isLoading ? (
            <div className="animate-pulse text-gray-400">Loading question...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <p className="text-xl md:text-2xl font-playfair text-gray-800 leading-relaxed">
              {question}
            </p>
          )}
        </div>
      </div>

      <div className="space-x-4">
        <button
          onClick={handleNextQuestion}
          disabled={isLoading}
          className="btn btn-primary disabled:opacity-50"
        >
          Next Question
        </button>
        <button
          onClick={onEndGame}
          className="btn btn-secondary"
        >
          End Game
        </button>
      </div>
    </div>
  )
} 