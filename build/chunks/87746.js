/** chunk id: 87746 params = (module,exports,require) **/
i.d(e, {
    Q: () => c
});
var t = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(544231),
    d = i(74114),
    s = i(287809),
    u = i(985018);

function c(n) {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        i = (0, d.l)(n.id);
    return e?.isStaff() === !0 && n.isDM() && null == i ? (0, t.jsx)(l.Drp, {
        id: "mark-as-stranger-danger",
        label: u.intl.string(u.t.CgWmmT),
        action: () => (0, a.Ju)(n.id)
    }) : null
}