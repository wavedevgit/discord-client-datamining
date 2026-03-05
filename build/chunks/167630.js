/** chunk id: 167630, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968),
    l = t(64700),
    d = t(397927),
    r = t(435328),
    s = t(427080),
    a = t(515115),
    c = t(988794),
    o = t(458242);

function u(e) {
    let {
        guildScheduledEvent: n,
        channel: t,
        onClose: u
    } = e, _ = n.entity_type === c.Ps.EXTERNAL, g = l.useCallback(e => (0, s.GI)(n, u)(e), [n, u]), f = (0, a.L)(n, t);
    if (null == f) return null;
    let {
        IconComponent: h,
        locationName: x
    } = f, m = (0, i.jsxs)(i.Fragment, {
        children: [null != h && (0, i.jsx)(h, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: o.p
        }), (0, i.jsx)(d.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: o.fN,
            children: (0, r.l)(x, !0)
        })]
    });
    return (0, i.jsx)("div", {
        className: o.nM,
        children: null != g ? (0, i.jsx)(d.DUT, {
            className: _ ? o.dC : o.h7,
            onClick: g,
            children: m
        }) : m
    })
}