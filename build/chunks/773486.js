/** chunk id: 773486 params = (module,exports,require) **/
s.d(t, {
    default: () => A
}), s(321073);
var a = s(627968),
    i = s(64700),
    l = s(158954),
    r = s(311907),
    n = s(397927),
    d = s(718213),
    c = s(964486),
    u = s(780964),
    o = s(858897),
    m = s(954571),
    x = s(427262),
    f = s(761546),
    _ = s(677185),
    h = s(233317),
    p = s(5818),
    g = s(298492),
    b = s(88001),
    v = s(652215),
    N = s(782965),
    S = s(985018),
    j = s(974727),
    k = s(788396);
let C = e => {
        let {
            onInvite: t,
            onClose: s,
            subscriptionId: c,
            ...u
        } = e, [o, _] = i.useState([]), [g, k] = i.useState(""), C = (0, d.A)(g, 400), I = (0, r.bG)([h.A], () => h.A.getNumAvailableInvites()), {
            eligibleUsers: A,
            getNextRows: E,
            hasError: y,
            isFetching: M
        } = (0, p.A)({
            subscriptionId: c,
            searchQuery: C
        }), [P, R] = i.useState(!1), T = i.useCallback(e => {
            _(t => t.filter(t => !e.has(t.id)))
        }, [_]), U = i.useMemo(() => o.map(e => ({
            id: e.id,
            label: x.Ay.getName(e)
        })), [o]);
        return y ? (0, a.jsx)(l.Modal, {
            size: "sm",
            title: S.intl.string(N.default["54lM5y"]),
            subtitle: S.intl.string(N.default.zrtwpV),
            onClose: s,
            actions: [],
            ...u
        }) : 0 !== A.length || M || 0 !== C.length ? (0, a.jsx)(l.Modal, {
            size: "md",
            title: S.intl.string(N.default["Um/7BM"]),
            subtitle: S.intl.format(N.default.qSWXaf, {
                totalSeats: b.LM,
                premiumGroupProductName: (0, b.DP)(),
                helpCenterLink: b.TE
            }),
            onClose: s,
            input: (0, a.jsx)("div", {
                className: j.c,
                children: (0, a.jsx)(n.ksK, {
                    value: g,
                    onChange: k,
                    placeholder: 0 === o.length ? S.intl.string(N.default.wRS8vo) : "",
                    leading: {
                        type: "tags",
                        label: S.intl.string(N.default["Um/7BM"]),
                        items: U,
                        onRemove: T
                    }
                })
            }),
            actions: [],
            actionBarInput: (0, a.jsx)(n.Button, {
                variant: "primary",
                disabled: 0 === o.length || P,
                text: S.intl.string(N.default["5fZHp3"]),
                size: "md",
                fullWidth: !0,
                onClick: async () => {
                    m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                        invited_user_ids: o.map(e => e.id)
                    }), R(!0), await t(o), R(!1)
                }
            }),
            ...u,
            children: (0, a.jsx)(f.A, {
                users: A,
                isUserSelected: e => o.some(t => t.id === e.id),
                onSelectionChange: (e, t) => {
                    _(s => t ? [...s, e] : s.filter(t => t.id !== e.id)), t && k("")
                },
                isUserDisabled: e => o.length >= I && !o.some(t => t.id === e.id) || !e.eligible,
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
                        premiumGroupProductName: (0, b.DP)()
                    }),
                    isActive: (e, t) => !!(t && !e.eligible)
                }
            })
        }) : (0, a.jsx)(l.Modal, {
            size: "sm",
            title: S.intl.string(N.default.ONaJLH),
            subtitle: S.intl.format(N.default["0LHbPc"], {
                helpCenterLink: b.TE
            }),
            onClose: s,
            actions: [],
            ...u
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
                premiumGroupProductName: (0, b.DP)(),
                sentCount: s.filter(e => e.isSuccess).length
            }),
            subtitle: S.intl.format(N.default.olkQkj, {
                onClick: () => {
                    t(), (0, o.openUserSettings)(u.X.SUBSCRIPTIONS_PANEL)
                }
            }),
            onClose: t,
            ...i,
            children: (0, a.jsx)("div", {
                className: j.yk,
                children: s.map(e => (0, a.jsx)(g.q, {
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
        (0, c.Ay)(() => {
            m.default.track(v.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card"
            })
        });
        let [d, u] = i.useState(1), o = async e => {
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
                }))), u(2);
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
            }))]), u(2)
        };
        return 1 === d ? (0, a.jsx)(C, {
            ...l,
            onInvite: o,
            subscriptionId: t.id
        }) : 2 === d ? (0, a.jsx)(I, {
            ...l,
            inviteUsersResult: r
        }) : void 0
    }