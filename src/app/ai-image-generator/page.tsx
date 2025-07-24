import React, { useState } from 'react';

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState('A beautiful landscape');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [seed, setSeed] = useState(42);
  const [model, setModel] = useState('flux');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = () => {
    const newSeed = Math.floor(Math.random() * 100000);
    setSeed(newSeed);
    const url = `https://pollinations.ai/p/${encodeURIComponent(
      prompt
    )}?width=${width}&height=${height}&seed=${newSeed}&model=${model}&nologo=true&private=true&enhance=true&safe=false`;
    setImageUrl(url);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">AI Image Generator</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg mb-4 w-1/2"
        />
        <button
          onClick={generateImage}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Generate Image
        </button>
        {imageUrl && (
          <div className="mt-8">
            <img src={imageUrl} alt="Generated" className="max-w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIImageGenerator;
