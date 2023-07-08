import DekrCarousel from "@/components/client/dekrCarousel";

export const metadata = {
  title: 'أذكاري | أذكار بعد السلام من الصلاة المفروضة',

}
async function getData() {

    const res = await fetch('http://127.0.0.1:3000/api/adkar/prayer-after')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data.  ')
    }
    const response = res.json();
    return response;
  }

export default async function Adkar(){
    const data = await getData();
    return (
        <div className="h-screen">
           <DekrCarousel items={data.dekirs} />
        </div>
    );
}