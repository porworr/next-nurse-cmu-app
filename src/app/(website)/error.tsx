'use client' // Error components must be Client Components
 
import { Alert, Button, Container, Typography } from '@mui/material'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Container sx={{pt: 2}} maxWidth="md">
      <Typography sx={{mb: 2}}>Something went wrong!</Typography>
      <Alert 
        sx={{mb: 2}} 
        severity="error" 
        color="error"
        >
            {error.message}
    </Alert>
      <Button
        variant='outlined'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Container>
  )
}