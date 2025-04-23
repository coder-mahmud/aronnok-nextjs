export async function GET() {
  return Response.json({ message: "Hello from test route!" }, { status: 200 });
}

export async function POST(req) {
  // const reqBody = await req.json();
  // console.log("Request Data", reqBody);

  const formData = await req.formData();
  const data = Object.fromEntries(formData);
  const test = data.test

  

  // console.log("formData",formData)
  // console.log("test",test)


  return Response.json({ message: "Hello from test POST route!", name: test }, { status: 200 });
}