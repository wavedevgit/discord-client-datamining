/** chunk id: 87746 params = (module,exports,require) **/
t.d(n, {
    Q: () => o
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(544231),
    d = t(74114),
    s = t(287809),
    u = t(985018);

function o(e) {
    let n = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, d.l)(e.id);
    return n?.isStaff() === !0 && e.isDM() && null == t ? (0, r.jsx)(l.Drp, {
        id: "mark-as-stranger-danger",
        label: u.intl.string(u.t.CgWmmT),
        action: () => (0, a.Ju)(e.id)
    }) : null
}