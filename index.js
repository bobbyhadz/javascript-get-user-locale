console.log('bobbyhadz.com');

const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

console.log(userLocale); // 👉️ "en-US"

// 👇️ ["en-US", "en", "de"]
console.log(navigator.languages);
