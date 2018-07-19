# stanza.js

A javascript library that helps you apply animation on every single letter or character present inside of a container.
Comes in handy when you wish to draw attention of the user.

---

### Usage

Download or get the raw master.js file which contains the entire code. Include it in you web page.

```html
<script src="master.js"> </script>
```

#### What you need to do
1. Initialise Stanza.js

~~~js
var stanza = new Stanza();
~~~

2. Target the element which contains the text to be animated.

```js
var element = $(".animatedTextContainer");
//you can use jquery or javascript
```

3.Create animation settings object variable and pass it as a second argument in the config function
```js
var animationSettings = {
  "animationName":"hinge",
	"background":"none",
	"time":100

}
```

4.Pass the target element and animationSettings to the config function called upon the stanza variable.

```js
stanza.config(element, animationSettings);
```

# Dependecies
The library uses jquery as a dependency so do not foreget to include that as well.



