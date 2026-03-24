/** chunk id: 695192 params = (module,exports,require) **/
t.d(n, {
    m: () => o
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(544231),
    d = t(349435),
    s = t(178186),
    u = t(287809),
    c = t(985018);

function o(e) {
    let n = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, r.bG)([d.Ay], () => d.Ay.getChannelSafetyWarnings(e.id));
    return n?.isStaff() !== !0 || null == t || 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Drp, {
            id: "delete-safety-warnings",
            label: c.intl.string(c.t.g7o9bs),
            action: () => (0, s.Ey)(e.id)
        }), (0, i.jsx)(l.Drp, {
            id: "clear-safety-warnings",
            label: c.intl.string(c.t.VuSvGu),
            action: () => (0, a.WJ)(e.id)
        })]
    })
}