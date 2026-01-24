/** Chunk was on 15682 **/
/** chunk id: 879164, original params: e,t,l (module,exports,require) **/
l.d(t, {
    _: () => g
}), l(228524);
var n = l(627968);
l(64700);
var r = l(990078),
    s = l(397927),
    a = l(87719),
    o = l(857586),
    i = l(757036),
    c = l(954571),
    d = l(652215),
    u = l(788868),
    m = l(927961),
    p = l(985018),
    f = l(127134);

function g(e) {
    let {
        onApply: t,
        onSurpriseMe: l,
        onClose: g,
        canApply: _
    } = e, x = (0, i.L)(u.PremiumTypes.TIER_2), b = (0, n.jsx)(s.Button, {
        variant: "secondary",
        size: "md",
        onClick: l,
        icon: {
            type: "rive",
            asset: s.mdx,
            riveProps: {
                dataBinding: {
                    fill: s.LU0.colors.ICON_STRONG
                }
            }
        },
        text: p.intl.string(m.default.NOGFds)
    }), h = (0, n.jsxs)("div", {
        className: f.k0,
        children: [b, (0, n.jsx)(r.m, {
            text: p.intl.string(m.default.cVTpnj),
            shouldShow: !_,
            children: (0, n.jsx)(s.Button, {
                onClick: t,
                disabled: !_,
                text: p.intl.string(p.t["1Qm822"]),
                variant: "primary",
                size: "md",
                fullWidth: !0
            })
        })]
    }), j = (0, n.jsxs)("div", {
        className: f.UX,
        children: [(0, n.jsxs)("div", {
            className: f.iQ,
            children: [(0, n.jsx)(r.m, {
                text: p.intl.string(p.t["5AFxuK"]),
                children: (0, n.jsx)(s.tvc, {
                    size: "md",
                    color: s.LU0.colors.ICON_STRONG
                })
            }), (0, n.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: f.h_,
                children: p.intl.format(m.default.PWf0xS, {
                    onClickNitro: () => {
                        c.default.track(d.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, a.x)(g)
                    }
                })
            })]
        }), (0, n.jsxs)("div", {
            className: f.UD,
            children: [b, (0, n.jsx)(o.A, {
                premiumModalAnalyticsLocation: {
                    section: d.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                    object: d.ZSU.PREMIUM_UPSELL_BUTTON
                },
                subscriptionTier: u.pe.TIER_2
            })]
        })]
    });
    return (0, n.jsx)(s.jlY, {
        "data-migration-pending": !0,
        className: f.qr,
        children: x ? h : j
    })
}