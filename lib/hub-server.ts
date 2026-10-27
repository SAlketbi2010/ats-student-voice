import { getDb } from '../db';
import { directory } from '../db/schema';
import { members, clubIdeas, type Member, type Club } from './hub-data';
export { identity,writeGuard } from './access';
export async function getDirectory(){const rows=await getDb().select().from(directory);const m=new Map(members.map(x=>[x.id,x]));const c=new Map(clubIdeas.map(x=>[x.id,x]));for(const r of rows){const data=JSON.parse(r.payload);if(r.kind==='member')m.set(r.id,data as Member);if(r.kind==='club')c.set(r.id,data as Club);}return {members:[...m.values()],clubs:[...c.values()]};}
export const clean=(v:unknown,max:number)=>typeof v==='string'?v.trim().slice(0,max):'';
