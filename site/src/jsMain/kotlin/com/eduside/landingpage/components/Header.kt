package com.eduside.landingpage.components

import androidx.compose.runtime.Composable
import com.eduside.landingpage.model.SectionModel
import com.eduside.landingpage.utils.Constant.FONT_FAMILIY
import com.eduside.landingpage.utils.Res
import com.eduside.landingpage.utils.Theme
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.navigation.Link
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

@Composable
fun Header(){
    Row(
        modifier = Modifier
            .fillMaxWidth(80.percent)
            .padding(top = 50.px),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ){
        LeftSide()
        RightSide()
    }
}

@Composable
fun LeftSide(){
    Row {
        Image(
            src = Res.Image.logo,
            desc = "Logo Image"
        )
    }
}

@Composable
fun RightSide(){
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .borderRadius(r = 50.px)
            .backgroundColor(Theme.LighterGray.rgb)
            .padding(all = 20.px),
        horizontalArrangement = Arrangement.End
    ){
        SectionModel.values().take(6).forEach { section ->
            Link(
               modifier = Modifier
                   .padding(right = 30.px)
                   .fontFamily(FONT_FAMILIY)
                   .fontSize(18.px)
                   .fontWeight(FontWeight.Normal),
                path = section.path,
                text = section.tittle,


            )
        }
    }
}