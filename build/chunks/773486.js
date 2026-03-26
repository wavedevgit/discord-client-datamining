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
    f = s(761546),
    _ = s(677185),
    h = s(233317),
    p = s(5818),
    b = s(298492),
    g = s(88001),
    v = s(652215),
    N = s(519412),
    S = s(985018),
    j = s(974727),
    k = s(788396);
let C = e => {
        let {
            onInvite: t,
            onClose: s,
            subscriptionId: d,
            ...o
        } = e, [u, _] = i.useState([]), [b, k] = i.useState(""), C = (0, c.A)(b, 400), I = (0, r.bG)([h.A], () => h.A.getNumAvailableInvites()), {
            eligibleUsers: A,
            getNextRows: E,
            hasError: y,
            isFetching: M
        } = (0, p.A)({
            subscriptionId: d,
            searchQuery: C
        }), [R, T] = i.useState(!1), P = i.useCallback(e => {
            _(t => t.filter(t => !e.has(t.id)))
        }, [_]), U = i.useMemo(() => u.map(e => ({
            id: e.id,
            label: x.Ay.getName(e)
        })), [u]);
        return y ? (0, a.jsx)(l.Modal, {
            size: "sm",
            title: S.intl.string(N.default["54lM5y"]),
            subtitle: S.intl.string(N.default.zrtwpV),
            onClose: s,
            actions: [],
            ...o
        }) : 0 !== A.length || M || 0 !== C.length ? (0, a.jsx)(l.Modal, {
            size: "md",
            title: S.intl.string(N.default["Um/7BM"]),
            subtitle: S.intl.format(N.default.qSWXaf, {
                totalSeats: g.LM,
                premiumGroupProductName: (0, g.DP)(),
                helpCenterLink: g.TE
            }),
            onClose: s,
            input: (0, a.jsx)("div", {
                className: j.c,
                children: (0, a.jsx)(n.ksK, {
                    value: b,
                    onChange: k,
                    placeholder: 0 === u.length ? S.intl.string(N.default.wRS8vo) : "",
                    leading: {
                        type: "tags",
                        label: S.intl.string(N.default["Um/7BM"]),
                        items: U,
                        onRemove: P
                    }
                })
            }),
            actions: [],
            actionBarInput: (0, a.jsx)(n.Button, {
                variant: "primary",
                disabled: 0 === u.length || R,
                text: S.intl.string(N.default["5fZHp3"]),
                size: "md",
                fullWidth: !0,
                onClick: async () => {
                    m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                        invited_user_ids: u.map(e => e.id)
                    }), T(!0), await t(u), T(!1)
                }
            }),
            ...o,
            children: (0, a.jsx)(f.A, {
                users: A,
                isUserSelected: e => u.some(t => t.id === e.id),
                onSelectionChange: (e, t) => {
                    _(s => t ? [...s, e] : s.filter(t => t.id !== e.id)), t && k("")
                },
                isUserDisabled: e => u.length >= I && !u.some(t => t.id === e.id) || !e.eligible,
                isFetching: M,
                onFetchMore: E,
                searchQuery: C,
                emptySearchContent: {
                    header: S.intl.string(N.default.gaamNe),
                    body: S.intl.string(N.default.nQcM39)
                },
                className: j.p_,
                tooltipConfig: {
                    text: e => S.intl.formatToPlainString(N.default["5tzM9V"], {
                        disabledUserName: x.Ay.getName(e),
                        premiumGroupProductName: (0, g.DP)()
                    }),
                    isActive: (e, t) => !!(t && !e.eligible)
                }
            })
        }) : (0, a.jsx)(l.Modal, {
            size: "sm",
            title: S.intl.string(N.default.ONaJLH),
            subtitle: S.intl.format(N.default["0LHbPc"], {
                helpCenterLink: g.TE
            }),
            onClose: s,
            actions: [],
            ...o
        })
    },
    I = e => {
        let {
            onClose: t,
            inviteUsersResult: s,
            ...i
        } = e;
        return (0, a.jsx)(l.ExpressiveModal, {
            graphic: {
                type: "image",
                src: k.A
            },
            gradientColor: "nitro-pink",
            title: S.intl.formatToPlainString(N.default.MIiPur, {
                premiumGroupProductName: (0, g.DP)(),
                sentCount: s.filter(e => e.isSuccess).length
            }),
            subtitle: S.intl.format(N.default.olkQkj, {
                onClick: () => {
                    t(), (0, u.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL)
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
            let i = await (0, _.n2)(t.id, a);
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
        return 1 === c ? (0, a.jsx)(C, {
            ...l,
            onInvite: u,
            subscriptionId: t.id
        }) : 2 === c ? (0, a.jsx)(I, {
            ...l,
            inviteUsersResult: r
        }) : void 0
    }