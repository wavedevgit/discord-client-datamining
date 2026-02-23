/** chunk id: 265990, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(711950),
    o = n(49229),
    d = n(820284),
    c = n(793574),
    u = n(688810),
    A = n(429913),
    h = n(70730),
    _ = n(45787),
    m = n(275759),
    p = n(21119),
    g = n(994500),
    E = n(595623),
    I = n(531685),
    f = n(174279),
    C = n(278066),
    T = n(594968),
    N = n(979282),
    S = n(575474),
    x = n(535266),
    v = n(787331);
n(646363);
var y = n(652215),
    b = n(788868),
    O = n(985018),
    L = n(520936);
let R = [];

function P() {
    s.A.transitionToSection(y.m3P.ADD_FRIEND, {
        explicit: !0
    })
}

function j() {
    (0, a.mMO)(async () => {
        let {
            default: e
        } = await n.e("73152").then(n.bind(n, 516259));
        return t => (0, i.jsx)(e, {
            ...t
        })
    })
}

function D(e) {
    let {
        section: t,
        showSpamCta: n
    } = e, l = r.useMemo(() => n ? j : t !== y.m3P.PENDING ? P : void 0, [n, t]);
    return (0, i.jsx)("div", {
        className: L.y7,
        children: (0, i.jsx)(C.A, {
            type: t,
            onClick: l
        }, t)
    })
}
let M = function(e) {
    let {
        titleId: t
    } = e, {
        analyticsLocations: n
    } = (0, u.Ay)(c.A.FRIENDS_LIST), {
        rows: s,
        section: P
    } = (0, l.cf)([E.Ay], () => E.Ay.getState()), M = (0, l.bG)([I.A], () => I.A.isFocused()), {
        relationshipCount: w,
        hasBlockedOrIgnored: U
    } = (0, l.cf)([g.A], () => ({
        relationshipCount: g.A.getRelationshipCount(),
        hasBlockedOrIgnored: g.A.getBlockedOrIgnoredIDs().length > 0
    })), [G, k] = r.useState(() => {
        let e = {};
        for (let t of Object.values(y.m3P)) e[t] = "";
        return e
    }), V = (0, h.p)(c.A.FRIENDS_LIST), [B, H] = r.useState(!1), F = r.useCallback((e, t) => {
        let {
            key: n,
            ...r
        } = e;
        switch (P) {
            case y.m3P.PENDING:
                return (0, i.jsx)(T.A, {
                    ...r,
                    isFocused: M
                }, n);
            case y.m3P.SUGGESTIONS:
                return (0, i.jsx)(v.A, {
                    ...r,
                    isFocused: M
                }, n);
            case y.m3P.ALL:
                return (0, i.jsx)(f.A, {
                    ...r,
                    isFocused: M,
                    sectionIndex: t,
                    hasFriendAnniversarySection: V
                }, `${t}-${n}`);
            case y.m3P.ONLINE:
            default:
                return (0, i.jsx)(f.A, {
                    ...r,
                    isFocused: M
                }, n)
        }
    }, [M, P, V]), Y = r.useCallback(e => {
        k({
            ...G,
            [P]: e
        })
    }, [G, P]), W = r.useCallback(() => {
        k({
            ...G,
            [P]: ""
        })
    }, [G, P]), q = r.useMemo(() => P === y.m3P.PENDING && (s.filter(y.m3P.SPAM).length > 0 || s.filter(y.m3P.PENDING_IGNORED).length > 0), [s, P]), z = r.useMemo(() => s.filter(P, G[P]), [s, G, P]), K = P === y.m3P.PENDING, $ = r.useMemo(() => {
        if (!K) return R;
        let e = [];
        return z.forEach(t => {
            let {
                applicationId: n
            } = t;
            null != n && e.push(n)
        }), e
    }, [K, z]);
    (0, A.A)($, K);
    let Q = r.useMemo(() => P === y.m3P.ALL && V && z.some(e => e.giftIntentType === b.np.FRIEND_ANNIVERSARY) ? z.filter(e => e.giftIntentType === b.np.FRIEND_ANNIVERSARY).length : 0, [z, P, V]),
        X = r.useMemo(() => {
            switch (P) {
                case y.m3P.PENDING:
                    let e = [],
                        t = [];
                    return z.forEach(n => {
                        n.type === y.eA$.PENDING_INCOMING ? e.push(n) : n.type === y.eA$.PENDING_OUTGOING && t.push(n)
                    }), [e, t];
                case y.m3P.ALL:
                    if (!(V && z.some(e => e.giftIntentType === b.np.FRIEND_ANNIVERSARY))) return [z];
                    {
                        let e = [];
                        return z.forEach(t => {
                            t.giftIntentType === b.np.FRIEND_ANNIVERSARY && e.push(t)
                        }), e.sort((e, t) => p.A.compareByDmProbability(e.userId, t.userId)), [B ? e : e.slice(0, m.ZD), z]
                    }
                default:
                    return [z]
            }
        }, [z, P, B, V]),
        Z = r.useMemo(() => z.filter(e => e.type === y.eA$.PENDING_INCOMING).length, [z]),
        J = P === y.m3P.PENDING && Z > 0 && Z >= 5,
        ee = r.useCallback(e => {
            e.stopPropagation(), o.A.confirmClearPendingRelationships(Z)
        }, [Z]),
        et = r.useCallback(() => {
            H(e => !e)
        }, []),
        en = r.useCallback(e => {
            let n = X[e],
                r = function(e, t, n, i) {
                    switch (e) {
                        case y.m3P.ONLINE:
                            return O.intl.formatToPlainString(O.t.BagU2U, {
                                online: t.toString()
                            });
                        case y.m3P.PENDING:
                            if (0 === n) return O.intl.formatToPlainString(O.t["g+3FIa"], {
                                count: t.toString()
                            });
                            if (1 === n) return O.intl.formatToPlainString(O.t.npJsRl, {
                                count: t.toString()
                            });
                            throw Error(`Unexpected pending friend requests section index: ${n}`);
                        case y.m3P.SUGGESTIONS:
                            return O.intl.formatToPlainString(O.t["DYMZ/p"], {
                                count: t.toString()
                            });
                        default:
                            if ((0, h.p)(c.A.FRIENDS_LIST) && i)
                                if (0 === n) return O.intl.formatToPlainString(O.t.rrZTqK, {
                                    count: t.toString()
                                });
                                else if (1 === n);
                            else throw Error(`Unexpected friends all section index: ${n}`);
                            return O.intl.formatToPlainString(O.t.rHRrhC, {
                                count: t.toString()
                            })
                    }
                }(P, n.length, e, n.some(e => e.giftIntentType === b.np.FRIEND_ANNIVERSARY));
            return P === y.m3P.PENDING && 0 === e ? (0, i.jsxs)("div", {
                className: L.Gf,
                children: [(0, i.jsx)(x.A, {
                    id: t,
                    title: r
                }), J && (0, i.jsx)("div", {
                    className: L.mt,
                    children: (0, i.jsx)(a.QWc, {
                        text: O.intl.string(O.t.O8k7O4),
                        onClick: ee,
                        "aria-label": O.intl.string(O.t.O8k7O4),
                        textVariant: "text-sm/medium"
                    })
                })]
            }, r) : (0, i.jsx)("div", {
                className: L.Gf,
                children: (0, i.jsx)(x.A, {
                    id: t,
                    title: r
                })
            }, r)
        }, [X, P, t, J, ee]),
        ei = r.useCallback(e => P === y.m3P.ALL && 0 === e && V && Q > m.ZD ? (0, i.jsx)("div", {
            className: L.Nf,
            children: (0, i.jsx)(a.Button, {
                icon: B ? a.tN5 : a.abt,
                variant: "secondary",
                size: "sm",
                text: O.intl.string(B ? O.t["6MwJo/"] : O.t["37C26f"]),
                onClick: et,
                "aria-label": O.intl.string(B ? O.t["6MwJo/"] : O.t["37C26f"])
            })
        }) : null, [P, Q, B, et, V]);
    if (r.useEffect(() => {
            P === y.m3P.ALL && (0, _.Ad)()
        }, [P]), r.useEffect(() => {
            H(!1)
        }, [P, Q]), 0 === z.length && "" === G[P]) return (0, i.jsx)(D, {
        section: P,
        showSpamCta: q
    });
    let er = "" !== G[P],
        el = 0 === z.length && er;
    return (0, i.jsx)(u.f5, {
        value: n,
        children: (0, i.jsxs)(d.A, {
            section: y.JJy.FRIENDS_LIST,
            children: [U && (0, i.jsx)(S.g, {}), (0, i.jsx)("div", {
                className: L.ON,
                children: (0, i.jsx)(a.IWV, {
                    query: G[P],
                    onChange: Y,
                    onClear: W
                })
            }), (0, i.jsx)(N.A, {
                rows: X,
                renderRow: F,
                renderSection: en,
                sectionFilter: P,
                isVirtualizedList: w >= 64,
                hasSearchQuery: er,
                renderSectionFooter: ei,
                footer: q && !el ? (0, i.jsx)("div", {
                    className: L.RE,
                    children: (0, i.jsx)(a.QWc, {
                        text: O.intl.string(O.t.R40bU2),
                        onClick: j,
                        textVariant: "text-xs/medium",
                        variant: "secondary"
                    })
                }) : null
            }), el && (0, i.jsx)("div", {
                className: L.y7,
                children: (0, i.jsx)(C.A, {
                    type: C.a.SECTION_NO_RESULTS
                }, P)
            })]
        })
    })
}