// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  accessKeyId: "xxxxxxxxxxxxxxx",
  secretAccessKey: "xxxxxxxxxxxxxxx",
  sh_accessKeyId:"xxxxxxxxxxxxxxx",
  sh_secretAccessKey:"xxxxxxxxxxxxxxx",
  lambda_courses_url:"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/Stage/courses/",
  lambda_course_assign_url :"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/Stage/",
  lambda_role_url: "https://2avba4sn0a.execute-api.us-east-1.amazonaws.com/dev/role/",
  lambda_fees_fetch_url: "https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/Stage/fetch-fees/",
  lambda_fees_update_url :"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/Stage/fees/",
  lambda_notice_add:"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/dev/notification/",
  s3_bucket_url:"https://dogs-images-bucket.s3.amazonaws.com/",
  lambda_notice_fetch:"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/dev/notification/fetch",
  lambda_student_add:"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/dev/create/student/",
  lambda_teacher_add:"https://b5y0xxipnj.execute-api.us-east-1.amazonaws.com/dev/create/teacher/",
  bucket_name:"dogs-images-bucket",
  temp_password:"12345678",
  region:"us-east-1",
  userpoolid:"us-east-1_EpnRlUNBe",
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
