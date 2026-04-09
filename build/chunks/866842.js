/** chunk id: 866842 params = (module,exports,require) **/
n.d(t, {
    D: () => R,
    g: () => y
}), n(321073);
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(93055),
    _ = n(424345),
    c = n(698441),
    u = n(863005),
    A = n(152007),
    E = n(95701),
    I = n(924985),
    g = n(734057),
    h = n(945886),
    p = n(760751),
    C = n(576705),
    f = n(222823),
    m = n(309010),
    S = n(543465),
    b = n(403362),
    T = n(32603),
    N = n(349828),
    L = n(818348);
let O = 21552 == n.j ? [l.Ay, o.A, c.Ay, u.A, A.A, I.A, g.A, p.A, C.A, f.Ay, m.A, S.Ay] : null;

function R() {
    let {
        hasAccess: e
    } = (0, d.TW)("FavoritesGuildChannelList"), [t, n] = i.useState(() => y()), r = i.useMemo(() => y({}), []);
    i.useEffect(() => {
        let e = a().throttle(() => n(y()), 100);
        return O.forEach(t => t.addChangeListener(e)), () => O.forEach(t => t.removeChangeListener(e))
    }, []);
    let s = e ? t : r,
        l = function(e) {
            if (e.getSections().length > T.TF) return !1;
            let t = !1;
            return e.forEachShownChannel(() => {
                t = !0
            }), !t
        }(s);
    return {
        guildChannels: s,
        shouldShowEmptyState: l
    }
}

function y(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = S.Ay.isGuildCollapsed(N.Vc),
        i = m.A.getChannelId(),
        r = g.A.getChannel(i),
        l = m.A.getVoiceChannelId(),
        c = [],
        A = {};
    for (let e in t) {
        let n = t[e],
            i = g.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, _.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            c.push(r);
            continue
        }
        let a = n.parentId;
        a in A || (A[a] = []), A[a].push(r)
    }

    function p(e, i) {
        let {
            isCollapsed: s,
            isMuted: o
        } = i;
        return a()(e).map(e => {
            if (!e.isPrivate() && !C.A.can(L.xB.VIEW_CHANNEL, e)) return null;
            let d = null != r && (r.id === e.id || l === e.id),
                _ = null != r && r.isThread() && r.parent_id === e.id,
                c = (d || _ || !s ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id) : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                A = (0, T.wF)(e, c, r, l, n),
                I = h.A.isCollapsed(e.id),
                g = S.Ay.isChannelMuted(e.guild_id, e.id),
                p = {
                    id: e.id,
                    record: e,
                    category: i,
                    position: t[e.id].order,
                    threadIds: A,
                    threadCount: a().size(A),
                    isCollapsed: I,
                    isMuted: g,
                    isFirstVoiceChannel: !1,
                    subtitle: (0, T.go)(e, I, !1)
                };
            return d || _ || !a().isEmpty(c) || f.Ay.getMentionCount(e.id) > 0 ? p : n && g || s && (g || o || (0, E.gV)(e.type) || (0, E.ig)(e.type) && !1 === f.Ay.hasUnread(e.id)) ? null : p
        }).filter(b.Vq).sortBy(e => {
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
            getChannelRecords: () => c,
            getShownChannelIds: () => c.map(e => e.id),
            getShownChannelAndThreadIds: () => c.map(e => e.id),
            isEmpty: () => 0 === c.length,
            get channelList() {
                return null == O && (O = p(c, this)), O
            }
        },
        y = (0, d.m_)(t).filter(e => null != e.id).map(e => {
            let {
                id: n
            } = e, i = o.A.getCategoryRecord(n);
            if (null == i) return null;
            let r = A[n] ?? [],
                a = S.Ay.isChannelMuted(N.Vc, n),
                s = I.A.isCollapsed(n),
                l = null;
            return {
                isMuted: a,
                isCollapsed: s,
                record: i,
                id: n,
                position: t[n]?.order ?? 0,
                getChannelRecords: () => r,
                getShownChannelIds: () => r.map(e => e.id),
                getShownChannelAndThreadIds: () => r.map(e => e.id),
                isEmpty: () => 0 === r.length,
                get channelList() {
                    return null == l && (l = p(r, this)), l
                }
            }
        }).filter(e => null != e),
        G = 0;
    for (let e of [R, ...y])
        for (let t of (e.position = ++G, e.channelList)) t.position = ++G;
    let U = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        v = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: N.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            e[T.Xt] = 0, e[T.PU] = 0, e[T.HP] = 0, e[T.yO] = 0, e[T.bK] = R.channelList.length;
            for (let t = 0; t < y.length; t++) e[T.TF + t] = Math.max(1, y[t].channelList.length);
            return e
        },
        isPlaceholderRow: (e, t) => !(e < T.TF) && 0 === t && 0 === y[e - T.TF].channelList.length,
        getCategoryFromSection: e => e === T.bK ? R : y[e - T.TF],
        getNamedCategoryFromSection: e => y[e - T.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : {
                category: n,
                channel: n.channelList[t]
            }
        },
        getGuildActionSection: () => U,
        getChannelNoticeSection: () => v,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [R, ...y];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{
                        section: n + T.bK,
                        row: i
                    }];
            return []
        },
        forEachShownChannel(e) {
            for (let t of [R, ...y])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n)
                    }
        },
        forEachChannel(e) {
            for (let t of [R, ...y])
                for (let n of t.getChannelRecords()) e(n)
        },
        getSlicedChannels: e => [
            [], e, []
        ],
        getChannels: () => []
    }
}