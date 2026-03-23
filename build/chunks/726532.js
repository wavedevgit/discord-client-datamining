/** chunk id: 726532 params = (module,exports,require) **/
n.d(t, {
    i: () => C,
    j: () => N
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
    m = n(233317),
    _ = n(622017),
    g = n(113090),
    A = n(752533),
    x = n(88001),
    p = n(652215),
    h = n(519412),
    T = n(985018),
    E = n(546991);
let f = () => (0, i.jsxs)(a.BJc, {
        direction: "horizontal",
        gap: 10,
        padding: {
            top: 12,
            bottom: 12
        },
        className: E.wx,
        children: [(0, i.jsx)(a.Heading, {
            variant: "display-md",
            className: E.Nd,
            children: (0, x.DP)()
        }), (0, i.jsx)(a.Exy, {
            type: "beta",
            variant: "expressive"
        })]
    }),
    S = e => {
        let {
            title: t,
            description: n,
            button: s
        } = e;
        return (0, i.jsxs)("div", {
            className: E.bh,
            children: [(0, i.jsxs)(a.BJc, {
                direction: "vertical",
                gap: 8,
                className: E.iQ,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: t
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: n
                })]
            }), (0, i.jsx)("div", {
                className: E.UD,
                children: s
            })]
        })
    },
    C = e => {
        let {
            currentUser: t
        } = e, {
            premiumGroupMembership: s,
            isLoading: l
        } = (0, g.A)(), {
            premiumGroupMembers: r,
            isLoading: o
        } = (0, _.A)(s?.subscriptionId ?? null);
        if (o || null == r || l || null == s) return (0, i.jsx)(a.y$y, {});
        let d = s.subscriptionId,
            u = s.currentPeriodEnd,
            {
                primary: m,
                members: C
            } = r,
            {
                title: b,
                description: N
            } = (() => {
                switch (s.subscriptionStatus) {
                    case p.Dmq.CANCELED:
                        return {
                            title: T.intl.string(h.default.mCwdPj), description: T.intl.format(h.default.wH9NYG, {
                                endDate: u
                            })
                        };
                    case p.Dmq.PAUSED:
                        return {
                            title: T.intl.string(h.default.IDyd1e), description: T.intl.format(h.default["8MfYhr"], {
                                premiumGroupProductName: (0, x.DP)(),
                                helpCenterLink: x.TE
                            })
                        };
                    case p.Dmq.PAST_DUE:
                    case p.Dmq.ACCOUNT_HOLD:
                    case p.Dmq.BILLING_RETRY:
                        return {
                            title: T.intl.string(h.default.Duq8zp), description: T.intl.format(h.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, x.DP)()
                            })
                        };
                    default:
                        return {
                            title: T.intl.formatToPlainString(h.default.xiUjMF, {
                                premiumGroupProductName: (0, x.DP)()
                            }), description: T.intl.format(h.default["2HEyqG"], {
                                primaryName: (0, c.$3)(m),
                                premiumGroupProductName: (0, x.DP)(),
                                helpCenterLink: x.TE
                            })
                        }
                }
            })();
        return (0, i.jsxs)(a.hLv, {
            className: E.kL,
            color: "nitro-pink",
            children: [(0, i.jsx)(f, {}), (0, i.jsxs)("div", {
                className: E.wS,
                children: [(0, i.jsx)(S, {
                    title: b,
                    description: N,
                    button: (0, i.jsx)(a.Button, {
                        variant: "secondary",
                        text: T.intl.string(h.default.NCu2JD),
                        onClick: () => {
                            (0, a.mMO)(async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e("41353"), n.e("40573")]).then(n.bind(n, 205463));
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
                        className: E.Or,
                        children: T.intl.string(h.default["oqw/KW"])
                    }), (0, i.jsx)(A.U4, {
                        user: m,
                        isOwnUser: !1
                    }), C.map(e => (0, i.jsx)(A.YF, {
                        user: e,
                        isOwnUser: e.id === t?.id
                    }, e.id))]
                })]
            })]
        })
    },
    b = e => {
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
            primary: m,
            members: _,
            invitedUsers: g
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
                    children: T.intl.string(h.default["oqw/KW"])
                }), (0, i.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: T.intl.format(h.default["/a/UoP"], {
                        usedSeats: c,
                        totalSeats: d
                    })
                })]
            }), (0, i.jsx)(A.U4, {
                user: m,
                isOwnUser: !0
            }), _.map(e => (0, i.jsx)(A.MT, {
                user: e,
                onRemove: () => r(e)
            }, e.id)), g.map(e => (0, i.jsx)(A.Bs, {
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
    N = e => {
        let {
            subscription: t,
            analyticsLocations: c
        } = e, {
            premiumGroupMembers: g,
            isLoading: A
        } = (0, _.A)(t.id), {
            numAvailableInvites: C,
            numTotalSeats: N,
            numUsedSeats: I
        } = (0, l.cf)([m.A], () => ({
            numAvailableInvites: m.A.getNumAvailableInvites(),
            numTotalSeats: m.A.getNumTotalSeats(),
            numUsedSeats: m.A.getNumUsedSeats()
        })), [v, j] = s.useState(!1), {
            status: y
        } = t, O = s.useCallback(() => {
            (0, a.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: e
                } = await Promise.all([n.e("41353"), n.e("35432"), n.e("82383")]).then(n.bind(n, 281439));
                return n => (0, i.jsx)(e, {
                    ...n,
                    premiumSubscription: t,
                    analyticsLocations: c
                })
            })
        }, [t, c]), R = s.useCallback(async () => {
            j(!0), await (0, r.Ir)(t, c), j(!1)
        }, [t, c]), L = () => {
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
        }, P = s.useMemo(() => !x.BE.includes(t.status) && C > 0, [t.status, C]), {
            title: D,
            description: M
        } = (() => {
            switch (y) {
                case p.Dmq.CANCELED:
                    return {
                        title: T.intl.string(h.default.KME8Q6), description: T.intl.format(h.default["1sNA+Y"], {
                            endDate: t.currentPeriodEnd,
                            premiumGroupProductName: (0, x.DP)()
                        })
                    };
                case p.Dmq.PAUSED:
                    return {
                        title: T.intl.string(h.default["4flKoC"]), description: T.intl.format(h.default["Q++BmO"], {
                            premiumGroupProductName: (0, x.DP)()
                        })
                    };
                case p.Dmq.PAST_DUE:
                case p.Dmq.ACCOUNT_HOLD:
                case p.Dmq.BILLING_RETRY:
                    return {
                        title: T.intl.string(h.default.cfeFEt), description: T.intl.format(h.default["5+LPUW"], {
                            endDate: t.currentPeriodEnd,
                            helpCenterLink: x.TE
                        })
                    };
                default:
                    return {
                        title: T.intl.formatToPlainString(h.default.NRCfnQ, {
                            premiumGroupProductName: (0, x.DP)()
                        }), description: T.intl.format(h.default.lvnrnb, {
                            totalSeats: x.LM,
                            premiumGroupProductName: (0, x.DP)(),
                            helpCenterLink: x.TE
                        })
                    }
            }
        })();
        return (0, i.jsxs)(a.hLv, {
            className: E.kL,
            color: "nitro-pink",
            children: [(0, i.jsx)(f, {}), (0, i.jsxs)("div", {
                className: E.wS,
                children: [(0, i.jsx)(S, {
                    title: D,
                    description: M,
                    button: d.ki(t) ? (0, i.jsx)(a.Button, {
                        variant: "expressive",
                        size: "md",
                        text: T.intl.string(h.default.EFTJMQ),
                        onClick: R,
                        loading: v
                    }) : (0, i.jsxs)(a.BJc, {
                        direction: "vertical",
                        gap: 12,
                        children: [(0, i.jsx)(a.Button, {
                            variant: "primary",
                            size: "md",
                            fullWidth: !0,
                            text: T.intl.string(h.default.Tcmclj),
                            onClick: L,
                            disabled: !P
                        }), (0, i.jsx)(a.Button, {
                            variant: "secondary",
                            size: "md",
                            fullWidth: !0,
                            text: T.intl.string(h.default.oO0EYw),
                            onClick: O
                        })]
                    })
                }), (0, i.jsx)(b, {
                    premiumGroupMembers: g,
                    isLoadingPremiumGroupMembers: A,
                    canInvite: P,
                    onInvite: L,
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
                    numTotalSeats: N,
                    numUsedSeats: I,
                    numAvailableInvites: C
                })]
            })]
        })
    }