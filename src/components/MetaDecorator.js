import React from "react";

import { Helmet } from "react-helmet-async";

const MetaDecorator = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={props.url} />
      {props.video && <meta property="og:video" content={props.video} />}
    </Helmet>
  );
};

export default MetaDecorator;
