async function generatePrivateText() {
  const response = await fetch("https://text.pollinations.ai/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: "Generate a creative story" }],
      model: "openai",
      private: true, // Response won't appear in public feed
    }),
  });

  const data = await response.text();
  console.log("Generated Text:", data);
}

generatePrivateText();
