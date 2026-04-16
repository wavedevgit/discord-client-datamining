/** chunk id: 879164 params = (module,exports,require) **/
a.d(t, {
    _: () => h
});
var n = a(627968);
a(64700);
var s = a(990078),
    l = a(397927),
    r = a(87719),
    i = a(465794),
    o = a(757036),
    c = a(954571),
    d = a(652215),
    u = a(788868),
    m = a(864386),
    _ = a(985018),
    p = a(277041);

function h(e) {
    let {
        onApply: t,
        onSurpriseMe: a,
        onClose: h,
        canApply: x
    } = e, g = (0, o.L)(u.PremiumTypes.TIER_2), f = (0, n.jsx)(l.Button, {
        variant: "secondary",
        size: "md",
        onClick: a,
        icon: {
            type: "rive",
            asset: l.mdx,
            riveProps: {
                dataBinding: {
                    fill: l.LU0.colors.ICON_STRONG
                }
            }
        },
        text: _.intl.string(m.default.NOGFds)
    }), C = (0, n.jsxs)("div", {
        className: p.k0,
        children: [f, (0, n.jsx)(s.m, {
            text: _.intl.string(m.default.cVTpnj),
            shouldShow: !x,
            children: (0, n.jsx)(l.Button, {
                onClick: t,
                disabled: !x,
                text: _.intl.string(_.t["1Qm822"]),
                variant: "primary",
                size: "md",
                fullWidth: !0
            })
        })]
    }), v = (0, n.jsxs)("div", {
        className: p.UX,
        children: [(0, n.jsxs)("div", {
            className: p.iQ,
            children: [(0, n.jsx)(s.m, {
                text: _.intl.string(_.t["5AFxuK"]),
                children: (0, n.jsx)(l.tvc, {
                    size: "md",
                    color: l.LU0.colors.ICON_STRONG
                })
            }), (0, n.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: p.h_,
                children: _.intl.format(m.default.PWf0xS, {
                    onClickNitro: () => {
                        c.default.track(d.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, r.x)(h)
                    }
                })
            })]
        }), (0, n.jsxs)("div", {
            className: p.UD,
            children: [f, (0, n.jsx)(i.A, {
                premiumModalAnalyticsLocation: {
                    section: d.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                    object: d.ZSU.PREMIUM_UPSELL_BUTTON
                },
                subscriptionTier: u.pe.TIER_2
            })]
        })]
    });
    return (0, n.jsx)(l.jlY, {
        "data-migration-pending": !0,
        className: p.qr,
        children: g ? C : v
    })
}