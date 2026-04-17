/** chunk id: 303682 params = (module,exports,require) **/
n.d(t, {
    SelectFriendsModalScreens: () => S,
    default: () => y
});
var i, r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(158954),
    c = n(311907),
    d = n(397927),
    u = n(803306),
    _ = n(718213),
    m = n(793574),
    p = n(688810),
    A = n(994500),
    g = n(954571),
    f = n(975571),
    h = n(427262),
    b = n(326084),
    x = n(851746),
    R = n(761546),
    C = n(972007),
    N = n(636184),
    E = n(652215),
    v = n(985018),
    T = n(468049);
let j = e => {
        let {
            transitionState: t,
            onClose: n,
            onShare: i
        } = e, s = (0, c.bG)([x.A], () => x.A.getReferralsRemaining()), u = (0, c.bG)([x.A], () => x.A.getHasEligibleFriends()), [m, p] = a.useState(new Map), [A, g] = a.useState(""), b = (0, _.A)(A, 400), {
            eligibleUsers: N,
            fetchUsers: j,
            hasError: I,
            isFetching: S,
            resendUsers: y
        } = (0, C.i)({
            searchQuery: b,
            selectedUsers: m
        }), [M, O] = a.useState(!1), P = N.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
        return null === s ? (0, r.jsx)(d.y$y, {}) : I ? (0, r.jsx)(o.Modal, {
            transitionState: t,
            size: "sm",
            title: v.intl.string(v.t.lcuio4),
            subtitle: v.intl.string(v.t["x09+CD"]),
            onClose: n,
            actions: []
        }) : !1 === u ? (0, r.jsx)(o.Modal, {
            transitionState: t,
            size: "sm",
            title: v.intl.string(v.t["2YigPp"]),
            subtitle: v.intl.format(v.t.OOCbz8, {
                helpdeskArticle: f.A.getArticleURL(E.MVz.REFERRAL_PROGRAM)
            }),
            onClose: n,
            actions: []
        }) : (0, r.jsx)(o.Modal, {
            size: "md",
            transitionState: t,
            title: v.intl.string(v.t["2dVCLl"]),
            subtitle: v.intl.string(v.t.DXgoi2),
            onClose: n,
            input: (0, r.jsx)(d.iS7, {
                selectionMode: "multiple",
                value: Array.from(m.values()),
                options: Array.from(P.values()),
                formatOption: e => ({
                    id: e.id,
                    value: e,
                    label: h.Ay.getName(e)
                }),
                onSelectionChange: e => {
                    let t = Array.isArray(e) ? e : [e],
                        n = new Map;
                    t.forEach(e => {
                        null != e && n.set(e.id, e)
                    }), p(n)
                },
                children: (0, r.jsx)("div", {
                    className: T.c,
                    children: (0, r.jsx)(d.a32, {
                        placeholder: 0 === m.size ? v.intl.string(v.t.Kd5RaI) : "",
                        onQueryChange: e => {
                            g(e.target.value)
                        }
                    })
                })
            }),
            actions: [],
            actionBarInput: (e => {
                let t, {
                        eligibleRecipients: a
                    } = e,
                    s = b.length > 0 && 0 === a.size;
                return t = !0 === s ? v.intl.string(v.t.wpSqAW) : m.size <= 1 ? v.intl.string(v.t.ItpQxk) : v.intl.format(v.t.iW2stn, {
                    nTrials: m.size
                }), (0, r.jsx)("div", {
                    className: l()(T.qr, T.h0),
                    children: (0, r.jsx)(d.Button, {
                        variant: "primary",
                        disabled: 0 === m.size && !s || M,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            s ? n() : (O(!0), await i([...m.values()]), O(!1))
                        }
                    })
                })
            })({
                eligibleRecipients: P
            }),
            children: (e => {
                let {
                    eligibleRecipients: t
                } = e;
                return (0, r.jsx)(R.A, {
                    users: Array.from(t.values()),
                    isUserSelected: e => m.has(e.id),
                    onSelectionChange: (e, t) => {
                        p(n => {
                            let i = new Map(n);
                            return t ? i.set(e.id, e) : i.delete(e.id), i
                        })
                    },
                    isFetching: S,
                    onFetchMore: j,
                    isUserDisabled: e => null !== s && 0 !== s && [...m.values()].filter(e => !y.has(e.id)).length >= s && !m.has(e.id) && !y.has(e.id),
                    searchQuery: b,
                    emptySearchContent: {
                        header: v.intl.string(v.t["8+ywHD"]),
                        body: v.intl.string(v.t.CgQmY2)
                    },
                    className: T.p_
                })
            })({
                eligibleRecipients: P
            })
        })
    },
    I = e => {
        let t, {
                transitionState: n,
                onClose: i,
                onShare: s
            } = e,
            _ = (0, c.bG)([x.A], () => x.A.getRecipientStatus()),
            [m, p] = a.useState(new Map),
            [g, f] = a.useState(new Map),
            [h, C] = a.useState(!1);
        return a.useEffect(() => {
            (async () => {
                let e = new Map;
                for (let [t, n] of _) {
                    if (A.A.isBlockedOrIgnored(t)) continue;
                    let i = await (0, u.wz)(t);
                    i.referralStatus = n, e.set(i.id, i)
                }
                p(e)
            })()
        }, [_]), (0, r.jsx)(o.Modal, {
            size: "md",
            transitionState: n,
            title: v.intl.string(v.t.rKmy8I),
            subtitle: v.intl.string(v.t.VDlF6o),
            onClose: i,
            actions: [],
            actionBarInput: (t = g.size <= 1 ? v.intl.string(v.t.ItpQxk) : v.intl.format(v.t.iW2stn, {
                nTrials: g.size
            }), (0, r.jsx)("div", {
                className: l()(T.qr, T.h0),
                children: (0, r.jsx)(d.Button, {
                    variant: "primary",
                    disabled: 0 === g.size || h,
                    text: t,
                    size: "md",
                    fullWidth: !0,
                    onClick: async () => {
                        C(!0), await s([...g.values()]), C(!1)
                    }
                })
            })),
            children: (0, r.jsx)(R.A, {
                users: Array.from(m.values()),
                isUserSelected: e => g.has(e.id),
                isUserDisabled: e => e.referralStatus === b.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    f(n => {
                        let i = new Map(n);
                        return t ? i.set(e.id, e) : i.delete(e.id), i
                    })
                },
                className: T.p_
            })
        })
    };
var S = ((i = {})[i.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", i[i.CONFIRMATION = 2] = "CONFIRMATION", i[i.REMINDER = 3] = "REMINDER", i);
let y = e => {
    let {
        transitionState: t,
        onClose: n,
        startingScreen: i = 1
    } = e, s = (0, c.bG)([x.A], () => x.A.getReferralsRemaining()), [l, o] = a.useState(i), [u, _] = a.useState([]), {
        analyticsLocations: A
    } = (0, p.Ay)([m.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), f = async e => {
        g.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
            location_stack: A
        });
        let t = await (0, b.xm)(Object.values(e).map(e => e.id));
        _(e.map(e => ({
            recipient: e,
            status: t.get(e.id)
        }))), o(2)
    };
    return null === s ? (0, r.jsx)(d.y$y, {}) : 2 === l ? (0, r.jsx)(N.h, {
        transitionState: t,
        isReminderConfirmation: 3 === i,
        results: u,
        onClose: n
    }) : 1 === l ? (0, r.jsx)(j, {
        transitionState: t,
        onClose: n,
        onShare: f
    }) : 3 === l ? (0, r.jsx)(I, {
        transitionState: t,
        onClose: n,
        onShare: f
    }) : void 0
}