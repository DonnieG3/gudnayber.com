# Gudnayber

A Jekyll-powered home for Gudnayber.com, adapted from the `KJW3LLC/decent.charity` site architecture. The visual system follows the original Gudnayber WordPress site: warm gray surfaces, editorial serif headlines, clean sans-serif body copy, and the Gudnayber red-and-blue heart mark.

## Local Development

```bash
npm install
bundle install
bundle exec jekyll serve
```

## Content Generation

Generated articles use the NVIDIA API through `scripts/generate-guide.js` and draw from `topics.json`.

The generator is configured to:

- Write from a welcoming Judeo-Christian perspective
- Use NIV as the Scripture reference basis
- Prefer Scripture references and short excerpts over long quotations
- Avoid emojis in article content
- Include reflection questions, weekly practice, prayer, and takeaways

Set `NVIDIA_API_KEY` before running:

```bash
npm run generate
```
