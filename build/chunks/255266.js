/** chunk id: 255266, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => b,
    q: () => A
});
var n, l = r(627968),
    s = r(503698),
    i = r.n(s),
    a = r(713654),
    u = r(573435),
    o = r(260509),
    c = r(129216),
    A = ((n = {}).SMALL_32 = "SMALL_32", n);
let f = {
        SMALL_32: 24
    },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    },
    b = function(e) {
        let {
            className: t,
            iconClassName: r,
            size: n,
            channel: s,
            guild: A,
            locked: b,
            hasActiveThreads: d
        } = e;
        if (null == A) return null;
        let _ = (0, o.Iv)(A, 48),
            p = h[n],
            y = f[n],
            O = (0, a.gU)(s, A, {
                locked: b,
                hasActiveThreads: d
            });
        if (null == O) return null;
        let E = null != A ? (0, o.Rb)(A) : "";
        return (0, l.jsxs)("div", {
            role: "img",
            className: t,
            children: [(0, l.jsx)(u.Ay, {
                mask: u.hW.GUILD_ICON_WITH_CHANNEL_TYPE,
                children: null != _ ? (0, l.jsx)("img", {
                    alt: "",
                    src: _,
                    className: c.Aq,
                    style: {
                        width: y,
                        height: y
                    }
                }) : (0, l.jsx)("div", {
                    className: i()(c.Aq, c.q9),
                    style: {
                        fontSize: E.length - 1 > p.length ? p[p.length - 1] : p[E.length - 1],
                        width: y,
                        height: y
                    },
                    children: E
                })
            }), (0, l.jsx)(O, {
                className: i()(c.Kk, c.Is, r),
                color: "currentColor"
            })]
        })
    }