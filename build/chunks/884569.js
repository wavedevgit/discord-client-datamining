/** chunk id: 884569, original params: n,t,e (module,exports,require) **/
e.d(t, {
    B: () => c
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(367130),
    d = e(486227),
    s = e(287809),
    u = e(985018);

function c(n) {
    let t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        e = (0, d.E)(n.id);
    return t?.isStaff() === !0 && n.isDM() && null == e ? (0, i.jsx)(l.Drp, {
        id: "mark-as-likely-ato",
        label: u.intl.string(u.t.AWKKgc),
        action: () => (0, a.a)(n.id)
    }) : null
}