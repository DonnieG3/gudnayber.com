// Shared, content-filter-safe prompt for every article image workflow.
function generateImagePrompt(title) {
  const landscapes = [
    'layered Appalachian ridgelines at sunrise',
    'a broad Great Plains prairie beneath an expansive sky',
    'Southwestern desert mesas with native grasses',
    'a Pacific coastline with evergreen-covered cliffs',
    'a quiet river winding through autumn woodland',
    'Rocky Mountain peaks reflected in an alpine lake'
  ];
  const landscapeIndex = [...title].reduce(
    (sum, character) => sum + character.charCodeAt(0),
    0
  ) % landscapes.length;
  const landscape = landscapes[landscapeIndex];

  return {
    prompt: `A scenic United States landscape featuring ${landscape}. Editorial screen-print illustration using only brick red #B44334 and deep navy #071B4C. Engraved linework, bold shapes, subtle paper grain, peaceful natural light, no people, no buildings, no text.`,
    negative_prompt: 'people, buildings, text, logo, watermark, third color, gradient, photorealism'
  };
}

module.exports = { generateImagePrompt };
