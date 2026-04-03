/** chunk id: 931853 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    u: () => m
});
var r = n(627968),
    l = n(349941),
    a = n(158954),
    i = n(311907),
    s = n(876230),
    o = n(544028),
    u = n(961432),
    d = n(985018),
    c = n(246878);

function m(e) {
    let {
        hasVideoAsset: t,
        playerState: n,
        pauseReason: r
    } = e;
    return t ? n === s.Q6.PAUSED && r === s.KB.VISIBILITY ? d.intl.string(u.default["9St/zK"]) : n === s.Q6.PAUSED && r === s.KB.FOCUS ? d.intl.string(u.default.c7IRfm) : null : d.intl.string(u.default["kX3+aM"])
}
let h = function(e) {
    let {
        message: t,
        showOverlay: n = !1
    } = e, s = (0, i.bG)([o.A], () => o.A.getState().theme);
    return null == t ? null : (0, r.jsxs)(r.Fragment, {
        children: [n && (0, r.jsx)("div", {
            className: c.MM
        }), (0, r.jsx)("div", {
            className: c.zG,
            style: {
                background: (0, l.Mw)(s) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
            },
            children: (0, r.jsx)(a.EYj, {
                variant: "text-sm/normal",
                color: "text-default",
                children: t
            })
        })]
    })
}