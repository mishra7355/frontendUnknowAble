import React, { useEffect, useRef, useState } from "react";

const BookingMeetingCal = () => {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const calUrl = `https://cal.com/aman-mishra-nfhhhd?theme=light/${"15min"}`;

  useEffect(() => {
    // Simulate Calendly widget loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="p-8 text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading calendar...</p>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <iframe
            ref={iframeRef}
            src={calUrl}
            title="Cal Booking"
            width="100%"
            height="700"
            style={{ border: "none" }}
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
          />
        </div>
      )}
    </>
  );
};

export default BookingMeetingCal;
