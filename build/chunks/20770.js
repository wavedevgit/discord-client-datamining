/** chunk id: 20770 params = (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(938796);
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(732955),
    a = n(397927),
    r = n(943775),
    o = n(147441),
    d = n(511968),
    c = n(263063),
    u = n(71393),
    m = n(67480),
    _ = n(163437),
    g = n(185438),
    A = n(572566),
    x = n(652215),
    p = n(985018),
    h = n(551934);

function T(e) {
    let {
        app: t,
        currentSubscription: n,
        currentListing: l,
        alternativeListings: g,
        navigateToHome: x,
        subscriptionGroup: T,
        renewalSkuId: f
    } = e, S = (0, r.A)(t, 100), C = (0, _.PJ)(T.flags), b = C ? a.RR9 : a.nys, N = C ? p.intl.string(p.t["46YF2D"]) : p.intl.string(p.t.fFyGiA), I = n.metadata?.application_subscription_guild_id, v = (0, s.bG)([u.A], () => C && null != I ? u.A.getGuild(I) : void 0, [I, C]), j = (0, s.bG)([m.A], () => {
        if (null != f) return m.A.get(f)
    }, [f]), y = (0, A.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
            className: h.wx,
            children: [null != S && (0, i.jsx)(a._V3, {
                src: S.href,
                imageClassName: h.Z2,
                width: 48,
                height: 48
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: t.name
                }), (0, i.jsxs)("div", {
                    className: h.p4,
                    children: [(0, i.jsxs)(a.Heading, {
                        variant: "heading-md/normal",
                        className: h.N4,
                        children: [(0, i.jsx)(b, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", N]
                    }), null != v && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, i.jsxs)("span", {
                            className: h.vP,
                            children: [(0, i.jsx)(c.Ay, {
                                guild: v,
                                size: c.Ay.Sizes.SMOL
                            }), (0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-muted",
                                children: p.intl.format(p.t["7ZD8p1"], {
                                    guildName: v.name
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }), (0, i.jsx)(o.A, {
            children: e => (0, i.jsxs)("div", {
                className: h._B,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: p.intl.string(p.t["goe+hk"])
                }), e && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: p.intl.format(p.t["Q8qJ+5"], {})
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: p.intl.format(p.t.sqowYz, {})
                    })]
                }), (0, i.jsx)(o.A.Toggle, {
                    text: e ? p.intl.string(p.t["1Rkq/E"]) : p.intl.string(p.t.WsTHkY)
                })]
            })
        }), (0, i.jsxs)("div", {
            className: h.x0,
            children: [(0, i.jsx)(d.A, {
                storeListing: l,
                className: h.o3,
                cta: (0, i.jsxs)("div", {
                    className: h.cJ,
                    children: [(0, i.jsx)(a.Text, {
                        variant: "eyebrow",
                        color: "text-brand",
                        children: p.intl.string(p.t.fHIpOY)
                    }), null != j && (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: p.intl.format(p.t["OQk+jr"], {
                            endDate: y
                        })
                    })]
                })
            }), g.map(e => e.skuId === f ? (0, i.jsx)(d.A, {
                storeListing: e,
                cta: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: p.intl.format(p.t.nn88hB, {
                        startDate: y
                    })
                })
            }, e.id) : (0, i.jsx)(E, {
                storeListing: e,
                guildId: I,
                navigateToHome: x
            }, e.id))]
        })]
    })
}

function E(e) {
    let {
        storeListing: t,
        guildId: n,
        navigateToHome: s
    } = e, {
        openModal: a
    } = (0, g.A)({
        analyticsLocation: x.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
        skuId: t.skuId,
        initialSubscribeForGuild: n,
        disableGuildSelector: !0,
        onComplete: s
    });
    return (0, i.jsx)(d.A, {
        storeListing: t,
        cta: (0, i.jsx)(l.$nd, {
            variant: "primary",
            size: "sm",
            text: p.intl.string(p.t["+KwmBt"]),
            onClick: a
        })
    })
}