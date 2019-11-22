import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors/shop";
import CollectionItem from "../../components/collection-item/CollectionItem";
import {
  CollectionItemsContainer,
  CollectionTitle,
  CollectionPageContainer
} from "../../styled-components/Collection";

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
