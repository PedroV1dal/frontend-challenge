export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatPhoneNumber(phone: string) {
  let cleaned = phone.replace(/\D/g, "");

  let countryCode = "";
  if (cleaned.length > 11) {
    countryCode = `+${cleaned.slice(0, cleaned.length - 11)} `;
    cleaned = cleaned.slice(cleaned.length - 11);
  }

  if (cleaned.length === 10) {
    return `${countryCode}(${cleaned.slice(0, 2)}) ${cleaned.slice(
      2,
      6
    )}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11) {
    return `${countryCode}(${cleaned.slice(0, 2)}) ${cleaned.slice(
      2,
      7
    )}-${cleaned.slice(7)}`;
  }

  return phone;
}
