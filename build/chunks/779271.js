/** chunk id: 779271 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(402216),
    c = n(667992),
    d = n(732310);
let u = s.memo(function(e) {
    let {
        label: t,
        participantCount: n,
        onClick: s,
        className: l,
        collapsed: u,
        speakers: h,
        channel: A,
        isStreamLive: m
    } = e;
    return (0, i.jsxs)(r.DUT, {
        onClick: s,
        className: a()(d.kL, l),
        children: [null == h ? (0, i.jsx)(r.nFg, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: d.Vo
        }) : (0, i.jsx)(r.cNw, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: d.Vo
        }), (0, i.jsxs)(r.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: d.Qq,
            children: [t, " — ", n]
        }), u && null != A && null != h && h.length > 0 && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.A, {
                channel: A,
                speakers: h
            }), m && (0, i.jsx)(o.Ay, {})]
        }), (0, i.jsx)(r.abt, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: a()(d.mw, {
                [d.VU]: u
            })
        })]
    })
})