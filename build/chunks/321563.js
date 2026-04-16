/** chunk id: 321563 params = (module,exports,require) **/
a.d(l, {
    A: () => b
});
var t = a(627968),
    n = a(503698),
    i = a.n(n),
    r = a(388108),
    d = a(397927),
    s = a(124480),
    u = a(670455),
    E = a(995326);
let O = {
    [u.P0.BAD]: {
        face: E.qx,
        "animated-face": "Emoji Neg",
        thumb: E.Se
    },
    [u.P0.NEUTRAL]: {
        face: E.ZK,
        "animated-face": "Emoji Mid"
    },
    [u.P0.GOOD]: {
        face: E.kf,
        "animated-face": "Emoji Happy",
        thumb: E.dE
    }
};

function b(e) {
    let {
        ratingOptions: l = u.Rj,
        emojiKind: a = "face",
        textLabels: n,
        selectedRating: b,
        onChangeRating: v
    } = e;
    return null != n ? (0, t.jsx)("div", {
        className: E.xu,
        children: (0, t.jsx)(s.A, {
            options: l.map(e => ({
                label: (0, t.jsxs)("div", {
                    className: E.SG,
                    children: [(0, t.jsx)("div", {
                        className: O[e][a]
                    }), n[e]]
                }),
                value: e,
                className: i()(E.qq, b === e ? E.wH : null)
            })),
            onClick: e => v(e.value)
        })
    }) : (0, t.jsx)("div", {
        className: i()(E.Bo, E.gm),
        children: l.map(e => (0, t.jsx)(d.DUT, {
            onClick: () => v(e),
            "aria-label": e,
            className: E.qq,
            children: "animated-face" === a ? (0, t.jsx)(r.i, {
                className: i()(E.Ld, b === e ? E.wH : null),
                artboard: O[e][a]
            }) : (0, t.jsx)("div", {
                className: i()(O[e][a], b === e ? E.wH : null)
            })
        }, e))
    })
}