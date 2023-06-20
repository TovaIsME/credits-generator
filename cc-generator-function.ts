export function generateCreditCardDetails(num : number): { cardNumber: string; cvc: string; expiration: string } {
    for (let i = 0; i< num; i++){
        
    }
    const cardNumber = generateVisaCardNumber();
    const cvc = generateRandomNumber(getRandomInt(3, 3));
    const expiration = generateExpirationDate();
  
    return { cardNumber, cvc, expiration };
  }
  
  export function generateVisaCardNumber(): string {
    const visaPrefixes = ['4539', '4556', '4916', '4532', '4929', '40240071', '4485', '4716', '4'];
    const randomPrefix = visaPrefixes[Math.floor(Math.random() * visaPrefixes.length)];
    const cardNumberLength = 16 - randomPrefix.length;
    const randomSuffix = generateRandomNumber(cardNumberLength);
    const cardNumber = randomPrefix + randomSuffix;
    return cardNumber;
  }
  
  export function generateExpirationDate(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const year = getRandomInt(currentYear + 4, currentYear + 10);
    const month = getRandomInt(1, year === currentYear + 4 ? 12 : currentMonth);
  
    const expiration = `${String(month).padStart(2, '0')}/${String(year).slice(-2)}`;
    return expiration;
  }
  
  export function generateRandomNumber(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10).toString();
    }
    return result;
  }
  
  export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  