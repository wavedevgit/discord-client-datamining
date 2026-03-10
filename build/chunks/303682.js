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
    A = n(793574),
    m = n(688810),
    E = n(994500),
    I = n(954571),
    T = n(975571),
    f = n(427262),
    N = n(326084),
    C = n(851746),
    g = n(761546),
    h = n(972007),
    p = n(636184),
    S = n(652215),
    R = n(985018),
    x = n(683912);
let O = e => {
        let {
            transitionState: t,
            onClose: n,
            onShare: i
        } = e, r = (0, c.bG)([C.A], () => C.A.getReferralsRemaining()), u = (0, c.bG)([C.A], () => C.A.getHasEligibleFriends()), [A, m] = a.useState(new Map), [E, I] = a.useState(""), N = (0, _.A)(E, 400), {
            eligibleUsers: p,
            fetchUsers: O,
            hasError: M,
            isFetching: D,
            resendUsers: P
        } = (0, h.i)({
            searchQuery: N,
            selectedUsers: A
        }), [U, v] = a.useState(!1), L = p.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
        return null === r ? (0, l.jsx)(d.y$y, {}) : M ? (0, l.jsx)(o.Modal, {
            transitionState: t,
            size: "sm",
            title: R.intl.string(R.t.lcuio4),
            subtitle: R.intl.string(R.t["x09+CD"]),
            onClose: n,
            actions: []
        }) : !1 === u ? (0, l.jsx)(o.Modal, {
            transitionState: t,
            size: "sm",
            title: R.intl.string(R.t["2YigPp"]),
            subtitle: R.intl.format(R.t.OOCbz8, {
                helpdeskArticle: T.A.getArticleURL(S.MVz.REFERRAL_PROGRAM)
            }),
            onClose: n,
            actions: []
        }) : (0, l.jsx)(o.Modal, {
            size: "md",
            transitionState: t,
            title: R.intl.string(R.t["2dVCLl"]),
            subtitle: R.intl.string(R.t.DXgoi2),
            onClose: n,
            input: (0, l.jsx)(d.iS7, {
                selectionMode: "multiple",
                value: Array.from(A.values()),
                options: Array.from(L.values()),
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
                    }), m(n)
                },
                children: (0, l.jsx)("div", {
                    className: x.c,
                    children: (0, l.jsx)(d.a32, {
                        placeholder: 0 === A.size ? R.intl.string(R.t.Kd5RaI) : "",
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
                    r = N.length > 0 && 0 === a.size;
                return t = !0 === r ? R.intl.string(R.t.wpSqAW) : A.size <= 1 ? R.intl.string(R.t.ItpQxk) : R.intl.format(R.t.iW2stn, {
                    nTrials: A.size
                }), (0, l.jsx)("div", {
                    className: s()(x.qr, x.h0),
                    children: (0, l.jsx)(d.Button, {
                        variant: "primary",
                        disabled: 0 === A.size && !r || U,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            r ? n() : (v(!0), await i([...A.values()]), v(!1))
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
                    isUserSelected: e => A.has(e.id),
                    onSelectionChange: (e, t) => {
                        m(n => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i
                        })
                    },
                    isFetching: D,
                    onFetchMore: O,
                    isUserDisabled: e => null !== r && 0 !== r && [...A.values()].filter(e => !P.has(e.id)).length >= r && !A.has(e.id) && !P.has(e.id),
                    searchQuery: N,
                    emptySearchContent: {
                        header: R.intl.string(R.t["8+ywHD"]),
                        body: R.intl.string(R.t.CgQmY2)
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
            [A, m] = a.useState(new Map),
            [I, T] = a.useState(new Map),
            [f, h] = a.useState(!1);
        return a.useEffect(() => {
            (async () => {
                let e = new Map;
                for (let [t, n] of _) {
                    if (E.A.isBlockedOrIgnored(t)) continue;
                    let i = await (0, u.wz)(t);
                    i.referralStatus = n, e.set(i.id, i)
                }
                m(e)
            })()
        }, [_]), (0, l.jsx)(o.Modal, {
            size: "md",
            transitionState: n,
            title: R.intl.string(R.t.rKmy8I),
            subtitle: R.intl.string(R.t.VDlF6o),
            onClose: i,
            actions: [],
            actionBarInput: (t = I.size <= 1 ? R.intl.string(R.t.ItpQxk) : R.intl.format(R.t.iW2stn, {
                nTrials: I.size
            }), (0, l.jsx)("div", {
                className: s()(x.qr, x.h0),
                children: (0, l.jsx)(d.Button, {
                    variant: "primary",
                    disabled: 0 === I.size || f,
                    text: t,
                    size: "md",
                    fullWidth: !0,
                    onClick: async () => {
                        h(!0), await r([...I.values()]), h(!1)
                    }
                })
            })),
            children: (0, l.jsx)(g.A, {
                users: Array.from(A.values()),
                isUserSelected: e => I.has(e.id),
                isUserDisabled: e => e.referralStatus === N.aK.REDEEMED,
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
    } = (0, m.Ay)([A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), T = async e => {
        I.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
            location_stack: E
        });
        let t = await (0, N.xm)(Object.values(e).map(e => e.id));
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