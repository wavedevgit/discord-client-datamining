/** chunk id: 884569 params = (module,exports,require) **/
t.d(n, {
    B: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(367130),
    d = t(486227),
    s = t(287809),
    u = t(985018);

function c(e) {
    let n = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, d.E)(e.id);
    return n?.isStaff() === !0 && e.isDM() && null == t ? (0, i.jsx)(l.Drp, {
        id: "mark-as-likely-ato",
        label: u.intl.string(u.t.AWKKgc),
        action: () => (0, a.a)(e.id)
    }) : null
}