function isPrime(num : number) : boolean {
  var prime : boolean = num != 1;
  for(var i : number =2; i<num; i++) {
      if(num % i == 0) {
          prime = false;
          break;
      }
  }
  return prime;
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "calebkoo"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "CKoo"
    );
  }
  if (query.toLowerCase().includes("plus")) {
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
    }
    const addMatch3 = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
    if (addMatch3) {
      const x: number = parseInt(addMatch3[1]);
      const y: number = parseInt(addMatch3[2]);
      const z: number = parseInt(addMatch3[3]);
      return (x+y+z).toString();
    }
  }
  if (query.toLowerCase().includes("multiplied")) {
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)?/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x*y).toString();
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const addMatch = query.match(/What is (\d+) minus (\d+)?/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x-y).toString();
    }
  }
  if (query.toLowerCase().includes("primes")) {
    const largeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);
    if (largeMatch) {
      const x1: number = parseInt(largeMatch[1]);
      const x2: number = parseInt(largeMatch[2]);
      const x3: number = parseInt(largeMatch[3]);
      const x4: number = parseInt(largeMatch[4]);
      const x5: number = parseInt(largeMatch[5]);
      const arr = [x1, x2, x3, x4, x5];
      const res = arr.filter((n) => isPrime(n));
      return (res).toString();
    }

  }
  
  if (query.toLowerCase().includes("largest")) {
    const largeMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
    if (largeMatch) {
      const x: number = parseInt(largeMatch[1]);
      const y: number = parseInt(largeMatch[2]);
      const z: number = parseInt(largeMatch[3]);
      const z2: number = Math.max(x, y, z);
      return (z2).toString();
    }

  }
  
  if (query.toLowerCase().includes("square and a cube")) {
    const largeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/);
    if (largeMatch) {
      const x1: number = parseInt(largeMatch[1]);
      const x2: number = parseInt(largeMatch[2]);
      const x3: number = parseInt(largeMatch[3]);
      const x4: number = parseInt(largeMatch[4]);
      const x5: number = parseInt(largeMatch[5]);
      const x6: number = parseInt(largeMatch[6]);
      const x7: number = parseInt(largeMatch[7]);
      const arr = [x1, x2, x3, x4, x5, x6, x7];
      const res = arr.filter((n) => Math.sqrt(n) % 1 === 0 &&  Math.cbrt(n) % 1 === 0);
      return (res).toString();
    }

  } 
  return "";
}
