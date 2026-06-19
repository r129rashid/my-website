// Content for the "Beyond the Day Job" interactive AI-basics module.
// Single source of truth — no copy lives in the component.
// `icon` is a lucide-react icon name, mapped to a component in the section.

export type AiCard = {
  title: string;
  concept: string;
  realWorld: string;
};

export type AiDeck = {
  id: string;
  title: string;
  icon: string; // lucide-react icon name
  cards: AiCard[];
};

export const aiDecks: AiDeck[] = [
  {
    id: "what-is-ai",
    title: "What is AI, Really?",
    icon: "Cpu",
    cards: [
      {
        title: "Intelligence, Defined",
        concept:
          "Artificial Intelligence is when a computer can do tasks that normally require human thinking — like recognizing faces, understanding speech, or making decisions.\n\nThink of it as teaching a machine to be clever, not just fast. A calculator is fast but dumb. AI tries to be thoughtful.",
        realWorld:
          "When you unlock your phone with your face, AI is recognizing you from millions of possible faces — in milliseconds. No human wrote rules for every possible face. The machine learned.",
      },
      {
        title: "AI vs Machine Learning",
        concept:
          "AI is the big idea — making machines smart.\nMachine Learning (ML) is one way to achieve it.\n\nInstead of writing rules ('if round + red = apple'), ML shows the machine thousands of apples and lets it figure out the rules itself.\n\nAI is the destination. ML is the road that gets you there.",
        realWorld:
          "Netflix doesn't have a rule that says 'recommend action movies on Friday nights.' It learned your taste by watching what you watched, skipped, and rated — then made predictions.",
      },
      {
        title: "Deep Learning",
        concept:
          "Deep Learning is ML that uses many layers — inspired by how your brain works.\n\nEach layer picks up on something more complex:\nLayer 1: edges → Layer 5: shapes → Layer 12: 'that's a dog'\n\nMore layers = can understand more complex patterns. That's what 'deep' means.",
        realWorld:
          "Google Photos can tell your dog apart from someone else's dog across thousands of photos. Deep learning recognizes patterns layer by layer — just like you do, but with math.",
      },
      {
        title: "Generative AI",
        concept:
          "Most AI classifies or predicts ('Is this spam?'). Generative AI creates — text, images, music, code.\n\nIt learned from billions of examples and can now produce new things in the same style.\n\nThink of it as an AI that studied all of human creativity and then started making its own.",
        realWorld:
          "ChatGPT writes essays. DALL·E paints pictures from words. Suno composes songs. All generative AI — creating original things, not just analyzing existing ones.",
      },
      {
        title: "AI Isn't Magic",
        concept:
          "AI feels magical but it's really just statistics + pattern recognition on huge amounts of data.\n\nNo understanding. No feelings. No opinions. Just: 'given this input, what output appeared most often during training?'\n\nWhen AI gets it wrong, it's usually because the training data was missing something.",
        realWorld:
          "Early face recognition AI worked great on light skin tones but poorly on dark ones — because training photos skewed toward lighter-skinned people. Bias in the data = bias in the output.",
      },
    ],
  },
  {
    id: "how-machines-learn",
    title: "How Machines Learn",
    icon: "GraduationCap",
    cards: [
      {
        title: "Data is Food",
        concept:
          "ML models don't get programmed with rules — they eat data and figure out rules themselves.\n\nMore data + better quality data = smarter model.\nGarbage in → garbage out.\n\nTraining a model is like feeding a student thousands of practice problems before the real exam. The patterns stick.",
        realWorld:
          "Spotify has processed millions of songs to understand what makes music 'chill,' 'energetic,' or 'sad.' That's why its Discover Weekly playlist actually knows your vibe.",
      },
      {
        title: "Supervised Learning",
        concept:
          "You give the model labeled examples:\n'This email is spam. This one isn't.'\n'This image is a cat. This one isn't.'\n\nThe model learns the difference by studying thousands of these pairs.\n\nIt's learning with a teacher — every example has a correct answer the model can check itself against.",
        realWorld:
          "Gmail's spam filter was trained on millions of emails tagged 'spam' or 'not spam' by humans. Now it catches spam it's never seen before — because it understood the pattern, not just the examples.",
      },
      {
        title: "Unsupervised Learning",
        concept:
          "No labels. No right answers. The model just explores data and finds natural groupings on its own.\n\nGive it 10,000 customer records and it might discover 4 types of customers you never knew existed — without you telling it what to look for.",
        realWorld:
          "Spotify discovered 'micro-genres' like 'deep filthstep' and 'escape room' by clustering similar-sounding songs — no human designed these categories. The AI found them itself.",
      },
      {
        title: "Reinforcement Learning",
        concept:
          "An agent tries actions, gets rewarded for good ones, penalized for bad ones — and learns to maximize rewards over time.\n\nExactly how you'd train a dog. Except the 'dog' is software and the 'treats' are points in a score function.",
        realWorld:
          "AlphaGo learned to beat world champions at the board game Go — not by being programmed with strategy, but by playing millions of games against itself and learning from every win and loss.",
      },
      {
        title: "Training vs Using a Model",
        concept:
          "Training = the learning phase. Slow, expensive, done once (or occasionally). The model adjusts its internal numbers until it gets answers right.\n\nInference = using the trained model to make predictions. Fast, cheap, happens millions of times per day.\n\nChatGPT took months to train. When you chat with it, that's inference — nearly instant.",
        realWorld:
          "Training GPT-4 cost tens of millions of dollars and months on thousands of specialized chips. Every message you send costs a fraction of a cent. That's the training vs inference gap.",
      },
      {
        title: "Features",
        concept:
          "Features are the inputs the model uses to make predictions.\n\nFor house price prediction: size, location, bedrooms, age — all features.\nFor spam detection: word frequency, sender, number of links — all features.\n\nChoosing good features matters as much as choosing a good algorithm.",
        realWorld:
          "When a bank's AI decides whether to approve your loan, it looks at features like income, credit score, and payment history — not your name or photo (ideally). Features shape the decision.",
      },
    ],
  },
  {
    id: "neural-networks",
    title: "Brains Made of Math",
    icon: "Network",
    cards: [
      {
        title: "The Neuron",
        concept:
          "Your brain has ~86 billion neurons — cells that receive signals and fire if the signal is strong enough.\n\nArtificial neurons do the same thing with math:\n• Receive numbers as input\n• Multiply each by a 'weight'\n• Add them up\n• Decide whether to 'fire' based on the total\n\nOne neuron is useless. Millions together are powerful.",
        realWorld:
          "A single pixel tells you nothing about an image. But millions of artificial neurons processing millions of pixels can identify your face — not your friend's. Quantity creates intelligence.",
      },
      {
        title: "Layers",
        concept:
          "Neurons are organized in layers:\n• Input layer: raw data comes in (pixels, words, numbers)\n• Hidden layers: the actual learning happens here\n• Output layer: the final answer (dog/cat, spam/safe, price)\n\nDeep learning = many hidden layers. Each layer understands something more abstract than the last.",
        realWorld:
          "In image AI: Layer 1 detects edges. Layer 5 detects eyes. Layer 15 recognizes 'this is a specific person's face.' Abstract understanding builds layer by layer.",
      },
      {
        title: "Weights — Where Knowledge Lives",
        concept:
          "Every connection between neurons has a weight — a number saying how important that input is.\n\nTraining adjusts all the weights until the network gets answers right. When training is done, those weights ARE the model's knowledge.\n\nGPT-4 has roughly 1.8 trillion weights. Each one was tuned during training on billions of text examples.",
        realWorld:
          "When you download an AI model file (e.g. a 4GB file), what you're downloading is billions of weights — tiny numbers that together encode language, knowledge, and reasoning patterns.",
      },
      {
        title: "How It Sees Images",
        concept:
          "To a neural network, an image is just a grid of numbers (pixel values 0–255).\n\nConvolutional Neural Networks slide small 'filters' across the image:\n• Filter 1 detects horizontal edges\n• Filter 10 detects circles\n• Deep layers combine these into 'eye' or 'car wheel'\n\nThis is why AI can recognize objects in photos.",
        realWorld:
          "Instagram applies filters using CNNs to detect skin tones. Tesla's self-driving identifies pedestrians, lane lines, and traffic lights from camera frames — the same technique, higher stakes.",
      },
      {
        title: "How a Network Trains",
        concept:
          "Training = adjusting weights to minimize mistakes.\n\n1. Forward pass: feed data in, get a prediction\n2. Calculate loss: how wrong was the answer?\n3. Backpropagation: work backwards, figure out which weights caused the error\n4. Update weights: nudge each weight slightly in the right direction\n\nRepeat millions of times. The model slowly gets better.",
        realWorld:
          "When you mark an email as spam that Gmail missed, you're sending a training signal. Gmail uses that feedback to adjust its model — live, continuous learning from real users.",
      },
    ],
  },
  {
    id: "nlp",
    title: "Teaching Computers Language",
    icon: "Languages",
    cards: [
      {
        title: "Words Are Just Numbers",
        concept:
          "Computers only understand numbers. So for AI to work with text, everything must be converted to numbers first.\n\nThis is called tokenization — breaking text into pieces (tokens) and assigning each piece a number.\n\n'Hello world' might become [15496, 995]. That's what ChatGPT actually reads — not letters.",
        realWorld:
          "OpenAI's tokenizer breaks 'ChatGPT is amazing' into ['Chat', 'G', 'PT', ' is', ' amazing'] — 5 tokens. You can try it yourself at platform.openai.com/tokenizer.",
      },
      {
        title: "Embeddings — Meaning as Coordinates",
        concept:
          "A token number like 15496 doesn't capture meaning. 'King' and 'Queen' would be random numbers far apart.\n\nEmbeddings map words into coordinates in a high-dimensional space so similar words are close together.\n\nFamous example: king − man + woman ≈ queen. The math literally encodes meaning and relationships.",
        realWorld:
          "Spotify converts songs into audio embeddings — coordinates in space — so that nearby songs share a feel. That's how it finds music 'like' your favorites, even across genres.",
      },
      {
        title: "What NLP Can Do",
        concept:
          "Natural Language Processing covers everything AI does with text:\n• Translation (English → French)\n• Summarization (give me the TL;DR)\n• Sentiment analysis (is this review positive?)\n• Question answering\n• Text generation\n\nModern models like GPT handle all of these with a single architecture.",
        realWorld:
          "Google Translate, Grammarly, Gmail Smart Compose, YouTube auto-subtitles, legal contract review bots — all NLP, running at massive scale every second.",
      },
      {
        title: "Why Language is Hard",
        concept:
          "Language is full of traps for AI:\n• Ambiguity: 'I saw the man with the telescope' — who has it?\n• Sarcasm: 'Oh great, another Monday'\n• Context: 'It was too heavy to lift' — what is 'it'?\n• Idioms: 'break a leg' ≠ injury\n\nModern LLMs handle most of this well — by learning from billions of examples of language in context.",
        realWorld:
          "Early chatbots like ELIZA (1966) failed at basic conversation. Modern LLMs pass lawyer bar exams and medical licensing tests. The difference? Scale of training data and better architecture.",
      },
      {
        title: "Old NLP vs Modern AI",
        concept:
          "Old NLP (pre-2017): Rule-based. Manually coded grammar rules, dictionaries, decision trees. Fragile — broke on anything unexpected.\n\nModern NLP: Learn from raw text at massive scale. No hand-coded rules. The model figures out grammar, meaning, and style from examples.\n\nThe Transformer architecture (2017) is what changed everything.",
        realWorld:
          "Old spam filters used word lists: if 'FREE OFFER' appears → spam. Modern filters understand context — a financial newsletter mentioning 'free webinar' is not spam. Context matters now.",
      },
    ],
  },
  {
    id: "llms-chatgpt",
    title: "How ChatGPT Works",
    icon: "Sparkles",
    cards: [
      {
        title: "The Core Trick",
        concept:
          "ChatGPT is fundamentally doing one thing: predicting the next token.\n\nGiven: 'The capital of France is'\nPredict: 'Paris'\n\nDo this billions of times, with better and better predictions, and you get something that writes essays, explains code, and holds conversations.\n\nIt's autocomplete — taken to an extreme.",
        realWorld:
          "Your phone keyboard predicts 'you' after 'Thank'. ChatGPT predicts thousands of tokens ahead, staying coherent across pages. Same idea. Completely different scale.",
      },
      {
        title: "The Transformer",
        concept:
          "Transformers are the architecture that powers all modern AI. Introduced in a 2017 paper titled 'Attention is All You Need.'\n\nKey innovation: instead of reading text left-to-right, Transformers look at the entire input at once and calculate how much each word relates to every other word.\n\nThis is called self-attention — and it's what enables real understanding of context.",
        realWorld:
          "Before Transformers, Google Translate was embarrassingly bad at long sentences. After: near-human quality. The 2017 paper was written by Google — and it changed the entire field overnight.",
      },
      {
        title: "Attention — the Highlighter",
        concept:
          "Attention lets the model focus on the parts of the input that matter most for each prediction.\n\nSentence: 'The trophy didn't fit in the suitcase because it was too big.'\nWhat does 'it' refer to? Trophy or suitcase?\n\nAttention calculates a relevance score between 'it' and every word. 'Trophy' scores high. 'Suitcase' scores low. Context resolved.",
        realWorld:
          "When you ask ChatGPT a question about something you mentioned 10 messages ago, it 'attends' back to that earlier message — just like you'd scroll up to re-read it.",
      },
      {
        title: "Pre-Training",
        concept:
          "Phase 1 of building ChatGPT: train on a massive dataset — the internet, books, Wikipedia, code.\n\nThe goal: predict the next token, over and over, until the model learns language, facts, and how to reason.\n\nThis phase is unsupervised — no human labels. Just raw text.\n\nThe result: a 'base model' that knows a lot but isn't yet safe or helpful.",
        realWorld:
          "GPT-4 was trained on roughly 1 trillion words of text — more than any human could read in thousands of lifetimes. That's why it 'knows' so much about so many topics.",
      },
      {
        title: "RLHF — Adding Values",
        concept:
          "After pre-training, the model is smart but unpredictable — it might say harmful things.\n\nRLHF (Reinforcement Learning from Human Feedback) fixes this:\n1. Humans rate model responses (good/bad)\n2. A 'reward model' learns what humans prefer\n3. The LLM is fine-tuned to produce higher-scoring responses\n\nThis is how ChatGPT became helpful, harmless, and honest.",
        realWorld:
          "Before RLHF, base GPT-3 would complete almost any harmful prompt. After RLHF, the same underlying model learned to decline those requests. Same brain — different values trained in.",
      },
      {
        title: "Context Window",
        concept:
          "A context window is how much the model can 'see' at once — its working memory.\n\nGPT-3: ~4,000 tokens (~3,000 words)\nGPT-4 Turbo: 128,000 tokens\nGemini 1.5 Pro: 1,000,000 tokens\n\nBeyond the context window, the model can't access that information — it literally can't see it. That's why ChatGPT forgets old conversations.",
        realWorld:
          "Asking ChatGPT to summarize a 500-page book? If the book exceeds its context window, it can't read it all at once — you'd have to chunk it. RAG (next deck) was built to solve exactly this.",
      },
    ],
  },
  {
    id: "rag-agents",
    title: "AI Superpowers",
    icon: "Zap",
    cards: [
      {
        title: "The Problem with LLMs",
        concept:
          "LLMs have two big limitations:\n\n1. Knowledge cutoff — they only know what existed when they were trained. Ask ChatGPT about last week's news and it's guessing.\n\n2. Hallucination — they can confidently state wrong facts because they're predicting plausible text, not looking things up.\n\nRAG and Agents were built to fix both.",
        realWorld:
          "Ask ChatGPT 'Who won last night's match?' and it might confidently make up an answer. It has no idea — its training data stopped months or years ago.",
      },
      {
        title: "What is RAG?",
        concept:
          "RAG = Retrieval-Augmented Generation.\n\nInstead of relying only on memorized training data, the AI:\n1. First retrieves relevant documents\n2. Then uses them to answer your question\n\nThink: closed-book exam (base LLM) vs open-book exam (RAG). The AI can look things up before answering.\n\nThis cuts hallucination dramatically and keeps knowledge current.",
        realWorld:
          "Notion AI, Perplexity.ai, and Microsoft Copilot all use RAG — they search your documents or the web, pull relevant chunks, and feed them to the LLM as context before generating a response.",
      },
      {
        title: "How RAG Works",
        concept:
          "Step 1: Your docs are converted to embeddings and stored in a vector database.\nStep 2: Your question is also converted to an embedding.\nStep 3: The system finds docs closest in meaning to your question.\nStep 4: Those docs are added to the LLM's prompt.\nStep 5: The LLM answers using both its training AND your docs.\n\nFast, accurate, grounded in your data.",
        realWorld:
          "Upload 100 PDFs to ChatPDF or Claude. Ask 'What does clause 12 say?' — it searches by meaning (not just keywords), finds the right clause, and quotes it accurately. That's RAG.",
      },
      {
        title: "What is an AI Agent?",
        concept:
          "A base LLM just responds to text. An AI Agent can take actions.\n\nAn agent has:\n• A goal (from you)\n• Tools it can use (web search, code runner, email, calendar)\n• A loop: Think → Act → Observe → Repeat\n\nIt keeps going until the goal is complete — not just one response, but a full workflow.",
        realWorld:
          "Devin (AI software engineer) can take a GitHub issue, write the code, run tests, fix bugs, and open a pull request — all by itself. That's an agent running a multi-step job end-to-end.",
      },
      {
        title: "Tools AI Can Use",
        concept:
          "Agents become powerful when given tools:\n• Web search — browse live information\n• Code interpreter — write and run Python\n• File reader — read/write documents\n• API caller — order food, book a flight\n• Email/calendar — schedule and send\n\nThe LLM decides which tool to use and when — like a smart coordinator directing its own actions.",
        realWorld:
          "ChatGPT can search the web, run Python code, read PDFs, and book restaurants in one conversation. Each is a tool the agent chose to use at the right moment.",
      },
      {
        title: "Multi-Agent Systems",
        concept:
          "One agent can do a lot. Multiple agents working together can do almost anything.\n\nExample:\n• Agent 1 researches and summarizes\n• Agent 2 writes a draft based on research\n• Agent 3 reviews and suggests edits\n• Agent 4 publishes to the right platform\n\nThis mimics how a real team works — specialized roles passing work between each other.",
        realWorld:
          "AI companies are building full pipelines: a support bot handles the query → an escalation agent flags complex issues → a ticket writer logs it → a resolution tracker follows up. AI doing teamwork.",
      },
      {
        title: "Where This is Headed",
        concept:
          "We're moving from AI that answers questions to AI that gets things done.\n\nIn 2025, most AI is still conversational. By 2027, AI agents will likely handle full job functions — drafting contracts, running campaigns, debugging entire codebases.\n\nThe people who understand HOW this works won't just use these tools — they'll build them, direct them, and shape what they become.",
        realWorld:
          "Anthropic, OpenAI, and Google are all racing to build agentic AI systems. Understanding these concepts puts you ahead of most people in any field — engineering, medicine, law, business.",
      },
    ],
  },
];
