import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export interface MyFilesProps {
	data: {
		allFile: {
			edges: Array<{
				node: {
					relativePath: string
					prettySize: string
					extension: string
					birthTime: string
				}
			}>
		}
	}
}

export default ({ data }: MyFilesProps): ReactElement => {
	return (
		<Layout>
			<div>
				<h1>My Site's Files</h1>
				<table>
					<thead>
						<tr>
							<th>relativePath</th>
							<th>prettySize</th>
							<th>extension</th>
							<th>birthTime</th>
						</tr>
					</thead>
					<tbody>
						{data.allFile.edges.map(({ node }, index) => (
							<tr key={index}>
								<td>{node.relativePath}</td>
								<td>{node.prettySize}</td>
								<td>{node.extension}</td>
								<td>{node.birthTime}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allFile {
			edges {
				node {
					relativePath
					prettySize
					extension
					birthTime(fromNow: true)
				}
			}
		}
	}
`
