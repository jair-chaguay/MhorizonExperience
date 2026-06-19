import { useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { logPageView } from "./analyticsConfig";

export const AnalyticsTracker = () => {

  useEffect(() => {
    const isConsentGiven = getCookieConsentValue("mi_web_consentimiento");
    if (isConsentGiven === "true") {
      logPageView();
    }
  }, []);

  return null;
};