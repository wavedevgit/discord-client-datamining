/** chunk id: 866842 params = (module,exports,require) **/
n.d(t, {
    D: () => y,
    g: () => G
}), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(93055),
    c = n(424345),
    _ = n(698441),
    u = n(863005),
    A = n(152007),
    E = n(95701),
    g = n(924985),
    I = n(734057),
    h = n(945886),
    C = n(760751),
    p = n(576705),
    m = n(222823),
    S = n(309010),
    T = n(543465),
    b = n(403362),
    f = n(32603),
    N = n(349828),
    L = n(818348);
let O = 21552 == n.j ? [l.Ay, o.A, _.Ay, u.A, A.A, g.A, I.A, C.A, p.A, m.Ay, S.A, T.Ay] : null;

function y() {
    let {
        hasAccess: e
    } = (0, d.TW)("FavoritesGuildChannelList"), [t, n] = i.useState(() => G()), r = i.useMemo(() => G({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(G()), 100);
        return O.forEach(t => t.addChangeListener(e)), () => O.forEach(t => t.removeChangeListener(e))
    }, []);
    let a = e ? t : r,
        l = function(e) {
            if (e.getSections().length > f.TF) return !1;
            let t = !1;
            return e.forEachShownChannel(() => {
                t = !0
            }), !t
        }(a);
    return {
        guildChannels: a,
        shouldShowEmptyState: l
    }
}

function G(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = T.Ay.isGuildCollapsed(N.Vc),
        i = S.A.getChannelId(),
        r = I.A.getChannel(i),
        l = S.A.getVoiceChannelId(),
        _ = [],
        A = {};
    for (let e in t) {
        let n = t[e],
            i = I.A.getChannel(n.id);
        if (null == i || n.type === a.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== a.Ip.CATEGORY) {
            _.push(r);
            continue
        }
        let s = n.parentId;
        s in A || (A[s] = []), A[s].push(r)
    }

    function C(e, i) {
        let {
            isCollapsed: a,
            isMuted: o
        } = i;
        return s()(e).map(e => {
            if (!e.isPrivate() && !p.A.can(L.xB.VIEW_CHANNEL, e)) return null;
            let d = null != r && (r.id === e.id || l === e.id),
                c = null != r && r.isThread() && r.parent_id === e.id,
                _ = (d || c || !a ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id) : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                A = (0, f.wF)(e, _, r, l, n),
                g = h.A.isCollapsed(e.id),
                I = T.Ay.isChannelMuted(e.guild_id, e.id),
                C = {
                    id: e.id,
                    record: e,
                    category: i,
                    position: t[e.id].order,
                    threadIds: A,
                    threadCount: s().size(A),
                    isCollapsed: g,
                    isMuted: I,
                    isFirstVoiceChannel: !1,
                    subtitle: (0, f.go)(e, g, !1)
                };
            return d || c || !s().isEmpty(_) || m.Ay.getMentionCount(e.id) > 0 ? C : n && I || a && (I || o || (0, E.gV)(e.type) || (0, E.ig)(e.type) && !1 === m.Ay.hasUnread(e.id)) ? null : C
        }).filter(b.Vq).sortBy(e => {
            let {
                record: t
            } = e;
            return t.isGuildVocal() ? t.position + 1e4 : t.position
        }).value()
    }
    let O = null,
        y = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => _,
            getShownChannelIds: () => _.map(e => e.id),
            getShownChannelAndThreadIds: () => _.map(e => e.id),
            isEmpty: () => 0 === _.length,
            get channelList() {
                return null == O && (O = C(_, this)), O
            }
        },
        G = (0, d.m_)(t).filter(e => null != e.id).map(e => {
            let {
                id: n
            } = e, i = o.A.getCategoryRecord(n);
            if (null == i) return null;
            let r = A[n] ?? [],
                s = T.Ay.isChannelMuted(N.Vc, n),
                a = g.A.isCollapsed(n),
                l = null;
            return {
                isMuted: s,
                isCollapsed: a,
                record: i,
                id: n,
                position: t[n]?.order ?? 0,
                getChannelRecords: () => r,
                getShownChannelIds: () => r.map(e => e.id),
                getShownChannelAndThreadIds: () => r.map(e => e.id),
                isEmpty: () => 0 === r.length,
                get channelList() {
                    return null == l && (l = C(r, this)), l
                }
            }
        }).filter(e => null != e),
        R = 0;
    for (let e of [y, ...G])
        for (let t of (e.position = ++R, e.channelList)) t.position = ++R;
    let U = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        D = {
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
            e[f.Xt] = 0, e[f.PU] = 0, e[f.HP] = 0, e[f.yO] = 0, e[f.bK] = y.channelList.length;
            for (let t = 0; t < G.length; t++) e[f.TF + t] = Math.max(1, G[t].channelList.length);
            return e
        },
        isPlaceholderRow: (e, t) => !(e < f.TF) && 0 === t && 0 === G[e - f.TF].channelList.length,
        getCategoryFromSection: e => e === f.bK ? y : G[e - f.TF],
        getNamedCategoryFromSection: e => G[e - f.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : {
                category: n,
                channel: n.channelList[t]
            }
        },
        getGuildActionSection: () => U,
        getChannelNoticeSection: () => D,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [y, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{
                        section: n + f.bK,
                        row: i
                    }];
            return []
        },
        forEachShownChannel(e) {
            for (let t of [y, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n)
                    }
        },
        forEachChannel(e) {
            for (let t of [y, ...G])
                for (let n of t.getChannelRecords()) e(n)
        },
        getSlicedChannels: e => [
            [], e, []
        ],
        getChannels: () => []
    }
}