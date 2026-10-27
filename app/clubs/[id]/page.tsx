import Hub from "../../hub";
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;return <Hub page="clubs" detailId={id}/>}
