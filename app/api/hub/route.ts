import { getDirectory,identity } from '../../../lib/hub-server';
export const dynamic='force-dynamic';
export async function GET(req:Request){try{return Response.json({...await getDirectory(),viewer:{signedIn:!!identity(req).id,isAdmin:identity(req).admin}},{headers:{'Cache-Control':'no-store'}})}catch{return Response.json({error:'The directory could not be loaded. Please try again.'},{status:503});}}
