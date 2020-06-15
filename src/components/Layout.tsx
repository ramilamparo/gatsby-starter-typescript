import React, { PropsWithChildren, ReactElement } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

interface LayoutStaticQuery {
	site: {
		siteMetadata: {
			title: string;
		};
	};
}

export default ({ children }: PropsWithChildren<{}>): ReactElement => {
	const data = useStaticQuery<LayoutStaticQuery>(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<div
			style={{
				margin: "0 auto",
				maxWidth: "700px",
				padding: "2rem",
				paddingTop: "1.5rem"
			}}
		>
			<Link to={`/`}>
				<h3
					style={{
						marginBottom: "2rem",
						display: "inline-block",
						fontStyle: "normal"
					}}
				>
					{data.site.siteMetadata.title}
				</h3>
			</Link>
			<Link to={"/about/"} style={{ float: "right" }}>
				About
			</Link>
			{children}
		</div>
	);
};
