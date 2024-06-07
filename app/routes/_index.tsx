import React, {  useLoaderData } from "react";
import { createSession, type ActionFunction, type MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import client from "~/client";
import { Form } from "@remix-run/react";
import prisma from "~/client";


// here we will have to create the pages:
// list of surveys
// surveyCreation
// SurveySubmission + SurveySubmission
// SurveyResults


// export async function action({
//   request
// }:ActionFunctionArgs) {
//   const body = await request.formData();

//   const name = body.get("name")?.toString() || "random survey"

//   await prisma.survey.create({
//     data: {
//       title: name
//     }
//   })

//   return Response.json({success: "true"})
// }

export default function Survey() {

  return (
    <>
      <Form action="" method="post" className="form-example">
          <div className="form-example">
              <label>Enter your name: </label>
              <input type="text" name="name" id="name" required />
          </div>
          <div className="form-example">
              <input type="submit" value="Subscribe!" />
          </div>
      </Form>

    </>
  )
}

const surveys = {
  key: "",
  title: "",
}



// export function Main() {

//   return (

//     <>
//     <div className="news">
//   <a href="#">Surveys!</a>
//   <menu>
//     <li><button id="take-survey" onClick={}>Take a survey</button></li>
//     <li><button id="see-results" onClick={}>See all results</button></li>
//   </menu>
// </div>

//     </>
//   )
// }

// export function AllSurveys() {
//   return (
//     <>

//     </>
//   )
// }



// export const action: ActionFunction = async ({request}) => {

//   // Gets the form data
  
//   const data= wait request.formData();
//   console.log(data.get(“questionname”))
//   console.log(data.get(“surveyName”))
  
//   //Updating the data structure
//   surveys.push({
//   id: surveys.length + “1”,
//   title: data.get(“surveyName)?.toString() || “default survey name”,
//   }
  
//   //returns the new data structure
//   return new Response(JSON.stringify({surveys: surveys}), {
//   headers: {
//   :Content-Type: ‘application/json”,
//   },
//   }):



// export default function Index() {


//   const message= useLoaderData<typeof loader>();
//   return (
//     <Survey />
//   )
// }
