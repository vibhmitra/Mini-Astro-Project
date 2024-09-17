export function formatDateToYYYYMMDD(date: Date): string {
    return date.toISOString().substring(0, 10);
}

// Function to Get Date and Location in Custom Specification Format
export function customDateFormat(date: Date, locationAlias?: any): string {
    const formattedDate = date.toISOString().substring(0, 19) + getUTCTimeZone(date);
    console.log(locationAlias);
    if (!locationAlias) return formattedDate;
    return `${formattedDate}@${locationAlias}`;
}

// Fucntuon to get timezone offset in (+/-) HH:MM format
function getUTCTimeZone(date: Date): string {
    const offset = date.getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset <= 0 ? "+" : "-";
    return `${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}
