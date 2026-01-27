/** Chunk was on web.js **/
/** chunk id: 740789, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(530560),
    i = n(374372),
    a = n(615339),
    o = n(632434);

function s(e) {
    return null != e.text.match(/\s+(prima|dal)$/i)
}

function l(e) {
    return null != e.text.match(/\s+(dopo|dal|fino)$/i)
}
class c extends r.X {
    patternBetween() {
        return /^\s*$/i
    }
    shouldMergeResults(e, t, n) {
        return !!e.match(this.patternBetween()) && (!!s(t) || !!l(t)) && !!n.start.get("day") && !!n.start.get("month") && !!n.start.get("year")
    }
    mergeResults(e, t, n) {
        let r = (0, a.E9)(t.text);
        s(t) && (r = (0, o.x4)(r));
        let l = i.BP.createRelativeFromReference(i.b5.fromDate(n.start.date()), r);
        return new i.s4(n.reference, t.index, `${t.text}${e}${n.text}`, l)
    }
}