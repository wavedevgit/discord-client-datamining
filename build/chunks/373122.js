/** Chunk was on web.js **/
/** chunk id: 373122, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(989479),
    i = n(374372),
    a = n(241738),
    o = n(632434);
class s extends a.w {
    innerPatternString(e) {
        return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${r.Pl})`
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.E9)(t[2]);
        switch (n) {
            case "последние":
            case "прошлые":
            case "-":
                a = (0, o.x4)(a)
        }
        return i.BP.createRelativeFromReference(e.reference, a)
    }
}