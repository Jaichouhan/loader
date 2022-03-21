import { Audio } from "react-loader-spinner";
import { SpinnerCircular } from "spinners-react";
const Loader = () => {
  return (
    <>
      <div className="spiner">
        <SpinnerCircular
          size="10%"
          thickness="100"
          color="green"
          speed="10"
          still="true"
        />
      </div>
      {/* <Audio
        height="100"
        width="100"
        color="green"
        ariaLabel="loading"
        className="spiner"
      /> */}
    </>
  );
};

export default Loader;
