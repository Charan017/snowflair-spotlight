import React, { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const TruncatedText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {expanded ? (
        <div>
          <div className="text-secondaryText">{text}</div>
          <span>
            <button
              className="font-medium text-lg leading-24 text-textLink"
              onClick={() => setExpanded(false)}
            >
              See Less
            </button>
          </span>
        </div>
      ) : (
        <LinesEllipsis
          text={text}
          maxLine="3"
          ellipsis={
            <span className="text-secondaryText">
              ...{" "}
              <button
                className="font-medium text-lg leading-24 text-textLink"
                onClick={() => setExpanded(true)}
              >
                See More
              </button>
            </span>
          }
          trimRight
          basedOn="letters"
          className="text-secondaryText"
        />
      )}
    </div>
  );
};

export default TruncatedText;
