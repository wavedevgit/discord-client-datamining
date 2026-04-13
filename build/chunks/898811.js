/** chunk id: 898811 params = (module,exports,require) **/
n.d(e, {
    default: () => u
});
var r = n(627968);
n(64700);
var l = n(397927),
    c = n(442433),
    s = n(723702),
    i = n(837921),
    a = n(915193),
    o = n(985018);

function u(t) {
    let {
        text: e,
        onSelect: n
    } = t, u = (0, a.A)(e);
    return s.isPlatformEmbedded ? (0, r.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "text-context",
        onClose: c.Z_,
        "aria-label": o.intl.string(o.t.s285pq),
        onSelect: n,
        children: [(0, r.jsx)(l.rXV, {
            children: u
        }), (0, r.jsx)(l.rXV, {
            children: (0, r.jsx)(l.Drp, {
                id: "copy",
                label: o.intl.string(o.t.OpuAlK),
                action: () => i.Ay.copy(e)
            })
        })]
    }) : null
}