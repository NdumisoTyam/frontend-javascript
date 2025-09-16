// 1. Nominal typing via branded interfaces
export interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

// 2. Functions to sum credits while preserving brand
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

// 3. (Optional) Example usage
const m1: MajorCredits = { credits: 10, brand: 'MajorCredits' };
const m2: MajorCredits = { credits: 5, brand: 'MajorCredits' };
const totalMajor = sumMajorCredits(m1, m2);

const n1: MinorCredits = { credits: 3, brand: 'MinorCredits' };
const n2: MinorCredits = { credits: 4, brand: 'MinorCredits' };
const totalMinor = sumMinorCredits(n1, n2);

console.log(totalMajor, totalMinor);
```