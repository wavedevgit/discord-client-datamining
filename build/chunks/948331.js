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
    E = r(985018),
    g = r(316163),
    p = r(7410),
    A = r(936037);

function m() {
    return (0, _.A)() ? (0, n.jsx)("div", {
        className: g.do,
        children: (0, n.jsxs)("div", {
            className: g.U6,
            children: [(0, n.jsx)("img", {
                src: p,
                className: g.Sl,
                alt: ""
            }), (0, n.jsx)(o.Heading, {
                className: g.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: E.intl.string(E.t.erEf2g)
            }), (0, n.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: E.intl.string(E.t.NaRCXT)
            })]
        })
    }) : (0, n.jsxs)("div", {
        className: g.do,
        children: [(0, n.jsxs)("div", {
            className: g.U6,
            children: [(0, n.jsx)("img", {
                src: A,
                className: g.Sl,
                alt: ""
            }), (0, n.jsx)(o.Heading, {
                className: g.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: E.intl.string(E.t.w4DRbZ)
            }), (0, n.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: E.intl.string(E.t.F6u3E3)
            })]
        }), (0, n.jsx)(R, {})]
    })
}

function R() {
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
        _ = E.intl.format(E.t.qXh3fo, {
            nitroTierName: e,
            onClick: t
        });
    return (0, n.jsxs)("div", {
        className: g.Zj,
        children: [(0, n.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: u.k0.PREMIUM_TIER_2
        }), (0, n.jsx)(a.EYj, {
            variant: "text-xs/medium",
            color: "text-strong",
            className: g.tD,
            children: _
        }), (0, n.jsx)(d.A, {
            className: g.Oy,
            size: i.lO.TINY,
            shinyButtonClassName: g.Oy,
            subscriptionTier: S.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: f.JJy.FOR_LATER_POPOUT_UPSELL
            }
        })]
    })
}