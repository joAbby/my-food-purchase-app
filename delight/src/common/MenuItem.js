import React from 'react';

import { Card, CardHeader, CardTitle, CardSubtitle } from "@react-md/card";
import { Button } from "@react-md/button";
import { MediaContainer } from "@react-md/media";

import './MenuItem.scss';

const MenuItem = ({itemList,addItem}) =>
<>
{itemList.map((item, i) => (
<Card className='content__container'>
      <MediaContainer key={i}>
        <img src={item.imageUrl} alt="food" />
      </MediaContainer>
      <CardTitle className='content__title'>{item.itemName}</CardTitle>
      <CardSubtitle className='content__price'>{item.price}</CardSubtitle>
          <CardHeader  afterChildren={
            <Button
             onClick={() => addItem(item)}
              buttonType="icon"
              aria-label="Expand"
              theme="clear"
            >Add</Button>}
          ></CardHeader>
</Card>
))}
</>

export default MenuItem;