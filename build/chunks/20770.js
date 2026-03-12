/** chunk id: 20770 params = (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(938796);
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(732955),
    r = n(397927),
    a = n(943775),
    o = n(147441),
    d = n(511968),
    c = n(263063),
    u = n(71393),
    _ = n(67480),
    m = n(163437),
    g = n(185438),
    A = n(572566),
    h = n(652215),
    x = n(985018),
    p = n(103224);

function T(e) {
    let {
        app: t,
        currentSubscription: n,
        currentListing: l,
        alternativeListings: g,
        navigateToHome: h,
        subscriptionGroup: T,
        renewalSkuId: C
    } = e, S = (0, a.A)(t, 100), f = (0, m.PJ)(T.flags), N = f ? r.RR9 : r.nys, b = f ? x.intl.string(x.t["46YF2D"]) : x.intl.string(x.t.fFyGiA), I = n.metadata?.application_subscription_guild_id, v = (0, s.bG)([u.A], () => f && null != I ? u.A.getGuild(I) : void 0, [I, f]), j = (0, s.bG)([_.A], () => {
        if (null != C) return _.A.get(C)
    }, [C]), O = (0, A.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
            className: p.wx,
            children: [null != S && (0, i.jsx)(r._V3, {
                src: S.href,
                imageClassName: p.Z2,
                width: 48,
                height: 48
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    children: t.name
                }), (0, i.jsxs)("div", {
                    className: p.p4,
                    children: [(0, i.jsxs)(r.Heading, {
                        variant: "heading-md/normal",
                        className: p.N4,
                        children: [(0, i.jsx)(N, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", b]
                    }), null != v && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, i.jsxs)("span", {
                            className: p.vP,
                            children: [(0, i.jsx)(c.Ay, {
                                guild: v,
                                size: c.Ay.Sizes.SMOL
                            }), (0, i.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-muted",
                                children: x.intl.format(x.t["7ZD8p1"], {
                                    guildName: v.name
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }), (0, i.jsx)(o.A, {
            children: e => (0, i.jsxs)("div", {
                className: p._B,
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: x.intl.string(x.t["goe+hk"])
                }), e && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: x.intl.format(x.t["Q8qJ+5"], {})
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: x.intl.format(x.t.sqowYz, {})
                    })]
                }), (0, i.jsx)(o.A.Toggle, {
                    text: e ? x.intl.string(x.t["1Rkq/E"]) : x.intl.string(x.t.WsTHkY)
                })]
            })
        }), (0, i.jsxs)("div", {
            className: p.x0,
            children: [(0, i.jsx)(d.A, {
                storeListing: l,
                className: p.o3,
                cta: (0, i.jsxs)("div", {
                    className: p.cJ,
                    children: [(0, i.jsx)(r.Text, {
                        variant: "eyebrow",
                        color: "text-brand",
                        children: x.intl.string(x.t.fHIpOY)
                    }), null != j && (0, i.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: x.intl.format(x.t["OQk+jr"], {
                            endDate: O
                        })
                    })]
                })
            }), g.map(e => e.skuId === C ? (0, i.jsx)(d.A, {
                storeListing: e,
                cta: (0, i.jsx)(r.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: x.intl.format(x.t.nn88hB, {
                        startDate: O
                    })
                })
            }, e.id) : (0, i.jsx)(E, {
                storeListing: e,
                guildId: I,
                navigateToHome: h
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
        openModal: r
    } = (0, g.A)({
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
            text: x.intl.string(x.t["+KwmBt"]),
            onClick: r
        })
    })
}