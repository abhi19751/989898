// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('transform');
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('transform');
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
}

// FAQ accordion
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('i');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
});

// Generic text prompt generator
const handleTextPrompt = async (formId, inputId, resultId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const prompt = document.getElementById(inputId).value;
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = 'Generating...';

            try {
                const response = await fetch('https://text.pollinations.ai/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: [
                            { role: 'user', content: prompt }
                        ],
                        model: 'openai',
                        private: true
                    })
                });

                const data = await response.text();
                resultDiv.innerHTML = `<p>${data}</p>`;
            } catch (error) {
                resultDiv.innerHTML = 'Error generating text.';
                console.error(error);
            }
        });
    }
}

// Generic image prompt generator
const handleImagePrompt = async (formId, inputId, resultId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const prompt = document.getElementById(inputId).value;
            const resultDiv = document.getElementById(resultId);
            resultDiv.innerHTML = 'Generating...';

            const width = 1024;
            const height = 1024;
            const seed = Math.floor(Math.random() * 100000);
            const model = 'flux';

            const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}&nologo=true&private=true&enhance=true&safe=false`;

            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const image = URL.createObjectURL(blob);
                resultDiv.innerHTML = `<img src="${image}" alt="Generated Image" class="w-full h-auto rounded-lg">`;
            } catch (error) {
                resultDiv.innerHTML = 'Error generating image.';
                console.error(error);
            }
        });
    }
}

// Page specific handlers
handleTextPrompt('text-prompt-form', 'text-prompt', 'text-result');
handleImagePrompt('image-prompt-form', 'image-prompt', 'image-result');
handleTextPrompt('prompt-enhancer-form', 'prompt-to-enhance', 'enhanced-prompt-result');
handleTextPrompt('ai-agent-prompt-form', 'ai-agent-prompt', 'ai-agent-prompt-result');
handleTextPrompt('writing-prompt-form', 'writing-prompt-topic', 'writing-prompt-result');
handleTextPrompt('art-prompt-form', 'art-prompt-topic', 'art-prompt-result');
handleTextPrompt('drawing-prompt-form', 'drawing-prompt-topic', 'drawing-prompt-result');
handleTextPrompt('storytelling-prompt-form', 'storytelling-prompt-topic', 'storytelling-prompt-result');
handleTextPrompt('coding-prompt-form', 'coding-prompt-topic', 'coding-prompt-result');
handleTextPrompt('random-prompt-form', 'random-prompt-result', 'random-prompt-result');
handleTextPrompt('character-prompt-form', 'character-prompt-topic', 'character-prompt-result');
handleTextPrompt('chatgpt-prompt-form', 'chatgpt-prompt-topic', 'chatgpt-prompt-result');
handleTextPrompt('gemini-prompt-form', 'gemini-prompt-topic', 'gemini-prompt-result');
handleTextPrompt('deepseek-prompt-form', 'deepseek-prompt-topic', 'deepseek-prompt-result');
handleTextPrompt('grok-prompt-form', 'grok-prompt-topic', 'grok-prompt-result');
handleTextPrompt('claude-prompt-form', 'claude-prompt-topic', 'claude-prompt-result');
handleTextPrompt('qwen-prompt-form', 'qwen-prompt-topic', 'qwen-prompt-result');
handleTextPrompt('meta-prompt-form', 'meta-prompt-topic', 'meta-prompt-result');
handleTextPrompt('mistral-prompt-form', 'mistral-prompt-topic', 'mistral-prompt-result');
handleTextPrompt('manus-ai-prompt-form', 'manus-ai-prompt-topic', 'manus-ai-prompt-result');
handleTextPrompt('llm-prompt-form', 'llm-prompt-topic', 'llm-prompt-result');
handleTextPrompt('gpt-prompt-form', 'gpt-prompt-topic', 'gpt-prompt-result');
handleImagePrompt('image-prompt-form', 'image-prompt-topic', 'image-prompt-result');
handleImagePrompt('flux-prompt-form', 'flux-prompt-topic', 'flux-prompt-result');
handleImagePrompt('midjourney-prompt-form', 'midjourney-prompt-topic', 'midjourney-prompt-result');
handleImagePrompt('stable-diffusion-prompt-form', 'stable-diffusion-prompt-topic', 'stable-diffusion-prompt-result');
handleImagePrompt('dalle-prompt-form', 'dalle-prompt-topic', 'dalle-prompt-result');
handleTextPrompt('video-prompt-form', 'video-prompt-topic', 'video-prompt-result');
handleTextPrompt('sound-prompt-form', 'sound-prompt-topic', 'sound-prompt-result');
handleTextPrompt('music-prompt-form', 'music-prompt-topic', 'music-prompt-result');
handleTextPrompt('lyrics-prompt-form', 'lyrics-prompt-topic', 'lyrics-prompt-result');
handleTextPrompt('song-prompt-form', 'song-prompt-topic', 'song-prompt-result');
handleTextPrompt('tone-prompt-form', 'tone-prompt-topic', 'tone-prompt-result');
handleImagePrompt('ai-avatar-generator-form', 'avatar-generator-prompt', 'avatar-generator-result');
handleTextPrompt('ai-humanizer-form', 'humanizer-prompt', 'humanizer-result');
handleTextPrompt('translate-form', 'translate-prompt', 'translate-result');
