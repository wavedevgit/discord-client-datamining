/** chunk id: 167630 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(435328),
    a = n(427080),
    o = n(515115),
    c = n(988794),
    d = n(478799);

function u(e) {
    let {
        guildScheduledEvent: t,
        channel: n,
        onClose: u
    } = e, _ = t.entity_type === c.Ps.EXTERNAL, h = s.useCallback(e => (0, a.GI)(t, u)(e), [t, u]), g = (0, o.L)(t, n);
    if (null == g) return null;
    let {
        IconComponent: p,
        locationName: m
    } = g, A = (0, i.jsxs)(i.Fragment, {
        children: [null != p && (0, i.jsx)(p, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: d.p
        }), (0, i.jsx)(r.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: d.fN,
            children: (0, l.l)(m, !0)
        })]
    });
    return (0, i.jsx)("div", {
        className: d.nM,
        children: null != h ? (0, i.jsx)(r.DUT, {
            className: _ ? d.dC : d.h7,
            onClick: h,
            children: A
        }) : A
    })
}