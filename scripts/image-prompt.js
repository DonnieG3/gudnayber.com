// Shared prompt for every article image workflow. Article titles determine the
// scene variation but are never sent to the image model.
function generateImagePrompt(title) {
  const cooperativeScenes = [
    'planting and watering a community garden together',
    'building a small wooden footbridge together',
    'carrying baskets of food into a neighborhood pantry together',
    'painting a cheerful community mural together',
    'cleaning a riverside park and planting young trees together',
    'assembling a welcoming picnic table together'
  ];
  const sceneIndex = [...title].reduce(
    (sum, character) => sum + character.charCodeAt(0),
    0
  ) % cooperativeScenes.length;
  const activity = cooperativeScenes[sceneIndex];

  return {
    prompt: `A friendly red elephant and a friendly blue donkey ${activity}. Show both animals cooperating as equals with warm, expressive body language. Surround them with an illustrated scene that clearly supports their activity. Use brick red #B44334 for the elephant and deep blue #29499B for the donkey. Render the background only in white and soft gray duotone with restrained purple #6B4FA3 accents. Sophisticated editorial screen-print illustration, engraved linework, bold shapes, subtle paper grain, balanced square composition. No people, text, logos, or photorealism.`,
    negative_prompt: 'people, text, letters, logo, watermark, aggression, conflict, photorealism, extra animals, malformed anatomy'
  };
}

module.exports = { generateImagePrompt };
