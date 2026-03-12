/** chunk id: 773486 params = (module,exports,require) **/
s.d(t, {
    default: () => A
}), s(321073);
var a = s(627968),
    i = s(64700),
    l = s(158954),
    r = s(311907),
    n = s(397927),
    c = s(718213),
    d = s(964486),
    o = s(780964),
    u = s(840065),
    m = s(954571),
    x = s(427262),
    _ = s(761546),
    f = s(677185),
    h = s(233317),
    p = s(5818),
    b = s(298492),
    g = s(88001),
    v = s(652215),
    S = s(518582),
    N = s(985018),
    j = s(37182),
    C = s(788396);
let I = e => {
        let {
            onInvite: t,
            onClose: s,
            subscriptionId: d,
            ...o
        } = e, [u, f] = i.useState([]), [b, C] = i.useState(""), I = (0, c.A)(b, 400), k = (0, r.bG)([h.A], () => h.A.getNumAvailableInvites()), {
            eligibleUsers: A,
            getNextRows: E,
            hasError: y,
            isFetching: M
        } = (0, p.A)({
            subscriptionId: d,
            searchQuery: I
        }), [R, T] = i.useState(!1), P = i.useCallback(e => {
            f(t => t.filter(t => !e.has(t.id)))
        }, [f]), U = i.useMemo(() => u.map(e => ({
            id: e.id,
            label: x.Ay.getName(e)
        })), [u]);
        return y ? (0, a.jsx)(l.Modal, {
            size: "sm",
            title: N.intl.string(S.default["54lM5y"]),
            subtitle: N.intl.string(S.default.zrtwpV),
            onClose: s,
            actions: [],
            ...o
        }) : 0 !== A.length || M || 0 !== I.length ? (0, a.jsx)(l.Modal, {
            size: "md",
            title: N.intl.string(S.default["Um/7BM"]),
            subtitle: N.intl.format(S.default.qSWXaf, {
                totalSeats: g.LM,
                premiumGroupProductName: (0, g.DP)(),
                helpCenterLink: g.TE
            }),
            onClose: s,
            input: (0, a.jsx)("div", {
                className: j.c,
                children: (0, a.jsx)(n.ksK, {
                    value: b,
                    onChange: C,
                    placeholder: 0 === u.length ? N.intl.string(S.default.wRS8vo) : "",
                    leading: {
                        type: "tags",
                        label: N.intl.string(S.default["Um/7BM"]),
                        items: U,
                        onRemove: P
                    }
                })
            }),
            actions: [],
            actionBarInput: (0, a.jsx)(n.Button, {
                variant: "primary",
                disabled: 0 === u.length || R,
                text: N.intl.string(S.default["5fZHp3"]),
                size: "md",
                fullWidth: !0,
                onClick: async () => {
                    m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                        invited_user_ids: u.map(e => e.id)
                    }), T(!0), await t(u), T(!1)
                }
            }),
            ...o,
            children: (0, a.jsx)(_.A, {
                users: A,
                isUserSelected: e => u.some(t => t.id === e.id),
                onSelectionChange: (e, t) => {
                    f(s => t ? [...s, e] : s.filter(t => t.id !== e.id)), t && C("")
                },
                isUserDisabled: e => u.length >= k && !u.some(t => t.id === e.id) || !e.eligible,
                isFetching: M,
                onFetchMore: E,
                searchQuery: I,
                emptySearchContent: {
                    header: N.intl.string(S.default.gaamNe),
                    body: N.intl.string(S.default.nQcM39)
                },
                className: j.p_,
                tooltipConfig: {
                    text: e => N.intl.formatToPlainString(S.default["5tzM9V"], {
                        disabledUserName: x.Ay.getName(e),
                        premiumGroupProductName: (0, g.DP)()
                    }),
                    isActive: (e, t) => !!(t && !e.eligible)
                }
            })
        }) : (0, a.jsx)(l.Modal, {
            size: "sm",
            title: N.intl.string(S.default.ONaJLH),
            subtitle: N.intl.format(S.default["0LHbPc"], {
                helpCenterLink: g.TE
            }),
            onClose: s,
            actions: [],
            ...o
        })
    },
    k = e => {
        let {
            onClose: t,
            inviteUsersResult: s,
            ...i
        } = e;
        return (0, a.jsx)(l.ExpressiveModal, {
            graphic: {
                type: "image",
                src: C.A
            },
            gradientColor: "nitro-pink",
            title: N.intl.formatToPlainString(S.default.MIiPur, {
                premiumGroupProductName: (0, g.DP)(),
                sentCount: s.filter(e => e.isSuccess).length
            }),
            subtitle: N.intl.format(S.default.olkQkj, {
                onClick: () => {
                    t(), (0, u.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
                        section: v.nc_.SUBSCRIPTIONS
                    })
                }
            }),
            onClose: t,
            ...i,
            children: (0, a.jsx)("div", {
                className: j.yk,
                children: s.map(e => (0, a.jsx)(b.q, {
                    recipient: e.user,
                    isSuccess: e.isSuccess,
                    onClose: t
                }, e.user.id))
            })
        })
    },
    A = e => {
        let {
            subscription: t,
            isFromPurchaseFlow: s = !1,
            ...l
        } = e, [r, n] = i.useState([]);
        (0, d.Ay)(() => {
            m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card"
            })
        });
        let [c, o] = i.useState(1), u = async e => {
            let s = new Map,
                a = [];
            for (let t of e) s.set(t.id, t), a.push(t.id);
            let i = await (0, f.n2)(t.id, a);
            if (null == i) {
                m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: [],
                    failed_user_ids: a
                }), n(e.map(e => ({
                    user: e,
                    isSuccess: !1
                }))), o(2);
                return
            }
            let {
                invitedUsers: l,
                ineligibleUsers: r
            } = i;
            m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                successful_user_ids: l,
                failed_user_ids: r
            }), n([...l.map(e => ({
                user: s.get(e),
                isSuccess: !0
            })), ...r.map(e => ({
                user: s.get(e),
                isSuccess: !1
            }))]), o(2)
        };
        return 1 === c ? (0, a.jsx)(I, {
            ...l,
            onInvite: u,
            subscriptionId: t.id
        }) : 2 === c ? (0, a.jsx)(k, {
            ...l,
            inviteUsersResult: r
        }) : void 0
    }