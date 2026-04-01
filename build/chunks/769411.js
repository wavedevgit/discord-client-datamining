/** chunk id: 769411 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    l = n(582754),
    a = n(736653),
    r = n(344904),
    o = n(683757);
let d = "url(#gradient)",
    c = e => {
        let {
            percentage: t = 0,
            children: n,
            animationClassName: c,
            initialPercentage: u = 0,
            progressCircleStrokeSize: m = 2,
            progressCircleVariation: g,
            progressCircleStroke: _
        } = e, A = 43 + m / 2, x = 2 * Math.PI * A, [h, p] = s.useState(u);
        s.useEffect(() => {
            let e = setTimeout(() => {
                p(t)
            }, 200);
            return () => clearTimeout(e)
        }, [t]);
        let T = (0, a.Ay)(),
            f = (0, l.qB)(T),
            S = (e => {
                switch (e) {
                    case r.BN.NITRO_GEM:
                    case r.BN.AVATAR_DECO:
                        return "var(--background-base-low)";
                    case r.BN.NITRO_LOGO:
                        return "var(--premium-tier-2-purple)";
                    default:
                        return
                }
            })(g),
            E = ((e, t) => {
                switch (e) {
                    case r.BN.NITRO_LOGO:
                        return t ? "0.3" : "0.2";
                    case r.BN.NITRO_GEM:
                    case r.BN.AVATAR_DECO:
                    default:
                        return
                }
            })(g, f),
            b = _ ?? ((e, t) => {
                switch (t) {
                    case r.BN.NITRO_GEM:
                    case r.BN.AVATAR_DECO:
                        return d;
                    case r.BN.NITRO_LOGO:
                        return e ? "url(#gradient_nitro_logo)" : d;
                    default:
                        return
                }
            })(f, g);
        return (0, i.jsxs)("div", {
            className: o.Ap,
            children: [(0, i.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: o.fB,
                children: [(0, i.jsx)("circle", {
                    className: g === r.BN.NITRO_GEM || g === r.BN.AVATAR_DECO ? o.F3 : void 0,
                    fill: "transparent",
                    strokeWidth: m,
                    r: `${A}`,
                    cx: "50%",
                    cy: "50%",
                    stroke: S,
                    strokeOpacity: E
                }), (0, i.jsx)("circle", {
                    stroke: b,
                    strokeWidth: m,
                    strokeLinecap: "round",
                    strokeDasharray: `${x} ${x}`,
                    className: c,
                    style: {
                        strokeDashoffset: (1 - h / 100) * x
                    },
                    r: `${A}`,
                    cx: "50%",
                    cy: "50%"
                })]
            }), (0, i.jsxs)("svg", {
                width: "0",
                height: "0",
                children: [(0, i.jsxs)("linearGradient", {
                    id: "gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [(0, i.jsx)("stop", {
                        offset: "0%",
                        style: {
                            stopColor: "#FFBDF2"
                        }
                    }), (0, i.jsx)("stop", {
                        offset: "100%",
                        style: {
                            stopColor: "#E742E1"
                        }
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "gradient_nitro_logo",
                    x1: "2.99995",
                    y1: "67.6298",
                    x2: "132.55",
                    y2: "67.6298",
                    gradientUnits: "userSpaceOnUse",
                    children: [(0, i.jsx)("stop", {
                        stopColor: "#F9A0E8"
                    }), (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#E742E1"
                    })]
                }), (0, i.jsxs)("linearGradient", {
                    id: "dark-purple-gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                    children: [(0, i.jsx)("stop", {
                        offset: "0%",
                        style: {
                            stopColor: "#241731",
                            stopOpacity: 1
                        }
                    }), (0, i.jsx)("stop", {
                        offset: "100%",
                        style: {
                            stopColor: "#241731",
                            stopOpacity: 1
                        }
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: o.Vw,
                children: n
            })]
        })
    }