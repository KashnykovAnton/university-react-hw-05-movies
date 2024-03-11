import { Oval } from 'react-loader-spinner';

function LoaderSpin() {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#00BFFF"
      ariaLabel="oval-loading"
    />
  );
}

export default LoaderSpin;
