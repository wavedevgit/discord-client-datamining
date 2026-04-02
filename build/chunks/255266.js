/** chunk id: 255266 params = (module,exports,require) **/
s.d(t, {
    A: () => h,
    q: () => _
});
var i, a = s(627968),
    l = s(503698),
    n = s.n(l),
    r = s(713654),
    A = s(573435),
    u = s(260509),
    d = s(943402),
    _ = ((i = {}).SMALL_32 = "SMALL_32", i);
let c = {
        SMALL_32: 24
    },
    o = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    h = function(e) {
        let {
            className: t,
            iconClassName: s,
            size: i,
            channel: l,
            guild: _,
            locked: h,
            hasActiveThreads: I
        } = e;
        if (null == _) return null;
        let L = (0, u.Iv)(_, 48),
            E = o[i],
            N = c[i],
            C = (0, r.gU)(l, _, {
                locked: h,
                hasActiveThreads: I
            });
        if (null == C) return null;
        let P = null != _ ? (0, u.Rb)(_) : "";
        return (0, a.jsxs)("div", {
            role: "img",
            className: t,
            children: [(0, a.jsx)(A.Ay, {
                mask: A.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                children: null != L ? (0, a.jsx)("img", {
                    alt: "",
                    src: L,
                    className: d.Aq,
                    style: {
                        width: N,
                        height: N
                    }
                }) : (0, a.jsx)("div", {
                    className: n()(d.Aq, d.q9),
                    style: {
                        fontSize: P.length - 1 > E.length ? E[E.length - 1] : E[P.length - 1],
                        width: N,
                        height: N
                    },
                    children: P
                })
            }), (0, a.jsx)(C, {
                className: n()(d.Kk, d.Is, s),
                color: "currentColor"
            })]
        })
    }