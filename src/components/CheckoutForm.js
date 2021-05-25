import React from "react";
import { useForm } from "../hooks/useForm";

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
	const [showSuccessMessage, values, handleChanges, handleSubmit] = useForm();

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2>Checkout Form</h2>
				<label>
					First & Last Name:
					<input
						name="firstName"
						value={values.firstName}
						onChange={handleChanges}
					/>
				</label>
				{/* <label>
					Last Name:
					<input
						name="lastName"
						value={values.lastName}
						onChange={handleChanges}
					/>
				</label> */}
				<label>
					Email:
					<input name="email" value={values.email} onChange={handleChanges} />
				</label>
				<label>
					Address:
					<input
						name="address"
						value={values.address}
						onChange={handleChanges}
					/>
				</label>
				<label>
					City:
					<input name="city" value={values.city} onChange={handleChanges} />
				</label>
				<label>
					State:
					<input name="state" value={values.state} onChange={handleChanges} />
				</label>
				<label>
					Zip:
					<input name="zip" value={values.zip} onChange={handleChanges} />
				</label>
				<button>Checkout</button>
			</form>
			{/* <label>
				Additional Notes:
				<input name="notes" value={values.address} onChange={handleChanges} />
			</label> */}

			{showSuccessMessage && (
				<div className="success-message" data-testid="successMessage">
					<p>
						You have ordered some cool plants! Lets gooo!!{"gi "}
						<span role="img">🎉</span>
					</p>
					<p>Your new green friends will be shipped to:</p>
					<br />
					<br />
					<p title="success-name">
						{values.firstName} {values.lastName}
					</p>
					<p title="success-street-address">{values.address}</p>
					<p title="success-city-state-zip">
						{values.city}, {values.state} {values.zip}
					</p>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
