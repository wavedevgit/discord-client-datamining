/** Chunk was on 5606 **/
/** chunk id: 749082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(524007),
    o = n(844222),
    c = n(786558),
    d = n(799226),
    u = n(397927),
    p = n(289440);
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
    m = e => {
        let {
            children: t,
            className: n,
            cardClassName: l,
            cardType: m,
            artboard: g = "BaseGlowRemapped",
            fit: f = "layout",
            glowAmount: b = 8,
            blurAmount: h = 30,
            hueRotate: A = 0,
            isReducedMotion: E
        } = e, x = i.useRef(null), O = i.useRef(null), {
            status: C,
            buffer: y
        } = (0, d.CE)(a.A), j = i.useContext(o.C), T = null != E ? E : j.reducedMotion.enabled;
        return (0, r.jsxs)("div", {
            ref: x,
            className: s()(p.kL, n),
            style: {
                "--custom-glow-amount": "".concat(b, "px"),
                "--custom-blur-amount": "".concat(h, "px"),
                "--custom-hue-rotate": "".concat(A, "deg")
            },
            children: [C !== d.BW.Loading && (0, r.jsx)(c.w, {
                buffer: y,
                artboard: g,
                artboardProperties: _,
                eventTargetRef: x,
                className: p.Q_,
                ref: O,
                fit: f,
                withReducedMotion: T ? "halt" : "play"
            }), (0, r.jsx)(u.ZpM, {
                type: null != m ? m : u.sl2.CUSTOM,
                className: s()(p.Nr, l),
                children: t
            })]
        })
    }