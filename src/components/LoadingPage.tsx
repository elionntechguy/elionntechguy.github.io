import { Background } from "../styles/LoadingStyles";

import Loader from "react-loader-spinner";

const LoadingPage: React.FC = () => {
  return (
    <Background>
      <Loader type="Oval" color="#FF8F00" height={100} width={100} />
    </Background>
  );
};

export default LoadingPage;
