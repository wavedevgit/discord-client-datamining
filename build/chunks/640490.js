/** chunk id: 640490 params = (module,exports,require) **/
n.d(t, {
    F: () => H
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
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
    C = n(236884),
    N = n(542080),
    v = n(179917),
    y = n(419072),
    M = n(67103),
    b = n(554932),
    R = n(406595),
    D = n(557404),
    O = n(535973),
    w = n(125117),
    j = n(652215),
    k = n(499214),
    U = n(985018),
    L = n(150045),
    G = n(894564);

function P(e) {
    let {
        groupId: t,
        groupName: n,
        displayText: r,
        isCollapsed: l,
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
            [L.EU]: A,
            [L.Me]: null != d && d === t,
            [L.hV]: I,
            [L.nH]: E,
            [L._M]: p
        }),
        children: (0, i.jsx)("div", {
            ...f(t, A),
            onContextMenu: o,
            children: (0, i.jsxs)(c.DUT, {
                onClick: a,
                "aria-hidden": !0,
                className: G.Ws,
                children: [r, (0, i.jsx)(T.C, {
                    isCollapsed: l,
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
        onFriendVisible: l
    } = e, [s, m] = r.useState(new Set), [p, T] = r.useState(new Set), L = r.useCallback((e, t, n) => {
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
        }), l?.(e, t, n)
    }, [l]), H = (0, S.Dk)(() => s, [s]), Y = (0, S.Dk)(() => p, [p]);
    r.useEffect(() => {
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
        } = (0, N.A)(),
        J = B.trim().length > 0,
        Q = r.useMemo(() => K.groups.filter(e => e.users.length > 0), [K.groups]),
        ee = r.useMemo(() => W.groups.map(e => e.id), [W.groups]),
        {
            draggedGroupId: et,
            dropTargetGroupId: en,
            dropTargetPosition: ei,
            getDragHandleProps: er
        } = (0, O.s)({
            groupIds: ee,
            isDisabled: J,
            onCommitNewOrder: f.A.reorderGroups
        }),
        [el, es] = (0, u.bG)([R.A], () => R.A.getFavoriteTargetIdsForTab(x.x.FRIENDS), [], _.D),
        ea = (0, u.bG)([E.default, A.A, I.A], () => {
            let e = [];
            for (let t of el) {
                let n = E.default.getUser(t);
                null != n && e.push({
                    user: n,
                    activities: A.A.getActivities(t),
                    nickname: I.A.getNickname(t)
                })
            }
            return e
        }, [el]),
        eo = r.useRef(new Set);
    r.useEffect(() => {
        for (let e of el) null == E.default.getUser(e) && (eo.current.has(e) || (eo.current.add(e), (0, h.wz)(e).catch(() => {
            eo.current.delete(e)
        })))
    }, [el]);
    let eu = r.useMemo(() => {
            let e = B.trim().toLowerCase();
            return "" === e ? ea : ea.filter(t => {
                let {
                    user: n,
                    activities: i,
                    nickname: r
                } = t;
                return [n.username, n.globalName, r, ...i.map(e => e.name)].filter(e => null != e && "" !== e.trim()).some(t => t.toLowerCase().includes(e))
            })
        }, [ea, B]),
        ed = es > 0 && eu.length > 0,
        ec = !ed && 0 === Q.length && 0 === K.friendRequests.length && (!$ || 0 === K.suggestions.length) && 0 === K.sameActivity.length && 0 === K.inGame.length && 0 === K.activities.length && 0 === K.online.length && 0 === K.offline.length,
        eh = (0, u.bG)([y.A], () => y.A.getCollapsedSectionOverridesForTab(x.x.FRIENDS), []),
        eg = r.useRef(null),
        em = (0, g.A)("friends-popout", eg),
        ef = r.useCallback(e => {
            (0, b.G)({
                tab: x.x.FRIENDS,
                sectionKey: e
            })
        }, []),
        eA = r.useCallback(e => eh[e] ?? y.A.isSectionCollapsedByDefault(x.x.FRIENDS, e), [eh]),
        eI = r.useCallback(e => {
            e.stopPropagation(), q(!1)
        }, [q]),
        eE = r.useCallback((0, a.debounce)(() => {
            t?.({
                type: M.c.SEARCH_FRIENDS
            })
        }, 1e3, {
            leading: !0,
            trailing: !1
        }), [t]),
        ep = r.useCallback(e => {
            Z(e), eE(), eg.current?.scrollToTop()
        }, [Z, eE]),
        e_ = r.useCallback(() => {
            X(), eE(), eg.current?.scrollToTop()
        }, [X, eE]),
        eS = r.useMemo(() => {
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
                    title: U.intl.string(k.default.GKTlS6),
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
                    title: U.intl.formatToPlainString(U.t.xxFCW8, {
                        count: e.length
                    }),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            for (let n of Q) {
                let i = `GROUP:${n.id}`,
                    r = n.users,
                    l = eA(i) ? r.filter(t => !e(t.user.id)) : r;
                t.push({
                    kind: "GROUP",
                    key: i,
                    title: n.name,
                    count: r.length,
                    rows: l,
                    length: Math.max(l.length, 1),
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
                    title: U.intl.string(k.default.trKJoT),
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
                    title: U.intl.string(U.t.TxqPQR),
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
                    title: U.intl.string(U.t.qm9dSj),
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
                    title: U.intl.string(U.t.WbGtnH),
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
                    title: U.intl.string(U.t.Vv0abJ),
                    count: e.length,
                    rows: n,
                    length: Math.max(n.length, 1)
                })
            }
            return t
        }, [eA, K.friendRequests, Q, K.sameActivity, K.activities, K.inGame, K.suggestions, K.online, K.offline, W.currentActivityName, ec, $, ed, eu]),
        ex = r.useCallback(e => eS[e], [eS]),
        eT = r.useCallback(e => {
            let {
                section: t
            } = e, r = ex(t);
            if (null == r || "EMPTY_STATE" === r.kind) return null;
            let l = eA(r.key),
                s = r.title,
                a = r.count,
                o = "GROUP" === r.kind,
                u = l && "FRIEND_REQUESTS" !== r.kind ? `${s} (${a})` : s,
                h = o && null != n ? e => {
                    n({
                        type: M.K.FRIEND_GROUP,
                        event: e,
                        groupId: r.group?.id ?? "",
                        groupName: s
                    })
                } : void 0;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.AC4, {
                    children: U.intl.format(U.t.Uaqbke, {
                        title: s,
                        count: a
                    })
                }), o ? (0, i.jsx)(P, {
                    groupId: r.group?.id ?? "",
                    groupName: s,
                    displayText: u,
                    isCollapsed: l,
                    onToggle: () => ef(r.key),
                    onContextMenu: h,
                    isReorderDisabled: J,
                    draggedGroupId: et,
                    dropTargetGroupId: en,
                    dropTargetPosition: ei,
                    getDragHandleProps: er
                }) : (0, i.jsx)(v.I, {
                    title: s,
                    count: "FRIEND_REQUESTS" === r.kind ? void 0 : a,
                    isCollapsed: l,
                    canCollapse: !0,
                    onToggle: () => ef(r.key),
                    rightAccessory: "SUGGESTIONS" === r.kind ? (0, i.jsx)(d.m_, {
                        text: U.intl.string(U.t.N86XcP),
                        children: (0, i.jsx)(c.DUT, {
                            className: G.LQ,
                            "aria-label": U.intl.string(U.t.N86XcP),
                            onClick: eI,
                            children: (0, i.jsx)(c.aXh, {
                                size: "xs",
                                color: "currentColor"
                            })
                        })
                    }) : null
                })]
            })
        }, [ex, eA, ef, J, et, en, ei, er, eI, n]),
        eC = r.useCallback(e => {
            let r;
            if (ec) return (0, i.jsx)("div", {
                className: G.y7,
                children: (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: U.intl.string(U.t["7sW4h1"])
                })
            }, "friends-popout-empty");
            let l = ex(e.section);
            if (null == l) return null;
            "GROUP" === l.kind && (r = l.group?.id);
            let s = l.rows[e.row];
            return null == s || null == s.user ? null : (0, i.jsx)("div", {
                children: (0, i.jsx)(C.Z, {
                    ...s,
                    closeParentPopout: z,
                    isSuggestion: "SUGGESTIONS" === l.kind,
                    shouldHighlightIfRecentlyAdded: "FAVORITES" === l.kind,
                    appContext: j.BRT.OVERLAY,
                    onPrimaryAction: t,
                    onContextMenu: n,
                    onFriendVisible: L,
                    friendGroupId: r
                })
            }, `${e.section}:${s.user.id}`)
        }, [ex, ec, z, t, n, L]),
        eN = r.useMemo(() => eS.map(e => e.length), [eS]),
        ev = r.useCallback(e => {
            let t = eS.findIndex(e => "FAVORITES" === e.kind);
            if (-1 === t) return null;
            let n = eS[t],
                i = n?.rows.findIndex(t => t.user.id === e) ?? -1;
            return -1 !== i ? {
                section: t,
                row: i
            } : null
        }, [eS]),
        ey = r.useCallback(() => {
            let e = eS.findIndex(e => "FAVORITES" === e.kind);
            return -1 === e ? null : {
                section: e,
                row: void 0
            }
        }, [eS]);
    (0, D.$)({
        scrollerRef: eg,
        favoriteTargetIds: el,
        getScrollTargetForTargetId: e => ev(e),
        getFallbackScrollTarget: ey,
        padding: 8,
        animate: !1
    });
    let eM = r.useCallback(() => 40, []),
        eb = r.useCallback(e => {
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
                placeholder: U.intl.string(U.t.lLDtTK),
                size: "md"
            })
        }), (0, i.jsx)(o.hD, {
            navigator: em,
            children: (0, i.jsx)(o.PR, {
                children: e => {
                    let {
                        ref: t,
                        role: n,
                        ...r
                    } = e;
                    return (0, i.jsx)(c.skg, {
                        children: e => (0, i.jsx)(c.B8B, {
                            innerRole: n,
                            innerAriaLabel: U.intl.string(U.t.TdEu5X),
                            ref: e => {
                                eg.current = e, t.current = e?.getScrollerNode() ?? null
                            },
                            className: G.p_,
                            sectionHeight: eM,
                            rowHeight: eb,
                            sidebarHeight: 0,
                            renderSection: eT,
                            renderRow: eC,
                            sections: eN,
                            paddingBottom: 8,
                            ...r,
                            ...e
                        })
                    })
                }
            })
        })]
    })
}