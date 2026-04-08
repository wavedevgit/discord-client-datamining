/** chunk id: 526900 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    r = n(158954),
    a = n(793943),
    l = n(966871),
    s = n(985018);

function o() {
    let {
        activePanel: e
    } = (0, a.fy)(), t = e === a.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, i.jsx)(l.A, {
        onClick: () => {
            t ? (0, a.Jp)() : (0, a.nf)(a.HP.APPLICATION_TEST_MODE_DEBUG)
        },
        icon: r.PXj,
        tooltip: s.intl.string(s.t["9Isknj"]),
        selected: t
    })
}