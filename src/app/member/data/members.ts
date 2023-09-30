export interface Member{
    id: number;
    title?:string;
    name: string;
    image: string;
    githubUrl?: string;
}


export const mentors=[
    {
        id: 0,
        name: "Muhammad Noman",
        title:"Mentor",
        image: "./assets/static/images/mnoman.JPG",
        
    },
]

export const members = [
   
    
    {
        id: 1,
        name: "Rajput Usman",
        image: "https://avatars.githubusercontent.com/u/65516140?v=4",
        githubUrl : "https://github.com/RajputUsman"
    },
    
    {
        id: 2,
        name: "Naaji",
        image: "https://avatars.githubusercontent.com/u/54370141?v=4",
        githubUrl : "https://github.com/naaajii"
    },
    {
        id: 3,
        name: "Fatima Irshad",
        image: "https://avatars.githubusercontent.com/u/102471802?v=4",
        githubUrl : "https://github.com/fatima-irshad"
    },
]