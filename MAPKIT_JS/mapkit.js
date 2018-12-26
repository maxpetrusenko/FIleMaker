const jwt = require("jsonwebtoken"); // For generating the JWT and signing it
const privateKey = `
-----BEGIN PRIVATE KEY-----
4F CF EF 59 BE 2C F5 B2 6C 2F 8F EE 13 87 32 E8 05 35 A8 6E 8B 7D C9 69 0C B9 D9 17 BC 77 2C D4 67 E2 FD 9A 6D 3A 59 5C DF 83 01 BD B2 AE 2A 61 72 B1 AF CD C3 45 30 8F A3 83 0D CE 1D 47 B4 F1 93 8A A3 74 9B A4 C3 98 72 87 3B 3E AF 45 0B 92 54 B9 32 BB 90 18 53 6B 0A 4E 10 B6 D9 1D 50 6C 21 80 0A 89 4E 57 8C 6B 5B 3C 3D A6 FD DE F7 0D 23 1D 0B 4A 26 87 3F BA 91 92 4C A4 19 12 19 6D 57 F5 7A 58 87 7B 68 8A E4 86 8C 4A EB E2 49 14 AA A5 DD 55 00 A9 AE BB 4B 30 AE E1 A0 B1 BC 29 80 E6 09 77 E5 BE 34 A2 01 CA 7F DC E2 0A E6 3B B8 BB EC BA 62 95 F3 05 63 41 82 CD 0F 3B 1D 4C 95 A4 DB AB F9 C9 95 E9 4F E4 4D E7 26 99 81 E9 BC F9 B4 29 D2 01 7A 66 E1 2E 8C F6 21 8A C5 F8 78 E1 81 AE BF D3 90 9D A9 AD F3 AF FD 38 1A 96 67 30 1C 51 A5 5C EC 71 8A 82 B4 6C 0F 0C 15 1F
-----END PRIVATE KEY-----
`;
const teamId = 'LE3G48GX24';
const keyId = '88 27 17 09 A9 B6 18 60 8B EC EB BA F6 47 59 C5 52 54 A3 B7';
 
const payload = {
  iss: teamId /* Issuer: Your Apple Developer Team ID */,
  iat: Date.now() / 1000 /* Issued at: Current time in seconds */,
  exp: Date.now() / 1000 + 315360000 /* Expiration: Time to expire in seconds. This one is set to expire in 10 years. */
};
 
const header = {
  kid: keyId /* Key Id: Your MapKit JS Key ID */,
  typ: "JWT",
  alg: "ES256"
};
 
let token = jwt.sign(payload, privateKey, { header });
console.log(token);