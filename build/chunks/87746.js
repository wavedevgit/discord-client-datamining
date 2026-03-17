/** chunk id: 87746 params = (module,exports,require) **/
t.d(e, {
    Q: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(544231),
    d = t(74114),
    s = t(287809),
    u = t(985018);

function c(n) {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, d.l)(n.id);
    return e?.isStaff() === !0 && n.isDM() && null == t ? (0, i.jsx)(l.Drp, {
        id: "mark-as-stranger-danger",
        label: u.intl.string(u.t.CgWmmT),
        action: () => (0, a.Ju)(n.id)
    }) : null
}