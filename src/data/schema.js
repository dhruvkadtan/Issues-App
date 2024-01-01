import * as Yup from "yup";

const issueSchema = Yup.object().shape({
	Description : Yup.string().required("Description is Required")
})

export default issueSchema;