/** chunk id: 454020, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(147426),
    i = n(374372),
    a = n(972409),
    o = n(632434);
class s extends a.w {
    innerPatternString(e) {
        return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${r.Pl})`
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.E9)(t[3]);
        switch (n) {
            case "останні":
            case "минулі":
            case "-":
                a = (0, o.x4)(a)
        }
        return i.BP.createRelativeFromReference(e.reference, a)
    }
}