import React, { ReactElement } from "react";
import { Helmet, MetaProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
	description?: string;
	meta?: MetaProps[];
	title: string;
	lang?: string;
}

interface SEOStaticQuery {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			author: string;
		};
	};
}

export const SEO = ({
	description = "",
	lang = "en",
	meta = [],
	title
}: SEOProps): ReactElement => {
	const { site } = useStaticQuery<SEOStaticQuery>(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: "description",
					content: metaDescription
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: metaDescription
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary"
				},
				{
					name: "twitter:creator",
					content: site.siteMetadata.author
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: metaDescription
				},
				...meta
			]}
		/>
	);
};
