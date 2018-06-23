import React from 'react';
import { Link } from 'gatsby';
import Breadcrumbs from '../components/Breadcrumbs';

export default ({ data }) => (
  <nav>
    <Breadcrumbs data={data} />
    <h3>{data.title}</h3>
    <p>
      <strong>{data.description}</strong>
    </p>
    {data.children.map(child => (
      <article>
        <h4>
          <Link to={child._path}>{child.title}</Link>
        </h4>
        <p>{child.description}</p>
      </article>
    ))}
  </nav>
);

export const FolderFragment = graphql`
  fragment Folder on PloneFolder {
    id
    title
    description
    _components {
      breadcrumbs {
        items {
          _id
          _path
          title
        }
      }
    }
    children {
      ...Document
      ...NewsItem
      ...SubFolder
    }
    _path
  }

  fragment SubFolder on PloneFolder {
    id
    title
    description
    _path
  }
`;
