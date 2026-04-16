/** chunk id: 931853 params = (module,exports,require) **/
n.d(t, {
    A: () => f,
    u: () => m
});
var r = n(627968),
    l = n(349941),
    a = n(158954),
    i = n(311907),
    u = n(876230),
    s = n(544028),
    o = n(445563),
    c = n(985018),
    d = n(834926);

function m(e) {
    let {
        hasVideoAsset: t,
        playerState: n,
        pauseReason: r
    } = e;
    return t ? n === u.Q6.PAUSED && r === u.KB.VISIBILITY ? c.intl.string(o.default["9St/zK"]) : n === u.Q6.PAUSED && r === u.KB.FOCUS ? c.intl.string(o.default.c7IRfm) : null : c.intl.string(o.default["kX3+aM"])
}
let f = function(e) {
    let {
        message: t,
        showOverlay: n = !1
    } = e, u = (0, i.bG)([s.A], () => s.A.getState().theme);
    return null == t ? null : (0, r.jsxs)(r.Fragment, {
        children: [n && (0, r.jsx)("div", {
            className: d.MM
        }), (0, r.jsx)("div", {
            className: d.zG,
            style: {
                background: (0, l.Mw)(u) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
            },
            children: (0, r.jsx)(a.EYj, {
                variant: "text-sm/normal",
                color: "text-default",
                children: t
            })
        })]
    })
}