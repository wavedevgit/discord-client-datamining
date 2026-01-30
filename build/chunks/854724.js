/** chunk id: 854724, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(989479),
    i = n(374372),
    a = n(355418);
let o = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${r.Pl})${r.pW.rightBoundary}`;
class s extends a.c {
    patternLeftBoundary() {
        return r.pW.leftBoundary
    }
    innerPattern(e) {
        return e.option.forwardDate ? new RegExp(o, r.pW.flags) : RegExp(`(?:в течение|в течении)\\s*${o}`, r.pW.flags)
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]);
        return i.BP.createRelativeFromReference(e.reference, n)
    }
}