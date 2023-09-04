function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert to 12-hour format

  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const timeString = `${displayHours}:${minutes}:${seconds} ${ampm}`;
  
  document.getElementById('time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();