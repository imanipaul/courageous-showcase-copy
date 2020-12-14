import React from "react";

import { Helmet } from "react-helmet";

const MetaDecorator = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.data.description} />
      <meta property="og:title" content={props.data.title} />
      <meta property="og:description" content={props.data.description} />
      <meta property="og:image" content={props.data.image} />
      <meta property="og:url" content={props.url} />
      {props.video && <meta property="og:video" content={props.video} />}
    </Helmet>
  );
};

export default MetaDecorator;
