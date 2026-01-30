/** chunk id: 507833, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(530560),
    i = n(374372),
    a = n(360345),
    o = n(632434);

function s(e) {
    return null != e.text.match(/^[+-]/i)
}

function l(e) {
    return null != e.text.match(/^-/i)
}
class c extends r.X {
    shouldMergeResults(e, t, n) {
        return !!e.match(/^\s*$/i) && (s(n) || l(n))
    }
    mergeResults(e, t, n, r) {
        let s = (0, a.E9)(n.text);
        l(n) && (s = (0, o.x4)(s));
        let c = i.BP.createRelativeFromReference(i.b5.fromDate(t.start.date()), s);
        return new i.s4(t.reference, t.index, `${t.text}${e}${n.text}`, c)
    }
}