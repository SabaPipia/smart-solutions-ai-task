## Tech Stack
<ul>
    <li>Next.js</li>
    <li>Tailwind CSS</li>
    <li>shadcn/ui</li>
    <li>TypeScript</li>
    <li>React-Redux (Thunk) and Context API</li>
</ul>

## Getting Started

```bash
git clone git@github.com:SabaPipia/smart-solutions-ai-task.git
cd smart-solutions-ai-task
npm install
npm run dev
```
## The main feature of this application is the user table, which displays user information including name, email, city, and actions.
<ul>
    <li>Name: Clicking on a user's name row will redirect you to the user details page.</li>
    <li>Edit: Clicking the "Edit" button for a user will open a modal where you can edit their details.</li>
    <li>Delete: Clicking the "Delete" button for a user will open a modal asking for confirmation before deleting the user.</li>
    <li>Pagination: The user table is divided into multiple pages, with each page displaying a maximum of 10 users. You can easily switch between pages using the provided pagination controls, allowing you to navigate through the entire list of users           efficiently.</li>
</ul>

## User Details Page
<ul>
    <li>Name</li>
    <li>Email</li>
    <li>City</li>
    <li>Address</li>
    <li>Back Button: Clicking the "back" button will return you to the users table</li>
</ul>


## Actions

### Edit User
<ul>
    <li>To edit a user, click the "Edit" button in the user table</li>
    <li>A modal will open with the user's current details.</li>
    <li>Modify the user's information as needed and click the "Confirm" button.</li>
    <li>You will receive a success or failure alert based on the result.</li>
</ul>
### Delete User:
<ul>
    <li>To delete a user, click the "Delete" button in the user table.</li>
    <li>A modal will open, asking for confirmation.</li>
    <li>Confirm the action to delete the user or cancel to abort.</li>
    <li>You will receive a success or failure alert based on the result.</li>
</ul>

## Modals
### Edit User Modal:
<ul>
    <li>The edit user modal allows you to update a user's information.</li>
    <li>It includes a backdrop that can be closed by clicking outside the modal or the "Cancel" button.</li>
</ul>

### Delete User Modal:
<ul>
      <li>The delete user modal asks for confirmation before deleting a user.</li>
      <li>It includes a backdrop that can be closed by clicking outside the modal or the "Cancel" button.</li>
</ul>

## Pagination
<ul>
    <li>The user table implements pagination, displaying 10 users per page.</li>
    <li>You can navigate between pages using the pagination controls at the bottom of the table.</li>
</ul>

## Regex
Regex is used for input validation, ensuring data accuracy and user-friendly feedback.

