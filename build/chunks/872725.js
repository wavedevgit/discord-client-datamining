/** chunk id: 872725 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var r = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(524007),
    d = a(844222),
    o = a(786558),
    c = a(799226),
    u = a(397927),
    _ = a(640203);
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
    p = {},
    b = e => {
        let {
            children: t,
            id: a,
            tabIndex: i,
            className: b,
            cardClassName: f,
            cardStyle: g = p,
            cardType: h,
            artboard: A = "BaseGlowRemapped",
            fit: x = "layout",
            glowing: R = !1,
            glowAmount: C = 8,
            blurAmount: v = 30,
            hueRotate: E = 0,
            isReducedMotion: N,
            onMouseEnter: I
        } = e, S = n.useRef(null), y = n.useRef(null), {
            status: T,
            buffer: P
        } = (0, c.CE)(R ? l.A : null), D = n.useContext(d.C), j = N ?? D.reducedMotion.enabled, O = {
            "--custom-glow-amount": `${C}px`,
            "--custom-blur-amount": `${v}px`,
            "--custom-hue-rotate": `${E}deg`,
            "--custom-glow-opacity": +(0 !== C)
        };
        return (0, r.jsxs)("div", {
            id: a,
            ref: S,
            tabIndex: i,
            className: s()(_.k, b),
            style: O,
            onMouseEnter: I,
            children: [R && T !== c.BW.Loading && (0, r.jsx)(o.w, {
                buffer: P,
                artboard: A,
                artboardProperties: m,
                eventTargetRef: S,
                className: _.Q,
                ref: y,
                fit: x,
                withReducedMotion: j ? "halt" : "play"
            }), (0, r.jsx)(u.ZpM, {
                type: h ?? u.sl2.CUSTOM,
                className: f,
                style: g,
                children: t
            })]
        })
    }