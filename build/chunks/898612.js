/** Chunk was on web.js **/
/** chunk id: 898612, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(963027),
    o = n(713654),
    s = n(403362),
    l = n(739455),
    c = n(2242),
    u = n(985018),
    d = n(758382);

function f(e) {
    let {
        channelId: t
    } = e, n = (0, l.fE)(t);
    if (null == n) return "[".concat(u.intl.string(u.t.bz1PZX), "]");
    let s = n.isMediaChannel() ? i.xfq : (0, o._U)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.AC4, {
            children: (0, a.Ay)({
                channel: n
            })
        }), (0, r.jsxs)("div", {
            "aria-hidden": !0,
            children: [null != s && (0, r.jsx)(s, {
                className: d.K,
                "aria-hidden": !0
            }), n.name]
        })]
    })
}

function p(e) {
    switch (e.ref_type) {
        case c.bN.CHANNEL:
            return (0, r.jsx)(f, {
                channelId: e.ref_id
            });
        case c.bN.INTANGIBLE:
            return e.name;
        default:
            (0, s.xb)(e)
    }
}