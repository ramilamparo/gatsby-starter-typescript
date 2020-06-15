import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

interface BlogPostProps {
	data: {
		markdownRemark: {
			html: string
			frontmatter: {
				title: string
			}
			excerpt: string
		}
	}
}

export default ({ data }: BlogPostProps) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<div>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($someField: String!) {
		markdownRemark(fields: { slugField: { eq: $someField } }) {
			html
			frontmatter {
				title
			}
			excerpt
		}
	}
`
