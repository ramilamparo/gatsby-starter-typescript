import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import { BaseLayout } from "../components/BaseLayout";

export interface AboutProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
			};
		};
	};
}

export default ({ data }: AboutProps): ReactElement => {
	return (
		<BaseLayout>
			<h1>About {data.site.siteMetadata.title}</h1>
			<p>
				We're the only site running on your computer dedicated to showing the best
				photos and videos of pandas eating lots of food.
			</p>
		</BaseLayout>
	);
};

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
