/** Chunk was on web.js **/
/** chunk id: 749082, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(524007),
    l = n(844222),
    c = n(786558),
    u = n(799226),
    d = n(397927),
    f = n(289440);
let p = {
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
    _ = e => {
        let {
            children: t,
            className: n,
            cardClassName: a,
            cardType: _,
            artboard: h = "BaseGlowRemapped",
            fit: m = "layout",
            glowAmount: g = 8,
            blurAmount: E = 30,
            isReducedMotion: y
        } = e, b = i.useRef(null), O = i.useRef(null), {
            status: v,
            buffer: A
        } = (0, u.CE)(o.A), I = i.useContext(l.C), S = null != y ? y : I.reducedMotion.enabled, T = {
            "--custom-glow-amount": "".concat(g, "px"),
            "--custom-blur-amount": "".concat(E, "px")
        };
        return (0, r.jsxs)("div", {
            ref: b,
            className: s()(f.kL, n),
            style: T,
            children: [v !== u.BW.Loading && (0, r.jsx)(c.w, {
                buffer: A,
                artboard: h,
                artboardProperties: p,
                eventTargetRef: b,
                className: f.Q_,
                ref: O,
                fit: m,
                withReducedMotion: S ? "halt" : "play"
            }), (0, r.jsx)(d.ZpM, {
                type: null != _ ? _ : d.sl2.CUSTOM,
                className: s()(f.Nr, a),
                children: t
            })]
        })
    }