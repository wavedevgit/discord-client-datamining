/** chunk id: 948331 params = (module,exports,require) **/
r.d(t, {
    g: () => m
});
var n = r(627968),
    s = r(64700),
    l = r(934551),
    a = r(158954),
    i = r(421380),
    o = r(397927),
    c = r(793574),
    u = r(404374),
    d = r(465794),
    h = r(927578),
    _ = r(226017),
    f = r(652215),
    S = r(788868),
    g = r(985018),
    E = r(939957),
    p = r(7410),
    A = r(936037);

function m() {
    return (0, _.A)() ? (0, n.jsx)("div", {
        className: E.do,
        children: (0, n.jsxs)("div", {
            className: E.U6,
            children: [(0, n.jsx)("img", {
                src: p,
                className: E.Sl,
                alt: ""
            }), (0, n.jsx)(o.Heading, {
                className: E.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: g.intl.string(g.t.erEf2g)
            }), (0, n.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: g.intl.string(g.t.NaRCXT)
            })]
        })
    }) : (0, n.jsxs)("div", {
        className: E.do,
        children: [(0, n.jsxs)("div", {
            className: E.U6,
            children: [(0, n.jsx)("img", {
                src: A,
                className: E.Sl,
                alt: ""
            }), (0, n.jsx)(o.Heading, {
                className: E.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: g.intl.string(g.t.w4DRbZ)
            }), (0, n.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: g.intl.string(g.t.F6u3E3)
            })]
        }), (0, n.jsx)(y, {})]
    })
}

function y() {
    let e = (0, h.Dd)(S.PremiumTypes.TIER_2),
        t = s.useCallback(() => (0, o.mMO)(async () => {
            let {
                default: e
            } = await r.e("22540").then(r.bind(r, 530951));
            return t => (0, n.jsx)(e, {
                source: c.A.FOR_LATER_POPOUT,
                ...t
            })
        }), []),
        _ = g.intl.format(g.t.qXh3fo, {
            nitroTierName: e,
            onClick: t
        });
    return (0, n.jsxs)("div", {
        className: E.Zj,
        children: [(0, n.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: u.k0.PREMIUM_TIER_2
        }), (0, n.jsx)(a.EYj, {
            variant: "text-xs/medium",
            color: "text-strong",
            className: E.tD,
            children: _
        }), (0, n.jsx)(d.A, {
            className: E.Oy,
            size: i.lO.TINY,
            shinyButtonClassName: E.Oy,
            subscriptionTier: S.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: f.JJy.FOR_LATER_POPOUT_UPSELL
            }
        })]
    })
}