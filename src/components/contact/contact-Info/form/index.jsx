import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        send("service_fd9456s", "template_a2hihgs", data, "2Oi1LRJh7MKoTWvwC")
            .then((res) => {
                console.log("Success!", res.status, res.text);
                formSuccess();
            })
            .catch((err) => {
                console.log("Failed! ", err);
            });
    };

    const formSuccess = () => {
        toast("Thanks for submitting your query");
        document.getElementById("queryForm").reset();
    };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        {...register("from_name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.from_name?.message && (
                        <p className="errs">{errors.from_name?.message}</p>
                    )}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Email"
                        {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid Email Address",
                            },
                        })}
                    />
                    {errors.reply_to?.message && (
                        <p className="errs">{errors.reply_to?.message}</p>
                    )}
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                        {...register("phone_number", {
                            required: "Phone number is required",
                            minLength: {
                                value: 10,
                                message: "Phone number is not valid",
                            },
                        })}
                    />
                    {errors.phone_number?.message && (
                        <p className="errs">{errors.phone_number?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                            minLength: {
                                value: 10,
                                message: "Min 10 letter required",
                            },
                        })}
                    />
                    {errors.subject?.message && (
                        <p className="errs">{errors.subject?.message}</p>
                    )}
                </div>

                <div className="input-field full-width">
                    <textarea
                        type="textarea"
                        name="message"
                        placeholder="Your message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 20,
                                message: "Minimum 20 letter required",
                            },
                            maxLength: {
                                value: 300,
                                message: "Maximum 300 letter required",
                            },
                        })}
                    />
                    {errors.message?.message && (
                        <p className="errs">{errors.message?.message}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
