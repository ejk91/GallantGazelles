import React from 'react';
import TrendingVideoCard from '../components/TrendingVideoCard.jsx';
import { Card, Divider, Grid, Header, Icon, Image, Menu, Segment } from 'semantic-ui-react';

const renderColumns = (array, columnAmount) => {
  let map = []
  let leftOverIndex = null
  for (var i = 0; i < array.length; i += columnAmount) {
    let innerArray = []
    for (var j = i; j < columnAmount; j++) {
      let innerItem = array[j]
      if (innerItem) { innerArray.push(innerItem) }
    }
    if (innerArray.length > 0) { map.push(innerArray) }
    if (i + columnAmount >= array.length) {
      leftOverIndex = i
    }
  }
  if (leftOverIndex) {
    map.push(array.slice(leftOverIndex))
  }
  return <Grid container padded columns={columnAmount}>
    {map.map((col, i) => {
      return <Grid.Row key={i}>
        {col.map((pitch, j) => (
          <Grid.Column key={j}>
            <TrendingVideoCard pitch={pitch} />
          </Grid.Column>
      ))}
    </Grid.Row>
  })}
  </Grid>
}

export default renderColumns;