import { Text } from "./Text";
import { UserPhoto } from "./UserPhoto";
const textMessage =
  "Hello! I'm Alina and I'm a beginner developer. I study at BSUIR and learn English. I like to spend my free time with my cat ^_^";

export const PostBlock = () => {
  return (
    <div className="post__div">
      <div className="post-block-user-info__div">
        <UserPhoto size="small" />
        <div className="user-info__div">
          <Text type="label" text="Logunova Alina" />
          <Text type="paragraph" text="16.01.2023, 13:50" />
        </div>
      </div>
      <Text type="post" text={textMessage} />
    </div>
  );
};
