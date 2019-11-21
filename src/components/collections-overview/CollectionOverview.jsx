import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Preview from "../preview-collection/Preview";
import { selectCollectionPreview } from "../../redux/selectors/shop";
import "./collections.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Preview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview
});
export default connect(mapStateToProps)(CollectionOverview);
