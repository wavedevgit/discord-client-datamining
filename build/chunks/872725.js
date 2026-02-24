/** chunk id: 872725, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => x
});
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(524007),
    d = r(844222),
    o = r(786558),
    u = r(799226),
    c = r(397927),
    m = r(92949);
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
    p = {},
    x = e => {
        let {
            children: t,
            className: r,
            cardClassName: l,
            cardStyle: x = p,
            cardType: g,
            artboard: _ = "BaseGlowRemapped",
            fit: f = "layout",
            glowAmount: b = 8,
            blurAmount: N = 30,
            hueRotate: v = 0,
            isReducedMotion: R
        } = e, A = a.useRef(null), E = a.useRef(null), {
            status: C,
            buffer: T
        } = (0, u.CE)(i.A), j = a.useContext(d.C), I = R ?? j.reducedMotion.enabled, y = {
            "--custom-glow-amount": `${b}px`,
            "--custom-blur-amount": `${N}px`,
            "--custom-hue-rotate": `${v}deg`,
            "--custom-glow-opacity": +(0 !== b)
        };
        return (0, n.jsxs)("div", {
            ref: A,
            className: s()(m.k, r),
            style: y,
            children: [C !== u.BW.Loading && (0, n.jsx)(o.w, {
                buffer: T,
                artboard: _,
                artboardProperties: h,
                eventTargetRef: A,
                className: m.Q,
                ref: E,
                fit: f,
                withReducedMotion: I ? "halt" : "play"
            }), (0, n.jsx)(c.ZpM, {
                type: g ?? c.sl2.CUSTOM,
                className: l,
                style: x,
                children: t
            })]
        })
    }