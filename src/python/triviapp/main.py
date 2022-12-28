from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Model to represent a trivia question
class Question(BaseModel):
    id: int
    category: str
    difficulty: str
    question: str
    correct_answer: str

# Model to represent a potential answer for a question
class Answer(BaseModel):
    id: int
    question_id: int
    answer: str

# Model to represent a user
class User(BaseModel):
    id: int
    username: str
    password: str

# Model to represent a score for a user on a particular question
class Score(BaseModel):
    id: int
    user_id: int
    question_id: int
    score: int

# In-memory database for storing trivia data
questions = []
answers = []
users = []
scores = []

# Route to retrieve a list of all questions
@app.get("/questions")
def read_questions():
    return questions

# Route to add a new question
@app.post("/questions")
def create_question(question: Question):
    questions.append(question)
    return question

# Route to retrieve a list of all answers for a particular question
@app.get("/questions/{question_id}/answers")
def read_answers(question_id: int):
    return [answer for answer in answers if answer.question_id == question_id]

# Route to add a new answer for a particular question
@app.post("/questions/{question_id}/answers")
def create_answer(question_id: int, answer: Answer):
    answer.question_id = question_id
    answers.append(answer)
    return answer

# Route to retrieve a list of all users
@app.get("/users")
def read_users():
    return users

# Route to add a new user
@app.post("/users")
def create_user(user: User):
    users.append(user)
    return user

# Route to retrieve a list of scores for a particular user
@app.get("/users/{user_id}/scores")
def read_scores(user_id: int):
    return [score for score in scores if score.user_id == user_id]

# Route to add a new score for a particular user
@app.post("/users/{user_id}/scores")
def create_score(user_id: int, score: Score):
    score.user_id = user_id
    scores.append(score)
    return score
