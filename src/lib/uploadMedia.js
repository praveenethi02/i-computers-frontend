import { createClient } from "@supabase/supabase-js";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjemt2aHNsenl3dW9teXVmb3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MjUxNTYsImV4cCI6MjEwNzMwMTE1Nn0.s69vc02utoarFaD3NabfwVq_pVjTGLJqRXGs3YqRtY8";
const url = "https://qczkvhslzywuomyuforh.supabase.co";
const supabase = createClient(url, key);

export default function uploadMedia(file) {
	return new Promise((resolve, reject) => {
		if (file == null) {
			reject("No file selected");
		} else {

            const timestamp = new Date().getTime()

            const fileName = timestamp + "_" + file.name;

			supabase.storage
				.from("images")
				.upload(fileName, file)
				.then(() => {

					const publicUrl = supabase.storage
						.from("images")
						.getPublicUrl(fileName).data.publicUrl;

                    resolve(publicUrl);

				})
				.catch((err) => {
					reject(err);
				});
		}
	});
}