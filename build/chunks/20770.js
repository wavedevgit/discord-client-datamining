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
    g = n(163437),
    _ = n(185438),
    x = n(572566),
    A = n(652215),
    h = n(985018),
    p = n(675403);

function T(e) {
    let {
        app: t,
        currentSubscription: n,
        currentListing: l,
        alternativeListings: _,
        navigateToHome: A,
        subscriptionGroup: T,
        renewalSkuId: S
    } = e, E = (0, r.A)(t, 100), b = (0, g.PJ)(T.flags), C = b ? a.RR9 : a.nys, N = b ? h.intl.string(h.t["46YF2D"]) : h.intl.string(h.t.fFyGiA), v = n.metadata?.application_subscription_guild_id, I = (0, s.bG)([u.A], () => b && null != v ? u.A.getGuild(v) : void 0, [v, b]), j = (0, s.bG)([m.A], () => {
        if (null != S) return m.A.get(S)
    }, [S]), y = (0, x.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
            className: p.wx,
            children: [null != E && (0, i.jsx)(a._V3, {
                src: E.href,
                imageClassName: p.Z2,
                width: 48,
                height: 48
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: t.name
                }), (0, i.jsxs)("div", {
                    className: p.p4,
                    children: [(0, i.jsxs)(a.Heading, {
                        variant: "heading-md/normal",
                        className: p.N4,
                        children: [(0, i.jsx)(C, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", N]
                    }), null != I && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, i.jsxs)("span", {
                            className: p.vP,
                            children: [(0, i.jsx)(c.Ay, {
                                guild: I,
                                size: c.Ay.Sizes.SMOL
                            }), (0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-muted",
                                children: h.intl.format(h.t["7ZD8p1"], {
                                    guildName: I.name
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }), (0, i.jsx)(o.A, {
            children: e => (0, i.jsxs)("div", {
                className: p._B,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: h.intl.string(h.t["goe+hk"])
                }), e && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: h.intl.format(h.t["Q8qJ+5"], {})
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: h.intl.format(h.t.sqowYz, {})
                    })]
                }), (0, i.jsx)(o.A.Toggle, {
                    text: e ? h.intl.string(h.t["1Rkq/E"]) : h.intl.string(h.t.WsTHkY)
                })]
            })
        }), (0, i.jsxs)("div", {
            className: p.x0,
            children: [(0, i.jsx)(d.A, {
                storeListing: l,
                className: p.o3,
                cta: (0, i.jsxs)("div", {
                    className: p.cJ,
                    children: [(0, i.jsx)(a.Text, {
                        variant: "eyebrow",
                        color: "text-brand",
                        children: h.intl.string(h.t.fHIpOY)
                    }), null != j && (0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: h.intl.format(h.t["OQk+jr"], {
                            endDate: y
                        })
                    })]
                })
            }), _.map(e => e.skuId === S ? (0, i.jsx)(d.A, {
                storeListing: e,
                cta: (0, i.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: h.intl.format(h.t.nn88hB, {
                        startDate: y
                    })
                })
            }, e.id) : (0, i.jsx)(f, {
                storeListing: e,
                guildId: v,
                navigateToHome: A
            }, e.id))]
        })]
    })
}

function f(e) {
    let {
        storeListing: t,
        guildId: n,
        navigateToHome: s
    } = e, {
        openModal: a
    } = (0, _.A)({
        analyticsLocation: A.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
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
            text: h.intl.string(h.t["+KwmBt"]),
            onClick: a
        })
    })
}