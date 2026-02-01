/** chunk id: 87746, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(544231),
    s = n(74114),
    o = n(287809),
    d = n(985018);

function u(e) {
    let t = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        n = (0, s.l)(e.id);
    return (null == t ? void 0 : t.isStaff()) === !0 && e.isDM() && null == n ? (0, i.jsx)(l.Drp, {
        id: "mark-as-stranger-danger",
        label: d.intl.string(d.t.CgWmmT),
        action: () => (0, a.Ju)(e.id)
    }) : null
}