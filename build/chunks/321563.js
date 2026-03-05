/** chunk id: 321563, original params: e,a,t (module,exports,require) **/
t.d(a, {
    A: () => d
});
var n = t(627968),
    i = t(503698),
    c = t.n(i),
    s = t(388108),
    l = t(397927),
    r = t(124480),
    _ = t(670455),
    o = t(792935);
let m = {
    [_.P0.BAD]: {
        face: o.qx,
        "animated-face": "Emoji Neg",
        thumb: o.Se
    },
    [_.P0.NEUTRAL]: {
        face: o.ZK,
        "animated-face": "Emoji Mid"
    },
    [_.P0.GOOD]: {
        face: o.kf,
        "animated-face": "Emoji Happy",
        thumb: o.dE
    }
};

function d(e) {
    let {
        ratingOptions: a = _.Rj,
        emojiKind: t = "face",
        textLabels: i,
        selectedRating: d,
        onChangeRating: u
    } = e;
    return null != i ? (0, n.jsx)("div", {
        className: o.xu,
        children: (0, n.jsx)(r.A, {
            options: a.map(e => ({
                label: (0, n.jsxs)("div", {
                    className: o.SG,
                    children: [(0, n.jsx)("div", {
                        className: m[e][t]
                    }), i[e]]
                }),
                value: e,
                className: c()(o.qq, d === e ? o.wH : null)
            })),
            onClick: e => u(e.value)
        })
    }) : (0, n.jsx)("div", {
        className: c()(o.Bo, o.gm),
        children: a.map(e => (0, n.jsx)(l.DUT, {
            onClick: () => u(e),
            "aria-label": e,
            className: o.qq,
            children: "animated-face" === t ? (0, n.jsx)(s.i, {
                className: c()(o.Ld, d === e ? o.wH : null),
                artboard: m[e][t]
            }) : (0, n.jsx)("div", {
                className: c()(m[e][t], d === e ? o.wH : null)
            })
        }, e))
    })
}