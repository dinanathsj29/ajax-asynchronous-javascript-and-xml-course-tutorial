<p align="center">
 <img src="_images-ajax/ajax-logo-1.png" alt="AJAX - Asynchronous JavaScript and XML" title="AJAX - Asynchronous JavaScript and XML" width="200" />
</p>

<p align="center">
 <img src="_images-ajax/ajax-logo-2.png" alt="AJAX - Asynchronous JavaScript and XML" title="AJAX - Asynchronous JavaScript and XML" />
</p>

AJAX Asynchronous JavaScript and XML
=====================

Welcome
---------------------

About the Course/Tutorial
---------------------
Hi All, I'm **`Dinanath Jayaswal, Senior UI/Web Developer and Adobe Certified Expert Professional`**, I wanna welcome you to `AJAX (Asynchronous JavaScript and XML) Crash Course for Beginners`. This course/tutorial will give you a complete understanding of how to work with AJAX methodology/concepts to fetch/exchange (send and receive data) to-from web server.

This course will cover the basics of understanding JSON and AJAX using the practical implementation in your web development project. In this tutorial will explore how AJAX works and how it is used in web applications, will also see what `Fetch` and `XHR` are and how they work to get data.


Who is this for? 
---------------------
This course is for anyone interested in quickly learning AJAX+JSON & it's power to utilize it in Web Development. 

This Course/Tutorial is ideal for:
- Anyone who wants to learn AJAX from scratch
- Programmers and Developers at any level
- Web developers / Web Designers / Application developers / Software Developers
- Mobile Developers using the HTML5 Stack
- Anyone who wants to interchange data exchange between clients and servers
- Anyone who wants to create Dynamic Applications and use data seamlessly within web applications

This course/Tutorial is for anyone and everyone, Almost everyone!

Why learn AJAX
---------------------
`AJAX stands for Asynchronous JavaScript and XML`. JSON and AJAX together provide web developers with incredible opportunities to `integrate external data seamlessly (without page refresh/reload)` into web applications. AJAX helps to create and develop an amazing `interactive dynamic applications with better user experiences` that can synchronize data between your database and your front end HTML code (`minimizes the load on your server` and makes your `applications respond quickly and without reloading the HTML` page).


Course/Tutorial achievement
---------------------

Course/Tutorial Goal
---------------------
After completing/attending this AJAX Course/Tutorial, participants should be able to: 
- Understand what and why AJAX and JSON
- Use AJAX to fetch/exchange data in web projects
- Exchange Data with JSON format and use JSON in Web development/project

Prerequisites for current course / What you need to know
---------------------
- Basic knowledge and understandings of HTML, CSS, JavaScript, jQuery and ASP/PHP
- Knowledge of using any text editor and a web browser
- Basics of Browser and Internet
- A basic understanding of Client Side vs Server Side
- Working knowledge of JSON will be an added advantage

