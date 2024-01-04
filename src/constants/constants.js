let myConstClass = {}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  myConstClass = {
    BASE_URL: "http://localhost:8000"  
  }
} else {
  myConstClass = {
    BASE_URL: "https://paulrobsondev.co.uk/renewal-project-back/public"
  }
}

export default myConstClass