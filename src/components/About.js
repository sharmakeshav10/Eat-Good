import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Want to know about us?</h1>
      <p>We started when....</p>
      <User name={"Keshav Sharma (function)"} location={"Noida func"} />
      <UserClass name={"Keshav Sharma (class)"} location={"Noida class"} />
    </div>
  );
};

export default About;
