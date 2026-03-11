/** chunk id: 695192 params = (module,exports,require) **/
i.d(e, {
    m: () => o
});
var t = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(544231),
    d = i(349435),
    s = i(178186),
    u = i(287809),
    c = i(985018);

function o(n) {
    let e = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        i = (0, r.bG)([d.Ay], () => d.Ay.getChannelSafetyWarnings(n.id));
    return e?.isStaff() !== !0 || null == i || 0 === i.length ? null : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(l.Drp, {
            id: "delete-safety-warnings",
            label: c.intl.string(c.t.g7o9bs),
            action: () => (0, s.Ey)(n.id)
        }), (0, t.jsx)(l.Drp, {
            id: "clear-safety-warnings",
            label: c.intl.string(c.t.VuSvGu),
            action: () => (0, a.WJ)(n.id)
        })]
    })
}