/** chunk id: 739416 params = (module,exports,require) **/
n.d(t, {
    A7: () => c,
    O7: () => o,
    bq: () => s
});
var r = n(64700),
    l = n(172218),
    a = n(311907),
    i = n(475743),
    u = n(531685);
let s = 2;

function o() {
    let [e, t] = r.useState(!1), n = (0, i.A)(e), a = null !== n && e !== n;
    return {
        visible: e,
        visibleChanged: a,
        targetRef: (0, l.K)(e => t(e), .6)
    }
}

function c() {
    let e = (0, a.bG)([u.A], () => u.A.isFocused()),
        t = (0, i.A)(e),
        n = null !== t && e !== t;
    return {
        focused: e,
        focusedChanged: n
    }
}