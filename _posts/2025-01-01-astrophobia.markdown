---
layout: page
title:  "Astrophobia"
date:   2025-02-20 13:21:00 +0100
categories: projects
desc: Für unser Senior Design Projekt haben mein Team aus sechs Personen und ich uns entschieden, einen Online-Kleidungsfachhandel zu entwickeln. Dies umfasste das Design, die Entwicklung und den Launch der Website sowie das Design der präsentierten Kleidungsstücke. In diesem Projekt übernahm ich die Rolle des Website-Managements, wo ich Aufgaben delegierte und die Arbeit von 2-3 anderen Teammitgliedern überwachte.
img: "assets/images/SeniorDesign/Astrophobia.png"
img1: "../../../../assets/images/SeniorDesign/sitemap.png"
img2: "../../../../assets/images/SeniorDesign/designguidelines.png"
img3: "../../../../assets/images/SeniorDesign/prototype.png"
img4: "../../../../assets/images/SeniorDesign/shopify-diagram.png"
img5: "../../../../assets/images/SeniorDesign/Astrophobia.png"
---
# Senior Design Project
### Projektübersicht

![Astrophobia Logo]( {{ page.img5 }} "The Astrophobia Logo")


For our senior design project me and my 5 other group members decided to create a clothing web store. This would include desiging, developing and launching the website. And also designing the clothes that would be presented. My role in this project was the management of the website, where I delegated tasks and check work of 2-3 other team members.

### Verwendete Technologien
* HTML
* CSS
* JavaScript
* SQL
* Figma


[> Link to GitHub](https://github.com/Leaxlang/astrophobia)

[> Link to Figma Prototype](https://www.figma.com/proto/6vJ6VyqQHWaZ02j3sFybGx/Untitled?type=design&node-id=197-1658&t=FrpsZ0Jc143vjDPd-0&scaling=min-zoom&page-id=197%3A1657)


Für die Website haben wir zunächst einen Diagrammbaum mit allen einzelnen Seiten erstellt, die wir benötigen würden. Dies half uns, mit dem Aufbau der Wireframes zu beginnen. Es ermöglichte uns zu sehen, welche Schaltflächen, Bilder, Texte usw. wir berücksichtigen mussten.  
 ![Bild mit Diagramm der Website-Struktur]( {{ page.img1 }} "Diagramm der Website-Struktur")



Nachdem wir diese Zeichnungen fertiggestellt hatten, waren wir bereit, mit dem Designprozess zu beginnen, und wir begannen damit, eine Farbpalette zu erstellen, die auf dem bereits vorhandenen Logodesign basierte. Um der Website einen gewissen Charakter und Einzigartigkeit zu verleihen, haben wir uns entschieden, das Design ein wenig zu "gamifizieren", damit es sich wie eine Mischung aus einem Bekleidungsgeschäft und einem Videospielmenü anfühlt. Ein Teil des Designprozesses bestand darin, Designrichtlinien zu erstellen. Wir legten fest, welche Farbpalette wir verwenden wollten, welche Schriftart und in welchem Größenverhältnis und welches Button-Design es gab.  
![Bild mit den Gestaltungsrichtlinien]( {{ page.img2 }} "Die Gestaltungsrichtlinien")




Wir haben einen Prototyp der Website erstellt, um eine bessere Vorstellung davon zu vermitteln, wie die tatsächliche Website aussehen könnte. Zu diesem Zweck haben wir die Figma verwendet, welches es uns ermöglichte, die Schaltflächen anklickbar zu machen und andere Elemente so aussehen zu lassen, als ob sie funktionierten, obwohl es sich zu diesem Zeitpunkt nur um Bilder handelte. Diese Technik ermöglichte es uns auch, einige Designfehler zu erkennen, die wir verursacht hatten. Unser Hauptproblem bestand darin, das Design der verschiedenen Webseiten kohärent zu gestalten. Gerade am Anfang war es offensichtlich, dass die Designs von mehreren Personen mit unterschiedlichen Visionen erstellt wurden. Auch in den späteren Schritten der Designphase haben wir gemerkt, wie viele Fehler wir früher gemacht haben. Die meisten Fehler wurden während des Wireframe-Prozesses gemacht, bei dem wir eine große Anzahl von Funktionen vergessen haben, die offensichtlich hätten eingebaut werden müssen, wie z. B. die Größenauswahl für die Kleidung.
 

 ![Bild mit Protoype]( {{ page.img3 }} "Ein Blick darauf, wie der Prototyp aussah und wie die Schaltflächen die Seiten miteinander verbanden")
 <img src="{{site.baseurl | prepend: site.url}}assets/images/SeniorDesign/prototype.png" alt="to img tag" />


Wir haben uns für Headless E-Commerce für unser Projekt entschieden, da es sich derzeit um einen Markt mit einem Volumen von 1,65 Milliarden US-Dollar (2021) handelt, von dem erwartet wird, dass er schnell wachsen wird. Headless E-Commerce trennte die Frontend-Schicht vom Backend. So hatten wir die Freiheit, unser Website-Design so zu gestalten und zu präsentieren, wie wir es wollten, und haben die bereits vorhandene Shopify-Backend-Lösung wiederverwendet. Diese Technologie ermöglichte es uns, flexibel zu sein, aber dennoch die Kontrolle zu haben, eine sichere Website zu haben und unser Projekt in Zukunft zu erweitern. 
Der Code, den wir über Visual Studio Code geschrieben haben, war mit einem GitHub-Repository verbunden, auf das Shopify zugreifen und die Daten verwenden konnte, die wir auf der Shopify-Admin-Website eingegeben haben, um die Informationen zu verbinden. 
![Ein Diagram der Struktur einer Shopify-Headless Website]( {{ page.img4 }} "Die Struktur einer Shopify-Headless Website") Quelle: https://shopify.dev/docs/custom-storefronts/getting-started



Wir begannen mit der von Shopify bereitgestellten Vorlage zu programmieren und studierten die Shopify Developer Documents, da dies eine neue Technologie für uns war. Ein Großteil unserer Arbeit konzentrierte sich darauf, das richtige Design zu finden und unsere Website wie den Prototyp aussehen zu lassen, den wir in Figma erstellt haben, dies wurde hauptsächlich mit der Styling-Sprache CSS (Cascading Style Sheet) gemacht. Wir haben auch einige Funktionen geändert, wie z. B. den Warenkorb zu einer Vollbildseite anstelle einer Seitenleiste zu machen. Oder erstellen Sie ein Homepage-Slider-Karussell anstelle einer einfachen Karte. Nachdem wir mit unserem Code fertig waren, testeten wir alle unsere Funktionen und wie die Website auf verschiedene Browser und Geräte reagieren würde. Entsprechend diesen Beobachtungen haben wir Anpassungen vorgenommen. 
