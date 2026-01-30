/** chunk id: 750112, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(508425),
    l = n(559949),
    c = n(311907),
    u = n(36075),
    d = n(397927),
    f = n(775602),
    p = n(816395),
    _ = n(824994),
    h = n(922301),
    m = n(566492),
    g = n(73392),
    E = n(564515);
let y = [l.x.CHERRY_BOMB, l.x.CHICLE],
    b = i.memo(function(e) {
        var t;
        let {
            userName: n,
            displayNameStyles: i,
            effectDisplayType: a = h.G.STATIC,
            inProfile: l = !1,
            textClassName: b,
            loop: v = !1,
            shouldWrap: A = !1,
            boldFontOpacity: I = 1,
            shouldUnderlineOnHover: S = !1
        } = e, T = (0, g.a)({
            displayNameStyles: i
        }), {
            useReducedMotion: C
        } = (0, c.cf)([f.A], () => ({
            useReducedMotion: f.A.useReducedMotion
        })), N = (0, _.W)({
            location: "UserNameWithEffects"
        }), w = (0, d.rdh)(d.LU0.colors.BACKGROUND_BASE_LOW).hex(), R = null != (t = null == i ? void 0 : i.effectId) ? t : s.z.SOLID, P = (0, d.Oer)(n), D = (0, u.CR)(P, R === s.z.TOON ? E.Zg : void 0), L = (0, p.H)({
            displayNameStyles: N ? i : null,
            backgroundColor: w
        });
        if (!N || null == i) return n;
        let x = (0, m.P)(R, L, {
                shouldWrap: A,
                fontOpacity: y.includes(i.fontId) ? I : 1
            }),
            M = O(R);
        return (0, r.jsxs)("div", {
            className: o()(E.kL, T, b, {
                [E.rD]: a !== h.G.PLAIN,
                [E.CS]: a === h.G.ANIMATED && !C,
                [E.HW]: v,
                [E.$E]: l
            }),
            style: x,
            children: [(0, r.jsx)("span", {
                "data-username-with-effects": P,
                className: o()(E.WH, null == M ? void 0 : M.effectClassName, {
                    [E._W]: S
                }),
                children: D
            }), (null == M ? void 0 : M.glowClassName) != null && (0, r.jsx)("span", {
                className: o()(E.l1, E.WH, M.glowClassName),
                "aria-hidden": !0,
                children: P
            })]
        })
    });

function O(e) {
    switch (e) {
        case s.z.GRADIENT:
        case s.z.GLOW:
            return {
                effectClassName: E.D7
            };
        case s.z.NEON:
            return {
                effectClassName: E.lw, glowClassName: E._4
            };
        case s.z.TOON:
            return {
                effectClassName: E.lQ
            };
        case s.z.POP:
            return {
                effectClassName: E.uY
            };
        case s.z.SOLID:
        default:
            return {
                effectClassName: E.QJ
            }
    }
}