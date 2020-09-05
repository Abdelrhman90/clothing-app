import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsFetching } from "../../redux/shop/shop.selector";
import withSpinner from "../withSpinner/withSpinner.component";

import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsFetching,
});

const collectionOverViewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default collectionOverViewContainer;
