import "./loadingScreen.scss";
export default function LoadingScreen() {
  return (
    <div className="container">
      <div className="loader">
        <div className="flower">
          <img src="assets/linkfl2.png" />
        </div>
        <div className="hourglass">
          <img src="assets/load.gif" />
        </div>
      </div>
    </div>
  );
}
