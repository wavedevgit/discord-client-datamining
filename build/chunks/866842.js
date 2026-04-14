/** chunk id: 866842 params = (module,exports,require) **/
n.d(t, {
    D: () => R,
    g: () => G
}), n(321073);
var i = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(873298),
    o = n(933958),
    a = n(181079),
    d = n(93055),
    c = n(424345),
    u = n(698441),
    _ = n(863005),
    A = n(152007),
    E = n(95701),
    I = n(924985),
    h = n(734057),
    g = n(945886),
    C = n(760751),
    p = n(576705),
    T = n(222823),
    S = n(309010),
    b = n(543465),
    f = n(403362),
    N = n(32603),
    m = n(349828),
    L = n(818348);
let O = 21552 == n.j ? [o.Ay, a.A, u.Ay, _.A, A.A, I.A, h.A, C.A, p.A, T.Ay, S.A, b.Ay] : null;

function R() {
    let {
        hasAccess: e
    } = (0, d.TW)("FavoritesGuildChannelList"), [t, n] = i.useState(() => G()), r = i.useMemo(() => G({}), []);
    i.useEffect(() => {
        let e = l().throttle(() => n(G()), 100);
        return O.forEach(t => t.addChangeListener(e)), () => O.forEach(t => t.removeChangeListener(e))
    }, []);
    let s = e ? t : r,
        o = function(e) {
            if (e.getSections().length > N.TF) return !1;
            let t = !1;
            return e.forEachShownChannel(() => {
                t = !0
            }), !t
        }(s);
    return {
        guildChannels: s,
        shouldShowEmptyState: o
    }
}

function G(e) {
    let t = e ?? a.A.getFavoriteChannels(),
        n = b.Ay.isGuildCollapsed(m.Vc),
        i = S.A.getChannelId(),
        r = h.A.getChannel(i),
        o = S.A.getVoiceChannelId(),
        u = [],
        A = {};
    for (let e in t) {
        let n = t[e],
            i = h.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            u.push(r);
            continue
        }
        let l = n.parentId;
        l in A || (A[l] = []), A[l].push(r)
    }

    function C(e, i) {
        let {
            isCollapsed: s,
            isMuted: a
        } = i;
        return l()(e).map(e => {
            if (!e.isPrivate() && !p.A.can(L.xB.VIEW_CHANNEL, e)) return null;
            let d = null != r && (r.id === e.id || o === e.id),
                c = null != r && r.isThread() && r.parent_id === e.id,
                u = (d || c || !s ? _.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id) : _.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                A = (0, N.wF)(e, u, r, o, n),
                I = g.A.isCollapsed(e.id),
                h = b.Ay.isChannelMuted(e.guild_id, e.id),
                C = {
                    id: e.id,
                    record: e,
                    category: i,
                    position: t[e.id].order,
                    threadIds: A,
                    threadCount: l().size(A),
                    isCollapsed: I,
                    isMuted: h,
                    isFirstVoiceChannel: !1,
                    subtitle: (0, N.go)(e, I, !1)
                };
            return d || c || !l().isEmpty(u) || T.Ay.getMentionCount(e.id) > 0 ? C : n && h || s && (h || a || (0, E.gV)(e.type) || (0, E.ig)(e.type) && !1 === T.Ay.hasUnread(e.id)) ? null : C
        }).filter(f.Vq).sortBy(e => {
            let {
                record: t
            } = e;
            return t.isGuildVocal() ? t.position + 1e4 : t.position
        }).value()
    }
    let O = null,
        R = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map(e => e.id),
            getShownChannelAndThreadIds: () => u.map(e => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == O && (O = C(u, this)), O
            }
        },
        G = (0, d.m_)(t).filter(e => null != e.id).map(e => {
            let {
                id: n
            } = e, i = a.A.getCategoryRecord(n);
            if (null == i) return null;
            let r = A[n] ?? [],
                l = b.Ay.isChannelMuted(m.Vc, n),
                s = I.A.isCollapsed(n),
                o = null;
            return {
                isMuted: l,
                isCollapsed: s,
                record: i,
                id: n,
                position: t[n]?.order ?? 0,
                getChannelRecords: () => r,
                getShownChannelIds: () => r.map(e => e.id),
                getShownChannelAndThreadIds: () => r.map(e => e.id),
                isEmpty: () => 0 === r.length,
                get channelList() {
                    return null == o && (o = C(r, this)), o
                }
            }
        }).filter(e => null != e),
        U = 0;
    for (let e of [R, ...G])
        for (let t of (e.position = ++U, e.channelList)) t.position = ++U;
    let D = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        y = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: m.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            e[N.Xt] = 0, e[N.PU] = 0, e[N.HP] = 0, e[N.yO] = 0, e[N.bK] = R.channelList.length;
            for (let t = 0; t < G.length; t++) e[N.TF + t] = Math.max(1, G[t].channelList.length);
            return e
        },
        isPlaceholderRow: (e, t) => !(e < N.TF) && 0 === t && 0 === G[e - N.TF].channelList.length,
        getCategoryFromSection: e => e === N.bK ? R : G[e - N.TF],
        getNamedCategoryFromSection: e => G[e - N.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : {
                category: n,
                channel: n.channelList[t]
            }
        },
        getGuildActionSection: () => D,
        getChannelNoticeSection: () => y,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [R, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{
                        section: n + N.bK,
                        row: i
                    }];
            return []
        },
        forEachShownChannel(e) {
            for (let t of [R, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.A.getChannel(t);
                        null != n && e(n)
                    }
        },
        forEachChannel(e) {
            for (let t of [R, ...G])
                for (let n of t.getChannelRecords()) e(n)
        },
        getSlicedChannels: e => [
            [], e, []
        ],
        getChannels: () => []
    }
}