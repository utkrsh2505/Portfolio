import React from "react";
import { mainBody } from "../../editable-stuff/config";
const GetInTouch = ({ heading, message, email }) => {
  const {icons} = mainBody;
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i style={{color:"black"}} className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
      <p className="lead text-center pb-3">
        {message}, <a href={`mailto:${email}`}>{email}</a>,
        Contact : 9506769301.
      </p>
    </>
  );
};

export default GetInTouch;
