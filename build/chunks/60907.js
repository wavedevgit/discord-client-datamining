/** chunk id: 60907 params = (module,exports,require) **/
n.d(t, {
    A7: () => c,
    O7: () => u,
    bq: () => o
});
var r = n(64700),
    l = n(172218),
    i = n(311907),
    a = n(475743),
    s = n(531685);
let o = 2;

function u() {
    let [e, t] = r.useState(!1), n = (0, a.A)(e), i = null !== n && e !== n;
    return {
        visible: e,
        visibleChanged: i,
        targetRef: (0, l.K)(e => t(e), .6)
    }
}

function c() {
    let e = (0, i.bG)([s.A], () => s.A.isFocused()),
        t = (0, a.A)(e),
        n = null !== t && e !== t;
    return {
        focused: e,
        focusedChanged: n
    }
}