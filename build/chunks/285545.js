/** chunk id: 285545 params = (module,exports,require) **/
n.d(t, {
    i: () => m
}), n(321073);
var i = n(64700),
    a = n(311907),
    l = n(919796),
    r = n(4106),
    s = n(105971),
    o = n(800319),
    d = n(883344),
    c = n(596720),
    u = n(859524),
    A = n(639040),
    h = n(567061),
    _ = n(118972);

function m(e) {
    let {
        showDot: t,
        notificationItem: n
    } = e, [m, g] = i.useState(!1), {
        unreadItems: p,
        readItems: E,
        allUnreadItemsHydrated: I
    } = (0, A.A)(), f = (0, a.bG)([d.A], () => d.A.getVersion(), []), C = (0, a.bG)([d.A], () => !(d.A.isFirstPageHydrated() && f > 0));
    i.useEffect(() => {
        null != d.A.getLoadId() && s.k.trackFeedShown({
            homeSessionId: "gravity"
        })
    }, [f]);
    let T = (0, a.bG)([d.A], () => d.A.isRefreshing(), []),
        N = (0, a.bG)([d.A], () => d.A.isHydrating(), []),
        [S, x] = i.useState([]),
        {
            loadId: v,
            lastScrollEventTimestamp: b
        } = (0, a.cf)([d.A], () => ({
            loadId: d.A.getLoadId(),
            lastScrollEventTimestamp: d.A.lastScrollEvent()
        })),
        y = S.filter(e => {
            let {
                item: t
            } = e;
            return !o.P.has(t.data.kind)
        }).map(e => {
            let {
                item: t
            } = e;
            return t.id
        }).pop(),
        O = (0, l.A)(y);
    i.useEffect(() => {
        if (T || C || null == O || null == y || y === O) return;
        let e = Date.now();
        e - b > _.N && (r.A.gravityScrollEvent(e), s.k.trackFeedFirstScrollStarted())
    }, [T, b, O, y, v, C]);
    let L = i.useCallback(e => {
            let {
                viewableItems: t
            } = e;
            if (t.some(e => "end" === e.item.data.kind) && g(!0), 0 === t.length) return;
            x(t);
            let n = [],
                i = (0, u.P0)(t),
                a = Date.now();
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                null != t && n.push({
                    id: t.id,
                    type: (0, c.xG)(t),
                    timestamp: a++
                })
            }
            n.length > 0 && r.A.ackGravityItems(n, !0), s.k.trackItemShortImpression(t, i.map(e => ({
                id: e.id,
                type: (0, c.xG)(e)
            })), f)
        }, [f, g]),
        R = i.useCallback(e => {
            let {
                viewableItems: t
            } = e;
            if (0 === t.length) return;
            let n = (0, u.P0)(t);
            s.k.trackItemLongImpression(t, n.map(e => ({
                id: e.id,
                type: (0, c.xG)(e)
            })), f), r.A.triggerItemsLongImpression(t.filter(e => {
                let {
                    item: t
                } = e;
                return !o.P.has(t.data.kind)
            }).map(e => {
                let {
                    item: t,
                    index: n
                } = e;
                return {
                    itemId: t.id,
                    itemType: (0, u.px)(t),
                    triggerType: "list",
                    itemFeedIndex: n,
                    itemScore: t.score ?? null,
                    itemChannelType: t.channelType ?? null,
                    isInitiallyVisible: !1
                }
            }))
        }, [f]),
        P = i.useCallback(e => {
            let {
                viewableItems: t
            } = e;
            r.A.startItemsDwell(t.filter(e => {
                let {
                    item: t
                } = e;
                return !o.P.has(t.data.kind)
            }).map(e => {
                let {
                    item: t,
                    index: n
                } = e;
                return {
                    itemId: t.id,
                    itemType: (0, u.px)(t),
                    triggerType: "list",
                    itemFeedIndex: n,
                    itemScore: t.score ?? null,
                    itemChannelType: t.channelType ?? null,
                    isInitiallyVisible: !1
                }
            }))
        }, []),
        D = i.useMemo(() => [{
            viewabilityConfig: {
                waitForInteraction: !1,
                viewAreaCoveragePercentThreshold: 100,
                minimumViewTime: 50
            },
            onViewableItemsChanged: L
        }, {
            viewabilityConfig: {
                waitForInteraction: !1,
                viewAreaCoveragePercentThreshold: 50,
                minimumViewTime: 1e3
            },
            onViewableItemsChanged: R
        }, {
            viewabilityConfig: {
                waitForInteraction: !1,
                viewAreaCoveragePercentThreshold: 50,
                minimumViewTime: 50
            },
            onViewableItemsChanged: P
        }], [L, R, P]);
    i.useEffect(() => {
        r.A.openICYMITab()
    }, []);
    let M = (0, h.E)(t),
        {
            data: j,
            stickyHeaderIndices: w
        } = i.useMemo(() => {
            let e = [];
            return C && null != n && n.type === c.Mm.CUSTOM_STATUS && e.push({
                id: n.id,
                timestamp: Date.now(),
                data: {
                    kind: "contentInventory",
                    content: (0, u.YM)(n).activity
                },
                score: n.score,
                unread: !0
            }), C ? e.push({
                id: "loading",
                timestamp: 0,
                unread: !1,
                data: {
                    kind: "loading"
                }
            }) : (p.forEach(t => {
                (0, u.yx)(t) || e.push(t)
            }), I && e.push({
                id: "end",
                timestamp: 0,
                unread: !1,
                data: {
                    kind: "end"
                }
            }), E.length > 0 && E.forEach(t => {
                (0, u.yx)(t) || e.push(t)
            }), N && e.push({
                id: "bottomLoading",
                timestamp: 0,
                unread: !1,
                data: {
                    kind: "bottomLoading"
                }
            })), {
                data: e,
                stickyHeaderIndices: []
            }
        }, [C, n, p, I, E, N]);
    return {
        data: j,
        loading: C,
        version: f,
        visibleItemIds: S,
        endVisible: m,
        isRefreshing: T,
        handleOnRefresh: M,
        stickyHeaderIndices: w,
        viewabilityConfigCallbackPairs: D
    }
}