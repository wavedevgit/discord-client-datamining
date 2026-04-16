/** chunk id: 255266 params = (module,exports,require) **/
s.d(t, {
    A: () => f,
    q: () => c
});
var i, l = s(627968),
    n = s(503698),
    a = s.n(n),
    r = s(713654),
    u = s(573435),
    d = s(260509),
    o = s(23047),
    c = ((i = {}).SMALL_32 = "SMALL_32", i);
let m = {
        SMALL_32: 24
    },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    f = function(e) {
        let {
            className: t,
            iconClassName: s,
            size: i,
            channel: n,
            guild: c,
            locked: f,
            hasActiveThreads: b
        } = e;
        if (null == c) return null;
        let x = (0, d.Iv)(c, 48),
            A = h[i],
            g = m[i],
            p = (0, r.gU)(n, c, {
                locked: f,
                hasActiveThreads: b
            });
        if (null == p) return null;
        let v = null != c ? (0, d.Rb)(c) : "";
        return (0, l.jsxs)("div", {
            role: "img",
            className: t,
            children: [(0, l.jsx)(u.Ay, {
                mask: u.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                children: null != x ? (0, l.jsx)("img", {
                    alt: "",
                    src: x,
                    className: o.Aq,
                    style: {
                        width: g,
                        height: g
                    }
                }) : (0, l.jsx)("div", {
                    className: a()(o.Aq, o.q9),
                    style: {
                        fontSize: v.length - 1 > A.length ? A[A.length - 1] : A[v.length - 1],
                        width: g,
                        height: g
                    },
                    children: v
                })
            }), (0, l.jsx)(p, {
                className: a()(o.Kk, o.Is, s),
                color: "currentColor"
            })]
        })
    }