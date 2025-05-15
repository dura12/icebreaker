import { NextResponse } from 'next/server'
import { generateQuestion } from '@/app/services/openai'

export async function POST(request: Request) {
  try {
    const { stage } = await request.json()
    
    if (!stage) {
      return NextResponse.json(
        { error: 'Stage is required' },
        { status: 400 }
      )
    }

    const question = await generateQuestion(stage)
    
    return NextResponse.json({ question })
  } catch (error) {
    console.error('Error in question API:', error)
    return NextResponse.json(
      { error: 'Failed to generate question' },
      { status: 500 }
    )
  }
} 