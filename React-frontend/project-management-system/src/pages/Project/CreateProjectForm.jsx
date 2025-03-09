import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react"
import { useForm } from "react-hook-form"
import { tags } from "../ProjectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { createProject } from "@/Redux/Project/Action";

const CreateProjectForm = () => {

    const dispatch = useDispatch();

    const handleTagsChange = (newValue) => {
        const currentTags = form.getValues("tags");

        const updatedTags = currentTags.includes(newValue) ?
            currentTags.filter((tag) => tag !== newValue) :
            [...currentTags, newValue];

        form.setValue("tags", updatedTags);
    }

    const form = useForm({
        //resolver:zod
        defaultValues: {
            name: "",  // Changed "Name" to "name" (case-sensitive)
            description: "",
            category: "",
            tags: ["angular", "tailwind"]
        },
    });

    const onSubmit = (data) => {
        dispatch(createProject(data))
        console.log("create project data", data);
    };

    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>  {/* Fixed typo "from" -> "form" */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Project name..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Project dexcription..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        defaultValue="fullsatck"
                                        value={field.value}
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                        }}
                                    //className="border w-full border-gray-700 py-5 px-5"

                                    ><SelectTrigger className="w-full">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="fullstack">Full Stack</SelectItem>
                                            <SelectItem value="frontend">Frontend</SelectItem>
                                            <SelectItem value="backend">Backend</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            handleTagsChange(value);
                                        }}
                                    //className="border w-full border-gray-700 py-5 px-5"

                                    ><SelectTrigger className="w-full">
                                            <SelectValue placeholder="Tags" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {tags.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}

                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <div className="flex gap-1 flex-wrap">

                                    {field.value.map((item) => <div key={item} onClick={() => handleTagsChange(item)}
                                        className="cursor-pointer flext rounded-full flex items-center border gap-2 px-4 py-1">

                                        <span className="text-sm">{item}</span>
                                        <Cross1Icon className="h-3 w-3" />
                                    </div>)}

                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />





                    <DialogClose>
                        {false ? (
                            <div>
                                <p>
                                    you can create only three project with free plan,
                                    please upgrade your plan
                                </p>
                            </div>
                        ) : (
                            <Button
                                type="submit"
                                className="w-full py-3 px-4 rounded-md bg-blue-700 text-blue-200 border border-blue-600 hover:bg-blue-600"
                            >
                                Create Project
                            </Button>
                        )}
                    </DialogClose>





                    {/* <button 
                        type="submit" 
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Create Project
                    </button> */}
                </form>
            </Form>
        </div>
    );
};

export default CreateProjectForm;
