/** chunk id: 20770, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
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
    _ = n(67480),
    g = n(163437),
    m = n(185438),
    A = n(572566),
    h = n(652215),
    p = n(985018),
    x = n(551934);

function E(e) {
    let {
        app: t,
        currentSubscription: n,
        currentListing: l,
        alternativeListings: m,
        navigateToHome: h,
        subscriptionGroup: E,
        renewalSkuId: S
    } = e, C = (0, r.A)(t, 100), f = (0, g.PJ)(E.flags), I = f ? a.RR9 : a.nys, b = f ? p.intl.string(p.t["46YF2D"]) : p.intl.string(p.t.fFyGiA), N = n.metadata?.application_subscription_guild_id, v = (0, s.bG)([u.A], () => f && null != N ? u.A.getGuild(N) : void 0, [N, f]), j = (0, s.bG)([_.A], () => {
        if (null != S) return _.A.get(S)
    }, [S]), O = (0, A.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
            className: x.wx,
            children: [null != C && (0, i.jsx)(a._V3, {
                src: C.href,
                imageClassName: x.Z2,
                width: 48,
                height: 48
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: t.name
                }), (0, i.jsxs)("div", {
                    className: x.p4,
                    children: [(0, i.jsxs)(a.Heading, {
                        variant: "heading-md/normal",
                        className: x.N4,
                        children: [(0, i.jsx)(I, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", b]
                    }), null != v && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, i.jsxs)("span", {
                            className: x.vP,
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
                className: x._B,
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
            className: x.x0,
            children: [(0, i.jsx)(d.A, {
                storeListing: l,
                className: x.o3,
                cta: (0, i.jsxs)("div", {
                    className: x.cJ,
                    children: [(0, i.jsx)(a.Text, {
                        variant: "eyebrow",
                        color: "text-brand",
                        children: p.intl.string(p.t.fHIpOY)
                    }), null != j && (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: p.intl.format(p.t["OQk+jr"], {
                            endDate: O
                        })
                    })]
                })
            }), m.map(e => e.skuId === S ? (0, i.jsx)(d.A, {
                storeListing: e,
                cta: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: p.intl.format(p.t.nn88hB, {
                        startDate: O
                    })
                })
            }, e.id) : (0, i.jsx)(T, {
                storeListing: e,
                guildId: N,
                navigateToHome: h
            }, e.id))]
        })]
    })
}

function T(e) {
    let {
        storeListing: t,
        guildId: n,
        navigateToHome: s
    } = e, {
        openModal: a
    } = (0, m.A)({
        analyticsLocation: h.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
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