import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { name: string; email: string; phoneNumber: string; message: string }) => {
    console.log("Form Submitted:", data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <label className="flex flex-col">
        <span className="text-gray-300 text-sm">Name</span>
        <input
          {...register("name", { required: "Name is required" })}
          className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
          placeholder="Enter your name"
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </label>

      {/* Phone Number Field */}
      <label className="flex flex-col">
        <span className="text-gray-300 text-sm">Phone Number</span>
        <input
          type="tel"
          {...register("phone", { required: "Phone number is required" })}
          className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
          placeholder="Connect with me on WhatsApp"
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone.message}</span>
        )}
      </label>

      {/* Email Field */}
      <label className="flex flex-col">
        <span className="text-gray-300 text-sm">Email</span>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </label>

      {/* Message Field */}
      <label className="flex flex-col">
        <span className="text-gray-300 text-sm">Message</span>
        <textarea
          {...register("message", { required: "Message cannot be empty" })}
          className="input-field bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:border-blue-500"
          placeholder="Write your message here..."
          rows={4}
        />
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message.message}</span>
        )}
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
