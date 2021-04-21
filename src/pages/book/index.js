import React from "react";
import BookForm from "./components/BookForm";

export default function BookPage() {

    return (
        <div className="d-flex flex-fill justify-content-center pt-md-3 py-2 bg-dark text-white user-select-none">
            <div className="container py-4">
                <h1 className="display-5 text-center">Booking Information</h1>
                <BookForm />
            </div>
        </div >
    );
}