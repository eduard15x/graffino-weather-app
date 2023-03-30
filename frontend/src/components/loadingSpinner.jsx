import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="loader-container">
            <RotatingLines
                className="loader-container__spinner"
                strokeColor="lightgrey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;
