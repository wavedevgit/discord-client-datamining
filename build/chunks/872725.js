/** chunk id: 872725 params = (module,exports,require) **/
r.d(t, {
    A: () => f
});
var a = r(627968),
    n = r(64700),
    s = r(503698),
    i = r.n(s),
    l = r(524007),
    o = r(844222),
    d = r(786558),
    c = r(799226),
    u = r(397927),
    m = r(190152);
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
            tabIndex: s,
            className: f,
            cardClassName: h,
            cardStyle: b = p,
            cardType: x,
            artboard: g = "BaseGlowRemapped",
            fit: C = "layout",
            glowing: A = !1,
            glowAmount: R = 8,
            blurAmount: v = 30,
            hueRotate: j = 0,
            isReducedMotion: N,
            onMouseEnter: E
        } = e, I = n.useRef(null), y = n.useRef(null), {
            status: P,
            buffer: T
        } = (0, c.CE)(A ? l.A : null), S = n.useContext(o.C), w = N ?? S.reducedMotion.enabled, O = {
            "--custom-glow-amount": `${R}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${j}deg`,
            "--custom-glow-opacity": +(0 !== R)
        };
        return (0, a.jsxs)("div", {
            id: r,
            ref: I,
            tabIndex: s,
            className: i()(m.k, f),
            style: O,
            onMouseEnter: E,
            children: [A && P !== c.BW.Loading && (0, a.jsx)(d.w, {
                buffer: T,
                artboard: g,
                artboardProperties: _,
                eventTargetRef: I,
                className: m.Q,
                ref: y,
                fit: C,
                withReducedMotion: w ? "halt" : "play"
            }), (0, a.jsx)(u.ZpM, {
                type: x ?? u.sl2.CUSTOM,
                className: h,
                style: b,
                children: t
            })]
        })
    }