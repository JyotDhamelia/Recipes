import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

export async function POST(request: Request) {
  const { query } = await request.json()

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const result = await model.generateContent(`Provide a recipe only with ${query} ingridients: `)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ result: text })
  } catch (error) {
    console.error('Error searching recipe:', error)
    return NextResponse.json({ error: 'An error occurred while searching for the recipe.' }, { status: 500 })
  }
}