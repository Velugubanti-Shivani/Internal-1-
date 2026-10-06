import { ErrorBoundary } from "react-error-boundary";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { reportWidgetError } from "../services/errorReporter";

export default function WidgetBoundary({ name, children }) {
  return (
    <ErrorBoundary
      onError={(error, info) => reportWidgetError(error, info, name)}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="error-card">
          <div className="error-icon"><AlertTriangle size={24}/></div>
          <div>
            <span className="eyebrow danger">WIDGET FAILURE</span>
            <h3>{name} is temporarily unavailable</h3>
            <p>The failure was isolated. Other dashboard sections continue working.</p>
            <code>{error?.message || "Unknown error"}</code>
            <button className="retry-btn" onClick={resetErrorBoundary}>
              <RotateCcw size={15}/> Retry widget
            </button>
          </div>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}