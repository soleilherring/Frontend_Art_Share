// import { Form, redirect, useActionData } from "react-router-dom";

// export default function SignUpForm() {
//   return (
//     <div className="form">
//       <Form method="post" action="/pages/signupform">
//         <label>
//           <span>Email:</span>
//           <input type="email" name="email" required />
//         </label>
//         <label>
//           <span>Name:</span>
//           <input type="name" name="name" required />
//         </label>
//         <label>
//           <span>Location:</span>
//           <input type="location" name="location" required />
//         </label>
//         <button>Submit</button>

//         {data && data.error && <p>{data.error}</p>}
//       </Form>
//     </div>
//   );
// }

// export const contactAction = async ({ request }) => {
//   const data = await request.formData()

//   const submission = {
//     email: data.get('email'),
//     message: data.get('message')
//   }

//   console.log(submission)

//   // send your post request

//   if (submission.message.length < 10) {
//     return {error: 'Message must be over 10 chars long.'}
//   }

//   // redirect the user
//   return redirect('/')
// }
