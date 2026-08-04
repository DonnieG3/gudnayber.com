# Gudnayber

A Jekyll-powered home for Gudnayber.com. The site publishes source-grounded reflections on choosing love through Dignity, Division, and Unity. Its visual system follows the original Gudnayber WordPress site: warm gray surfaces, editorial serif headlines, clean sans-serif body copy, and the Gudnayber red-and-blue heart mark.

## Local Development

```bash
npm install
bundle install
bundle exec jekyll serve
```

## Content Generation

Generated articles use the NVIDIA API through `scripts/generate-guide.js` and draw from `topics.json`.

The generator is configured to:

- Center the deliberate choice to love other people
- Write from a welcoming Christian moral imagination while respecting readers of every faith and no faith
- Tailor each article to the Dignity, Division, or Unity editorial pillar
- Ground factual claims and real-world examples in the assigned primary source
- Preserve human agency and avoid pity, stereotypes, partisan endorsement, false equivalence, and romanticized unity
- Avoid emojis in article content
- Include reflection questions, a specific neighborly practice, and key takeaways

Set `NVIDIA_API_KEY` before running:

```bash
npm run generate
```
