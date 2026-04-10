/** chunk id: 640490 params = (module,exports,require) **/
n.d(t, {
    F: () => H
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n(837381),
    u = n(311907),
    d = n(435371),
    c = n(397927),
    h = n(803306),
    g = n(928039),
    m = n(485947),
    f = n(545059),
    A = n(290863),
    I = n(994500),
    E = n(287809),
    p = n(256415),
    _ = n(996439),
    S = n(810412),
    x = n(914853),
    T = n(483392),
    N = n(236884),
    C = n(542080),
    v = n(179917),
    y = n(419072),
    M = n(67103),
    R = n(554932),
    D = n(406595),
    b = n(557404),
    O = n(535973),
    w = n(125117),
    j = n(652215),
    U = n(895867),
    L = n(985018),
    k = n(837165),
    G = n(453748);

function P(e) {
    let {
        groupId: t,
        groupName: n,
        displayText: l,
        isCollapsed: r,
        onToggle: a,
        onContextMenu: o,
        isReorderDisabled: u,
        draggedGroupId: d,
        dropTargetGroupId: h,
        dropTargetPosition: g,
        getDragHandleProps: f
    } = e, A = !u, I = null != h && h === t, E = I && g === O.I.BEFORE, p = I && g === O.I.AFTER;
    return (0, i.jsx)(m.A, {
        className: s()(G.uW, {
            [k.EU]: A,
            [k.Me]: null != d && d === t,
            [k.hV]: I,
            [k.nH]: E,
            [k._M]: p
        }),
        children: (0, i.jsx)("div", {
            ...f(t, A),
            onContextMenu: o,
            children: (0, i.jsxs)(c.DUT, {
                onClick: a,
                "aria-hidden": !0,
                className: G.Ws,
                children: [l, (0, i.jsx)(T.C, {
                    isCollapsed: r,
                    size: "md",
                    className: G.t4
                })]
            })
        })
    })
}

function F(e) {
    return Array.from(e).sort()
}
let V = (0, a.throttle)(e => {
    (0, S.Y)(j.uss.FRIENDS, {
        locked: p.default.isInstanceLocked(),
        shownUserIds: e.shownUserIds,
        liveUserIds: e.liveUserIds,
        contentInventoryIds: []
    })
}, 3e3, {
    leading: !0,
    trailing: !1
});

function z() {}

function H(e) {
    let {
        onPrimaryAction: t,
        onContextMenu: n,
        onFriendVisible: r
    } = e, [s, m] = l.useState(new Set), [p, T] = l.useState(new Set), k = l.useCallback((e, t, n) => {
        m(n => {
            if (t) {
                if (n.has(e)) return n;
                n.add(e)
            } else {
                if (!n.has(e)) return n;
                n.delete(e)
            }
            return new Set(n)
        }), T(i => {
            if (n && t) {
                if (i.has(e)) return i;
                i.add(e)
            } else {
                if (!i.has(e)) return i;
                i.delete(e)
            }
            return new Set(i)
        }), r?.(e, t, n)
    }, [r]), H = (0, S.Dk)(() => s, [s]), Y = (0, S.Dk)(() => p, [p]);
    l.useEffect(() => {
        0 !== H.size && V({
            shownUserIds: F(H),
            liveUserIds: F(Y)
        })
    }, [H, Y]);
    let W = (0, w.b)(),
        {
            searchQuery: B,
            setSearchQuery: Z,
            clearSearch: X,
            ...K
        } = (0, w.n)(W),
        {
            showSuggestions: $,
            setShowSuggestions: q
        } = (0, C.A)(),
        J = B.trim().length > 0,
        Q = l.useMemo(() => K.groups.filter(e => e.users.length > 0), [K.groups]),
        ee = l.useMemo(() => W.groups.map(e => e.id), [W.groups]),
        {
            draggedGroupId: et,
            dropTargetGroupId: en,
            dropTargetPosition: ei,
            getDragHandleProps: el
        } = (0, O.s)({
            groupIds: ee,
            isDisabled: J,
            onCommitNewOrder: f.A.reorderGroups
        }),
        [er, es] = (0, u.bG)([D.A], () => D.A.getFavoriteTargetIdsForTab(x.x.FRIENDS), [], _.D),
        ea = (0, u.bG)([E.default, A.A, I.A], () => {
            let e = [];
            for (let t of er) {
                let n = E.default.getUser(t);
                null != n && e.push({
                    user: n,
                    activities: A.A.getActivities(t),
                    nickname: I.A.getNickname(t)
                })
            }
            return e
        }, [er]),
        eo = l.useRef(new Set);
    l.useEffect(() => {
        for (let e of er) null == E.default.getUser(e) && (eo.current.has(e) || (eo.current.add(e), (0, h.wz)(e).catch(() => {
            eo.current.delete(e)
        })))
    }, [er]);
    let eu = l.useMemo(() => {
            let e = B.trim().toLowerCase();
            return "" === e ? ea : ea.filter(t => {
                let {
                    user: n,
                    activities: i,
                    nickname: l
                } = t;
                return [n.username, n.globalName, l, ...i.map(e => e.name)].filter(e => null != e && "" !== e.trim()).some(t => t.toLowerCase().includes(e))
            })
        }, [ea, B]),
        ed = es > 0 && eu.length > 0,
        ec = !ed && 0 === Q.length && 0 === K.friendRequests.length && (!$ || 0 === K.suggestions.length) && 0 === K.sameActivity.length && 0 === K.inGame.length && 0 === K.activities.length && 0 === K.online.length && 0 === K.offline.length,
        eh = (0, u.bG)([y.A], () => y.A.getCollapsedSectionOverridesForTab(x.x.FRIENDS), []),
        eg = l.useRef(null),
        em = (0, g.A)("friends-popout", eg),
        ef = l.useCallback(e => {
            (0, R.G)({
                tab: x.x.FRIENDS,
                sectionKey: e
            })
        }, []),
        eA = l.useCallback(e => eh[e] ?? y.A.isSectionCollapsedByDefault(x.x.FRIENDS, e), [eh]),
        eI = l.useCallback(e => {
            e.stopPropagation(), q(!1)
        }, [q]),
        eE = l.useCallback((0, a.debounce)(() => {
            t?.({
                type: M.c.SEARCH_FRIENDS
            })
        }, 1e3, {
            leading: !0,
            trailing: !1
        }), [t]),
        ep = l.useCallback(e => {
            Z(e), eE(), eg.current?.scrollToTop()
        }, [Z, eE]),
        e_ = l.useCallback(() => {
            X(), eE(), eg.current?.scrollToTop()
        }, [X, eE]),
        eS = l.useMemo(() => {
            let e = e => {
                let t = A.A.getStatus(e);
                return t !== j.clD.ONLINE && t !== j.clD.IDLE && t !== j.clD.DND
            };
            if (ec) return [{
                kind: "EMPTY_STATE",
                key: "EMPTY_STATE",
                title: "",
                count: 0,
                length: 1,
                rows: []
            }];
            let t = [];
            if (ed) {
                let n = eA("FAVORITES") ? eu.filter(t => !e(t.user.id)) : eu;
                t.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: L.intl.string(U.default.GKTlS6),
                    count: eu.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            if (K.friendRequests.length > 0) {
                let e = K.friendRequests,
                    n = eA("FRIEND_REQUESTS") ? [] : e;
                t.push({
                    kind: "FRIEND_REQUESTS",
                    key: "FRIEND_REQUESTS",
                    title: L.intl.formatToPlainString(L.t.xxFCW8, {
                        count: e.length
                    }),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            for (let n of Q) {
                let i = `GROUP:${n.id}`,
                    l = n.users,
                    r = eA(i) ? l.filter(t => !e(t.user.id)) : l;
                t.push({
                    kind: "GROUP",
                    key: i,
                    title: n.name,
                    count: l.length,
                    rows: r,
                    length: Math.max(r.length, 1),
                    group: n
                })
            }
            if (K.sameActivity.length > 0) {
                let e = K.sameActivity,
                    n = eA("SAME_ACTIVITY") ? [] : e;
                t.push({
                    kind: "SAME_ACTIVITY",
                    key: "SAME_ACTIVITY",
                    title: W.currentActivityName,
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            if (K.inGame.length > 0) {
                let e = K.inGame,
                    n = eA("IN_GAME") ? [] : e;
                t.push({
                    kind: "IN_GAME",
                    key: "IN_GAME",
                    title: L.intl.string(U.default.trKJoT),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            if (K.activities.length > 0) {
                let e = K.activities,
                    n = eA("ACTIVITIES") ? [] : e;
                t.push({
                    kind: "ACTIVITIES",
                    key: "ACTIVITIES",
                    title: L.intl.string(L.t.TxqPQR),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            if ($ && K.suggestions.length > 0) {
                let e = K.suggestions,
                    n = eA("SUGGESTIONS") ? [] : e;
                t.push({
                    kind: "SUGGESTIONS",
                    key: "SUGGESTIONS",
                    title: L.intl.string(L.t.qm9dSj),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            if (K.online.length > 0) {
                let e = K.online,
                    n = eA("ONLINE") ? [] : e;
                t.push({
                    kind: "ONLINE",
                    key: "ONLINE",
                    title: L.intl.string(L.t.WbGtnH),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            if (K.offline.length > 0) {
                let e = K.offline,
                    n = eA("OFFLINE") ? [] : e;
                t.push({
                    kind: "OFFLINE",
                    key: "OFFLINE",
                    title: L.intl.string(L.t.Vv0abJ),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            return t
        }, [eA, K.friendRequests, Q, K.sameActivity, K.activities, K.inGame, K.suggestions, K.online, K.offline, W.currentActivityName, ec, $, ed, eu]),
        ex = l.useCallback(e => eS[e], [eS]),
        eT = l.useCallback(e => {
            let {
                section: t
            } = e, l = ex(t);
            if (null == l || "EMPTY_STATE" === l.kind) return null;
            let r = eA(l.key),
                s = l.title,
                a = l.count,
                o = "GROUP" === l.kind,
                u = r && "FRIEND_REQUESTS" !== l.kind ? `${s} (${a})` : s,
                h = o && null != n ? e => {
                    n({
                        type: M.K.FRIEND_GROUP,
                        event: e,
                        groupId: l.group?.id ?? "",
                        groupName: s
                    })
                } : void 0;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.AC4, {
                    children: L.intl.format(L.t.Uaqbke, {
                        title: s,
                        count: a
                    })
                }), o ? (0, i.jsx)(P, {
                    groupId: l.group?.id ?? "",
                    groupName: s,
                    displayText: u,
                    isCollapsed: r,
                    onToggle: () => ef(l.key),
                    onContextMenu: h,
                    isReorderDisabled: J,
                    draggedGroupId: et,
                    dropTargetGroupId: en,
                    dropTargetPosition: ei,
                    getDragHandleProps: el
                }) : (0, i.jsx)(v.I, {
                    title: s,
                    count: "FRIEND_REQUESTS" === l.kind ? void 0 : a,
                    isCollapsed: r,
                    canCollapse: !0,
                    onToggle: () => ef(l.key),
                    rightAccessory: "SUGGESTIONS" === l.kind ? (0, i.jsx)(d.m_, {
                        text: L.intl.string(L.t.N86XcP),
                        children: (0, i.jsx)(c.DUT, {
                            className: G.LQ,
                            "aria-label": L.intl.string(L.t.N86XcP),
                            onClick: eI,
                            children: (0, i.jsx)(c.aXh, {
                                size: "xs",
                                color: "currentColor"
                            })
                        })
                    }) : null
                })]
            })
        }, [ex, eA, ef, J, et, en, ei, el, eI, n]),
        eN = l.useCallback(e => {
            let l;
            if (ec) return (0, i.jsx)("div", {
                className: G.y7,
                children: (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: L.intl.string(L.t["7sW4h1"])
                })
            }, "friends-popout-empty");
            let r = ex(e.section);
            if (null == r) return null;
            "GROUP" === r.kind && (l = r.group?.id);
            let s = r.rows[e.row];
            return null == s || null == s.user ? null : (0, i.jsx)("div", {
                children: (0, i.jsx)(N.Z, {
                    ...s,
                    closeParentPopout: z,
                    isSuggestion: "SUGGESTIONS" === r.kind,
                    shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
                    appContext: j.BRT.OVERLAY,
                    onPrimaryAction: t,
                    onContextMenu: n,
                    onFriendVisible: k,
                    friendGroupId: l
                })
            }, `${e.section}:${s.user.id}`)
        }, [ex, ec, z, t, n, k]),
        eC = l.useMemo(() => eS.map(e => e.length), [eS]),
        ev = l.useCallback(e => {
            let t = eS.findIndex(e => "FAVORITES" === e.kind);
            if (-1 === t) return null;
            let n = eS[t],
                i = n?.rows.findIndex(t => t.user.id === e) ?? -1;
            return -1 !== i ? {
                section: t,
                row: i
            } : null
        }, [eS]),
        ey = l.useCallback(() => {
            let e = eS.findIndex(e => "FAVORITES" === e.kind);
            return -1 === e ? null : {
                section: e,
                row: void 0
            }
        }, [eS]);
    (0, b.$)({
        scrollerRef: eg,
        favoriteTargetIds: er,
        getScrollTargetForTargetId: e => ev(e),
        getFallbackScrollTarget: ey,
        padding: 8,
        animate: !1
    });
    let eM = l.useCallback(() => 40, []),
        eR = l.useCallback(e => {
            if (ec) return 300;
            let t = ex(e);
            return null == t ? 50 : 50 * (0 !== t.rows.length)
        }, [ex, ec]);
    return (0, i.jsxs)("div", {
        className: G.kL,
        children: [(0, i.jsx)("div", {
            className: G.MT,
            children: (0, i.jsx)(c.IWV, {
                query: B,
                onChange: ep,
                onClear: e_,
                placeholder: L.intl.string(L.t.lLDtTK),
                size: "md"
            })
        }), (0, i.jsx)(o.hD, {
            navigator: em,
            children: (0, i.jsx)(o.PR, {
                children: e => {
                    let {
                        ref: t,
                        role: n,
                        ...l
                    } = e;
                    return (0, i.jsx)(c.skg, {
                        children: e => (0, i.jsx)(c.B8B, {
                            innerRole: n,
                            innerAriaLabel: L.intl.string(L.t.TdEu5X),
                            ref: e => {
                                eg.current = e, t.current = e?.getScrollerNode() ?? null
                            },
                            className: G.p_,
                            sectionHeight: eM,
                            rowHeight: eR,
                            sidebarHeight: 0,
                            renderSection: eT,
                            renderRow: eN,
                            sections: eC,
                            paddingBottom: 8,
                            ...l,
                            ...e
                        })
                    })
                }
            })
        })]
    })
}