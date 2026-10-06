import * as Sentry from "@sentry/react";

export function reportWidgetError(error, info, widget) {
  console.error("FaultGuard error:", widget, error);
  Sentry.withScope((scope) => {
    scope.setTag("widget", widget);
    scope.setTag("application", "FaultGuard");
    scope.setContext("react", {
      componentStack: info?.componentStack || "Unavailable"
    });
    Sentry.captureException(error);
  });
}