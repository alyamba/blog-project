import React from "react";
import { Text } from "./Text";
import { UserPhoto } from "./UserPhoto";
import moment from "moment";
import deleteBtn from "../icons/trash-can.png";

export const PostBlock = ({ text, author, datetime, onRemovePost }) => {
  return (
    <div className="post__div">
      <div className="post__container">
        <div className="post-block-user-info__div">
          <UserPhoto size="small" />
          <div className="user-info__div">
            <Text type="label" text={author} />
            <Text type="paragraph" text={moment(datetime).format("LLL")} />
          </div>
        </div>
        <Text type="post" text={text} />
      </div>
      <div
        className="close-btn__container"
        onClick={() => onRemovePost(datetime)}
      >
        <img alt="delete" src={deleteBtn} className="icon" />
      </div>
    </div>
  );
};
