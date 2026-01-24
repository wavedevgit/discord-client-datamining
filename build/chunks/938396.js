/** Chunk was on web.js **/
/** chunk id: 938396, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
});
var r = n(627968),
    i = n(64700),
    a = n(892227),
    s = n(311907),
    o = n(964892),
    l = n(916845),
    c = n(732955),
    u = n(775602),
    d = n(607470),
    f = n(895944),
    p = n(649032),
    _ = n(309954),
    h = n(287809),
    m = n(975571),
    g = n(474090),
    E = n(385243),
    y = n(788868),
    b = n(652215),
    O = n(49370),
    v = n(985018),
    A = n(125634),
    I = n(268920),
    S = n(633217),
    T = n(909340);
let C = () => {
        let e = (0, s.bG)([u.A], () => u.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: A.s,
            children: e ? (0, r.jsx)("img", {
                src: I.A,
                className: A.Cb,
                alt: "Orb"
            }) : (0, r.jsxs)(d.A, {
                autoPlay: !0,
                loop: !0,
                className: A.Cb,
                children: [(0, r.jsx)("source", {
                    src: S.A,
                    type: "video/webm"
                }), (0, r.jsx)("img", {
                    src: I.A,
                    className: A.Cb,
                    alt: "Orb"
                })]
            })
        })
    },
    N = 4100;

function w(e) {
    let {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: I,
        ctaText: S,
        ctaOnClick: w
    } = e, R = (0, s.bG)([u.A], () => u.A.useReducedMotion), P = (0, s.bG)([f.A], () => f.A.getRewardForProgram(p.W.NITRO)), D = (0, s.bG)([h.default], () => h.default.getCurrentUser()), {
        balance: x
    } = (0, _.W)(), L = i.useMemo(() => {
        let e = (0, g.YE)(D, y.PremiumTypes.TIER_2),
            t = !(0, g.ki)(D);
        if (!f.A.passesGeneralUIInvariant(p.W.NITRO)) return null;
        if (t) return (0, r.jsx)(c.EYj, {
            variant: "text-xs/normal",
            color: "text-default",
            children: v.intl.format(O.default.cjEl8a, {
                deepLinkToNitroOrbs: () => {}
            })
        });
        if (e && null != P) {
            let e = (0, a.default)(new Date(P.next_reward_date), new Date);
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.EYj, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: v.intl.format(O.default["AvL/At"], {
                        days: Math.max(1, e),
                        deepLinkToNitroOrbs: () => {}
                    })
                }), (0, r.jsx)(E.A, {})]
            })
        }
        return null
    }, [D, P]);
    return (0, r.jsxs)(o.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: I,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: [(null != x ? x : 0) >= N && (0, r.jsx)(d.A, {
            autoPlay: !R,
            loop: !R,
            muted: !0,
            playsInline: !0,
            tabIndex: -1,
            className: A.yG,
            src: T.A
        }), (0, r.jsxs)("div", {
            className: A.Qs,
            children: [(0, r.jsx)(l.q, {
                onClick: I
            }), (0, r.jsxs)("div", {
                className: A.hQ,
                children: [(0, r.jsx)(C, {}), (0, r.jsxs)("div", {
                    className: A.y$,
                    children: [(0, r.jsxs)("div", {
                        className: A.E2,
                        children: [(0, r.jsx)(c.EYj, {
                            variant: "display-lg",
                            className: A.K,
                            children: null != x ? x : 0
                        }), (null != x ? x : 0) > 0 && (0, r.jsx)(c.EYj, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: v.intl.string(O.default.KclK9z)
                        })]
                    }), L]
                }), (0, r.jsx)(c.$nd, {
                    text: S,
                    variant: "primary",
                    size: "sm",
                    onClick: w,
                    fullWidth: !0
                }), (0, r.jsx)(c.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: A.CU,
                    children: v.intl.format(O.default.fhAVek, {
                        helpdeskArticle: m.A.getArticleURL(b.MVz.ORBS_FAQ)
                    })
                })]
            })]
        })]
    })
}