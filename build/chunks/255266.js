/** chunk id: 255266 params = (module,exports,require) **/
i.d(e, {
    A: () => d,
    q: () => h
});
var a, s = i(627968),
    A = i(503698),
    l = i.n(A),
    n = i(713654),
    _ = i(573435),
    r = i(260509),
    I = i(23047),
    h = ((a = {}).SMALL_32 = "SMALL_32", a);
let u = {
        SMALL_32: 24
    },
    c = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    d = function(t) {
        let {
            className: e,
            iconClassName: i,
            size: a,
            channel: A,
            guild: h,
            locked: d,
            hasActiveThreads: L
        } = t;
        if (null == h) return null;
        let E = (0, r.Iv)(h, 48),
            o = c[a],
            N = u[a],
            C = (0, n.gU)(A, h, {
                locked: d,
                hasActiveThreads: L
            });
        if (null == C) return null;
        let G = null != h ? (0, r.Rb)(h) : "";
        return (0, s.jsxs)("div", {
            role: "img",
            className: e,
            children: [(0, s.jsx)(_.Ay, {
                mask: _.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                children: null != E ? (0, s.jsx)("img", {
                    alt: "",
                    src: E,
                    className: I.Aq,
                    style: {
                        width: N,
                        height: N
                    }
                }) : (0, s.jsx)("div", {
                    className: l()(I.Aq, I.q9),
                    style: {
                        fontSize: G.length - 1 > o.length ? o[o.length - 1] : o[G.length - 1],
                        width: N,
                        height: N
                    },
                    children: G
                })
            }), (0, s.jsx)(C, {
                className: l()(I.Kk, I.Is, i),
                color: "currentColor"
            })]
        })
    }