# AdBlock Detect <small>(adBDetect)</small>

## Calling Javascript file
```html
<script type="text/javascript" src="https://muhbayu.github.io/adBDetect/js/adbdetect.packed.js"></script>
```


## Setup
Normal <i>(default option)</i>
```javascript
adBDetect().start();
```
With options
```javascript
var adBD = adBDetect().setup({
    debug:true, // (optional)
    setPage:'ad-detect.html',
    wait:1000, // 1000 = 1 sec (default: 500)
});
adBD.start();
```
OR
```javascript
adBDetect().setup({
    debug:true, // (optional)
    setPage:'ad-detect.html',
    wait:1000, // 1000 = 1 sec (default: 500)
}).start();
```


## Custom check if AdBlock Detected
```javascript
// value: boolean
adBDetect().isDetected();
```
Example for custom notification
```javascript
var adBD = adBDetect();
if(adBD.isDetected()) {
  alert('Please disable your AdBlock before access this page!');
}
```

## Instance
Calling javascript file<br/>
```html
<script type="text/javascript" src="https://muhbayu.github.io/adBDetect/js/adbdetect.packed.js"></script>
```
After that
```javascript
var adBD = adBDetect().setup({
    debug:true,
    setPage:'ad-detect.html',
    wait:1000, // 1000 = 1 sec (default: 500)
});
adBD.start();
if(adBD.isDetected()) {
    //custom alert
}
```
