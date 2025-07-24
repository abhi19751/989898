import React, { useState } from 'react';

const AIPromptGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const generateText = async () => {
    const response = await fetch('/api/textapi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        model: 'openai',
        private: true,
      }),
    });

    const data = await response.text();
    setGeneratedText(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">AI Prompt Generator</h1>
      <div className="flex flex-col items-center">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg mb-4 w-1/2"
          rows={4}
        ></textarea>
        <button
          onClick={generateText}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Generate Text
        </button>
        {generatedText && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Generated Text</h2>
            <p>{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPromptGenerator;
