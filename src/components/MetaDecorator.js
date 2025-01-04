import React from "react";


const MetaDecorator = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={props.url} />
      {props.video && <meta property="og:video" content={props.video} />}
    </>
  );
};

export default MetaDecorator;
