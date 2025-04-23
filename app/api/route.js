// export async function GET(req,res) {
//   return new Response("Api route")
  
// }

export async function GET() {
  return Response.json({ message: "Hello from Next.js API!" }, { status: 200 });
}




