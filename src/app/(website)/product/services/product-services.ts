export async function getProducts() {
    const res = await fetch("https://api.codingthailand.com/api/course");
    if (!res.ok) {  
        throw new Error('Failed to fetch data');
    }
    return res.json();
}