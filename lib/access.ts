export const adminEmail='saeed.h.alketbi@gmail.com';
export function identity(req:Request){return {id:req.headers.get('oai-authenticated-user-id'),admin:!!req.headers.get('oai-authenticated-user-id')&&req.headers.get('oai-authenticated-user-email')?.toLowerCase()===adminEmail};}
export function writeGuard(req:Request){if(!identity(req).id)return Response.json({error:'Sign in to continue.'},{status:401});const origin=req.headers.get('origin');if(!origin||origin!==new URL(req.url).origin)return Response.json({error:'Invalid request origin.'},{status:403});return null;}
