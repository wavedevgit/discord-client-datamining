/** Chunk was on 97492 **/
/** chunk id: 803622, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(607399),
    o = n(311907),
    c = n(397927),
    u = n(49229),
    d = n(793574),
    p = n(573435),
    h = n(327166),
    f = n(157550),
    g = n(471271),
    m = n(957283),
    b = n(772659),
    A = n(138298),
    y = n(622543),
    _ = n(657331),
    O = n(761640),
    j = n(994500),
    v = n(287809),
    x = n(486020),
    E = n(302975),
    C = n(652215),
    S = n(518477),
    I = n(985018),
    N = n(228288);
let T = e => {
        let {
            userId: t,
            channelId: n
        } = e, i = (0, o.bG)([y.A], () => y.A.getMutualGuilds(t), [t]), s = l.useMemo(() => null != i ? i.slice(0, 3).map((e, t) => {
            let {
                guild: n
            } = e, l = null != n ? x.Ay.getGuildIconURL({
                id: n.id,
                icon: n.icon,
                size: 24
            }) : null;
            if (null == l) return null;
            let s = t === (i.length > 3 ? 3 : i.length) - 1,
                a = (0, r.jsx)("img", {
                    src: l,
                    alt: "",
                    className: N.my
                }, t);
            return s ? a : (0, r.jsx)(p.Ay, {
                className: N.cp,
                mask: p.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                width: 24,
                height: 24,
                children: a
            }, t)
        }).filter(e => null != e) : [], [i]);
        return null == i || 0 === i.length ? (0, r.jsx)(c.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: I.intl.string(I.t.zjVh8h)
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: N.H,
                children: s
            }), (0, r.jsx)(c.DUT, {
                onClick: () => {
                    (0, _.openUserProfileModal)({
                        userId: t,
                        channelId: n,
                        tabSection: S.RP.MUTUAL_GUILDS,
                        sourceAnalyticsLocations: [d.A.DM_CHANNEL]
                    })
                },
                children: (0, r.jsx)(c.Text, {
                    className: N.tE,
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
            userId: l,
            showingBanner: i
        } = e, s = null == (t = v.default.getUser(l)) ? void 0 : t.bot, a = () => {
            u.A.addRelationship({
                userId: l,
                context: {
                    location: C.liQ.DM_CHANNEL
                }
            })
        }, o = (0, r.jsx)(c.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
                u.A.blockUser(l, {
                    location: C.liQ.DM_CHANNEL
                })
            },
            text: I.intl.string(I.t.l4Emac)
        }), d = (0, h.D)(l);
        switch (n) {
            case C.eA$.NONE:
                return (0, r.jsxs)(r.Fragment, {
                    children: [!s && !i && (0, r.jsx)(c.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: a,
                        text: d
                    }), o]
                });
            case C.eA$.FRIEND:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                            u.A.removeFriend(l, {
                                location: C.liQ.DM_CHANNEL
                            })
                        },
                        text: I.intl.string(I.t.cvSt1J)
                    }), o]
                });
            case C.eA$.BLOCKED:
                return (0, r.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                        u.A.unblockUser(l, {
                            location: C.liQ.DM_CHANNEL
                        })
                    },
                    text: I.intl.string(I.t.XyHpKH)
                });
            case C.eA$.PENDING_INCOMING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: a,
                        text: I.intl.string(I.t["+WbSn5"])
                    }), (0, r.jsx)(c.Button, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                            u.A.cancelFriendRequest(l, {
                                location: C.liQ.DM_CHANNEL
                            })
                        },
                        text: I.intl.string(I.t.rQSndv)
                    }), o]
                });
            case C.eA$.PENDING_OUTGOING:
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(c.Button, {
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
        } = e, i = l.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(I.intl.string(I.t.a2j0hv), c.ToastType.FAILURE))
        }, []), s = l.useCallback(() => {
            A.A.closeChannelSidebar(O.fe)
        }, []), a = l.useCallback(() => {
            A.A.closeChannelSidebar(O.fe)
        }, []), {
            acceptMessageRequest: o,
            rejectMessageRequest: u,
            isAcceptLoading: d,
            isRejectLoading: p,
            isOptimisticAccepted: h,
            isOptimisticRejected: f
        } = (0, g.t)({
            user: v.default.getUser(n),
            onError: i,
            onAcceptSuccess: a,
            onRejectSuccess: s
        }), m = d || p || h || f;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                disabled: m,
                onClick: () => o(t),
                loading: d,
                text: I.intl.string(I.t.Kz8Pwr)
            }), (0, r.jsx)(c.Button, {
                variant: "secondary",
                size: "sm",
                disabled: m,
                onClick: () => u(t),
                loading: p,
                text: I.intl.string(I.t.B2nygW)
            })]
        })
    },
    R = e => {
        let {
            userId: t,
            channel: n,
            showingBanner: l
        } = e, {
            channelId: i
        } = (0, m.N)(), u = (0, o.bG)([f.A], () => null != i && f.A.isSpam(i), [i]), d = (0, o.bG)([j.A], () => j.A.getRelationshipType(t), [t]), p = n.id === i, h = !a.Fr && !p, g = !!a.Fr || p || u, A = u || p ? (0, r.jsxs)("div", {
            className: N.mG,
            children: [(0, r.jsx)(w, {
                channelId: n.id,
                otherUserId: t
            }), (0, r.jsx)(b.A, {
                channel: n
            })]
        }) : (0, r.jsxs)("div", {
            className: N.mG,
            children: [(0, r.jsx)(P, {
                relationshipType: d,
                userId: t,
                showingBanner: l
            }), !l && (0, r.jsx)(E.A, {
                otherUserId: t,
                channel: n,
                navigateAwayOnReportSuccess: h
            })]
        }), y = d !== C.eA$.PENDING_INCOMING || u || p ? null : (0, r.jsx)(c.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: I.intl.string(I.t.c2v5nO)
        });
        return (0, r.jsxs)("div", {
            className: g ? N.AA : N.kL,
            children: [(0, r.jsx)("div", {
                className: N.mG,
                children: (0, r.jsx)(T, {
                    userId: t,
                    channelId: n.id
                })
            }), !g && (0, r.jsx)("div", {
                className: N.yF
            }), (0, r.jsxs)("div", {
                className: s()(N.mG, N.LV),
                children: [y, A]
            })]
        })
    }