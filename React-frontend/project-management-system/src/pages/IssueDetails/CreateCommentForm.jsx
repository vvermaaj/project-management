import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormMessage } from "@/components/ui/form";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useDispatch } from 'react-redux';
import { createComment } from '@/Redux/Comment/Action';

const CreateCommentForm = ({issueId}) => {
    const dispatch=useDispatch()
    const form = useForm({
            //resolver:zod
            defaultValues: {
                content: "",
                
            },
        });
    
        const onSubmit = (data) => {
            dispatch(createComment({content:data.content,issueId}))
            console.log("create project data", data);
        };
  return (
    <div>

<Form {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex gap-2">
                                <div>
                                    <Avatar>
                                        <AvatarFallback>
                                            A
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-[20rem]"
                                        placeholder="Add comment here..."
                                    />
                                </FormControl>

                                </div>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    
                        
                            <Button type="submit">
                                
                                Save
                            </Button>
                    
                </form>
            </Form>

    </div>
  )
}

export default CreateCommentForm