const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/articles", (req, res) => {
    res.render("comingsoon")
})
app.get("/sciencefair", (req, res) => {
    res.render("science")
})
app.get("/tutoring", (req, res) => {
    res.render("comingsoon")
})
app.get("/articles/prevention", (req, res) => {
    res.render("prevention")
})
app.get("/articles/rumors", (req, res) => {
    res.render("rumors")
})
app.get("/articles/bigdata", (req, res) => {
    res.render("bigdata")
})
app.get("/articles/history", (req, res) => {
    res.render("history")
})
app.get("/articles/end", (req, res) => {
    res.render("end")
})
app.get("/login", (req, res) => {
    res.send("Why are you at this endpoint :)")
})


app.listen(process.env.PORT || 5000)