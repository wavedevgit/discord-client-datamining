/** chunk id: 872725, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    i = n(524007),
    d = n(844222),
    u = n(786558),
    o = n(799226),
    c = n(397927),
    m = n(92949);
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
    R = {},
    h = e => {
        let {
            children: t,
            className: n,
            cardClassName: s,
            cardStyle: h = R,
            cardType: p,
            artboard: x = "BaseGlowRemapped",
            fit: A = "layout",
            glowAmount: E = 8,
            blurAmount: f = 30,
            hueRotate: N = 0,
            isReducedMotion: C,
            onMouseEnter: g
        } = e, b = a.useRef(null), D = a.useRef(null), {
            status: I,
            buffer: v
        } = (0, o.CE)(i.A), S = a.useContext(d.C), T = C ?? S.reducedMotion.enabled, O = {
            "--custom-glow-amount": `${E}px`,
            "--custom-blur-amount": `${f}px`,
            "--custom-hue-rotate": `${N}deg`,
            "--custom-glow-opacity": +(0 !== E)
        };
        return (0, r.jsxs)("div", {
            ref: b,
            className: l()(m.k, n),
            style: O,
            onMouseEnter: g,
            children: [I !== o.BW.Loading && (0, r.jsx)(u.w, {
                buffer: v,
                artboard: x,
                artboardProperties: _,
                eventTargetRef: b,
                className: m.Q,
                ref: D,
                fit: A,
                withReducedMotion: T ? "halt" : "play"
            }), (0, r.jsx)(c.ZpM, {
                type: p ?? c.sl2.CUSTOM,
                className: s,
                style: h,
                children: t
            })]
        })
    }