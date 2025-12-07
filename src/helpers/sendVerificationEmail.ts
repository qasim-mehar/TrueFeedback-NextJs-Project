import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<apiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: " True Feedback | Veirification code ",
      react: VerificationEmail({ username, otp: verificationCode }),
    });
    return {
      success: true,
      message: "Verification email sent successfully!",
    };
  } catch (emailError) {
    console.log("Error sending verification email!", emailError);
    return {
      success: false,
      message: "failed to send verification email",
    };
  }
}
