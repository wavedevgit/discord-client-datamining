/** chunk id: 526900 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    l = n(158954),
    r = n(793943),
    a = n(189252),
    s = n(985018);

function o() {
    let {
        activePanel: e
    } = (0, r.fy)(), t = e === r.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, i.jsx)(a.A, {
        onClick: () => {
            t ? (0, r.Jp)() : (0, r.nf)(r.HP.APPLICATION_TEST_MODE_DEBUG)
        },
        icon: l.PXj,
        tooltip: s.intl.string(s.t["9Isknj"]),
        selected: t
    })
}