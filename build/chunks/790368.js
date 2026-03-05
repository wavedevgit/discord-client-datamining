/** chunk id: 790368, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(990078),
    a = n(397927),
    r = n(711950),
    o = n(322387),
    c = n(912309),
    d = n(954571),
    u = n(652215),
    h = n(985018),
    A = n(824426);

function m(e) {
    let {
        closePopout: t
    } = e, n = (0, c.kX)();
    return (0, i.jsx)(l.m, {
        asContainer: !0,
        text: h.intl.string(h.t["lMR96+"]),
        children: (0, i.jsxs)(a.DUT, {
            "aria-label": `${h.intl.string(h.t["lMR96+"])}, ${n}`,
            className: A.b,
            onClick: () => {
                d.default.track(u.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: o.e1.FRIEND_REQUESTS_BUTTON_CLICK
                }), r.A.transitionToSection(u.m3P.PENDING, {
                    explicit: !0
                }), t()
            },
            children: [(0, i.jsx)(a.$yI, {
                size: "xs",
                color: "currentColor"
            }), (0, i.jsx)(a.hVq, {
                count: n,
                color: s.A.colors.BACKGROUND_MOD_STRONG.css
            })]
        })
    })
}