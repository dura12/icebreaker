# Icebreaker Spark 🎯

A beautiful and engaging app that helps two people get to know each other better through AI-powered conversation starters.
Lets get to know each other 
## Features

- 🤝 Different relationship stages (Just Met, Acquaintances, Friends, Close Friends)
- 🎯 Tailored questions based on relationship depth
- 👥 Optional player names for personalization
- 🎨 Beautiful, minimalist UI with smooth transitions
- 🤖 AI-powered question generation using OpenAI

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Firebase (for future features)
- OpenAI API

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd icebreaker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following:

```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Firebase (for future features)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Select your relationship stage with the other person
2. (Optional) Enter your names for personalization
3. Take turns answering the AI-generated questions
4. Click "Next Question" to switch turns and get a new question
5. Click "End Game" when you're done

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning, personal use, or in your own projects.
