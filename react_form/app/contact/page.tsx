import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

type FormData = {
name: string;
email: string;
number: string;
message: string;
};

const schema = z.object({
name: z.string();
email: z.string();
number: z.string();
message: z.string();
});

export default function ContactForm() {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormData>({
    resolver: zodResolver(schema),
});

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
};

return (
    <div className="max-w-lg mx-auto">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            {...register("name")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
        <label htmlFor="email" className="block font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
        </label>
        <input
            type="email"
            {...register("email")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
        <label htmlFor="number" className="block font-medium text-gray-700">
            Number <span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            {...register("number")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
        </div>
        <div>
        <label htmlFor="message" className="block font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
        </label>
        <textarea
            rows={4}
            {...register("message")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
        Send
        </button>
    </form>
    </div>
);
}
