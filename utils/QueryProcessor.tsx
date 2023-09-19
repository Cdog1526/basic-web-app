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
  return "";
}
