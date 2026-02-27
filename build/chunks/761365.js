/** chunk id: 761365, original params: t,e,r (module,exports,require) **/
r.d(e, {
    A: () => u
});
var i = r(627968),
    l = r(64700),
    n = r(359701),
    s = r(550111),
    a = r(488189);
let u = l.memo(function(t) {
    let {
        user: e,
        nameplate: r,
        isHighlighted: l,
        showDefaultAvatar: u = !1,
        size: o = "default"
    } = t, d = "small" === o ? 62 : 94, c = "small" === o ? 72 : 110;
    return (0, i.jsx)("div", {
        className: a.Dz,
        children: (0, i.jsxs)("div", {
            className: a.ur,
            children: [(0, i.jsx)(n._, {
                showStatus: !0,
                width: d,
                opacity: .7,
                size: o
            }), (0, i.jsx)(n._, {
                showStatus: !0,
                width: c,
                opacity: .85,
                size: o
            }), (0, i.jsx)(s.A, {
                user: e,
                nameplate: r,
                className: a.tZ,
                isHighlighted: l,
                showPlaceholderUser: !l || u,
                showStatus: !0,
                nameplatePreviewSize: "small" === o ? "small" : "default"
            }), (0, i.jsx)(n._, {
                showStatus: !0,
                width: c,
                opacity: .85,
                size: o
            }), (0, i.jsx)(n._, {
                showStatus: !0,
                width: d,
                opacity: .7,
                size: o
            })]
        })
    })
})