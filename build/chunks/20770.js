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
    m = n(67480),
    g = n(163437),
    _ = n(185438),
    x = n(572566),
    h = n(652215),
    A = n(985018),
    p = n(386011);

function T(e) {
    let {
        app: t,
        currentSubscription: n,
        currentListing: l,
        alternativeListings: _,
        navigateToHome: h,
        subscriptionGroup: T,
        renewalSkuId: S
    } = e, E = (0, a.A)(t, 100), b = (0, g.PJ)(T.flags), C = b ? r.RR9 : r.nys, v = b ? A.intl.string(A.t["46YF2D"]) : A.intl.string(A.t.fFyGiA), N = n.metadata?.application_subscription_guild_id, I = (0, s.bG)([u.A], () => b && null != N ? u.A.getGuild(N) : void 0, [N, b]), j = (0, s.bG)([m.A], () => {
        if (null != S) return m.A.get(S)
    }, [S]), y = (0, x.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
            className: p.wx,
            children: [null != E && (0, i.jsx)(r._V3, {
                src: E.href,
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
                        children: [(0, i.jsx)(C, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", v]
                    }), null != I && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, i.jsxs)("span", {
                            className: p.vP,
                            children: [(0, i.jsx)(c.Ay, {
                                guild: I,
                                size: c.Ay.Sizes.SMOL
                            }), (0, i.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-muted",
                                children: A.intl.format(A.t["7ZD8p1"], {
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
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: A.intl.string(A.t["goe+hk"])
                }), e && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: A.intl.format(A.t["Q8qJ+5"], {})
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: A.intl.format(A.t.sqowYz, {})
                    })]
                }), (0, i.jsx)(o.A.Toggle, {
                    text: e ? A.intl.string(A.t["1Rkq/E"]) : A.intl.string(A.t.WsTHkY)
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
                        children: A.intl.string(A.t.fHIpOY)
                    }), null != j && (0, i.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: A.intl.format(A.t["OQk+jr"], {
                            endDate: y
                        })
                    })]
                })
            }), _.map(e => e.skuId === S ? (0, i.jsx)(d.A, {
                storeListing: e,
                cta: (0, i.jsx)(r.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: A.intl.format(A.t.nn88hB, {
                        startDate: y
                    })
                })
            }, e.id) : (0, i.jsx)(f, {
                storeListing: e,
                guildId: N,
                navigateToHome: h
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
        openModal: r
    } = (0, _.A)({
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
            text: A.intl.string(A.t["+KwmBt"]),
            onClick: r
        })
    })
}