/** chunk id: 872725 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    i = n(524007),
    d = n(844222),
    o = n(786558),
    c = n(799226),
    u = n(397927),
    h = n(544888);
let m = {
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
            tabIndex: l,
            className: C,
            cardClassName: _,
            cardStyle: p = x,
            cardType: g,
            artboard: f = "BaseGlowRemapped",
            fit: R = "layout",
            glowing: j = !1,
            glowAmount: b = 8,
            blurAmount: v = 30,
            hueRotate: N = 0,
            isReducedMotion: E,
            onMouseEnter: A
        } = e, D = a.useRef(null), I = a.useRef(null), {
            status: P,
            buffer: y
        } = (0, c.CE)(j ? i.A : null), w = a.useContext(d.C), T = E ?? w.reducedMotion.enabled, S = {
            "--custom-glow-amount": `${b}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${N}deg`,
            "--custom-glow-opacity": +(0 !== b)
        };
        return (0, s.jsxs)("div", {
            id: n,
            ref: D,
            tabIndex: l,
            className: r()(h.k, C),
            style: S,
            onMouseEnter: A,
            children: [j && P !== c.BW.Loading && (0, s.jsx)(o.w, {
                buffer: y,
                artboard: f,
                artboardProperties: m,
                eventTargetRef: D,
                className: h.Q,
                ref: I,
                fit: R,
                withReducedMotion: T ? "halt" : "play"
            }), (0, s.jsx)(u.ZpM, {
                type: g ?? u.sl2.CUSTOM,
                className: _,
                style: p,
                children: t
            })]
        })
    }