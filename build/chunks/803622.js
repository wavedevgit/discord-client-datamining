/** chunk id: 803622, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(607399),
    o = n(311907),
    c = n(397927),
    u = n(49229),
    d = n(793574),
    h = n(573435),
    p = n(327166),
    f = n(157550),
    m = n(471271),
    g = n(957283),
    A = n(772659),
    b = n(138298),
    _ = n(622543),
    y = n(657331),
    v = n(761640),
    E = n(994500),
    O = n(287809),
    C = n(486020),
    x = n(302975),
    S = n(652215),
    j = n(518477),
    I = n(985018),
    T = n(228288);
let N = e => {
        let {
            userId: t,
            channelId: n
        } = e, i = (0, o.bG)([_.A], () => _.A.getMutualGuilds(t), [t]), a = r.useMemo(() => null != i ? i.slice(0, 3).map((e, t) => {
            let {
                guild: n
            } = e, r = null != n ? C.Ay.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 24
            }) : null;
            if (null == r) return null;
            let a = t === (i.length > 3 ? 3 : i.length) - 1,
                s = (0, l.jsx)("img", {
                    src: r,
                    alt: "",
                    className: T.my
                }, t);
            return a ? s : (0, l.jsx)(h.Ay, {
                className: T.cp,
                mask: h.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                width: 24,
                height: 24,
                children: s
            }, t)
        }).filter(e => null != e) : [], [i]);
        return null == i || 0 === i.length ? (0, l.jsx)(c.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: I.intl.string(I.t.zjVh8h)
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: T.H,
                children: a
            }), (0, l.jsx)(c.DUT, {
                onClick: () => {
                    (0, y.openUserProfileModal)({
                        userId: t,
                        channelId: n,
                        tabSection: j.RP.MUTUAL_GUILDS,
                        sourceAnalyticsLocations: [d.A.DM_CHANNEL]
                    })
                },
                children: (0, l.jsx)(c.Text, {
                    className: T.tE,
                    variant: "text-sm/normal",
                    children: I.intl.format(I.t.eE3oep, {
                        count: i.length
                    })
                })
            })]
        })
    },
    P = e => {
        var t;
        let {
            relationshipType: n,
            userId: r,
            showingBanner: i
        } = e, a = null == (t = O.default.getUser(r)) ? void 0 : t.bot, s = () => {
            u.A.addRelationship({
                userId: r,
                context: {
                    location: S.liQ.DM_CHANNEL
                }
            })
        }, o = (0, l.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
                u.A.blockUser(r, {
                    location: S.liQ.DM_CHANNEL
                })
            },
            text: I.intl.string(I.t.l4Emac)
        }), d = (0, p.D)(r);
        switch (n) {
            case S.eA$.NONE:
                return (0, l.jsxs)(l.Fragment, {
                    children: [!a && !i && (0, l.jsx)(c.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: s,
                        text: d
                    }), o]
                });
            case S.eA$.FRIEND:
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(c.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                            u.A.removeFriend(r, {
                                location: S.liQ.DM_CHANNEL
                            })
                        },
                        text: I.intl.string(I.t.cvSt1J)
                    }), o]
                });
            case S.eA$.BLOCKED:
                return (0, l.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        u.A.unblockUser(r, {
                            location: S.liQ.DM_CHANNEL
                        })
                    },
                    text: I.intl.string(I.t.XyHpKH)
                });
            case S.eA$.PENDING_INCOMING:
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(c.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: s,
                        text: I.intl.string(I.t["+WbSn5"])
                    }), (0, l.jsx)(c.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                            u.A.cancelFriendRequest(r, {
                                location: S.liQ.DM_CHANNEL
                            })
                        },
                        text: I.intl.string(I.t.rQSndv)
                    }), o]
                });
            case S.eA$.PENDING_OUTGOING:
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(c.Button, {
                        size: "sm",
                        variant: "primary",
                        disabled: !0,
                        text: I.intl.string(I.t.xMH6vD)
                    }), o]
                });
            default:
                return null
        }
    },
    w = e => {
        let {
            channelId: t,
            otherUserId: n
        } = e, i = r.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE))
        }, []), a = r.useCallback(() => {
            b.A.closeChannelSidebar(v.fe)
        }, []), s = r.useCallback(() => {
            b.A.closeChannelSidebar(v.fe)
        }, []), {
            acceptMessageRequest: o,
            rejectMessageRequest: u,
            isAcceptLoading: d,
            isRejectLoading: h,
            isOptimisticAccepted: p,
            isOptimisticRejected: f
        } = (0, m.t)({
            user: O.default.getUser(n),
            onError: i,
            onAcceptSuccess: s,
            onRejectSuccess: a
        }), g = d || h || p || f;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                disabled: g,
                onClick: () => o(t),
                loading: d,
                text: I.intl.string(I.t.Kz8Pwr)
            }), (0, l.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                disabled: g,
                onClick: () => u(t),
                loading: h,
                text: I.intl.string(I.t.B2nygW)
            })]
        })
    },
    R = e => {
        let {
            userId: t,
            channel: n,
            showingBanner: r
        } = e, {
            channelId: i
        } = (0, g.N)(), u = (0, o.bG)([f.A], () => null != i && f.A.isSpam(i), [i]), d = (0, o.bG)([E.A], () => E.A.getRelationshipType(t), [t]), h = n.id === i, p = !s.Fr && !h, m = !!s.Fr || h || u, b = u || h ? (0, l.jsxs)("div", {
            className: T.mG,
            children: [(0, l.jsx)(w, {
                channelId: n.id,
                otherUserId: t
            }), (0, l.jsx)(A.A, {
                channel: n
            })]
        }) : (0, l.jsxs)("div", {
            className: T.mG,
            children: [(0, l.jsx)(P, {
                relationshipType: d,
                userId: t,
                showingBanner: r
            }), !r && (0, l.jsx)(x.A, {
                otherUserId: t,
                channel: n,
                navigateAwayOnReportSuccess: p
            })]
        }), _ = d !== S.eA$.PENDING_INCOMING || u || h ? null : (0, l.jsx)(c.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: I.intl.string(I.t.c2v5nO)
        });
        return (0, l.jsxs)("div", {
            className: m ? T.AA : T.kL,
            children: [(0, l.jsx)("div", {
                className: T.mG,
                children: (0, l.jsx)(N, {
                    userId: t,
                    channelId: n.id
                })
            }), !m && (0, l.jsx)("div", {
                className: T.yF
            }), (0, l.jsxs)("div", {
                className: a()(T.mG, T.LV),
                children: [_, b]
            })]
        })
    }