/** chunk id: 359701, original params: t,e,r (module,exports,require) **/
r.d(e, {
    _: () => o
});
var i = r(627968),
    l = r(503698),
    n = r.n(l),
    s = r(397927),
    a = r(652215),
    u = r(675953);
let o = t => {
    let {
        showStatus: e,
        width: r,
        opacity: l,
        size: o = "default"
    } = t, d = "small" === o ? s._3J.SIZE_24 : s._3J.SIZE_32;
    return (0, i.jsxs)("div", {
        className: n()(u.Os, {
            [u.i]: "small" === o
        }),
        style: {
            opacity: l
        },
        children: [(0, i.jsx)(s.euF, {
            src: null,
            size: d,
            status: e ? a.clD.ONLINE : void 0,
            statusColor: "var(--border-subtle)",
            "aria-hidden": !0,
            imageClassName: u.yf
        }), (0, i.jsx)("div", {
            className: n()(u.aA, {
                [u.vX]: "small" === o
            }),
            style: {
                maxWidth: null != r ? r : "100px"
            }
        })]
    })
}