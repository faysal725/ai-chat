// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
// });

// export async function POST(request) {
//   const { message } = await request.json();
//   try {
//     const params = {
//         messages: [{ role: 'developer', content: 'Say this is a test' }],
//         model: 'gpt-4o-mini-2024-07-18',
//       };
//       const chatCompletion = await client.chat.completions.create(params);

//        console.log(client.chat.completions.create(params))


//     //   res.status(200).json({ reply: response.data.choices[0].message.content });

//     //   return new Response(JSON.stringify(data), {
//     //     headers: { "Content-Type": "application/json" },
//     //     status: 201,
//     //   });

//     let data = { reply: "response.data.choices[0].message.content" };

//     return new Response(JSON.stringify(data), {
//       headers: { "Content-Type": "application/json" },
//       status: 201,
//     });
//   } catch (error) {
//     console.log(error)
//     return  Response.json("error happened");
//   }
// }

