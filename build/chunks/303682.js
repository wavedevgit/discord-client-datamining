/** chunk id: 303682 params = (module,exports,require) **/
n.d(t, {
    SelectFriendsModalScreens: () => D,
    default: () => P
});
var i, l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(158954),
    c = n(311907),
    d = n(397927),
    u = n(803306),
    _ = n(718213),
    m = n(793574),
    A = n(688810),
    E = n(994500),
    I = n(954571),
    T = n(975571),
    N = n(427262),
    f = n(326084),
    C = n(851746),
    g = n(761546),
    h = n(972007),
    p = n(636184),
    R = n(652215),
    S = n(985018),
    x = n(299690);
let O = e => {
        let {
            transitionState: t,
            onClose: n,
            onShare: i
        } = e, r = (0, c.bG)([C.A], () => C.A.getReferralsRemaining()), u = (0, c.bG)([C.A], () => C.A.getHasEligibleFriends()), [m, A] = a.useState(new Map), [E, I] = a.useState(""), f = (0, _.A)(E, 400), {
            eligibleUsers: p,
            fetchUsers: O,
            hasError: M,
            isFetching: D,
            resendUsers: P
        } = (0, h.i)({
            searchQuery: f,
            selectedUsers: m
        }), [U, v] = a.useState(!1), L = p.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
        return null === r ? (0, l.jsx)(d.y$y, {}) : M ? (0, l.jsx)(o.Modal, {
            transitionState: t,
            size: "sm",
            title: S.intl.string(S.t.lcuio4),
            subtitle: S.intl.string(S.t["x09+CD"]),
            onClose: n,
            actions: []
        }) : !1 === u ? (0, l.jsx)(o.Modal, {
            transitionState: t,
            size: "sm",
            title: S.intl.string(S.t["2YigPp"]),
            subtitle: S.intl.format(S.t.OOCbz8, {
                helpdeskArticle: T.A.getArticleURL(R.MVz.REFERRAL_PROGRAM)
            }),
            onClose: n,
            actions: []
        }) : (0, l.jsx)(o.Modal, {
            size: "md",
            transitionState: t,
            title: S.intl.string(S.t["2dVCLl"]),
            subtitle: S.intl.string(S.t.DXgoi2),
            onClose: n,
            input: (0, l.jsx)(d.iS7, {
                selectionMode: "multiple",
                value: Array.from(m.values()),
                options: Array.from(L.values()),
                formatOption: e => ({
                    id: e.id,
                    value: e,
                    label: N.Ay.getName(e)
                }),
                onSelectionChange: e => {
                    let t = Array.isArray(e) ? e : [e],
                        n = new Map;
                    t.forEach(e => {
                        null != e && n.set(e.id, e)
                    }), A(n)
                },
                children: (0, l.jsx)("div", {
                    className: x.c,
                    children: (0, l.jsx)(d.a32, {
                        placeholder: 0 === m.size ? S.intl.string(S.t.Kd5RaI) : "",
                        onQueryChange: e => {
                            I(e.target.value)
                        }
                    })
                })
            }),
            actions: [],
            actionBarInput: (e => {
                let t, {
                        eligibleRecipients: a
                    } = e,
                    r = f.length > 0 && 0 === a.size;
                return t = !0 === r ? S.intl.string(S.t.wpSqAW) : m.size <= 1 ? S.intl.string(S.t.ItpQxk) : S.intl.format(S.t.iW2stn, {
                    nTrials: m.size
                }), (0, l.jsx)("div", {
                    className: s()(x.qr, x.h0),
                    children: (0, l.jsx)(d.Button, {
                        variant: "primary",
                        disabled: 0 === m.size && !r || U,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            r ? n() : (v(!0), await i([...m.values()]), v(!1))
                        }
                    })
                })
            })({
                eligibleRecipients: L
            }),
            children: (e => {
                let {
                    eligibleRecipients: t
                } = e;
                return (0, l.jsx)(g.A, {
                    users: Array.from(t.values()),
                    isUserSelected: e => m.has(e.id),
                    onSelectionChange: (e, t) => {
                        A(n => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i
                        })
                    },
                    isFetching: D,
                    onFetchMore: O,
                    isUserDisabled: e => null !== r && 0 !== r && [...m.values()].filter(e => !P.has(e.id)).length >= r && !m.has(e.id) && !P.has(e.id),
                    searchQuery: f,
                    emptySearchContent: {
                        header: S.intl.string(S.t["8+ywHD"]),
                        body: S.intl.string(S.t.CgQmY2)
                    },
                    className: x.p_
                })
            })({
                eligibleRecipients: L
            })
        })
    },
    M = e => {
        let t, {
                transitionState: n,
                onClose: i,
                onShare: r
            } = e,
            _ = (0, c.bG)([C.A], () => C.A.getRecipientStatus()),
            [m, A] = a.useState(new Map),
            [I, T] = a.useState(new Map),
            [N, h] = a.useState(!1);
        return a.useEffect(() => {
            (async () => {
                let e = new Map;
                for (let [t, n] of _) {
                    if (E.A.isBlockedOrIgnored(t)) continue;
                    let i = await (0, u.wz)(t);
                    i.referralStatus = n, e.set(i.id, i)
                }
                A(e)
            })()
        }, [_]), (0, l.jsx)(o.Modal, {
            size: "md",
            transitionState: n,
            title: S.intl.string(S.t.rKmy8I),
            subtitle: S.intl.string(S.t.VDlF6o),
            onClose: i,
            actions: [],
            actionBarInput: (t = I.size <= 1 ? S.intl.string(S.t.ItpQxk) : S.intl.format(S.t.iW2stn, {
                nTrials: I.size
            }), (0, l.jsx)("div", {
                className: s()(x.qr, x.h0),
                children: (0, l.jsx)(d.Button, {
                    variant: "primary",
                    disabled: 0 === I.size || N,
                    text: t,
                    size: "md",
                    fullWidth: !0,
                    onClick: async () => {
                        h(!0), await r([...I.values()]), h(!1)
                    }
                })
            })),
            children: (0, l.jsx)(g.A, {
                users: Array.from(m.values()),
                isUserSelected: e => I.has(e.id),
                isUserDisabled: e => e.referralStatus === f.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    T(n => {
                        let i = new Map(n);
                        return t ? i.set(e.id, e) : i.delete(e.id), i
                    })
                },
                className: x.p_
            })
        })
    };
var D = ((i = {})[i.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", i[i.CONFIRMATION = 2] = "CONFIRMATION", i[i.REMINDER = 3] = "REMINDER", i);
let P = e => {
    let {
        transitionState: t,
        onClose: n,
        startingScreen: i = 1
    } = e, r = (0, c.bG)([C.A], () => C.A.getReferralsRemaining()), [s, o] = a.useState(i), [u, _] = a.useState([]), {
        analyticsLocations: E
    } = (0, A.Ay)([m.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), T = async e => {
        I.default.track(R.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
            location_stack: E
        });
        let t = await (0, f.xm)(Object.values(e).map(e => e.id));
        _(e.map(e => ({
            recipient: e,
            status: t.get(e.id)
        }))), o(2)
    };
    return null === r ? (0, l.jsx)(d.y$y, {}) : 2 === s ? (0, l.jsx)(p.h, {
        transitionState: t,
        isReminderConfirmation: 3 === i,
        results: u,
        onClose: n
    }) : 1 === s ? (0, l.jsx)(O, {
        transitionState: t,
        onClose: n,
        onShare: T
    }) : 3 === s ? (0, l.jsx)(M, {
        transitionState: t,
        onClose: n,
        onShare: T
    }) : void 0
}