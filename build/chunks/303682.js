/** chunk id: 303682 params = (module,exports,require) **/
"use strict";
s.d(t, {
    SelectFriendsModalScreens: () => C,
    default: () => N
});
var r, i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    c = s(158954),
    u = s(311907),
    o = s(397927),
    E = s(803306),
    d = s(718213),
    _ = s(793574),
    R = s(688810),
    p = s(994500),
    I = s(954571),
    S = s(975571),
    f = s(427262),
    h = s(326084),
    A = s(851746),
    M = s(761546),
    g = s(972007),
    T = s(636184),
    m = s(652215),
    P = s(985018),
    O = s(560481);
let U = e => {
        let {
            transitionState: t,
            onClose: s,
            onShare: r
        } = e, a = (0, u.bG)([A.A], () => A.A.getReferralsRemaining()), E = (0, u.bG)([A.A], () => A.A.getHasEligibleFriends()), [_, R] = n.useState(new Map), [p, I] = n.useState(""), h = (0, d.A)(p, 400), {
            eligibleUsers: T,
            fetchUsers: U,
            hasError: x,
            isFetching: C,
            resendUsers: N
        } = (0, g.i)({
            searchQuery: h,
            selectedUsers: _
        }), [b, y] = n.useState(!1), v = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map);
        return null === a ? (0, i.jsx)(o.y$y, {}) : x ? (0, i.jsx)(c.Modal, {
            transitionState: t,
            size: "sm",
            title: P.intl.string(P.t.lcuio4),
            subtitle: P.intl.string(P.t["x09+CD"]),
            onClose: s,
            actions: []
        }) : !1 === E ? (0, i.jsx)(c.Modal, {
            transitionState: t,
            size: "sm",
            title: P.intl.string(P.t["2YigPp"]),
            subtitle: P.intl.format(P.t.OOCbz8, {
                helpdeskArticle: S.A.getArticleURL(m.MVz.REFERRAL_PROGRAM)
            }),
            onClose: s,
            actions: []
        }) : (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: t,
            title: P.intl.string(P.t["2dVCLl"]),
            subtitle: P.intl.string(P.t.DXgoi2),
            onClose: s,
            input: (0, i.jsx)(o.iS7, {
                selectionMode: "multiple",
                value: Array.from(_.values()),
                options: Array.from(v.values()),
                formatOption: e => ({
                    id: e.id,
                    value: e,
                    label: f.Ay.getName(e)
                }),
                onSelectionChange: e => {
                    let t = Array.isArray(e) ? e : [e],
                        s = new Map;
                    t.forEach(e => {
                        null != e && s.set(e.id, e)
                    }), R(s)
                },
                children: (0, i.jsx)("div", {
                    className: O.c,
                    children: (0, i.jsx)(o.a32, {
                        placeholder: 0 === _.size ? P.intl.string(P.t.Kd5RaI) : "",
                        onQueryChange: e => {
                            I(e.target.value)
                        }
                    })
                })
            }),
            actions: [],
            actionBarInput: (e => {
                let t, {
                        eligibleRecipients: n
                    } = e,
                    a = h.length > 0 && 0 === n.size;
                return t = !0 === a ? P.intl.string(P.t.wpSqAW) : _.size <= 1 ? P.intl.string(P.t.ItpQxk) : P.intl.format(P.t.iW2stn, {
                    nTrials: _.size
                }), (0, i.jsx)("div", {
                    className: l()(O.qr, O.h0),
                    children: (0, i.jsx)(o.Button, {
                        variant: "primary",
                        disabled: 0 === _.size && !a || b,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            a ? s() : (y(!0), await r([..._.values()]), y(!1))
                        }
                    })
                })
            })({
                eligibleRecipients: v
            }),
            children: (e => {
                let {
                    eligibleRecipients: t
                } = e;
                return (0, i.jsx)(M.A, {
                    users: Array.from(t.values()),
                    isUserSelected: e => _.has(e.id),
                    onSelectionChange: (e, t) => {
                        R(s => {
                            let r = new Map(s);
                            return t ? r.set(e.id, e) : r.delete(e.id), r
                        })
                    },
                    isFetching: C,
                    onFetchMore: U,
                    isUserDisabled: e => null !== a && 0 !== a && [..._.values()].filter(e => !N.has(e.id)).length >= a && !_.has(e.id) && !N.has(e.id),
                    searchQuery: h,
                    emptySearchContent: {
                        header: P.intl.string(P.t["8+ywHD"]),
                        body: P.intl.string(P.t.CgQmY2)
                    },
                    className: O.p_
                })
            })({
                eligibleRecipients: v
            })
        })
    },
    x = e => {
        let t, {
                transitionState: s,
                onClose: r,
                onShare: a
            } = e,
            d = (0, u.bG)([A.A], () => A.A.getRecipientStatus()),
            [_, R] = n.useState(new Map),
            [I, S] = n.useState(new Map),
            [f, g] = n.useState(!1);
        return n.useEffect(() => {
            (async () => {
                let e = new Map;
                for (let [t, s] of d) {
                    if (p.A.isBlockedOrIgnored(t)) continue;
                    let r = await (0, E.wz)(t);
                    r.referralStatus = s, e.set(r.id, r)
                }
                R(e)
            })()
        }, [d]), (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: s,
            title: P.intl.string(P.t.rKmy8I),
            subtitle: P.intl.string(P.t.VDlF6o),
            onClose: r,
            actions: [],
            actionBarInput: (t = I.size <= 1 ? P.intl.string(P.t.ItpQxk) : P.intl.format(P.t.iW2stn, {
                nTrials: I.size
            }), (0, i.jsx)("div", {
                className: l()(O.qr, O.h0),
                children: (0, i.jsx)(o.Button, {
                    variant: "primary",
                    disabled: 0 === I.size || f,
                    text: t,
                    size: "md",
                    fullWidth: !0,
                    onClick: async () => {
                        g(!0), await a([...I.values()]), g(!1)
                    }
                })
            })),
            children: (0, i.jsx)(M.A, {
                users: Array.from(_.values()),
                isUserSelected: e => I.has(e.id),
                isUserDisabled: e => e.referralStatus === h.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    S(s => {
                        let r = new Map(s);
                        return t ? r.set(e.id, e) : r.delete(e.id), r
                    })
                },
                className: O.p_
            })
        })
    };
var C = ((r = {})[r.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", r[r.CONFIRMATION = 2] = "CONFIRMATION", r[r.REMINDER = 3] = "REMINDER", r);
let N = e => {
    let {
        transitionState: t,
        onClose: s,
        startingScreen: r = 1
    } = e, a = (0, u.bG)([A.A], () => A.A.getReferralsRemaining()), [l, c] = n.useState(r), [E, d] = n.useState([]), {
        analyticsLocations: p
    } = (0, R.Ay)([_.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]), S = async e => {
        I.default.track(m.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
            location_stack: p
        });
        let t = await (0, h.xm)(Object.values(e).map(e => e.id));
        d(e.map(e => ({
            recipient: e,
            status: t.get(e.id)
        }))), c(2)
    };
    return null === a ? (0, i.jsx)(o.y$y, {}) : 2 === l ? (0, i.jsx)(T.h, {
        transitionState: t,
        isReminderConfirmation: 3 === r,
        results: E,
        onClose: s
    }) : 1 === l ? (0, i.jsx)(U, {
        transitionState: t,
        onClose: s,
        onShare: S
    }) : 3 === l ? (0, i.jsx)(x, {
        transitionState: t,
        onClose: s,
        onShare: S
    }) : void 0
}