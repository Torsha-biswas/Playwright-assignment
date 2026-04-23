Playwright Automation Project (UI + API)
Overview

This project is built using Playwright for automating UI and API testing.
It covers basic real-time scenarios like login, book search, and API user operations.

The framework is written in JavaScript and follows a simple Page Object Model (POM) structure for UI tests.

UI Automation (Book Store)

Website used: https://demoqa.com

What is covered:
Login to application
Validate user profile
Navigate to Book Store
Search for a book
Extract book details (title, author, publisher)
Logout functionality
Approach:
Page Object Model is used
Separate classes for Login, Profile, and Book Store pages
Reusable methods for better structure
API Automation (ReqRes)
Framework:
Page Object Model (POM)
Separate page classes for better structure
Reusable methods for actions
Browser Support:
Chrome ✔
Firefox ✔
WebKit ⚠ (skipped due to application instability)

API used: https://reqres.in/api

What is covered:
Create user (POST request)
Get user details (GET request)
Update user details (PUT request)
Validations:
Status code checks
Response body validation
Checking updated values

Note:

ReqRes is a demo API, so responses may not always be consistent. Test cases are written in a flexible way to handle this.
