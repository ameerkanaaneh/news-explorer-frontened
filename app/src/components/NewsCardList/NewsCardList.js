import React from "react";

function NewsCardList(props) {
  return <ul className="news-card-list">{props.children}</ul>;
}

export default NewsCardList;
