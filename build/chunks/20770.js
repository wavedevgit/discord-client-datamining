/** chunk id: 20770, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(938796);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(732955),
    s = n(397927),
    a = n(943775),
    o = n(147441),
    c = n(511968),
    d = n(263063),
    u = n(71393),
    _ = n(67480),
    p = n(163437),
    m = n(185438),
    g = n(572566),
    A = n(652215),
    f = n(985018),
    b = n(551934);

function h(e) {
    var t;
    let {
        app: n,
        currentSubscription: l,
        currentListing: m,
        alternativeListings: A,
        navigateToHome: h,
        subscriptionGroup: O,
        renewalSkuId: C
    } = e, x = (0, a.A)(n, 100), S = (0, p.PJ)(O.flags), T = S ? s.RR9 : s.nys, I = S ? f.intl.string(f.t["46YF2D"]) : f.intl.string(f.t.fFyGiA), y = null == (t = l.metadata) ? void 0 : t.application_subscription_guild_id, N = (0, i.bG)([u.A], () => S && null != y ? u.A.getGuild(y) : void 0, [y, S]), j = (0, i.bG)([_.A], () => {
        if (null != C) return _.A.get(C)
    }, [C]), v = (0, g.Y)(l.currentPeriodEnd);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
            className: b.wx,
            children: [null != x && (0, r.jsx)(s._V3, {
                src: x.href,
                imageClassName: b.Z2,
                width: 48,
                height: 48
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: n.name
                }), (0, r.jsxs)("div", {
                    className: b.p4,
                    children: [(0, r.jsxs)(s.Heading, {
                        variant: "heading-md/normal",
                        className: b.N4,
                        children: [(0, r.jsx)(T, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", I]
                    }), null != N && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, r.jsxs)("span", {
                            className: b.vP,
                            children: [(0, r.jsx)(d.A, {
                                guild: N,
                                size: d.A.Sizes.SMOL
                            }), (0, r.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-muted",
                                children: f.intl.format(f.t["7ZD8p1"], {
                                    guildName: N.name
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }), (0, r.jsx)(o.A, {
            children: e => (0, r.jsxs)("div", {
                className: b._B,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: f.intl.string(f.t["goe+hk"])
                }), e && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: f.intl.format(f.t["Q8qJ+5"], {})
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: f.intl.format(f.t.sqowYz, {})
                    })]
                }), (0, r.jsx)(o.A.Toggle, {
                    text: e ? f.intl.string(f.t["1Rkq/E"]) : f.intl.string(f.t.WsTHkY)
                })]
            })
        }), (0, r.jsxs)("div", {
            className: b.x0,
            children: [(0, r.jsx)(c.A, {
                storeListing: m,
                className: b.o3,
                cta: (0, r.jsxs)("div", {
                    className: b.cJ,
                    children: [(0, r.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "text-brand",
                        children: f.intl.string(f.t.fHIpOY)
                    }), null != j && (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: f.intl.format(f.t["OQk+jr"], {
                            endDate: v
                        })
                    })]
                })
            }), A.map(e => e.skuId === C ? (0, r.jsx)(c.A, {
                storeListing: e,
                cta: (0, r.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: f.intl.format(f.t.nn88hB, {
                        startDate: v
                    })
                })
            }, e.id) : (0, r.jsx)(E, {
                storeListing: e,
                guildId: y,
                navigateToHome: h
            }, e.id))]
        })]
    })
}

function E(e) {
    let {
        storeListing: t,
        guildId: n,
        navigateToHome: i
    } = e, {
        openModal: s
    } = (0, m.A)({
        analyticsLocation: A.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
        skuId: t.skuId,
        initialSubscribeForGuild: n,
        disableGuildSelector: !0,
        onComplete: i
    });
    return (0, r.jsx)(c.A, {
        storeListing: t,
        cta: (0, r.jsx)(l.$nd, {
            variant: "primary",
            size: "sm",
            text: f.intl.string(f.t["+KwmBt"]),
            onClick: s
        })
    })
}