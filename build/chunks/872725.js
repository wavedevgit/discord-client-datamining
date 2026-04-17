/** chunk id: 872725 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var s = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
            tabIndex: a,
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
        } = e, D = r.useRef(null), P = r.useRef(null), {
            status: I,
            buffer: y
        } = (0, c.CE)(b ? i.A : null), T = r.useContext(d.C), w = E ?? T.reducedMotion.enabled, O = {
            "--custom-glow-amount": `${j}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${N}deg`,
            "--custom-glow-opacity": +(0 !== j)
        };
        return (0, s.jsxs)("div", {
            id: n,
            ref: D,
            tabIndex: a,
            className: l()(m.k, C),
            style: O,
            onMouseEnter: A,
            children: [b && I !== c.BW.Loading && (0, s.jsx)(o.w, {
                buffer: y,
                artboard: f,
                artboardProperties: h,
                eventTargetRef: D,
                className: m.Q,
                ref: P,
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