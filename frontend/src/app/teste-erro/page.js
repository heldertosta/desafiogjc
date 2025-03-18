"use client";

import { useEffect, useState } from "react";

export default function TestErrorPage() {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {        
        fetch("http://localhost:8080/teste-erro", {
            method: "GET",
        }).then((response) => {
            if (!response.ok) {
                setHasError(true);
            }
        });
    }, []);

    if (hasError) {
        throw new Error("Erro 500 detectado");
    }

    return null; 
}