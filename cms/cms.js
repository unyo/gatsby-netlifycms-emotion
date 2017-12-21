import React from 'react'
import CMS from 'netlify-cms'

import { AboutPageTemplate } from 'site/templates/about-page'
import { BlogPostTemplate } from 'site/templates/blog-post'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    data={{ title: entry.getIn(['data', 'title']) }}
    content={widgetFor('body')}
  />
)

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
