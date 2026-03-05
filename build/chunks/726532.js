/** chunk id: 726532, original params: e,t,n (module,exports,require) **/
n.d(t, {
    i: () => f,
    j: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(158032),
    o = n(954571),
    d = n(927578),
    c = n(427262),
    u = n(59784),
    _ = n(233317),
    g = n(622017),
    m = n(113090),
    A = n(752533),
    h = n(88001),
    p = n(652215),
    x = n(518582),
    E = n(985018),
    T = n(362169);
let S = () => (0, i.jsxs)(a.BJc, {
        direction: "horizontal",
        gap: 10,
        padding: {
            top: 12,
            bottom: 12
        },
        className: T.wx,
        children: [(0, i.jsx)(a.Heading, {
            variant: "display-md",
            className: T.Nd,
            children: (0, h.DP)()
        }), (0, i.jsx)(a.Exy, {
            type: "beta",
            variant: "expressive"
        })]
    }),
    C = e => {
        let {
            title: t,
            description: n,
            button: s
        } = e;
        return (0, i.jsxs)("div", {
            className: T.bh,
            children: [(0, i.jsxs)(a.BJc, {
                direction: "vertical",
                gap: 8,
                className: T.iQ,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: t
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: n
                })]
            }), (0, i.jsx)("div", {
                className: T.UD,
                children: s
            })]
        })
    },
    f = e => {
        let {
            currentUser: t
        } = e, {
            premiumGroupMembership: s,
            isLoading: l
        } = (0, m.A)(), {
            premiumGroupMembers: r,
            isLoading: o
        } = (0, g.A)(s?.subscriptionId ?? null);
        if (o || null == r || l || null == s) return (0, i.jsx)(a.y$y, {});
        let d = s.subscriptionId,
            u = s.currentPeriodEnd,
            {
                primary: _,
                members: f
            } = r,
            {
                title: I,
                description: b
            } = (() => {
                switch (s.subscriptionStatus) {
                    case p.Dmq.CANCELED:
                        return {
                            title: E.intl.string(x.default.mCwdPj), description: E.intl.format(x.default.wH9NYG, {
                                endDate: u
                            })
                        };
                    case p.Dmq.PAUSED:
                        return {
                            title: E.intl.string(x.default.IDyd1e), description: E.intl.format(x.default["8MfYhr"], {
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE
                            })
                        };
                    case p.Dmq.PAST_DUE:
                    case p.Dmq.ACCOUNT_HOLD:
                    case p.Dmq.BILLING_RETRY:
                        return {
                            title: E.intl.string(x.default.Duq8zp), description: E.intl.format(x.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, h.DP)()
                            })
                        };
                    default:
                        return {
                            title: E.intl.formatToPlainString(x.default.xiUjMF, {
                                premiumGroupProductName: (0, h.DP)()
                            }), description: E.intl.format(x.default["2HEyqG"], {
                                primaryName: (0, c.$3)(_),
                                premiumGroupProductName: (0, h.DP)(),
                                helpCenterLink: h.TE
                            })
                        }
                }
            })();
        return (0, i.jsxs)(a.hLv, {
            className: T.kL,
            color: "nitro-pink",
            children: [(0, i.jsx)(S, {}), (0, i.jsxs)("div", {
                className: T.wS,
                children: [(0, i.jsx)(C, {
                    title: I,
                    description: b,
                    button: (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        text: E.intl.string(x.default.NCu2JD),
                        onClick: () => {
                            (0, a.mMO)(async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e("41353"), n.e("78793")]).then(n.bind(n, 205463));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    premiumGroupSubscriptionId: d,
                                    currentUser: t
                                })
                            })
                        }
                    })
                }), (0, i.jsxs)(a.BJc, {
                    direction: "vertical",
                    padding: {
                        left: 32,
                        bottom: 12
                    },
                    gap: 0,
                    children: [(0, i.jsx)(a.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        className: T.Or,
                        children: E.intl.string(x.default["oqw/KW"])
                    }), (0, i.jsx)(A.U4, {
                        user: _,
                        isOwnUser: !1
                    }), f.map(e => (0, i.jsx)(A.YF, {
                        user: e,
                        isOwnUser: e.id === t?.id
                    }, e.id))]
                })]
            })]
        })
    },
    I = e => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: n,
            canInvite: s,
            onInvite: l,
            onRemoveMember: r,
            onRemoveInvitedUser: o,
            numTotalSeats: d,
            numUsedSeats: c,
            numAvailableInvites: u
        } = e;
        if (n || null == t) return (0, i.jsx)(a.y$y, {});
        let {
            primary: _,
            members: g,
            invitedUsers: m
        } = t;
        return (0, i.jsxs)(a.BJc, {
            direction: "vertical",
            padding: {
                left: 32,
                bottom: 12
            },
            gap: 0,
            children: [(0, i.jsxs)(a.BJc, {
                direction: "vertical",
                gap: 4,
                padding: {
                    top: 12,
                    left: 4,
                    right: 4,
                    bottom: 10
                },
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: E.intl.string(x.default["oqw/KW"])
                }), (0, i.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: E.intl.format(x.default["/a/UoP"], {
                        usedSeats: c,
                        totalSeats: d
                    })
                })]
            }), (0, i.jsx)(A.U4, {
                user: _,
                isOwnUser: !0
            }), g.map(e => (0, i.jsx)(A.MT, {
                user: e,
                onRemove: () => r(e)
            }, e.id)), m.map(e => (0, i.jsx)(A.Bs, {
                user: e,
                onRemove: () => o(e)
            }, e.id)), Array.from({
                length: u
            }).map((e, t) => (0, i.jsx)(A.XN, {
                onInvite: l,
                canInvite: s
            }, `seat-available-${t}`))]
        })
    },
    b = e => {
        let {
            subscription: t,
            analyticsLocations: c
        } = e, {
            premiumGroupMembers: m,
            isLoading: A
        } = (0, g.A)(t.id), {
            numAvailableInvites: f,
            numTotalSeats: b,
            numUsedSeats: N
        } = (0, l.cf)([_.A], () => ({
            numAvailableInvites: _.A.getNumAvailableInvites(),
            numTotalSeats: _.A.getNumTotalSeats(),
            numUsedSeats: _.A.getNumUsedSeats()
        })), [v, j] = s.useState(!1), {
            status: O
        } = t, R = s.useCallback(() => {
            (0, a.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: e
                } = await Promise.all([n.e("41353"), n.e("35432"), n.e("49561")]).then(n.bind(n, 281439));
                return n => (0, i.jsx)(e, {
                    ...n,
                    premiumSubscription: t,
                    analyticsLocations: c
                })
            })
        }, [t, c]), y = s.useCallback(async () => {
            j(!0), await (0, r.Ir)(t, c), j(!1)
        }, [t, c]), P = () => {
            o.default.track(p.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, {
                subscription_id: t.id
            }), (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("96368").then(n.bind(n, 773486));
                return n => (0, i.jsx)(e, {
                    ...n,
                    subscription: t
                })
            })
        }, L = s.useMemo(() => !h.BE.includes(t.status) && f > 0, [t.status, f]), {
            title: D,
            description: G
        } = (() => {
            switch (O) {
                case p.Dmq.CANCELED:
                    return {
                        title: E.intl.string(x.default.KME8Q6), description: E.intl.format(x.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, h.DP)()
                        })
                    };
                case p.Dmq.PAUSED:
                    return {
                        title: E.intl.string(x.default["4flKoC"]), description: E.intl.format(x.default["Q++BmO"], {
                            premiumGroupProductName: (0, h.DP)()
                        })
                    };
                case p.Dmq.PAST_DUE:
                case p.Dmq.ACCOUNT_HOLD:
                case p.Dmq.BILLING_RETRY:
                    return {
                        title: E.intl.string(x.default.cfeFEt), description: E.intl.format(x.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: h.TE
                        })
                    };
                default:
                    return {
                        title: E.intl.formatToPlainString(x.default.NRCfnQ, {
                            premiumGroupProductName: (0, h.DP)()
                        }), description: E.intl.format(x.default.lvnrnb, {
                            totalSeats: h.LM,
                            premiumGroupProductName: (0, h.DP)(),
                            helpCenterLink: h.TE
                        })
                    }
            }
        })();
        return (0, i.jsxs)(a.hLv, {
            className: T.kL,
            color: "nitro-pink",
            children: [(0, i.jsx)(S, {}), (0, i.jsxs)("div", {
                className: T.wS,
                children: [(0, i.jsx)(C, {
                    title: D,
                    description: G,
                    button: d.ki(t) ? (0, i.jsx)(a.Button, {
                        variant: "expressive",
                        size: "md",
                        text: E.intl.string(x.default.EFTJMQ),
                        onClick: y,
                        loading: v
                    }) : (0, i.jsxs)(a.BJc, {
                        direction: "vertical",
                        gap: 12,
                        children: [(0, i.jsx)(a.Button, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: E.intl.string(x.default.Tcmclj),
                            onClick: P,
                            disabled: !L
                        }), (0, i.jsx)(a.Button, {
                            variant: "secondary",
                            size: "md",
                            fullWidth: !0,
                            text: E.intl.string(x.default.oO0EYw),
                            onClick: R
                        })]
                    })
                }), (0, i.jsx)(I, {
                    premiumGroupMembers: m,
                    isLoadingPremiumGroupMembers: A,
                    canInvite: L,
                    onInvite: P,
                    onRemoveMember: e => {
                        o.default.track(p.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                            subscription_id: t.id,
                            member_user_id: e.id
                        }), (0, a.mMO)(async () => {
                            let {
                                default: s
                            } = await n.e("21305").then(n.bind(n, 391040));
                            return n => (0, i.jsx)(s, {
                                ...n,
                                subscriptionId: t.id,
                                member: e
                            })
                        })
                    },
                    onRemoveInvitedUser: e => {
                        o.default.track(p.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                            subscription_id: t.id,
                            invited_user_id: e.id
                        });
                        let s = u.A.getInviteByUserId(e.id)?.invite;
                        (0, a.mMO)(async () => {
                            let {
                                default: l
                            } = await n.e("15554").then(n.bind(n, 115225));
                            return n => (0, i.jsx)(l, {
                                ...n,
                                subscriptionId: t.id,
                                invitedUser: e,
                                subscriptionGroupMemberId: s?.id
                            })
                        })
                    },
                    numTotalSeats: b,
                    numUsedSeats: N,
                    numAvailableInvites: f
                })]
            })]
        })
    }