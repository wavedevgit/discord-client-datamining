/** chunk id: 881020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => i
}), n(896048);
var r = n(661191),
    l = n(513272);

function i(e, t) {
    var n;
    let i = null != (n = l.A.summaries(e)) ? n : [],
        s = 0;
    for (let e of i) r.default.compare(e.endId, t) > 0 && (s += 1);
    return s
}