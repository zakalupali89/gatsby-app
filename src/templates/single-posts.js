import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const SinglePosts = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, image } = data.markdownRemark.frontmatter;
  const img = getImage(image);

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage alt={title} image={img} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />;

export default SinglePosts;

export const query = graphql`
    query PostQuery($url: String) {
        markdownRemark(frontmatter: {url: {eq: $url}}) {
            html
            frontmatter {
                url
                category
                title
                image {
                    childImageSharp {
                        gatsbyImageData(width: 550)
                    }
                }
            }
        }
    }`;
