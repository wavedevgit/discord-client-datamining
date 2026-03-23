/** chunk id: 60907 params = (module,exports,require) **/
n.d(t, {
    A7: () => c,
    O7: () => u,
    bq: () => o
});
var r = n(64700),
    l = n(172218),
    s = n(311907),
    i = n(475743),
    a = n(531685);
let o = 2;

function u() {
    let [e, t] = r.useState(!1), n = (0, i.A)(e), s = null !== n && e !== n;
    return {
        visible: e,
        visibleChanged: s,
        targetRef: (0, l.K)(e => t(e), .6)
    }
}

function c() {
    let e = (0, s.bG)([a.A], () => a.A.isFocused()),
        t = (0, i.A)(e),
        n = null !== t && e !== t;
    return {
        focused: e,
        focusedChanged: n
    }
}