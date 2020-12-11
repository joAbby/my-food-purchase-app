import React from 'react';
import { connect } from 'react-redux';

import { Card, CardActions, CardTitle, CardSubtitle } from "@react-md/card";
import { Button } from "@react-md/button";
import { MediaContainer } from "@react-md/media";

import { addItem } from '../redux/cart/CartAction';
import './MenuItem.scss';

const MenuItem = ({itemList,addItem}) =>
<>
{itemList.map((item) => (
<Card className='content__container' key={item.id}  centered>
      <MediaContainer key={item.id}>
        <img src={item.imageUrl} alt="food" />
      </MediaContainer>
      <CardTitle className='content__title'>{item.itemName}</CardTitle>
      <CardSubtitle className='content__price'>{item.price}</CardSubtitle>
      <CardActions>
      <Button
             onClick={() => addItem(item)}
              aria-label="Expand"
              theme="clear"
            >Add</Button>
      </CardActions>
</Card>
))}
</>

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);