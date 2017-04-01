import React from 'react';
import UserSingleFollow from './UserSinglePortfolio.jsx';
import { Comment, Header } from 'semantic-ui-react';
import renderColumns from '../Utility/renderColumns.js';

export default ({follow}) => (
  <Comment.Group>
    <Header as='h3' dividing>Following</Header>
    {renderColumns(follow, 3)}
  </Comment.Group>
)