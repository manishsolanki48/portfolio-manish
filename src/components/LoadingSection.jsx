import './LoadingSection.css';

export default function LoadingSection() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p className="loading-text">SYSTEM // INITIALIZING...</p>
        <p className="loading-subtext">LOADING_ARCHITECTURE...</p>
      </div>
    </div>
  );
}
