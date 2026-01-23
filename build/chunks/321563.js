/** Chunk was on 95095 **/
/** chunk id: 321563, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => u
});
var n = a(627968),
    c = a(503698),
    i = a.n(c),
    l = a(388108),
    r = a(397927),
    s = a(124480),
    o = a(670455),
    _ = a(792935);
let m = {
    [o.P0.BAD]: {
        face: _.qx,
        "animated-face": "Emoji Neg",
        thumb: _.Se
    },
    [o.P0.NEUTRAL]: {
        face: _.ZK,
        "animated-face": "Emoji Mid"
    },
    [o.P0.GOOD]: {
        face: _.kf,
        "animated-face": "Emoji Happy",
        thumb: _.dE
    }
};

function u(e) {
    let {
        ratingOptions: t = o.Rj,
        emojiKind: a = "face",
        textLabels: c,
        selectedRating: u,
        onChangeRating: d
    } = e;
    return null != c ? (0, n.jsx)("div", {
        className: _.xu,
        children: (0, n.jsx)(s.A, {
            options: t.map(e => ({
                label: (0, n.jsxs)("div", {
                    className: _.SG,
                    children: [(0, n.jsx)("div", {
                        className: m[e][a]
                    }), c[e]]
                }),
                value: e,
                className: i()(_.qq, u === e ? _.wH : null)
            })),
            onClick: e => d(e.value)
        })
    }) : (0, n.jsx)("div", {
        className: i()(_.Bo, _.gm),
        children: t.map(e => (0, n.jsx)(r.DUT, {
            onClick: () => d(e),
            "aria-label": e,
            className: _.qq,
            children: "animated-face" === a ? (0, n.jsx)(l.i, {
                className: i()(_.Ld, u === e ? _.wH : null),
                artboard: m[e][a]
            }) : (0, n.jsx)("div", {
                className: i()(m[e][a], u === e ? _.wH : null)
            })
        }, e))
    })
}