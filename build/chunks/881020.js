/** chunk id: 881020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => i
}), n(896048);
var l = n(661191),
    r = n(513272);

function i(e, t) {
    var n;
    let i = null != (n = r.A.summaries(e)) ? n : [],
        a = 0;
    for (let e of i) l.default.compare(e.endId, t) > 0 && (a += 1);
    return a
}