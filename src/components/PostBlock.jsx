import React from "react";
import { Text } from "./Text";
import { UserPhoto } from "./UserPhoto";
import moment from "moment";

export const PostBlock = ({ text, author, datetime }) => {
  return (
    <div className="post__div">
      <div className="post-block-user-info__div">
        <UserPhoto size="small" />
        <div className="user-info__div">
          <Text type="label" text={author} />
          <Text type="paragraph" text={moment(datetime).format("LLL")} />
        </div>
      </div>
      <Text type="post" text={text} />
    </div>
  );
};
