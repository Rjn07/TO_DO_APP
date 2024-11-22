 **To-Do List Application**

 **Overview**
This is a beginner-friendly **To-Do List Application** built with **Node.js**, **Express**, and **MongoDB**. It helps users manage their tasks by allowing them to add, edit, delete, and mark tasks as completed.

---

 **What You Can Do**
- Add new tasks with a title, description, category, and due date.
- See a list of all your tasks.
- Edit tasks to update details.
- Mark tasks as "completed."
- Delete tasks you don’t need anymore.

---
 **Technologies Used**
- **Node.js**: Used to run the app's backend.
- **Express.js**: A framework to create routes for the app.
- **MongoDB**: A database to store tasks.
- **Mongoose**: A library to make working with MongoDB easier.
- **EJS**: A simple way to create dynamic web pages.

---

 **How to Set It Up**

 **Step 1: Install Prerequisites**
- Install [Node.js](https://nodejs.org/).
- Install [MongoDB](https://www.mongodb.com/try/download/community) or use a MongoDB Atlas account (online database).


 **Step 2: Install Dependencies**
Run this command to install all required packages:
```bash
npm install
```

**Step .3: Set Up Environment Variables**
1. Create a `.env` file in the project folder.
2. Add this code to the `.env` file:
   ```env
   PORT=9000
   MONGO_URI=mongodb://localhost:27017/TODO
   ```

### **Step 4: Start the App**
Run the app with this command:
```bash
npm start
```

## **How to Use**
1. Open the app in your browser.
2. Use the "Add Task" button to create a task.
3. View tasks on the homepage.
4. Click "Edit"to update task details.
5. Use "Mark as Complete" or "Delete" as needed.

---

## **File Structure**
Here’s a simple overview of how the project is organized:
```
todolist/
├── routes/
│   └── taskRoutes.js    # Contains all app routes
├── views/
│   ├── add-task.ejs     # Page for adding tasks
│   ├── edit-task.ejs    # Page for editing tasks
│   ├── index.ejs        # Homepage showing all tasks
├── app.js               # Main app logic
├── models/
│   └── Task.js          # Database structure for tasks
├── .env                 # Configuration file
├── package.json         # Project dependencies
└── README.md            # Documentation
```


1. **Having Issues Connecting to MongoDB?**
   - Make sure MongoDB is running on your computer or update the `MONGO_URI` in `.env` to a valid online MongoDB Atlas connection string.



