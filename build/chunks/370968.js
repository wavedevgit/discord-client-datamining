/** Chunk was on web.js **/
/** chunk id: 370968, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(775602),
    c = n(607470),
    u = n(422936),
    d = n(234419),
    f = n(465794),
    p = n(811611),
    _ = n(652215),
    h = n(788868),
    m = n(985018),
    g = n(694230);
let E = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
    y = 32;

function b(e) {
    var t, n;
    let {
        onDismiss: i
    } = e, b = (0, s.bG)([l.A], () => l.A.useReducedMotion), O = m.intl.string(m.t.eikz43), v = (0, d.V)(), A = (0, u.O)(), I = (null == v ? void 0 : v.subscription_trial) != null || null != A, S = {
        object: _.ZSU.BUTTON_CTA,
        section: _.JJy.SUPER_REACTION_PICKER
    };
    return (0, r.jsxs)("div", {
        className: g.iE,
        children: [(0, r.jsx)(o.DUT, {
            onClick: i,
            className: g.b,
            "aria-label": m.intl.string(m.t.WAI6xu),
            children: (0, r.jsx)(o.PGe, {
                size: "md",
                color: "currentColor"
            })
        }), (0, r.jsxs)("div", {
            className: g.Qs,
            children: [(0, r.jsx)("div", {
                className: g.jo,
                children: (0, r.jsx)(c.A, {
                    className: a()(g.vK, {
                        [g.Vk]: I
                    }),
                    src: E,
                    loop: !0,
                    autoPlay: !b,
                    muted: !0,
                    controls: !0
                })
            }), I ? (0, r.jsx)(p.Ay, {
                type: h.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                subscriptionTier: null != (t = null == v || null == (n = v.subscription_trial) ? void 0 : n.sku_id) ? t : h.pe.TIER_2,
                headingText: m.intl.string(m.t.Wfl5zp),
                analyticsLocationObject: S,
                discountOffer: A,
                trialOffer: v,
                children: O
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)("div", {
                    className: g.wx,
                    children: [(0, r.jsx)(o.tvc, {
                        size: "custom",
                        color: "currentColor",
                        className: g.ax,
                        width: y,
                        height: y
                    }), (0, r.jsx)(o.Heading, {
                        className: g.TK,
                        variant: "heading-xl/bold",
                        children: m.intl.string(m.t.Wfl5zp)
                    })]
                }), (0, r.jsx)(o.Text, {
                    className: g.Fb,
                    variant: "text-md/normal",
                    children: O
                }), (0, r.jsx)("div", {
                    className: g.sk,
                    children: (0, r.jsx)(f.A, {
                        subscriptionTier: h.pe.TIER_2,
                        textOptions: {
                            textOverride: m.intl.string(m.t.sEAnVH)
                        }
                    })
                })]
            })]
        })]
    })
}