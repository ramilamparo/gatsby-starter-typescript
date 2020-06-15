import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

interface HomeProps {
	data: {
		allMarkdownRemark: {
			totalCount: number
			edges: Array<{
				node: {
					id: string
					frontmatter: {
						title: string
						date: string
					}
					fields: {
						slugField: string
					}
					excerpt: string
				}
			}>
		}
		site: {
			siteMetadata: {
				title: string
				description: string
			}
		}
	}
}

export default ({ data }: HomeProps) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description}
			/>
			<div>
				<h1
					css={css`
						display: inline-block;
						border-bottom: 1px solid;
					`}
				>
					Amazing Pandas Eating Things
				</h1>
				<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<Link to={node.fields.slugField}>
							<h3
								style={{
									marginBottom: "0.25rem"
								}}
							>
								{node.frontmatter.title}{" "}
								<span
									style={{
										color: "#555"
									}}
								>
									— {node.frontmatter.date}
								</span>
							</h3>
							<p>{node.excerpt}</p>
						</Link>
					</div>
				))}
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slugField
					}
					excerpt
				}
			}
		}
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`
