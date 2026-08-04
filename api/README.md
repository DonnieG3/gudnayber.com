# Gudnayber API Documentation

The static JSON API provides programmatic access to Gudnayber’s source-grounded articles, categories, topics, feeds, and site metadata.

## Endpoints

### Articles
**Endpoint:** `/api/guides.json`

Returns every published article with its title, subject, editorial category, primary source, tags, estimated reading time, image, and content length.

### Topics
**Endpoint:** `/api/topics.json`

Returns article tags and the articles associated with each topic.

### Site Index
**Endpoint:** `/index.json`

Returns high-level site metadata, statistics, endpoint links, and navigation.

### Feed
**Endpoint:** `/feed.xml`

Standard RSS/Atom feed of latest articles.

## Content Notes

Articles are generated from `topics.json`. Every topic belongs to Dignity, Division, or Unity; supplies a primary source; and defines a specific loving-others angle. The generator fetches that source before writing and ends each article with an achievable neighborly practice.

## Attribution

When reusing content, credit "Gudnayber" and link to the original article URL.

Example citation:

`[Article Title], Gudnayber (https://gudnayber.com/guides/[article-slug]/)`
