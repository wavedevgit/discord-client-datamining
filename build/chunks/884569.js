/** chunk id: 884569 params = (module,exports,require) **/
i.d(e, {
    B: () => c
});
var t = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(367130),
    d = i(486227),
    s = i(287809),
    u = i(985018);

function c(n) {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        i = (0, d.E)(n.id);
    return e?.isStaff() === !0 && n.isDM() && null == i ? (0, t.jsx)(l.Drp, {
        id: "mark-as-likely-ato",
        label: u.intl.string(u.t.AWKKgc),
        action: () => (0, a.a)(n.id)
    }) : null
}