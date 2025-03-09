import React from "react";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { CardContent } from '@/components/ui/card';
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/Redux/Store";
import { searchProjects } from "@/Redux/Project/Action";
import { useEffect } from "react";
import { fetchProjects } from "@/Redux/Project/Action";


 export const tags = [
    "all",
    "react",
    "spring boot",
    "vue",
    "angular",
    "svelte",
    "tailwind",
    "bootstrap",
    "material-ui",
    "mysql",
    "mongodb",
    "postgresql",
    "sql-server",
    "express",
    "django",
    "flask",
    "python",
    "javascript",

]; // Add more tags here


const ProjectList = () => {
    const [keyword, setKeyword] = React.useState("");
    const {project}=useSelector(store=>store)
    const dispatch = useDispatch()

    const handleFilterTags = (value) => {
        if(value=="all"){
            dispatch(fetchProjects({}))
        }
        else
        dispatch(fetchProjects({tag:value}))
        
        
    };

    const handleFilterCategory = (value) => {
        if(value=="all"){
            dispatch(fetchProjects({}))
        }
        else
        dispatch(fetchProjects({category:value}))
        
    };

    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
        dispatch(searchProjects(e.target.value));
    };

    console.log("project store", project)

    return (
        <>
            <div className="relative px-5 lg:px-20 lg:flex gap-5 justify-center py-5">
                {/* Moved the filter section to the left side */}

                <section className="filterSection">
                    <Card className="p-10 sticky top-10">

                        <div className="flex justify-between lg:w-[20rem]">
                            <p className="text-xl -tracking-wider">filters</p>

                            <Button variant="ghost" size="icon">

                                <MixerHorizontalIcon />

                            </Button>

                        </div>
                        <CardContent className="mt-5">


                            <ScrollArea className="space-y-7 h-[70vh]">
                                <div>
                                    <h1 className="pb-3 text-gray-100 border-b">Category</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-3 pt-5"
                                            defaultValue="all"
                                            onValueChange={(value) =>
                                                handleFilterCategory(value)
                                            }
                                        >
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="all" id="r1" />
                                                <Label htmlFor="r1">all</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="fullstack" id="r2" />
                                                <Label htmlFor="r2">fullstack</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="frontend" id="r3" />
                                                <Label htmlFor="r3">frontend</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="backend" id="r4" />
                                                <Label htmlFor="r4">backend</Label>
                                            </div>

                                        </RadioGroup>

                                    </div>
                                </div>


                                {/* Tab */}

                                <div className="pt-9">
                                    <h1 className="pb-5 text-gray-100 border-b">Tag</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-3 pt-3"
                                            defaultValue="all"
                                            onValueChange={(value) =>
                                                handleFilterTags(value)
                                            }
                                        >
                                            {tags.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RadioGroupItem value={item} id={`r1-${item}`} />
                                                    <Label htmlFor={`r1-${item}`}>{item}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>

                                    </div>
                                </div>

                            </ScrollArea>
                        </CardContent>

                    </Card>

                </section>

                {/* Moved the search bar to the middle upper section */}
                <section className="rojectListSection w-full lg:w-[48rem]">
                    <div className="flex gap-2 items-center pb-5 justify-between">
                        <div className="relative p-0 w-full">
                            <Input
                                onChange={handleSearchChange}
                                placeholder="Search project"
                                className="40% px-10"
                            />
                            <MagnifyingGlassIcon className="absolute top-3 left-4" />
                        </div>
                    </div>
                    <div>
                    <div className="space-y-5 min-h-[74vh] w-full">
                            {
                                keyword 
                                ? project.searchProjects?.map((item, index) => <ProjectCard 
                                item={item} key={item.id*index}/>)
                                :project.projects?.map((item) => (
                                    <ProjectCard key={item.id} item={item}/>
                                ))}

                        </div>
                    </div>

                </section>
            </div>

        </>
    );
};

export default ProjectList;
