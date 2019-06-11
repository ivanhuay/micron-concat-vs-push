# Micron benchmark Array.concat vs Array.push

This is a benchmark between `concat` and `push` method.

## Motivation
Analyze possible performance issues using these methods.


## Results:
Concat is the faster way to concatenate 2 arrays.

`For` loop and `forEach` methods with push are 3x times more slow than `concat`.

[view results HERE]()
![Alt image](https://github.com/ivanhuay/micron-concat-vs-push/blob/master/img/img.png?raw=true)
## run the test

```
git clone https://github.com/ivanhuay/micron-mongoose-update-vs-save.git

cd micron-mongoose-update-vs-save

npm i

npm run test
```

after running that the results should be on the docs folder.
