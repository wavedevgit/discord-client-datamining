/** chunk id: 227273 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(775602),
    c = n(793574),
    u = n(688810),
    m = n(800172),
    _ = n(953143),
    g = n(954571),
    A = n(52167),
    x = n(652215),
    p = n(985018),
    h = n(657989);
let f = e => {
        let {
            isShowingAll: t,
            onClick: n
        } = e;
        return (0, i.jsxs)(o.DUT, {
            onClick: n,
            className: h.customButton,
            children: [t ? p.intl.string(p.t.maZaN3) : p.intl.string(p.t["37C26f"]), t ? (0, i.jsx)(o.tN5, {
                size: "md",
                color: "currentColor",
                className: h.arrow
            }) : (0, i.jsx)(o.abt, {
                size: "md",
                color: "currentColor",
                className: h.arrow
            })]
        })
    },
    T = e => {
        let {
            title: t,
            description: n,
            className: s,
            imageSource: l,
            imageClassName: r,
            titleBadge: d,
            isNew: g = !1,
            isEarlyAccess: A = !1
        } = e, {
            analyticsLocations: x
        } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.f5, {
            value: x,
            children: (0, i.jsxs)("div", {
                className: a()(h.perkCard, s),
                children: [g ? (0, i.jsx)(_.A, {
                    className: h.perkCardNewBadge,
                    shouldInheritBackgroundColor: !0,
                    shouldInheritTextColor: !0
                }) : null, A ? (0, i.jsx)(m.A, {
                    className: h.perkCardEarlyAccessBadge
                }) : null, (0, i.jsx)("img", {
                    src: l,
                    alt: "",
                    className: a()(r, h.perksCardArt)
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(o.Heading, {
                        variant: "heading-lg/extrabold",
                        className: h.perkCardHeading,
                        children: [t, " ", d]
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: h.perkCardDescription,
                        children: "function" == typeof n ? n(x) : n
                    })]
                })]
            })
        })
    },
    E = e => {
        let {
            className: t,
            isSubscriberNitroHome: n = !1
        } = e, [l, c] = s.useState(!1), m = (0, A.d)({
            styles: h
        }), _ = (0, r.bG)([d.A], () => d.A.useReducedMotion), {
            analyticsLocations: E
        } = (0, u.Ay)(), S = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, m.videoBackground, m.superReactions, m.stickersPremiumPerk, m.badgeAlt];
        return (0, i.jsxs)("div", {
            className: a()(h.perksContainer, t, {
                [h.partiallyHidden]: n && !l,
                [h.subscriberNitroHome]: n,
                [h.reducedMotion]: _
            }),
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                className: h.perksTitle,
                children: n ? p.intl.string(p.t.QX14gI) : p.intl.string(p.t.RGadQR)
            }), (0, i.jsx)("div", {
                className: a()(h.perkCardContainer, {
                    [h.perkCardContainerExpanded]: l
                }),
                children: S.map(e => null != e && (0, i.jsx)(T, {
                    ...e
                }, e.title))
            }), n && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: a()({
                        [h.sizeGizmo]: !l,
                        [h.sizeGizmoExpanded]: l
                    }),
                    children: (0, i.jsx)(f, {
                        onClick: () => {
                            g.default.track(x.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                location_stack: E,
                                was_expanded: l
                            }), c(!l)
                        },
                        isShowingAll: l
                    })
                }), (0, i.jsx)("div", {
                    className: a()(h.cover, {
                        [h.hidden]: l
                    })
                })]
            })]
        })
    }