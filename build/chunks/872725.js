/** chunk id: 872725 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var s = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    i = n(524007),
    d = n(844222),
    o = n(786558),
    c = n(799226),
    u = n(397927),
    m = n(544888);
let h = {
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
    x = {},
    C = e => {
        let {
            children: t,
            id: n,
            tabIndex: r,
            className: C,
            cardClassName: _,
            cardStyle: p = x,
            cardType: g,
            artboard: f = "BaseGlowRemapped",
            fit: R = "layout",
            glowing: b = !1,
            glowAmount: j = 8,
            blurAmount: v = 30,
            hueRotate: N = 0,
            isReducedMotion: E,
            onMouseEnter: A
        } = e, D = a.useRef(null), I = a.useRef(null), {
            status: P,
            buffer: y
        } = (0, c.CE)(b ? i.A : null), T = a.useContext(d.C), w = E ?? T.reducedMotion.enabled, O = {
            "--custom-glow-amount": `${j}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${N}deg`,
            "--custom-glow-opacity": +(0 !== j)
        };
        return (0, s.jsxs)("div", {
            id: n,
            ref: D,
            tabIndex: r,
            className: l()(m.k, C),
            style: O,
            onMouseEnter: A,
            children: [b && P !== c.BW.Loading && (0, s.jsx)(o.w, {
                buffer: y,
                artboard: f,
                artboardProperties: h,
                eventTargetRef: D,
                className: m.Q,
                ref: I,
                fit: R,
                withReducedMotion: w ? "halt" : "play"
            }), (0, s.jsx)(u.ZpM, {
                type: g ?? u.sl2.CUSTOM,
                className: _,
                style: p,
                children: t
            })]
        })
    }