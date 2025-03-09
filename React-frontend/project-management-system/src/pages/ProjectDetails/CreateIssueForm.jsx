import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormMessage } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createIssue } from '@/Redux/Issue/Action';


const CreateIssueForm = ({ status }) => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const form = useForm({
    //resolver:zod
    defaultValues: {
      issueName: "",
      description: "",

    },
  });

  const onSubmit = (data) => {
    data.projectId = id;

    dispatch(
      createIssue({
        title: data.issueName,
        description: data.description,
        projectId: id,
        status,
      })
    );
    console.log("create isssue data", data);
  };
  return (
    <div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="IssueName..."
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
                    placeholder="description..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose>

            <Button
              type="submit"
              className="w-full mt-5">
              Create Issue
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  )
}

export default CreateIssueForm