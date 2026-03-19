/** chunk id: 879164 params = (module,exports,require) **/
s.d(t, {
    _: () => p
});
var l = s(627968);
s(64700);
var a = s(990078),
    n = s(397927),
    i = s(87719),
    r = s(857586),
    o = s(757036),
    d = s(954571),
    c = s(652215),
    u = s(788868),
    m = s(241015),
    _ = s(985018),
    x = s(886984);

function p(e) {
    let {
        onApply: t,
        onSurpriseMe: s,
        onClose: p,
        canApply: h
    } = e, g = (0, o.L)(u.PremiumTypes.TIER_2), f = (0, l.jsx)(n.Button, {
        variant: "secondary",
        size: "md",
        onClick: s,
        icon: {
            type: "rive",
            asset: n.mdx,
            riveProps: {
                dataBinding: {
                    fill: n.LU0.colors.ICON_STRONG
                }
            }
        },
        text: _.intl.string(m.default.NOGFds)
    }), N = (0, l.jsxs)("div", {
        className: x.k0,
        children: [f, (0, l.jsx)(a.m, {
            text: _.intl.string(m.default.cVTpnj),
            shouldShow: !h,
            children: (0, l.jsx)(n.Button, {
                onClick: t,
                disabled: !h,
                text: _.intl.string(_.t["1Qm822"]),
                variant: "primary",
                size: "md",
                fullWidth: !0
            })
        })]
    }), C = (0, l.jsxs)("div", {
        className: x.UX,
        children: [(0, l.jsxs)("div", {
            className: x.iQ,
            children: [(0, l.jsx)(a.m, {
                text: _.intl.string(_.t["5AFxuK"]),
                children: (0, l.jsx)(n.tvc, {
                    size: "md",
                    color: n.LU0.colors.ICON_STRONG
                })
            }), (0, l.jsx)(n.Text, {
                variant: "text-md/medium",
                color: "text-default",
                className: x.h_,
                children: _.intl.format(m.default.PWf0xS, {
                    onClickNitro: () => {
                        d.default.track(c.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, i.x)(p)
                    }
                })
            })]
        }), (0, l.jsxs)("div", {
            className: x.UD,
            children: [f, (0, l.jsx)(r.A, {
                premiumModalAnalyticsLocation: {
                    section: c.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                    object: c.ZSU.PREMIUM_UPSELL_BUTTON
                },
                subscriptionTier: u.pe.TIER_2
            })]
        })]
    });
    return (0, l.jsx)(n.jlY, {
        "data-migration-pending": !0,
        className: x.qr,
        children: g ? N : C
    })
}