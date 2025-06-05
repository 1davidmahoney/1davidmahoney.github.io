function updateEventClasses() {
  // Get current time in US Eastern Time (New York)
  const now = new Date();
  const easternNow = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

  document.querySelectorAll('.container-text').forEach(el => {
    const dateStr = el.getAttribute('data-date'); // format: YYYY-MM-DD
    const endTimeStr = el.getAttribute('data-endtime'); // format: HH:MM (24h)

    if (!dateStr || !endTimeStr) return;

    const endDateTimeStr = dateStr + 'T' + endTimeStr + ':00-04:00'; // -04:00 is Eastern Daylight Time (EDT)
    // You can also calculate -05:00 for Eastern Standard Time if not daylight saving.

    const eventEnd = new Date(endDateTimeStr);

    if (easternNow < eventEnd) {
      el.classList.add('active-events');
      el.classList.remove('events-all-done');
    } else {
      el.classList.add('events-all-done');
      el.classList.remove('active-events');
    }
  });
}

// Run once at load, and optionally every minute
updateEventClasses();
setInterval(updateEventClasses, 60000);
