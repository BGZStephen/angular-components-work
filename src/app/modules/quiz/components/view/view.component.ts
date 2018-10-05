import { Component, OnInit } from '@angular/core';

interface question {
  text: string,
  answer: string,
}

@Component({
  selector: 'weather-view',
  templateUrl: './view.component.html',
})
export class View implements OnInit {
  questions: Array<question> = [
    {
      text: "Who was the first man to fly around the earth with a spaceship?", 
      answer: "Gagarin"
    },
    {
      text: "What color is cobalt?",
      answer: "Blue"
    },
    {
      text: "Who invented vulcanized rubber?", 
      answer: "Goodyear"
    },
    {
      text: "What is the organ that is affected when one is suffering from hepatitis?", 
      answer: "Liver"
    },
    {
      text: "Which device do we use to look at the stars?", 
      answer: "Telescope"
    },
    {
      text: "Which unit indicates the light intensity?", 
      answer: "Candela"
    },
    {
      text: "Who invented the barometer?", 
      answer: "Torricelli"
    },
    {
      text: "Two brothers invented the hot air balloon. What was their surname?",	
      answer: "Montgolfier"
    },
    {
      text: "Which device was invented by Henry Mill?	The", 
      answer: "typewriter"
    },
    {
      text: "What is the lightest existing metal?",	
      answer: "Aluminium"
    },
    {
      text: "What is the substance known by the chemical formula NH3?",	
      answer: "Ammoniac"
    },
    {
      text: "Which planet is nearest the sun?",	
      answer: "Mercury"
    }
  ]

  activeQuestion: question;
  answer: string = '';
  submitted: boolean = false;
  answerVisible: boolean = false;
  correctAnswer: boolean = false;


  ngOnInit() {
    this.setRandomQuestion();
  }

  setRandomQuestion(): void {
    const randomNubmer = Math.floor(Math.random() * Math.floor(this.questions.length));
    this.activeQuestion = this.questions[randomNubmer];
  }

  checkAnswer() {
    if (this.answer.toLowerCase() === this.activeQuestion.answer.toLowerCase()) {
      this.correctAnswer = true;
      this.submitted = true;
    } else {
      this.correctAnswer = false;
      this.submitted = true;
    }
  }

  getNewQuestion() {
    this.setRandomQuestion();
    this.correctAnswer = false;
    this.submitted = false;
    this.answerVisible = false;
    this.answer = '';
  }

  showAnswer() {
    this.answerVisible = true;
  }
}