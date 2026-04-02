/** chunk id: 695192 params = (module,exports,require) **/
t.d(n, {
    m: () => c
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(544231),
    d = t(349435),
    s = t(178186),
    u = t(287809),
    o = t(985018);

function c(e) {
    let n = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, i.bG)([d.Ay], () => d.Ay.getChannelSafetyWarnings(e.id));
    return n?.isStaff() !== !0 || null == t || 0 === t.length ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Drp, {
            id: "delete-safety-warnings",
            label: o.intl.string(o.t.g7o9bs),
            action: () => (0, s.Ey)(e.id)
        }), (0, r.jsx)(l.Drp, {
            id: "clear-safety-warnings",
            label: o.intl.string(o.t.VuSvGu),
            action: () => (0, a.WJ)(e.id)
        })]
    })
}