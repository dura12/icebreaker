import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const PROMPTS = {
  'just-met': `Generate a lighthearted and interesting icebreaker question suitable for two people who have just met. The question should encourage sharing a small, non-intrusive personal detail or preference. Avoid anything too deep or controversial.`,
  'acquaintances': `Generate an engaging question suitable for acquaintances or colleagues that helps them learn more about each other's interests, hobbies, or general perspectives. Keep it professional but friendly.`,
  'friends': `Generate a thought-provoking but fun question for two friends to deepen their connection. The question can touch on values, memorable experiences, or future aspirations, but should still feel comfortable for friends to discuss.`,
  'close-friends': `Generate a question for close friends or partners that encourages deeper reflection and sharing about their relationship, personal growth, or shared dreams. The question can be more intimate but should still be positive and constructive.`,
  'silly': `Generate a fun, lighthearted, and possibly silly question that will make both people laugh and share something entertaining about themselves. Keep it playful and creative.`,
}

export async function generateQuestion(stage: keyof typeof PROMPTS): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates engaging icebreaker questions.',
        },
        {
          role: 'user',
          content: PROMPTS[stage],
        },
      ],
      model: 'gpt-3.5-turbo',
    })

    return completion.choices[0]?.message?.content || 'What makes you smile?'
  } catch (error) {
    console.error('Error generating question:', error)
    return 'What makes you smile?' // Fallback question
  }
} 