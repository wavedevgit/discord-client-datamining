/** chunk id: 872725 params = (module,exports,require) **/
r.d(t, {
    A: () => f
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(524007),
    d = r(844222),
    o = r(786558),
    c = r(799226),
    u = r(397927),
    m = r(640203);
let _ = {
        HoverLightmode: {
            posy: "number",
            posx: "number"
        },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: {
            posy: "number",
            posx: "number"
        },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {}
    },
    p = {},
    f = e => {
        let {
            children: t,
            id: r,
            tabIndex: i,
            className: f,
            cardClassName: h,
            cardStyle: b = p,
            cardType: g,
            artboard: x = "BaseGlowRemapped",
            fit: C = "layout",
            glowing: A = !1,
            glowAmount: R = 8,
            blurAmount: v = 30,
            hueRotate: E = 0,
            isReducedMotion: j,
            onMouseEnter: N
        } = e, y = a.useRef(null), I = a.useRef(null), {
            status: P,
            buffer: T
        } = (0, c.CE)(A ? l.A : null), S = a.useContext(d.C), w = j ?? S.reducedMotion.enabled, O = {
            "--custom-glow-amount": `${R}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${E}deg`,
            "--custom-glow-opacity": +(0 !== R)
        };
        return (0, n.jsxs)("div", {
            id: r,
            ref: y,
            tabIndex: i,
            className: s()(m.k, f),
            style: O,
            onMouseEnter: N,
            children: [A && P !== c.BW.Loading && (0, n.jsx)(o.w, {
                buffer: T,
                artboard: x,
                artboardProperties: _,
                eventTargetRef: y,
                className: m.Q,
                ref: I,
                fit: C,
                withReducedMotion: w ? "halt" : "play"
            }), (0, n.jsx)(u.ZpM, {
                type: g ?? u.sl2.CUSTOM,
                className: h,
                style: b,
                children: t
            })]
        })
    }