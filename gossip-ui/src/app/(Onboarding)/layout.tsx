import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Image from "next/image"

export default function AuthLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#F5F5F5",
            }}
        >
            <Card
                sx={{
                    width: "650px",
                    padding: "2rem",
                    borderRadius: "32px",
                    boxShadow: "1"
                }}
            >
                <Stack
                    direction={"column"}
                    gap={"35px"}
                >
                    <Image
                        src= '../logo.svg'
                        alt="logo"
                        width={100}
                        height={100}
                        unoptimized
                        style={{
                            margin: "auto"
                        }}
                    />
                    {children}
                </Stack>
            </Card>
        </Box>
    )
}