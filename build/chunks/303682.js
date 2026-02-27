/** chunk id: 303682, original params: e,t,n (module,exports,require) **/
n.d(t, {
    SelectFriendsModalScreens: () => M,
    default: () => j
});
var i, l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(158954),
    c = n(311907),
    d = n(397927),
    u = n(803306),
    m = n(718213),
    _ = n(793574),
    A = n(688810),
    E = n(954571),
    h = n(975571),
    f = n(427262),
    g = n(326084),
    p = n(851746),
    x = n(761546),
    C = n(972007),
    I = n(636184),
    T = n(652215),
    N = n(985018),
    S = n(683912);
let R = e => {
        let {
            onClose: t,
            onShare: n
        } = e, i = (0, c.bG)([p.A], () => p.A.getReferralsRemaining()), r = (0, c.bG)([p.A], () => p.A.getHasEligibleFriends()), [u, _] = a.useState(new Map), [A, E] = a.useState(""), g = (0, m.A)(A, 400), {
            eligibleUsers: I,
            fetchUsers: R,
            hasError: v,
            isFetching: M,
            resendUsers: j
        } = (0, C.i)({
            searchQuery: g,
            selectedUsers: u
        }), [O, b] = a.useState(!1), y = I.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
        return null === i ? (0, l.jsx)(d.y$y, {}) : v ? (0, l.jsx)(o.Modal, {
            transitionState: o.ip4.ENTERED,
            size: "sm",
            title: N.intl.string(N.t.lcuio4),
            subtitle: N.intl.string(N.t["x09+CD"]),
            onClose: t,
            actions: []
        }) : !1 === r ? (0, l.jsx)(o.Modal, {
            transitionState: o.ip4.ENTERED,
            size: "sm",
            title: N.intl.string(N.t["2YigPp"]),
            subtitle: N.intl.format(N.t.OOCbz8, {
                helpdeskArticle: h.A.getArticleURL(T.MVz.REFERRAL_PROGRAM)
            }),
            onClose: t,
            actions: []
        }) : (0, l.jsx)(o.Modal, {
            size: "md",
            transitionState: o.ip4.ENTERED,
            title: N.intl.string(N.t["2dVCLl"]),
            subtitle: N.intl.string(N.t.DXgoi2),
            onClose: t,
            input: (0, l.jsx)(d.iS7, {
                selectionMode: "multiple",
                value: Array.from(u.values()),
                options: Array.from(y.values()),
                formatOption: e => ({
                    id: e.id,
                    value: e,
                    label: f.Ay.getName(e)
                }),
                onSelectionChange: e => {
                    let t = Array.isArray(e) ? e : [e],
                        n = new Map;
                    t.forEach(e => {
                        null != e && n.set(e.id, e)
                    }), _(n)
                },
                children: (0, l.jsx)("div", {
                    className: S.c,
                    children: (0, l.jsx)(d.a32, {
                        placeholder: 0 === u.size ? N.intl.string(N.t.Kd5RaI) : "",
                        onQueryChange: e => {
                            E(e.target.value)
                        }
                    })
                })
            }),
            actions: [],
            actionBarInput: (e => {
                let i, {
                        eligibleRecipients: a
                    } = e,
                    r = g.length > 0 && 0 === a.size;
                return i = !0 === r ? N.intl.string(N.t.wpSqAW) : u.size <= 1 ? N.intl.string(N.t.ItpQxk) : N.intl.format(N.t.iW2stn, {
                    nTrials: u.size
                }), (0, l.jsx)("div", {
                    className: s()(S.qr, S.h0),
                    children: (0, l.jsx)(d.Button, {
                        variant: "primary",
                        disabled: 0 === u.size && !r || O,
                        text: i,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            r ? t() : (b(!0), await n([...u.values()]), b(!1))
                        }
                    })
                })
            })({
                eligibleRecipients: y
            }),
            children: (e => {
                let {
                    eligibleRecipients: t
                } = e;
                return (0, l.jsx)(x.A, {
                    users: Array.from(t.values()),
                    isUserSelected: e => u.has(e.id),
                    onSelectionChange: (e, t) => {
                        _(n => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i
                        })
                    },
                    isFetching: M,
                    onFetchMore: R,
                    isUserDisabled: e => null !== i && 0 !== i && [...u.values()].filter(e => !j.has(e.id)).length >= i && !u.has(e.id) && !j.has(e.id),
                    searchQuery: g,
                    emptySearchContent: {
                        header: N.intl.string(N.t["8+ywHD"]),
                        body: N.intl.string(N.t.CgQmY2)
                    },
                    className: S.p_
                })
            })({
                eligibleRecipients: y
            })
        })
    },
    v = e => {
        let t, {
                onClose: n,
                onShare: i
            } = e,
            r = (0, c.bG)([p.A], () => p.A.getRecipientStatus()),
            [m, _] = a.useState(new Map),
            [A, E] = a.useState(new Map),
            [h, f] = a.useState(!1);
        return a.useEffect(() => {
            (async () => {
                let e = new Map;
                for (let [t, n] of r) {
                    let i = await (0, u.wz)(t);
                    i.referralStatus = n, e.set(i.id, i)
                }
                _(e)
            })()
        }, [r]), (0, l.jsx)(o.Modal, {
            size: "md",
            transitionState: o.ip4.ENTERED,
            title: N.intl.string(N.t.rKmy8I),
            subtitle: N.intl.string(N.t.VDlF6o),
            onClose: n,
            actions: [],
            actionBarInput: (t = A.size <= 1 ? N.intl.string(N.t.ItpQxk) : N.intl.format(N.t.iW2stn, {
                nTrials: A.size
            }), (0, l.jsx)("div", {
                className: s()(S.qr, S.h0),
                children: (0, l.jsx)(d.Button, {
                    variant: "primary",
                    disabled: 0 === A.size || h,
                    text: t,
                    size: "md",
                    fullWidth: !0,
                    onClick: async () => {
                        f(!0), await i([...A.values()]), f(!1)
                    }
                })
            })),
            children: (0, l.jsx)(x.A, {
                users: Array.from(m.values()),
                isUserSelected: e => A.has(e.id),
                isUserDisabled: e => e.referralStatus === g.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    E(n => {
                        let i = new Map(n);
                        return t ? i.set(e.id, e) : i.delete(e.id), i
                    })
                },
                className: S.p_
            })
        })
    };
var M = ((i = {})[i.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", i[i.CONFIRMATION = 2] = "CONFIRMATION", i[i.REMINDER = 3] = "REMINDER", i);
let j = e => {
    let {
        onClose: t,
        startingScreen: n = 1
    } = e, i = (0, c.bG)([p.A], () => p.A.getReferralsRemaining()), [r, s] = a.useState(n), [o, u] = a.useState([]), {
        analyticsLocations: m
    } = (0, A.Ay)([_.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), h = async e => {
        E.default.track(T.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
            location_stack: m
        });
        let t = await (0, g.xm)(Object.values(e).map(e => e.id));
        u(e.map(e => ({
            recipient: e,
            status: t.get(e.id)
        }))), s(2)
    };
    return null === i ? (0, l.jsx)(d.y$y, {}) : 2 === r ? (0, l.jsx)(I.h, {
        isReminderConfirmation: 3 === n,
        results: o,
        onClose: t
    }) : 1 === r ? (0, l.jsx)(R, {
        onClose: t,
        onShare: h
    }) : 3 === r ? (0, l.jsx)(v, {
        onClose: t,
        onShare: h
    }) : void 0
}