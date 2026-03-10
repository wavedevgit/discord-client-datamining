/** chunk id: 255266 params = (module,exports,require) **/
s.d(t, {
    A: () => I,
    q: () => c
});
var l, i = s(627968),
    a = s(503698),
    n = s.n(a),
    r = s(713654),
    A = s(573435),
    u = s(260509),
    _ = s(129216),
    c = ((l = {}).SMALL_32 = "SMALL_32", l);
let h = {
        SMALL_32: 24
    },
    d = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    I = function(e) {
        let {
            className: t,
            iconClassName: s,
            size: l,
            channel: a,
            guild: c,
            locked: I,
            hasActiveThreads: o
        } = e;
        if (null == c) return null;
        let L = (0, u.Iv)(c, 48),
            E = d[l],
            N = h[l],
            C = (0, r.gU)(a, c, {
                locked: I,
                hasActiveThreads: o
            });
        if (null == C) return null;
        let f = null != c ? (0, u.Rb)(c) : "";
        return (0, i.jsxs)("div", {
            role: "img",
            className: t,
            children: [(0, i.jsx)(A.Ay, {
                mask: A.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                children: null != L ? (0, i.jsx)("img", {
                    alt: "",
                    src: L,
                    className: _.Aq,
                    style: {
                        width: N,
                        height: N
                    }
                }) : (0, i.jsx)("div", {
                    className: n()(_.Aq, _.q9),
                    style: {
                        fontSize: f.length - 1 > E.length ? E[E.length - 1] : E[f.length - 1],
                        width: N,
                        height: N
                    },
                    children: f
                })
            }), (0, i.jsx)(C, {
                className: n()(_.Kk, _.Is, s),
                color: "currentColor"
            })]
        })
    }