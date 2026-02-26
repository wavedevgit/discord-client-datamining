/** chunk id: 872725, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(524007),
    d = n(844222),
    u = n(786558),
    o = n(799226),
    c = n(397927),
    m = n(511291);
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
    p = e => {
        let {
            children: t,
            className: n,
            cardClassName: l,
            cardStyle: p = x,
            cardType: _,
            artboard: f = "BaseGlowRemapped",
            fit: g = "layout",
            glowAmount: N = 8,
            blurAmount: b = 30,
            hueRotate: R = 0,
            isReducedMotion: E,
            onMouseEnter: v
        } = e, A = a.useRef(null), C = a.useRef(null), {
            status: T,
            buffer: j
        } = (0, o.CE)(i.A), y = a.useContext(d.C), P = E ?? y.reducedMotion.enabled, I = {
            "--custom-glow-amount": `${N}px`,
            "--custom-blur-amount": `${b}px`,
            "--custom-hue-rotate": `${R}deg`,
            "--custom-glow-opacity": +(0 !== N)
        };
        return (0, r.jsxs)("div", {
            ref: A,
            className: s()(m.k, n),
            style: I,
            onMouseEnter: v,
            children: [T !== o.BW.Loading && (0, r.jsx)(u.w, {
                buffer: j,
                artboard: f,
                artboardProperties: h,
                eventTargetRef: A,
                className: m.Q,
                ref: C,
                fit: g,
                withReducedMotion: P ? "halt" : "play"
            }), (0, r.jsx)(c.ZpM, {
                type: _ ?? c.sl2.CUSTOM,
                className: l,
                style: p,
                children: t
            })]
        })
    }