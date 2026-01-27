/** Chunk was on web.js **/
/** chunk id: 843959, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(355418);
let i = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"),
    a = 1,
    o = 2;
class s extends r.c {
    innerPattern() {
        return i
    }
    innerExtract(e, t) {
        let n = parseInt(t[o]),
            r = parseInt(t[a]);
        return e.createParsingComponents().imply("day", 1).assign("month", r).assign("year", n)
    }
}