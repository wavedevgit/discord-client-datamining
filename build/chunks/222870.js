/** chunk id: 222870 params = (module,exports,require) **/
n.d(t, {
    t: () => P
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(735438),
    s = n(837381),
    a = n(311907),
    o = n(397927),
    u = n(928039),
    d = n(47167),
    c = n(379078),
    h = n(704554),
    g = n(594831),
    m = n(734057),
    f = n(71393),
    A = n(222823),
    I = n(994500),
    E = n(287809),
    p = n(645959),
    _ = n(256415),
    S = n(403362),
    x = n(996439),
    T = n(810412),
    N = n(914853),
    C = n(179917),
    v = n(419072),
    y = n(437331),
    M = n(91868),
    R = n(554932),
    D = n(406595),
    b = n(557404),
    O = n(652215),
    w = n(499214),
    j = n(985018),
    U = n(894564);

function L(e) {
    return Array.from(e).sort()
}
let k = (0, r.throttle)(e => {
        (0, T.Y)(O.uss.FRIENDS, {
            locked: _.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: [],
            contentInventoryIds: e.contentInventoryIds
        })
    }, 3e3, {
        leading: !0,
        trailing: !1
    }),
    G = {
        searchType: c.n.REGEX,
        sortType: c.r.JARO_WINKLER,
        searchStringGenerator: e => {
            let {
                channel: t
            } = e, n = [(0, d.m1)(t, E.default, I.A), t.name, t.id];
            if (t.isDM()) {
                let e = t.getRecipientId(),
                    i = E.default.getUser(e),
                    l = I.A.getNickname(e);
                n.push(i?.username, i?.globalName, l)
            } else if (t.isMultiUserDM())
                for (let e of t.recipients ?? []) {
                    let t = E.default.getUser(e),
                        i = I.A.getNickname(e);
                    n.push(t?.username, t?.globalName, i)
                }
            let i = null != t.guild_id ? f.A.getGuild(t.guild_id)?.name ?? null : null;
            return null != i && n.push(i), n.filter(S.Vq)
        },
        throttleMs: 100
    };

function P() {
    let e, {
            onPrimaryAction: t,
            onContextMenu: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [r, d] = l.useState(""),
        c = r.trim().toLowerCase(),
        f = (e = (0, g.Dz)(), (0, a.yK)([p.default, m.A], () => {
            let t = [];
            for (let e of p.default.getPrivateChannelIds()) {
                let n = m.A.getChannel(e);
                null != n && t.push({
                    channel: n,
                    voiceStates: []
                })
            }
            for (let n of e) t.push(n);
            return t
        }, [e])),
        [I, E] = l.useState([]);
    (0, h.RT)(r, f, E, G);
    let _ = l.useRef(null),
        S = (0, u.A)("friends-widget-messages", _),
        [O, P] = (0, a.bG)([D.A], () => D.A.getFavoriteTargetIdsForTab(N.x.MESSAGES), [], x.D),
        [F, V] = (0, a.bG)([M.A], () => {
            let [e, t] = M.A.getRows(M.Y.ACTIVE_NOW), [n] = M.A.getRows(M.Y.DMS), [i] = M.A.getRows(M.Y.RECENT_TEXT), l = n.slice(0, 5), r = i.slice(0, 8);
            return [{
                activeNowRows: e.slice(0, 8),
                dmRows: l,
                recentTextRows: r
            }, t]
        }, [], x.D),
        z = (0, a.bG)([v.A], () => v.A.getCollapsedSectionOverridesForTab(N.x.MESSAGES), []),
        H = l.useCallback(e => {
            (0, R.G)({
                tab: N.x.MESSAGES,
                sectionKey: e
            })
        }, []),
        Y = l.useMemo(() => {
            let e = new Set;
            for (let t of O) e.add(t);
            for (let t of F.dmRows) e.add(t.channelId);
            for (let t of F.activeNowRows) e.add(t.channelId);
            for (let t of F.recentTextRows) e.add(t.channelId);
            return Array.from(e)
        }, [O, F.activeNowRows, F.dmRows, F.recentTextRows]),
        {
            unreadOrMentionChannels: W
        } = (0, a.cf)([A.Ay], () => {
            let e = new Set;
            for (let t of Y) {
                let n = A.Ay.hasUnread(t),
                    i = A.Ay.getMentionCount(t),
                    l = A.Ay.getIsMentionLowImportance(t),
                    r = i > 0 && !l;
                (n || r) && e.add(t)
            }
            return {
                unreadOrMentionChannels: e
            }
        }, [Y]),
        B = l.useMemo(() => {
            let e = e => !0 === z[e],
                t = e => W.has(e),
                n = [];
            if (0 === V) return [];
            if ("" !== c) return n.push({
                kind: "SEARCH_RESULTS",
                key: "SEARCH_RESULTS",
                title: j.intl.string(w.default.HGimIS),
                count: I.length,
                channelIds: I.map(e => e.channel.id),
                length: I.length
            }), n;
            if (O.length > 0 && P > 0) {
                let i = e("FAVORITES") ? O.filter(t) : O;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: j.intl.string(w.default.GKTlS6),
                    count: O.length,
                    channelIds: i,
                    length: Math.max(i.length, 1)
                })
            }
            if (F.activeNowRows.length > 0) {
                let t = F.activeNowRows.map(e => e.channelId),
                    i = e("ACTIVE_NOW") ? [] : t;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: j.intl.string(w.default.d3yO98),
                    count: t.length,
                    channelIds: i,
                    length: Math.max(i.length, 1)
                })
            }
            if (F.dmRows.length > 0) {
                let i = F.dmRows.map(e => e.channelId),
                    l = e("DMS") ? i.filter(t) : i;
                n.push({
                    kind: "DMS",
                    key: "DMS",
                    title: j.intl.string(j.t.YUU0RF),
                    count: i.length,
                    channelIds: l,
                    length: Math.max(l.length, 1)
                })
            }
            if (F.recentTextRows.length > 0) {
                let i = F.recentTextRows.map(e => e.channelId),
                    l = e("TEXT_CHANNELS") ? i.filter(t) : i;
                n.push({
                    kind: "TEXT_CHANNELS",
                    key: "TEXT_CHANNELS",
                    title: j.intl.string(w.default.uC6Lhg),
                    count: i.length,
                    channelIds: l,
                    length: Math.max(l.length, 1)
                })
            }
            return n
        }, [z, W, c, O, F.activeNowRows, F.dmRows, F.recentTextRows, P, I, V]),
        Z = l.useMemo(() => B.map(e => e.length), [B]),
        X = l.useCallback(e => {
            let t = B.findIndex(e => "FAVORITES" === e.kind);
            if (-1 === t) {
                for (let t = 0; t < B.length; t += 1) {
                    let n = B[t].channelIds.findIndex(t => t === e);
                    if (-1 !== n) return {
                        section: t,
                        row: n
                    }
                }
                return null
            }
            let n = B[t],
                i = n?.channelIds.findIndex(t => t === e) ?? -1;
            return -1 !== i ? {
                section: t,
                row: i
            } : null
        }, [B]),
        K = l.useCallback(() => {
            let e = B.findIndex(e => "FAVORITES" === e.kind);
            return -1 === e ? null : {
                section: e,
                row: void 0
            }
        }, [B]);
    (0, b.$)({
        scrollerRef: _,
        favoriteTargetIds: O,
        getScrollTargetForTargetId: e => X(e),
        getFallbackScrollTarget: K,
        padding: 8,
        animate: !1
    });
    let $ = (0, T.Dk)(() => {
            let e = new Set;
            for (let t of B)
                for (let n of t.channelIds) e.add(n);
            return e
        }, [B]),
        {
            shownUserIds: q,
            contentInventoryIds: J
        } = (0, a.bG)([], () => (function(e) {
            let t = new Set,
                n = new Set;
            for (let i of e) {
                let e = m.A.getChannel(i);
                if (null != e) {
                    if (e.isDM()) {
                        let n = e.getRecipientId?.() ?? null;
                        null != n && t.add(n);
                        continue
                    }
                    if (e.isMultiUserDM()) {
                        for (let n of e.recipients ?? []) t.add(n);
                        continue
                    }
                    n.add(i)
                }
            }
            return {
                shownUserIds: t,
                contentInventoryIds: n
            }
        })($), [$]),
        Q = (0, T.Dk)(() => q, [q]),
        ee = (0, T.Dk)(() => J, [J]);
    l.useEffect(() => {
        (0 !== Q.size || 0 !== ee.size) && k({
            shownUserIds: L(Q),
            contentInventoryIds: L(ee)
        })
    }, [Q, ee]);
    let et = l.useCallback(e => B[e], [B]),
        en = l.useCallback(e => {
            let {
                section: t
            } = e, n = et(t);
            if (null == n) return null;
            let l = "SEARCH_RESULTS" !== n.kind,
                r = l && !0 === z[n.key];
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.AC4, {
                    children: n.title
                }), (0, i.jsx)(C.I, {
                    title: n.title,
                    count: n.count,
                    isCollapsed: r,
                    canCollapse: l,
                    onToggle: () => H(n.key)
                })]
            })
        }, [z, et, H]),
        ei = l.useCallback(e => {
            let l = et(e.section);
            if (null == l) return null;
            let r = l.channelIds[e.row];
            if (null == r) return null;
            let s = `${l.key}:${e.row}`;
            return (0, i.jsx)(y.V, {
                channelId: r,
                listItemId: s,
                shouldHighlightIfRecentlyAdded: "FAVORITES" === l.kind,
                onPrimaryAction: t,
                onContextMenu: n
            }, s)
        }, [et, n, t]),
        el = l.useCallback(() => 40, []),
        er = l.useCallback((e, t) => {
            let n = et(e);
            return null == n ? 50 : 50 * (null != n.channelIds[t])
        }, [et]),
        es = l.useCallback(e => {
            d(e), _.current?.scrollToTop()
        }, []);
    return (0, i.jsxs)("div", {
        className: U.kL,
        children: [(0, i.jsx)("div", {
            className: U.MT,
            children: (0, i.jsx)(o.IWV, {
                query: r,
                onChange: es,
                onClear: () => d(""),
                placeholder: j.intl.string(w.default["xB/0Z9"]),
                size: "md"
            })
        }), (0, i.jsx)(s.hD, {
            navigator: S,
            children: (0, i.jsx)(s.PR, {
                children: e => {
                    let {
                        ref: t,
                        role: n,
                        ...l
                    } = e;
                    return (0, i.jsx)(o.skg, {
                        children: e => (0, i.jsx)(o.B8B, {
                            innerRole: n,
                            innerAriaLabel: j.intl.string(j.t.OIgYlQ),
                            ref: e => {
                                _.current = e, t.current = e?.getScrollerNode() ?? null
                            },
                            className: U.p_,
                            sectionHeight: el,
                            rowHeight: er,
                            sidebarHeight: 0,
                            renderSection: en,
                            renderRow: ei,
                            sections: Z,
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