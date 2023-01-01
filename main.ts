#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation' 
import {createSpinner} from 'nanospinner'
import figlet from "figlet";
import gradient from 'gradient-string'



let player_name:string;
let ques1:any;
let ques2:any;
let check:number = 0

const sleep = (ms=2000)=> new Promise((r)=>setTimeout(r,ms))

async function welcome() {
    console.clear()
    const greenTitle = chalk.greenBright.bold(
        `Who is the Real Pakistani? \n`
    )
    console.log(greenTitle)
    await sleep()
    console.log(chalk.redBright(`
    ${chalk.bold("Rules")}
    if you don't answer correctly to all questions you will be disqualified 
    get all questions right or else your not a true pakistani
    fun fact this was pretty fun to make
    I'm owner of this code - Hassam farhan

   \n`
    ))
    
}


async function name() {
    const  user_name = await inquirer.prompt({
        name:'user_name',
        type:'input',
        message:chalk.red("What is your name??"),
        default(){
            return 'Player';
        }
    })
    player_name = user_name.user_name
}



async function question1() {
    let Q1:any = await inquirer.prompt({
        name:"Q1",
        type:"list",
        message:chalk.redBright("What is the capital city of Pakistan"),
        choices:(["Karachi","Lahore","Multan","Islamabad","Hyderabad"])
    
    })
    return handleAnswer(Q1.Q1=="Islamabad")

    
}


async function question2() {
    let Q2:any = await inquirer.prompt({
        name:"Q2",
        type:"list",
        message:chalk.redBright("Who is the founder of Pakistan?? "),
        choices:(["Sir Zia Khan","Muhammad Hassam Farhan","Allama iqbal","Miss Hira Khan","Muhammad Ali Jinnah"])
    
    })
    return handleAnswer(Q2.Q2=="Muhammad Ali Jinnah") 
    
}


async function question3() {
    let Q3:any = await inquirer.prompt({
        name:"Q3",
        type:"list",
        message:chalk.redBright("How many provinces are there in Pakistan?? "),
        choices:(["5","2","4","8","6"])
    
    })
    return handleAnswer(Q3.Q3=="5") 
}


async function question4() {
    let Q4:any = await inquirer.prompt({
        name:"Q4",
        type:"list",
        message:chalk.redBright("Which was the first capital city of Pakistan?? "),
        choices:(["Multan","Lahore","Karachi","Islamabad","Hyderabad"])
    
    })
    return handleAnswer(Q4.Q4=="Karachi") 
}


async function question5() {
    let Q5:any = await inquirer.prompt({
        name:"Q5",
        type:"list",
        message:chalk.redBright("Who wrote the national anthem of Pakistan?? "),
        choices:(["Sir Dawood Junaid","Hafeez Jalandhari","Muhammad Hassam Farhan","Sir Daniyal nagori"])
    
    })
    return handleAnswer(Q5.Q5=="Hafeez Jalandhari") 
    
}


async function question6() {
    let Q6:any = await inquirer.prompt({
        name:"Q6",
        type:"list",
        message:chalk.redBright("What is the national game of Pakistan?? "),
        choices:(["Football","Baseball","Hockey","Cricket"])
    
    })
    return handleAnswer(Q6.Q6=="Hockey") 
    
}





 


async function handleAnswer(question:any) {
    const spinner = createSpinner('Checking answer...').start()
    await sleep()
    if(question){
        spinner.success({text:chalk.bold.greenBright(`Good job ${player_name} you got it right! congrats!`)})
        check= check+1
    }
    else{
        spinner.error({text:chalk.redBright.bold(`uh ohh wrong answer you lost ${player_name} good luck next time`)})
        sleep()
        await sayCongratulations2()
        await sleep()
        process.exit()

    }

    
}

async function sayCongratulations(): Promise<void> {
    const msg:any= "Congratulations, you're a real Pakistani"
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data))

    })

}
async function sayCongratulations2(): Promise<void> {
    const msg:any= "Congratulations, you're not a real Pakistani"
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data))


    })
  }

await welcome()
await name()
await question1()
await question2()
await question3()
await question4()
await question5()
await question6()
if(check==6){
    await sayCongratulations()
}





