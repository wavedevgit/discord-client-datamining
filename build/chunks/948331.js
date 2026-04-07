/** chunk id: 948331 params = (module,exports,require) **/
n.d(t, {
    g: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(934551),
    a = n(158954),
    r = n(421380),
    o = n(397927),
    d = n(793574),
    c = n(404374),
    u = n(725807),
    h = n(927578),
    A = n(226017),
    _ = n(652215),
    m = n(788868),
    p = n(985018),
    g = n(707394),
    f = n(7410),
    x = n(936037);

function E() {
    return (0, A.A)() ? (0, i.jsx)("div", {
        className: g.do,
        children: (0, i.jsxs)("div", {
            className: g.U6,
            children: [(0, i.jsx)("img", {
                src: f,
                className: g.Sl,
                alt: ""
            }), (0, i.jsx)(o.Heading, {
                className: g.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: p.intl.string(p.t.erEf2g)
            }), (0, i.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: p.intl.string(p.t.NaRCXT)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: g.do,
        children: [(0, i.jsxs)("div", {
            className: g.U6,
            children: [(0, i.jsx)("img", {
                src: x,
                className: g.Sl,
                alt: ""
            }), (0, i.jsx)(o.Heading, {
                className: g.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: p.intl.string(p.t.w4DRbZ)
            }), (0, i.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: p.intl.string(p.t.F6u3E3)
            })]
        }), (0, i.jsx)(I, {})]
    })
}

function I() {
    let e = (0, h.Dd)(m.PremiumTypes.TIER_2),
        t = l.useCallback(() => (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("159").then(n.bind(n, 530951));
            return t => (0, i.jsx)(e, {
                source: d.A.FOR_LATER_POPOUT,
                ...t
            })
        }), []),
        A = p.intl.format(p.t.qXh3fo, {
            nitroTierName: e,
            onClick: t
        });
    return (0, i.jsxs)("div", {
        className: g.Zj,
        children: [(0, i.jsx)(s.NitroWheelIcon, {
            size: "md",
            color: c.k0.PREMIUM_TIER_2
        }), (0, i.jsx)(a.EYj, {
            variant: "text-xs/medium",
            color: "text-strong",
            className: g.tD,
            children: A
        }), (0, i.jsx)(u.A, {
            className: g.Oy,
            size: r.lO.TINY,
            shinyButtonClassName: g.Oy,
            subscriptionTier: m.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: _.JJy.FOR_LATER_POPOUT_UPSELL
            }
        })]
    })
}