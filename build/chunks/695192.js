/** Chunk was on 39778 **/
/** chunk id: 695192, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => c
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(544231),
    o = n(349435),
    s = n(178186),
    d = n(287809),
    u = n(985018);

function c(e) {
    let t = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, i.bG)([o.Ay], () => o.Ay.getChannelSafetyWarnings(e.id));
    return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Drp, {
            id: "delete-safety-warnings",
            label: u.intl.string(u.t.g7o9bs),
            action: () => (0, s.Ey)(e.id)
        }), (0, r.jsx)(l.Drp, {
            id: "clear-safety-warnings",
            label: u.intl.string(u.t.VuSvGu),
            action: () => (0, a.WJ)(e.id)
        })]
    })
}