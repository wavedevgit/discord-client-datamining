/** chunk id: 87746 params = (module,exports,require) **/
e.d(t, {
    Q: () => o
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(544231),
    d = e(74114),
    s = e(287809),
    u = e(985018);

function o(n) {
    let t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        e = (0, d.l)(n.id);
    return t?.isStaff() === !0 && n.isDM() && null == e ? (0, i.jsx)(l.Drp, {
        id: "mark-as-stranger-danger",
        label: u.intl.string(u.t.CgWmmT),
        action: () => (0, a.Ju)(n.id)
    }) : null
}