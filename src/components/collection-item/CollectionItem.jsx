import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cartAction";
import {
  CollectionFooter,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
  ImageContainer,
  AddButton
} from "../../styled-components/CollectionItem";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
