/** chunk id: 87746 params = (module,exports,require) **/
t.d(n, {
    Q: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    d = t(544231),
    a = t(74114),
    s = t(287809),
    u = t(985018);

function c(e) {
    let n = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, a.l)(e.id);
    return n?.isStaff() === !0 && e.isDM() && null == t ? (0, i.jsx)(l.Drp, {
        id: "mark-as-stranger-danger",
        label: u.intl.string(u.t.CgWmmT),
        action: () => (0, d.Ju)(e.id)
    }) : null
}