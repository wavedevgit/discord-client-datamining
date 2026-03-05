/** chunk id: 695192 params = (module,exports,require) **/
e.d(t, {
    m: () => c
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(544231),
    d = e(349435),
    s = e(178186),
    u = e(287809),
    o = e(985018);

function c(n) {
    let t = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        e = (0, r.bG)([d.Ay], () => d.Ay.getChannelSafetyWarnings(n.id));
    return t?.isStaff() !== !0 || null == e || 0 === e.length ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Drp, {
            id: "delete-safety-warnings",
            label: o.intl.string(o.t.g7o9bs),
            action: () => (0, s.Ey)(n.id)
        }), (0, i.jsx)(l.Drp, {
            id: "clear-safety-warnings",
            label: o.intl.string(o.t.VuSvGu),
            action: () => (0, a.WJ)(n.id)
        })]
    })
}