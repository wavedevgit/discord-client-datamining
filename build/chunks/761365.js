/** chunk id: 761365, original params: t,e,r (module,exports,require) **/
r.d(e, {
    A: () => u
});
var i = r(627968),
    l = r(64700),
    n = r(359701),
    s = r(550111),
    a = r(988347);
let u = l.memo(function(t) {
    let {
        user: e,
        nameplate: r,
        isHighlighted: l,
        size: u = "default"
    } = t, o = "small" === u ? 62 : 94, d = "small" === u ? 72 : 110;
    return (0, i.jsx)("div", {
        className: a.Dz,
        children: (0, i.jsxs)("div", {
            className: a.ur,
            children: [(0, i.jsx)(n._, {
                showStatus: !0,
                width: o,
                opacity: .7,
                size: u
            }), (0, i.jsx)(n._, {
                showStatus: !0,
                width: d,
                opacity: .85,
                size: u
            }), (0, i.jsx)(s.A, {
                user: e,
                nameplate: r,
                className: a.tZ,
                isHighlighted: l,
                showPlaceholderUser: !l,
                showStatus: !0,
                nameplatePreviewSize: "small" === u ? "small" : "default"
            }), (0, i.jsx)(n._, {
                showStatus: !0,
                width: d,
                opacity: .85,
                size: u
            }), (0, i.jsx)(n._, {
                showStatus: !0,
                width: o,
                opacity: .7,
                size: u
            })]
        })
    })
})