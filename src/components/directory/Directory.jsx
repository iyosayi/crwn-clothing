import React from "react";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/selectors/directory";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/MenuItem";
import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);
