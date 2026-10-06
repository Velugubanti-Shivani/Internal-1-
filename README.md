# FaultGuard Final

## Run
1. Extract this ZIP.
2. Open the `FaultGuard_Final` folder in VS Code.
3. Open Terminal in that folder.
4. Run:
   npm install
5. Then:
   npm run dev
6. Open the localhost URL shown by Vite.

## Sentry
The project works without Sentry configured: Error Boundaries and the failure demo still work and the error is printed to the browser console.

To capture the error in Sentry:
1. Create a Sentry React project.
2. Copy your DSN.
3. Create `.env` in the project root.
4. Add:
   VITE_SENTRY_DSN=YOUR_REAL_DSN
5. Restart `npm run dev`.
6. Click "Simulate widget failure" under Notifications.
7. Retry the widget.
8. Open Sentry Issues and show the captured exception.

## Assignment demo
- Normal dashboard
- Click Notifications -> Simulate widget failure
- Only Notifications is replaced by fallback UI
- Revenue, System Health and Transactions remain visible
- Click Retry widget
- Notifications returns
- Sentry receives the caught exception when DSN is configured
