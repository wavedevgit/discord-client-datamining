/** Chunk was on 86142 **/
/** chunk id: 167630, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(435328),
    a = n(427080),
    o = n(515115),
    c = n(988794),
    d = n(888804);

function u(e) {
    let {
        guildScheduledEvent: t,
        channel: n,
        onClose: u
    } = e, h = t.entity_type === c.Ps.EXTERNAL, p = i.useCallback(e => (0, a.GI)(t, u)(e), [t, u]), g = (0, o.L)(t, n);
    if (null == g) return null;
    let {
        IconComponent: _,
        locationName: f
    } = g, m = (0, r.jsxs)(r.Fragment, {
        children: [null != _ && (0, r.jsx)(_, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: d.p
        }), (0, r.jsx)(s.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: d.fN,
            children: (0, l.l)(f, !0)
        })]
    });
    return (0, r.jsx)("div", {
        className: d.nM,
        children: null != p ? (0, r.jsx)(s.DUT, {
            className: h ? d.dC : d.h7,
            onClick: p,
            children: m
        }) : m
    })
}