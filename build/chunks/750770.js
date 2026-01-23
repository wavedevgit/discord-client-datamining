/** Chunk was on web.js **/
/** chunk id: 750770, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => v,
    s: () => I
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(963307),
    o = n(734057),
    l = n(71393),
    c = n(531685),
    u = n(954571),
    d = n(99066),
    f = n(435738),
    p = n(376261),
    _ = n(947593),
    h = n(188737),
    m = n(420706),
    g = n(424994),
    E = n(495744),
    y = n(652215),
    b = n(985018);
let O = 3,
    v = 0,
    A = 3e3;

function I(e) {
    let {
        memberStoreProps: {
            groups: t,
            rows: n,
            version: v
        },
        channelId: I,
        guildId: S
    } = e, [T, C] = r.useState(!1), {
        requestId: N,
        entries: w,
        impressionCappedEntryIds: R
    } = (0, h.A)(I), P = (0, i.bG)([f.A], () => f.A.hidden), D = (0, i.bG)([c.A], () => c.A.isFocused()), x = (0, i.bG)([o.A], () => o.A.getChannel(I)), L = (0, i.bG)([l.A], () => l.A.getGuild(S), [S]), j = (0, p.T)(L), M = null != j && j && (null == x ? void 0 : x.isForumChannel()) === !1, [k, U, G, V] = r.useMemo(() => {
        let e;
        if (null == w || 0 === w.length || null == N || !M) return [t, n, v];
        let r = O,
            i = T ? w.length : r,
            a = w.slice(0, i);
        e = P ? [{
            type: s.S9.HIDDEN_CONTENT_INVENTORY
        }] : a.map(e => ({
            type: s.S9.CONTENT_INVENTORY,
            entry: e,
            requestId: N
        }));
        let o = () => {
                C(e => {
                    let t = !e;
                    return u.default.track(y.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                        channel_id: I,
                        guild_id: S,
                        expanded: t
                    }), t
                })
            },
            l = {
                id: E.C,
                type: s.S9.CONTENT_INVENTORY_GROUP,
                key: E.C,
                count: e.length,
                index: n.length,
                title: b.intl.string(b.t["6gwSFY"]),
                onToggleExpand: o,
                expanded: T,
                expandedCount: w.length,
                feedHeight: e.map(m.h9).reduce((e, t) => e + t, 0)
            };
        return [
            [l, ...t],
            [...n, l, ...e], Math.random(), e
        ]
    }, [I, w, T, t, S, N, n, v, P, M]), F = r.useRef(0), B = r.useRef(w), H = r.useRef(void 0), Y = r.useRef({
        impressionCappedEntryIds: R
    }), W = r.useCallback(e => {
        var t;
        let n = Math.floor(e / m.bG),
            r = Math.min(null != (t = null == V ? void 0 : V.length) ? t : 0, n);
        F.current = Math.max(F.current, r)
    }, [V]);
    return r.useEffect(() => {
        B.current = w
    }, [w]), r.useEffect(() => {
        Y.current = {
            impressionCappedEntryIds: R
        }
    }, [R]), r.useEffect(() => (F.current = 0, H.current = Date.now(), () => {
        var e, t;
        if (null == N || null == H.current || Date.now() - H.current < A) return;
        let n = null != (e = null == (t = B.current) ? void 0 : t.map(e => e.id)) ? e : [],
            r = n.slice(0, F.current);
        !P && D && M && ((0, _.D)(y.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
            request_id: N,
            first_shown_at: H.current,
            item_ids: r,
            surface_type: g.UG.GUILD_MEMBER_LIST,
            channel_id: I,
            guild_id: S,
            all_item_ids: n,
            impression_capped_item_ids: [...Y.current.impressionCappedEntryIds]
        }), (0, d.sE)("useInjectContentInventoryFeed") && a.h.dispatch({
            type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
            itemIds: r
        }))
    }), [N, I, S, P, D, M]), {
        groups: k,
        rows: U,
        version: G,
        updateMaxRowSeen: W
    }
}