# Rail Madad AI

Rail Madad AI is an interactive complaint system designed to handle complaints using multimodal inputs and display relevant statistics. This system allows users to submit complaints through various input methods and provides a user-friendly interface to track and manage complaints.

## Features

- **Multimodal Inputs**: Users can submit complaints using text, audio, and image inputs.
- **Interactive Interface**: A step-by-step form guides users through the complaint submission process.
- **Real-time Processing**: Complaints are processed in real-time with visual feedback.
- **Statistics Display**: The system displays statistics related to complaints for better insights.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/sathvik21s21rao/railmadad.git
    ```
2. Navigate to the project directory:
    ```sh
    cd railmadad
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to access the Rail Madad AI interface.

## Components

### InteractiveComplaintForm

The main component for submitting complaints. It includes:

- **Step-by-Step Form**: Guides users through the complaint submission process.
- **Loader and Icons**: Provides visual feedback during processing.
- **Complaint ID Display**: Shows the complaint ID upon successful submission.


## File Structure

```
Admin/
    admin.tsx
readme.md
User/
    user.tsx

## Sample UI

### User Side

![Complaint Form](https://raw.githubusercontent.com/Sathvik21S21Rao/RailMadad/main/Images/image1.jpg)
![Complaint Form with input](https://raw.githubusercontent.com/Sathvik21S21Rao/RailMadad/main/Images/image2.jpg)

### Admin Side
![Complaints list](https://raw.githubusercontent.com/Sathvik21S21Rao/RailMadad/main/Images/image5.jpg)
![Data Visualisation of Complaints](https://raw.githubusercontent.com/Sathvik21S21Rao/RailMadad/main/Images/image7.jpg)


