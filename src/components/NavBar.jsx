import { Button } from "./Button";
import { Text } from "./Text";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <Text text="BLOG" type="logo" />
      <ul className="ul_nav-bar">
        <li>
          <Text text="Home" type="link" />
        </li>
        <li>
          <Text text="Your account" type="link"></Text>
        </li>
        <li>
          <Text text="Settings" type="link"></Text>
        </li>
      </ul>
      <div>
        <Button label="Sign in" type="primary"></Button>
      </div>
    </div>
  );
};

// onclick ?
