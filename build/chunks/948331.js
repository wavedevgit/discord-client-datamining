/** chunk id: 948331, original params: e,t,r (module,exports,require) **/
r.d(t, {
    g: () => R
});
var s = r(627968),
    n = r(64700),
    l = r(934551),
    a = r(158954),
    i = r(421380),
    o = r(397927),
    u = r(793574),
    c = r(404374),
    d = r(465794),
    h = r(927578),
    _ = r(226017),
    S = r(652215),
    E = r(788868),
    f = r(985018),
    g = r(316163),
    A = r(7410),
    p = r(936037);

function R() {
    return (0, _.A)() ? (0, s.jsx)("div", {
        className: g.do,
        children: (0, s.jsxs)("div", {
            className: g.U6,
            children: [(0, s.jsx)("img", {
                src: A,
                className: g.Sl,
                alt: ""
            }), (0, s.jsx)(o.Heading, {
                className: g.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: f.intl.string(f.t.erEf2g)
            }), (0, s.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: f.intl.string(f.t.NaRCXT)
            })]
        })
    }) : (0, s.jsxs)("div", {
        className: g.do,
        children: [(0, s.jsxs)("div", {
            className: g.U6,
            children: [(0, s.jsx)("img", {
                src: p,
                className: g.Sl,
                alt: ""
            }), (0, s.jsx)(o.Heading, {
                className: g.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: f.intl.string(f.t.w4DRbZ)
            }), (0, s.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: f.intl.string(f.t.F6u3E3)
            })]
        }), (0, s.jsx)(m, {})]
    })
}

function m() {
    let e = (0, h.Dd)(E.PremiumTypes.TIER_2),
        t = n.useCallback(() => (0, o.mMO)(async () => {
            let {
                default: e
            } = await r.e("22540").then(r.bind(r, 530951));
            return t => (0, s.jsx)(e, {
                source: u.A.FOR_LATER_POPOUT,
                ...t
            })
        }), []),
        _ = f.intl.format(f.t.qXh3fo, {
            nitroTierName: e,
            onClick: t
        });
    return (0, s.jsxs)("div", {
        className: g.Zj,
        children: [(0, s.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: c.k0.PREMIUM_TIER_2
        }), (0, s.jsx)(a.EYj, {
            variant: "text-xs/medium",
            color: "text-strong",
            className: g.tD,
            children: _
        }), (0, s.jsx)(d.A, {
            className: g.Oy,
            size: i.lO.TINY,
            shinyButtonClassName: g.Oy,
            subscriptionTier: E.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: S.JJy.FOR_LATER_POPOUT_UPSELL
            }
        })]
    })
}