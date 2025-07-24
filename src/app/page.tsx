import Image from "next/image";

export default function Home() {
  return (
    <body className="font-sans bg-gray-50 text-gray-800">
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          id="mobile-menu-button"
          className="p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <div
        id="sidebar"
        className="hidden md:block fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out"
      >
        <div className="flex items-center justify-center p-4 border-b">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-purple-600">
            Prompt-Generators.com
          </span>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100vh-60px)]">
          <div className="mb-6">
            <a
              href="#"
              className="block py-2 px-4 rounded-lg bg-purple-100 text-purple-600 font-medium"
            >
              <i className="fas fa-home mr-2"></i> Home
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-2 px-4">
              Popular
            </h3>
            <ul>
              <li>
                <a
                  href="/ai-prompt-generator"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-magic mr-2"></i> Generate Prompts
                </a>
              </li>
              <li>
                <a
                  href="/image-to-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-image mr-2"></i> Image to Prompt
                </a>
              </li>
              <li>
                <a
                  href="/ai-prompt-enhancer"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-star mr-2"></i> Prompt Enhancer
                </a>
              </li>
              <li>
                <a
                  href="/ai-agent-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-robot mr-2"></i> AI Agent prompt
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-2 px-4">
              AI Generators
            </h3>
            <ul>
              <li>
                <a
                  href="/ai-image-generator"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-paint-brush mr-2"></i> AI Image Generator
                </a>
              </li>
              <li>
                <a
                  href="/ai-avatar-generator"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-user-circle mr-2"></i> AI Avatar
                  Generator
                </a>
              </li>
              <li>
                <a
                  href="/ai-humanizer"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-handshake mr-2"></i> AI Humanizer
                </a>
              </li>
              <li>
                <a
                  href="/translate"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-language mr-2"></i> Translate
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-2 px-4">
              By Category
            </h3>
            <ul>
              <li>
                <a
                  href="/writing-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-pen-fancy mr-2"></i> Writing Prompt
                </a>
              </li>
              <li>
                <a
                  href="/art-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-palette mr-2"></i> Art Prompt
                </a>
              </li>
              <li>
                <a
                  href="/drawing-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-pencil-ruler mr-2"></i> Drawing Prompt
                </a>
              </li>
              <li>
                <a
                  href="/storytelling-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-book-open mr-2"></i> Storytelling Prompt
                </a>
              </li>
              <li>
                <a
                  href="/coding-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-code mr-2"></i> Coding Prompt
                </a>
              </li>
              <li>
                <a
                  href="/random-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-random mr-2"></i> Random Prompt
                </a>
              </li>
              <li>
                <a
                  href="/character-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-user-friends mr-2"></i> Character Prompt
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-2 px-4">
              By Model
            </h3>
            <ul>
              <li>
                <a
                  href="/chatgpt-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fab fa-google mr-2"></i> ChatGPT Prompt
                </a>
              </li>
              <li>
                <a
                  href="/gemini-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-gem mr-2"></i> Gemini Prompt
                </a>
              </li>
              <li>
                <a
                  href="/deepseek-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-search mr-2"></i> Deepseek Prompt
                </a>
              </li>
              <li>
                <a
                  href="/grok-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fab fa-twitter mr-2"></i> Grok Prompt
                </a>
              </li>
              <li>
                <a
                  href="/claude-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-brain mr-2"></i> Claude Prompt
                </a>
              </li>
              <li>
                <a
                  href="/qwen-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-microchip mr-2"></i> Qwen Prompt
                </a>
              </li>
              <li>
                <a
                  href="/meta-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fab fa-facebook mr-2"></i> Meta Prompt
                </a>
              </li>
              <li>
                <a
                  href="/mistral-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-wind mr-2"></i> Mistral Prompt
                </a>
              </li>
              <li>
                <a
                  href="/manus-ai-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-hand-paper mr-2"></i> Manus AI Prompt
                </a>
              </li>
              <li>
                <a
                  href="/llm-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-project-diagram mr-2"></i> LLM Prompt
                </a>
              </li>
              <li>
                <a
                  href="/gpt-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-robot mr-2"></i> GPT Prompt
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-2 px-4">
              By Image Model
            </h3>
            <ul>
              <li>
                <a
                  href="/image-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-image mr-2"></i> Image Prompt
                </a>
              </li>
              <li>
                <a
                  href="/flux-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-fire mr-2"></i> Flux Prompt
                </a>
              </li>
              <li>
                <a
                  href="/midjourney-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-moon mr-2"></i> Midjourney Prompt
                </a>
              </li>
              <li>
                <a
                  href="/stable-diffusion-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-atom mr-2"></i> Stable Diffusion
                </a>
              </li>
              <li>
                <a
                  href="/dalle-prompt"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-paint-brush mr-2"></i> DALL·E Prompt
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-2 px-4">
              By Media
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-video mr-2"></i> Video Prompt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-volume-up mr-2"></i> Sound Prompt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-music mr-2"></i> Music Prompt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-quote-right mr-2"></i> Lyrics Prompt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-compact-disc mr-2"></i> Song Prompt
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  <i className="fas fa-sliders-h mr-2"></i> Tone Prompt
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <i className="fas fa-coffee mr-2"></i> Support Us
            </a>
          </div>
        </nav>
      </div>

      <div id="overlay" className="hidden fixed inset-0 bg-black bg-opacity-50 z-30"></div>

      <div className="md:ml-64">
        <section className="gradient-bg text-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI Prompt Generator
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  Create Perfect Prompts Instantly
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Generate optimized prompts for{" "}
                  <span className="font-semibold">ChatGPT</span>,{" "}
                  <span className="font-semibold">Midjourney</span>,{" "}
                  <span className="font-semibold">DALL-E</span>, and other AI
                  tools. Transform your ideas into professional prompts with our
                  advanced AI technology.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bolt mr-2"></i>
                    <span>Instant Results</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-user-shield mr-2"></i>
                    <span>No Registration</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-globe mr-2"></i>
                    <span>10+ Languages</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                  >
                    Start Generating Prompts
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Try Image to Prompt
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-purple-300 opacity-20"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-300 opacity-20"></div>
                  <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Prompt Preview</h3>
                      <button className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center">
                        <i className="fas fa-copy mr-1"></i> Copy
                      </button>
                    </div>
                    <div className="bg-gray-900 bg-opacity-30 p-4 rounded-lg mb-4">
                      <p className="text-sm">
                        "Create a detailed prompt for a futuristic cityscape at
                        night, with neon lights reflecting on wet streets,
                        cyberpunk aesthetic, highly detailed, 8K resolution,
                        cinematic lighting, ultra-realistic, trending on
                        ArtStation"
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-white bg-opacity-10 px-2 py-1 rounded-full">
                        Midjourney
                      </span>
                      <span className="text-xs bg-white bg-opacity-10 px-2 py-1 rounded-full">
                        DALL-E
                      </span>
                      <span className="text-xs bg-white bg-opacity-10 px-2 py-1 rounded-full">
                        Stable Diffusion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perfect for creating prompts for
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center">
                <div className="ai-model-icon w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fab fa-google text-3xl text-blue-500"></i>
                </div>
                <span className="font-medium">ChatGPT</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="ai-model-icon w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-moon text-3xl text-purple-500"></i>
                </div>
                <span className="font-medium">Midjourney</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="ai-model-icon w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-paint-brush text-3xl text-green-500"></i>
                </div>
                <span className="font-medium">DALL-E</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="ai-model-icon w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-pen-fancy text-3xl text-yellow-500"></i>
                </div>
                <span className="font-medium">Writing</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="ai-model-icon w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-atom text-3xl text-orange-500"></i>
                </div>
                <span className="font-medium">Stable Diffusion</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="ai-model-icon w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-brain text-3xl text-red-500"></i>
                </div>
                <span className="font-medium">Claude</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Our AI Prompt Generator?
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Advanced AI technology meets user-friendly design for the best
              prompt generation experience
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-hover bg-white p-6 rounded-xl shadow-md transition-all duration-300">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4 text-white">
                  <i className="fas fa-bolt text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Generate professional prompts in seconds with our optimized AI
                  engine
                </p>
              </div>

              <div className="card-hover bg-white p-6 rounded-xl shadow-md transition-all duration-300">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4 text-white">
                  <i className="fas fa-brain text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart AI</h3>
                <p className="text-gray-600">
                  Advanced algorithms understand context and generate relevant
                  prompts
                </p>
              </div>

              <div className="card-hover bg-white p-6 rounded-xl shadow-md transition-all duration-300">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4 text-white">
                  <i className="fas fa-sliders-h text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-gray-600">
                  Multiple enhancement types and languages for personalized
                  results
                </p>
              </div>

              <div className="card-hover bg-white p-6 rounded-xl shadow-md transition-all duration-300">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4 text-white">
                  <i className="fas fa-mobile-alt text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Ready</h3>
                <p className="text-gray-600">
                  Perfect experience on desktop, tablet, and mobile devices
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Everything you need to know about our AI Prompt Generator
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="faq-toggle w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">
                    What is the AI Prompt Generator?
                  </h3>
                  <i className="fas fa-chevron-down transition-transform"></i>
                </button>
                <div className="accordion-content">
                  <div className="p-4 pt-0 text-gray-600">
                    Our AI Prompt Generator is an advanced tool that helps you
                    create optimized prompts for various AI models like ChatGPT,
                    Midjourney, and DALL-E. It transforms your basic ideas into
                    professional, detailed prompts that yield better results from
                    AI systems.
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="faq-toggle w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">
                    How can I ensure high-quality prompts?
                  </h3>
                  <i className="fas fa-chevron-down transition-transform"></i>
                </button>
                <div className="accordion-content">
                  <div className="p-4 pt-0 text-gray-600">
                    For best results, provide clear and specific input about
                    what you want to generate. Our AI will then enhance your
                    input with relevant details, style modifiers, and technical
                    specifications tailored to the AI model you're targeting.
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="faq-toggle w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">
                    Can I customize the generated prompts?
                  </h3>
                  <i className="fas fa-chevron-down transition-transform"></i>
                </button>
                <div className="accordion-content">
                  <div className="p-4 pt-0 text-gray-600">
                    Absolutely! You can edit the generated prompts directly or
                    use our advanced options to specify tone, style, length, and
                    other parameters before generation. The tool also allows you
                    to regenerate prompts with different variations.
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="faq-toggle w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">
                    Is the tool really free to use?
                  </h3>
                  <i className="fas fa-chevron-down transition-transform"></i>
                </button>
                <div className="accordion-content">
                  <div className="p-4 pt-0 text-gray-600">
                    Yes, our basic prompt generation features are completely
                    free with no hidden costs. We may offer premium features in
                    the future, but the core functionality will always remain
                    free to use.
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="faq-toggle w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold">
                    What languages are supported?
                  </h3>
                  <i className="fas fa-chevron-down transition-transform"></i>
                </button>
                <div className="accordion-content">
                  <div className="p-4 pt-0 text-gray-600">
                    Currently, we support English, Spanish, French, German,
                    Italian, Portuguese, Russian, Chinese, Japanese, and
                    Korean. More languages will be added based on user demand.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 gradient-bg text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Advanced Features
            </h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
              Discover powerful features that make our AI Prompt Generator the
              best choice for professionals
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-copy text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">One-Click Copy</h3>
                <p className="opacity-90">
                  Instantly copy generated prompts to your clipboard with a
                  single click for seamless workflow integration.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-laptop-code text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Multi-Platform Optimization
                </h3>
                <p className="opacity-90">
                  Generate prompts tailored for specific AI models like
                  ChatGPT, Midjourney, and DALL-E for optimal results.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-sliders-h text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Customizable Tone & Style
                </h3>
                <p className="opacity-90">
                  Fine-tune your prompts by choosing a tone—from professional to
                  creative—to match your exact needs.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Features
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="text-xl font-bold text-white">
                    Prompt-Generators.com
                  </span>
                </div>
                <p className="mb-4">
                  The ultimate tool for creating perfect AI prompts for various
                  platforms and models.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Generate Prompts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Image to Prompt
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Prompt Enhancer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      AI Agent prompt
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 text-center">
              <p>
                © 2025{" "}
                <a href="#" className="text-white hover:underline">
                  Prompt-Generators.com
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}
