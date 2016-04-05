# JS Warmups

## `myMax()`

```javascript
function myMax(ary) {
  var max = ary[0];
  ary.forEach(function(el) {
    if (el > max) { max = el; }
  });

  return max;
}
```

## `vowelCount()`

```javascript
function vowelCount(str) {
  var count = 0,
      vowels = ["a", "e", "i", "o", "u", "y"];
  str.split("").forEach(function(ltr) {
    if (vowels.indexOf(ltr) >= 0) { count++; }
  });

  return count;
}
```

## `reverse()`

```javascript
function reverse(str) {
  new_str = "";
  str.split("").forEach(function(ltr) {
    new_str = ltr + new_str;
  });

  return new_str;
}
```
