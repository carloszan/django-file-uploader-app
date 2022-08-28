File uploader powered by NextJs

###

This project is running on cloud. [Click here to check it out.](https://propylon.czar.dev)

The login auth is:

```
email: admin@admin.com
password: 123456
```

### How to run locally

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Functional

- Stores files of any type and name
- Stores files at any URL
- Does not allow interaction by non-authenticated users
- Does not allow a user to access files submitted by another user
- Allows users to store multiple revisions of the same file at the same URL
- Allows users to fetch any revision of any file

### Non-functional

- Demonstrate knowledge of best-practices in relation to unit testing
- Clear documentation detailing how to build and run the frontend and backend

### Example

A user may submit the file "review.pdf" to the application, specifying "/documents/reviews/review.pdf" as the desired URL. The user later submits a new version of the file at the same URL.
The user can now retrieve the latest version of the file by accessing the document URL ("/documents/reviews/review.pdf"). The original version of the file can be accessed at the URL ("/documents/reviews/review.pdf?revision=0").

### Todo

- [ ] Upload files with the same URL
- [ ] Allow users to fetch any revision of any file

### In Progress

### Done ✓

- [+] Upload files
- [x] List of uploaded files
- [x] Authorize pages
- [x] Log user in
- [x] Upload file input
- [x] Login page
