'use client'

import React, { useState } from 'react'
import Game from './components/Game' // Assuming this component exists and is styled appropriately
// import Image from "next/image"; // We might not need Image if we remove all SVGs

const relationshipStages = [
  { id: 'just-met', label: 'Just Met / Strangers', emoji: '🤝' },
  { id: 'acquaintances', label: 'Acquaintances / Colleagues', emoji: '👋' },
  { id: 'friends', label: 'Friends', emoji: '😊' },
  { id: 'close-friends', label: 'Close Friends / Partners', emoji: '💖' },
  { id: 'silly', label: 'Just for Fun / Silly', emoji: '🤪' },
]

export default function Home() {
  const [stage, setStage] = useState('')
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [showNameInput, setShowNameInput] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  const handleStageSelect = (selectedStage: string) => {
    setStage(selectedStage)
    setShowNameInput(true)
  }

  const handleStartGame = () => {
    // Basic validation: ensure at least one player name if two are expected by game logic
    // or if stage isn't 'silly' (assuming 'silly' could be solo or more abstract)
    // For simplicity, we'll just proceed. Add validation as needed.
    setGameStarted(true)
  }

  const handleEndGame = () => {
    setGameStarted(false)
    setShowNameInput(false)
    setStage('')
    setPlayer1('')
    setPlayer2('')
  }

  return (
    // Main container with a subtle gradient background
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4 sm:p-8 font-[family-name:var(--font-geist-sans)] text-gray-800">
      {/* Card-like container for the main content */}
      <main className="bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-6 sm:p-10 w-full max-w-lg flex flex-col items-center gap-6 sm:gap-8">
        {/* App Logo/Title Area */}
        <div className="text-center">
          {/* You can replace this with an actual logo SVG or Image */}
          <span className="text-5xl sm:text-6xl" role="img" aria-label="sparkles">
            ✨
          </span>
          <h1 className="text-4xl md:text-5xl font-playfair mt-2 text-gray-900">
            Icebreaker Spark
          </h1>
          <p className="text-gray-600 mt-1">Ignite conversations and connect!</p>
        </div>

        {/* Game Content Area */}
        {gameStarted ? (
          <Game
            stage={stage}
            player1={player1}
            player2={player2}
            onEndGame={handleEndGame}
          />
        ) : !showNameInput ? (
          <div className="w-full space-y-6">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
              How well do you know each other?
            </h2>
            <div className="space-y-3">
              {relationshipStages.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleStageSelect(s.id)}
                  className="w-full py-4 px-6 text-left rounded-lg bg-white shadow-md hover:shadow-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 border border-gray-200 group"
                >
                  <span className="mr-3 text-xl" role="img" aria-label={s.label}>{s.emoji}</span>
                  <span className="font-medium text-gray-700 group-hover:text-purple-700">
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full space-y-6">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
              Who's Playing?
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Player 1 (Optional)"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition-all text-gray-700"
              />
              <input
                type="text"
                placeholder="Player 2 (Optional)"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition-all text-gray-700"
              />
              <button
                className="w-full py-4 px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={handleStartGame}
              >
                Let's Spark! ✨
              </button>
               <button
                className="w-full py-3 px-6 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
                onClick={() => setShowNameInput(false)} // Go back to stage selection
              >
                Back
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Simplified Footer */}
      <footer className="text-center mt-8 sm:mt-12 text-white/80 text-sm">
        <p>© {new Date().getFullYear()} Icebreaker Spark. Have fun connecting!</p>
        {/* 
          If you want to keep a deploy link (e.g., for a portfolio), make it subtle:
          <a 
            href="YOUR_DEPLOY_URL_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            View Live
          </a> 
        */}
      </footer>
    </div>
  );
}