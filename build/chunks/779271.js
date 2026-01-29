/** Chunk was on 1113 **/
/** chunk id: 779271, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(402216),
    c = n(667992),
    u = n(920660);
let d = l.memo(function(e) {
    let {
        label: t,
        participantCount: n,
        onClick: l,
        className: i,
        collapsed: d,
        speakers: h,
        channel: p,
        isStreamLive: g
    } = e;
    return (0, r.jsxs)(a.DUT, {
        onClick: l,
        className: s()(u.kL, i),
        children: [null == h ? (0, r.jsx)(a.nFg, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: u.Vo
        }) : (0, r.jsx)(a.cNw, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: u.Vo
        }), (0, r.jsxs)(a.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: u.Qq,
            children: [t, " — ", n]
        }), d && null != p && null != h && h.length > 0 && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.A, {
                channel: p,
                speakers: h
            }), g && (0, r.jsx)(o.Ay, {})]
        }), (0, r.jsx)(a.abt, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: s()(u.mw, {
                [u.VU]: d
            })
        })]
    })
})