package com.eduside.landingpage.model

enum class SectionModel(
    val id: String,
    val tittle: String,
    val subtittle: String,
    val path: String
) {
    Home(
        id = "home",
        tittle = "Home",
        subtittle = "",
        path = "#home"
    ),
    About(
        id = "about",
        tittle = "About",
        subtittle = "Why hire me?",
        path = "#about"),
    Service(
        id = "service",
        tittle = "Service",
        subtittle = "Iam Good at",
        path = "#service"),
    Portofolio(
        id = "portofolio",
        tittle = "Portofolio",
        subtittle = "My Work",
        path = "#portofolio"),
    Experience(
        id = "experience",
        tittle = "Experience",
        subtittle = "Work Experience",
        path = "#experience"),
    Contact(
        id = "contact",
        tittle = "Contact",
        subtittle = "Get In Touch",
        path = "#contact"),
    Testimonial(
        id = "testimonial",
        tittle = "Testimonial",
        subtittle = "Happy Costumer",
        path = "#testimonial"),
    Achievement(
        id = "achievement",
        tittle = "Achievement",
        subtittle = "Personal Achievement",
        path = "#achievement"),
}