Before starting with AJAX it is advisable to view and go through the following course/tutorials to get knowledge of: 
- **Web Design Development Technology Fundamentals** - [Web Design Development Technology Fundamentals
](https://github.com/dinanathsj29/web-design-development-fundamentals-tutorial),
  - **HTML5** - [HTML5 Essentials Tutorial](https://github.com/dinanathsj29/html5-essentials-tutorial),
    - CSS3 - [CSS3 Fundamentals Tutorial](https://github.com/dinanathsj29/css3-fundamentals-tutorial),
      - **JavaScript** [JavaScript tutorial for Beginners](https://github.com/dinanathsj29/javascript-beginners-tutorial),
        - **JSON** [JSON JavaScript Object Notation crash course](https://github.com/dinanathsj29/json-javascript-object-notation-crash-course)

Topics included/covered
=====================

1. [Introduction to AJAX](#1-introduction-to-ajax)
 - 1.1. [What is AJAX?](#11-what-is-ajax)
 - 1.2. [Why use AJAX?](#12-why-use-ajax)
 - 1.3. [Synchronous vs Asynchronous](#13-synchronous-vs-asynchronous)
 - 1.4. [AJAX History](#14-ajax-history)
 - 1.5. [AJAX Technologies](#15-ajax-technologies)
 - 1.6. [How AJAX works?](#16-how-ajax-works)
 - 1.7. [AJAX Browser support](#17-ajax-browser-support)
 - 1.8. [Where AJAX is used? AJAX examples](#18-where-ajax-is-used-ajax-examples)
 - 1.9. [Drawbacks of AJAX](#19-drawbacks-of-ajax)
 
2. [AJAX XMLHttpRequest](#2-ajax-xmlhttprequest)

3. [AJAX Reference](#3-ajax-reference)

1 Introduction to AJAX
=====================

1.1. What is AJAX?
--------------------- 

- `AJAX (Asynchronous JavaScript and XML)`
- `AJAJ (Asynchronous JavaScript and JSON)`

The process of **`sending and receiving data on the fly without page refresh/reload`** is known as AJAX

- AJAX is *not a new programming language* - actually its a methodology or concepts or special way to bring JavaScript and XML (now a days JSON) together to produce impressive results
- **AJAX is set of web technologies** - just uses a combination of:
 - A browser built-in `XMLHttpRequest object` to request data from a web server
 - `JavaScript and HTML DOM` to display or use the data
 - It is a group of inter-related technologies like **`JavaScript, DOM, XML/JSON, HTML/XHTML, CSS, XMLHttpRequest`** etc.
- AJAX allows the web page to `"talk/communicate"` with the server behind the scene (send and receive data asynchronously)
- AJAX sends, receives and process information to or from the server without page refresh/reload (does not interfere with current web page/data) 
- AJAX minimize the page refreshes, so web sites/pages/web apps show more fluid/elegant-better experience to users
- AJAX and JSON together provide the ability to JavaScript code to make HTTP requests to get data and update page content with new data
- Now a days **`JSON`** has replaced `XML` for the most part and almost all dynamic websites use/implements AJAX concepts and methodology


1.2. Why use AJAX?
--------------------- 

- **`AJAX is pretty fast`** - as it allows you to send and receive data asynchronously without reloading the web page
- **`AJAX allows web pages to be updated asynchronously`** by exchanging data with a web server behind the scenes, this simply means that it is possible to update parts of a web page, without reloading the whole page
- AJAX is used for building web-based interactive applications that process user requests immediately - **`no page reload`** to bring data into your application
- AJAX allows us to send and fetch only important/valuable part of data/information to/from the server, not the entire page so it **`makes your application interactive and faster`**
- XML is commonly used as the format for receiving server data, although **`any data exchange/interchange format can be used`** including JSON, plain text
- AJAX is a web browser technology **`independent of web server software/platform`**
- **`Data-driven`** as opposed to Page-driven methodology
- AJAX is the most viable, popular **`Rich Internet Application (RIA) technology`** so far with tremendous industry momentum and several tool kit and frameworks are emerging

1.3. Synchronous vs Asynchronous
---------------------
1.3. Understanding Synchronous vs Asynchronous
---------------------

### 1.3.1. Synchronous (Classic Web-Application Model)
A synchronous request **`blocks the client until the operation completes`** i.e. browser is unresponsive. In such a case, the JavaScript engine of the browser is blocked.

> **Example**:
 - **Mail application** - New email arrived - whole page refresh to show latest inbox and email
 - **Chat application** - On new message arrival complete chat application reloads
 - **Travel Website** - Destination place selected - request went to server -> got response -> page refresh to show fare details

### 1.3.2. Asynchronous (AJAX Web-Application Model)

An asynchronous request **`doesn’t block the client`** i.e. browser is responsive. At that time, the user can perform another operation also. In such a case, the JavaScript engine of the browser is not blocked.

> **Example**:
- While working with AJAX-based **Rich Internet Application (RIA)** we can work with a specific part of an application - send/receive data, so application is interactive and faster

| Synchronous execution | Asynchronous execution |
| ---------------------------------------------- | ---------------------------------------------- |
| When you execute something synchronously, you wait for it to finish before moving on to another task (QUEQE)| When you execute something asynchronously, you can move on to another task before it finishes (NO QUEQE) |
| Synchronous, or Synchronized means "connected", or "dependent" in some way | Asynchronous means they are totally independent and neither one must consider the other in any way, either in the initiation or in execution |
| Synchronize task are coordinated or combined with each other - one finishes than only another or next starts | Asynchronous task is not co-coordinated with other tasks (can execute in any order)|
| In the synchronous case, each statement completes before the next statement is run. In this case the program is evaluated exactly in order of the statements <br/>Be execute in order: 1 --> 2 --> 3 | In Asynchronous case, you don't stop execution, you can continue executing other code while the 'request' is being made <br/>1 or 2 or 3 anybody can execute and finish any time|
| **Example:** You are in a queue to get a **`food coupon or movie ticket`**. You cannot get one until the front of you gets one, and the same applies to the people queued behind you | **Example:** **`You are in a restaurant`** with many other people. You and Other people(everybody) can also order their food at the same time, no one has to wait for food to be cooked and served to you before they can order |
| **Example:** A `relay race` - <br/> `1st runner` runs till given distance, stops and passes the baton to the `2nd runner` and process continues till last runner | **Example:** `100 meters race or Marathon race` - any runner can run randomly and win | 



1.4. AJAX History
--------------------- 

1.4. History of AJAX
--------------------- 

| Year | Achievements |
| ---------------------------------------------- | ---------------------------------------------- |
| Mid 1990s &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Most Web sites were based on static HTML pages, each user action/interaction required a complete new page be loaded from the serve |
| 1996 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **`iframe tag`** was introduced by **`Internet Explorer`**; like the object element, it can load or fetch content asynchronously |
| 1998 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **`Microsoft Outlook Web Access team`** developed the concept behind the **`XMLHttpRequest`** scripting object |
| 1999 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **`XMLHttpRequest (XMLHTTP)`** shipped with **`Internet Explorer 5.0`** |
| By year 2002 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | The functionality of the XMLHTTP ActiveX control in IE 5 was later implemented by **`Mozilla, Safari, Opera, Internet Explorer 7`** and other browsers as the XMLHttpRequest JavaScript object |
| 2004 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **`Google Gmail`**. Google made a wide deployment of standards-compliant, cross browser Ajax with Gmail |
| 2004 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | October 2004 **`Kayak.com's`** public beta release was among the first large-scale e-commerce |
| 2005 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | **AJAX term coined in 2005 by Jesse James Garrett!** The term Ajax was publicly used on **`18 February 2005 by Jesse James Garrett`** in an article titled **`Ajax: A New Approach to Web Applications`**, based on techniques used on Google pages |
| 2005 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Google Maps |
| 2006 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | On 5 April 2006, the **`World Wide Web Consortium (W3C)`** released the first draft specification for the XMLHttpRequest object |
| 2016 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | On 6 October 2016, the latest draft of the XMLHttpRequest object was published |

- AJAX concepts are first implemented in the year 2004, a term coined publicly on **`18 February 2005 by Jesse James Garrett`** in an article titled **`Ajax: A New Approach to Web Applications`**


1.5. AJAX Technologies
--------------------- 

1.5. Technologies in AJAX
--------------------- 

The term **`AJAX`** has come to represent a broad group/set of Web Technologies that can be used to implement a Web application that/which communicates with a server in the background (behind the scenes), without interfering with the current state of the page. 

As describe earlier AJAX cannot work independently. AJAX is not a technology but group/set of inter-related technologies used in combination to create interactive webpages.

In the article titled **`Ajax: A New Approach to Web Applications`** by **`Jesse James Garrett`** that coined the term AJAX, explained that the following technologies are incorporated:

- HTML/XHTML and CSS *(for presentation)*
- The Document Object Model (DOM) *(for a dynamic display of and interaction with data)*
- XML or JSON *(for the interchange of data, and XSLT for its manipulation)*
- The XMLHttpRequest object *(for asynchronous communication)*
- JavaScript *(to bring these technologies together)*

### 1.5.1. HTML/XHTML and CSS
 - These technologies are used for displaying content (Text/Data - Text Layout Model) and style (Design/Presentation - Box Layout Model) 
 - It is mainly used for presentation layer

### 1.5.2. The Document Object Model (DOM)
 - API for accessing and manipulating structured documents
 - It is used for dynamic display and interaction with data
 - Represents the structure of XML and HTML documents
 
### 1.5.3. XML or JSON
 - Lightweight and popular data exchange/interchange format on the internet today!
 - For carrying data to and from server
 - JSON (Javascript Object Notation) is like XML but short, better, faster, lightweight, popular than XML

### 1.5.4. The XMLHttpRequest object
 - JavaScript object that performs asynchronous interaction with the server
 - For asynchronous communication between client and server
 - **`Sends data from the client in the background -> Receives the data from the server -> Updates the webpage without reloading it`**

### 1.5.5. JavaScript
 - It is used to bring above technologies together (Glue for the whole AJAX operation)
 - Loosely typed scripting language, it is used mainly for client-side logic/validation

1.6. How AJAX works?
--------------------- 

AJAX communicates with the web server using XMLHttpRequest object. Let's try to understand the flow and process of AJAX or how AJAX works (XMLHttp --> Request <-- Response mechanism) as displayed in the image below:

<p>
 <figure>
 &nbsp;&nbsp;&nbsp; <img src="_images-ajax/1.6.1-how-ajax-works.png" alt="AJAX - How AJAX works - flow diagram" title="AJAX - How AJAX works - flow diagram" width="600" border="2" />
 <figcaption>&nbsp;&nbsp;&nbsp; Image - AJAX - How AJAX works - flow diagram</figcaption>
 </figure>
</p>

<p>
 <figure>
 &nbsp;&nbsp;&nbsp; <img src="_images-ajax/1.6.2-how-ajax-works.gif" alt="AJAX - How AJAX works - flow diagram" title="AJAX - How AJAX works - flow diagram" width="600" border="2" />
 <figcaption>&nbsp;&nbsp;&nbsp; Image - AJAX - How AJAX works - flow diagram</figcaption>
 </figure>
</p>

| Steps - Process | 
| ---------------------------------------------- | 
| 1. **`Client Side`** - An event occurs in a web page (a button is clicked) | 
| 2. An XMLHttpRequest object is created by JavaScript | 
| 3. The XMLHttpRequest object sends a request to a web server | 
| 4. **`Server Side`** - The server processes the XMLHttpRequest request |
| 5. The server sends a response back to the web page |
| 6. **`Client Side`** - The response is read by JavaScript |
| 7. Proper action/activity (like page update and showing the latest data) is performed by JavaScript |


1.7. AJAX Browser support
--------------------- 

All the available browser version cannot support AJAX. AJAX (XMLHttpRequest) is supported well in latest version of all popular browser:

<p>
 <figure>
 &nbsp;&nbsp;&nbsp; <img src="_images-ajax/1.7.1-ajax-browser-support-2019-sep.png" alt="AJAX Browser support" title="AJAX Browser support" width="1000" border="2" />
 <figcaption>&nbsp;&nbsp;&nbsp; Image - AJAX Browser support - September 2019</figcaption>
 </figure>
</p>

> **NOTE**:
Browser does not support AJAX, simply means that the `browser does not support the creation of Javascript object – XMLHttpRequest object`



1.8. Where AJAX is used? AJAX examples
--------------------- 

Many famous and widely used web applications use AJAX technology, like:
- Google Gmail, Google Search, Google Maps
- Facebook
- Twitter
- Travel Sites
- Youtube
- Online Songs/Video players/websites
- Chat applications


1.9. Drawbacks of AJAX
--------------------- 

- Any browser does not support JavaScript or XMLHttpRequest, or has this functionality disabled, will not be able to properly use AJAX-based/dependent pages
- Some Web applications that use AJAX are built in a way that cannot be read by screen-reading technologies, such as JAWS (In such a case the WAI-ARIA standards provide a way to provide hints)
- Screen readers may still not be able to properly read the dynamically generated content
- The asynchronous callback-style of programming required can lead to complex code that is hard to maintain, to debug and to test


2 AJAX XMLHttpRequest
=====================

3 AJAX Reference
=====================
