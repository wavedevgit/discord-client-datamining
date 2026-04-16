/** chunk id: 872725 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
            tabIndex: s,
            className: C,
            cardClassName: p,
            cardStyle: _ = x,
            cardType: g,
            artboard: f = "BaseGlowRemapped",
            fit: b = "layout",
            glowing: R = !1,
            glowAmount: j = 8,
            blurAmount: v = 30,
            hueRotate: A = 0,
            isReducedMotion: N,
            onMouseEnter: E
        } = e, P = l.useRef(null), D = l.useRef(null), {
            status: y,
            buffer: I
        } = (0, c.CE)(R ? i.A : null), T = l.useContext(d.C), S = N ?? T.reducedMotion.enabled, w = {
            "--custom-glow-amount": `${j}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${A}deg`,
            "--custom-glow-opacity": +(0 !== j)
        };
        return (0, r.jsxs)("div", {
            id: n,
            ref: P,
            tabIndex: s,
            className: a()(m.k, C),
            style: w,
            onMouseEnter: E,
            children: [R && y !== c.BW.Loading && (0, r.jsx)(o.w, {
                buffer: I,
                artboard: f,
                artboardProperties: h,
                eventTargetRef: P,
                className: m.Q,
                ref: D,
                fit: b,
                withReducedMotion: S ? "halt" : "play"
            }), (0, r.jsx)(u.ZpM, {
                type: g ?? u.sl2.CUSTOM,
                className: p,
                style: _,
                children: t
            })]
        })
    }