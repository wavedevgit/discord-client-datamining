/** Chunk was on web.js **/
/** chunk id: 38078, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(147426),
    i = n(374372),
    a = n(355418);
let o = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${r.Pl})${r.pW.rightBoundary}`;
class s extends a.c {
    patternLeftBoundary() {
        return r.pW.leftBoundary
    }
    innerPattern(e) {
        return e.option.forwardDate ? RegExp(o, "i") : RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${o}`, r.pW.flags)
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]);
        return i.BP.createRelativeFromReference(e.reference, n)
    }
}