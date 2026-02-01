/** chunk id: 884569, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(367130),
    s = n(486227),
    o = n(287809),
    d = n(985018);

function u(e) {
    let t = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        n = (0, s.E)(e.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && e.isDM() && null == n ? (0, i.jsx)(l.Drp, {
        id: "mark-as-likely-ato",
        label: d.intl.string(d.t.AWKKgc),
        action: () => (0, a.a)(e.id)
    }) : null
}