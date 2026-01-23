/** Chunk was on web.js **/
/** chunk id: 761365, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968),
    i = n(64700),
    a = n(359701),
    s = n(550111),
    o = n(488189);
let l = i.memo(function(e) {
    let {
        user: t,
        nameplate: n,
        isHighlighted: i,
        size: l = "default"
    } = e, c = "small" === l ? 62 : 94, u = "small" === l ? 72 : 110;
    return (0, r.jsx)("div", {
        className: o.Dz,
        children: (0, r.jsxs)("div", {
            className: o.ur,
            children: [(0, r.jsx)(a._, {
                showStatus: !0,
                width: c,
                opacity: .7,
                size: l
            }), (0, r.jsx)(a._, {
                showStatus: !0,
                width: u,
                opacity: .85,
                size: l
            }), (0, r.jsx)(s.A, {
                user: t,
                nameplate: n,
                className: o.tZ,
                isHighlighted: i,
                showPlaceholderUser: !i,
                showStatus: !0,
                nameplatePreviewSize: "small" === l ? "small" : "default"
            }), (0, r.jsx)(a._, {
                showStatus: !0,
                width: u,
                opacity: .85,
                size: l
            }), (0, r.jsx)(a._, {
                showStatus: !0,
                width: c,
                opacity: .7,
                size: l
            })]
        })
    })
})