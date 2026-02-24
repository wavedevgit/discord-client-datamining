/** chunk id: 60907, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A7: () => c,
    O7: () => u,
    bq: () => o
});
var r = n(64700),
    i = n(172218),
    s = n(311907),
    l = n(475743),
    a = n(531685);
let o = 2;

function u() {
    let [e, t] = r.useState(!1), n = (0, l.A)(e), s = null !== n && e !== n;
    return {
        visible: e,
        visibleChanged: s,
        targetRef: (0, i.K)(e => t(e), .6)
    }
}

function c() {
    let e = (0, s.bG)([a.A], () => a.A.isFocused()),
        t = (0, l.A)(e),
        n = null !== t && e !== t;
    return {
        focused: e,
        focusedChanged: n
    }
}