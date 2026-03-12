/** chunk id: 884569 params = (module,exports,require) **/
t.d(e, {
    B: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    d = t(367130),
    a = t(486227),
    s = t(287809),
    u = t(985018);

function c(n) {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, a.E)(n.id);
    return e?.isStaff() === !0 && n.isDM() && null == t ? (0, i.jsx)(l.Drp, {
        id: "mark-as-likely-ato",
        label: u.intl.string(u.t.AWKKgc),
        action: () => (0, d.a)(n.id)
    }) : null
}