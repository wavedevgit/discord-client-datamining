/** Chunk was on 5606 **/
/** chunk id: 20770, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
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
    p = n(67480),
    _ = n(163437),
    m = n(185438),
    g = n(572566),
    f = n(652215),
    b = n(985018),
    h = n(551934);

function A(e) {
    var t;
    let {
        app: n,
        currentSubscription: l,
        currentListing: m,
        alternativeListings: f,
        navigateToHome: A,
        subscriptionGroup: x,
        renewalSkuId: O
    } = e, C = (0, a.A)(n, 100), y = (0, _.PJ)(x.flags), j = y ? s.RR9 : s.nys, T = y ? b.intl.string(b.t["46YF2D"]) : b.intl.string(b.t.fFyGiA), v = null == (t = l.metadata) ? void 0 : t.application_subscription_guild_id, S = (0, i.bG)([u.A], () => y && null != v ? u.A.getGuild(v) : void 0, [v, y]), I = (0, i.bG)([p.A], () => {
        if (null != O) return p.A.get(O)
    }, [O]), N = (0, g.Y)(l.currentPeriodEnd);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
            className: h.wx,
            children: [null != C && (0, r.jsx)(s._V3, {
                src: C.href,
                imageClassName: h.Z2,
                width: 48,
                height: 48
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: n.name
                }), (0, r.jsxs)("div", {
                    className: h.p4,
                    children: [(0, r.jsxs)(s.Heading, {
                        variant: "heading-md/normal",
                        className: h.N4,
                        children: [(0, r.jsx)(j, {
                            size: "xs",
                            color: "currentColor"
                        }), " ", T]
                    }), null != S && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: "•"
                        }), (0, r.jsxs)("span", {
                            className: h.vP,
                            children: [(0, r.jsx)(d.A, {
                                guild: S,
                                size: d.A.Sizes.SMOL
                            }), (0, r.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-muted",
                                children: b.intl.format(b.t["7ZD8p1"], {
                                    guildName: S.name
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }), (0, r.jsx)(o.A, {
            children: e => (0, r.jsxs)("div", {
                className: h._B,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: b.intl.string(b.t["goe+hk"])
                }), e && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: b.intl.format(b.t["Q8qJ+5"], {})
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: b.intl.format(b.t.sqowYz, {})
                    })]
                }), (0, r.jsx)(o.A.Toggle, {
                    text: e ? b.intl.string(b.t["1Rkq/E"]) : b.intl.string(b.t.WsTHkY)
                })]
            })
        }), (0, r.jsxs)("div", {
            className: h.x0,
            children: [(0, r.jsx)(c.A, {
                storeListing: m,
                className: h.o3,
                cta: (0, r.jsxs)("div", {
                    className: h.cJ,
                    children: [(0, r.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "text-brand",
                        children: b.intl.string(b.t.fHIpOY)
                    }), null != I && (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-subtle",
                        children: b.intl.format(b.t["OQk+jr"], {
                            endDate: N
                        })
                    })]
                })
            }), f.map(e => e.skuId === O ? (0, r.jsx)(c.A, {
                storeListing: e,
                cta: (0, r.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: b.intl.format(b.t.nn88hB, {
                        startDate: N
                    })
                })
            }, e.id) : (0, r.jsx)(E, {
                storeListing: e,
                guildId: v,
                navigateToHome: A
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
        analyticsLocation: f.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
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
            text: b.intl.string(b.t["+KwmBt"]),
            onClick: s
        })
    })
}