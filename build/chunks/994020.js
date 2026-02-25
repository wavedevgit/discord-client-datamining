/** chunk id: 994020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => G,
    x: () => O
}), n(321073);
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(424345),
    _ = n(698441),
    c = n(863005),
    u = n(152007),
    A = n(95701),
    g = n(924985),
    I = n(734057),
    E = n(945886),
    h = n(760751),
    C = n(576705),
    p = n(222823),
    m = n(309010),
    S = n(543465),
    T = n(403362),
    b = n(32603),
    f = n(349828),
    L = n(818348);
let N = 21552 == n.j ? [l.Ay, o.A, _.Ay, c.A, u.A, g.A, I.A, h.A, C.A, p.Ay, m.A, S.Ay] : null;

function O() {
    let [e, t] = i.useState(() => G());
    return i.useEffect(() => {
        let e = a().throttle(() => t(G()), 100);
        return N.forEach(t => t.addChangeListener(e)), () => N.forEach(t => t.removeChangeListener(e))
    }, []), e
}

function G() {
    let e = o.A.getFavoriteChannels(),
        t = S.Ay.isGuildCollapsed(f.Vc),
        n = m.A.getChannelId(),
        i = I.A.getChannel(n),
        r = m.A.getVoiceChannelId(),
        l = [],
        _ = {};
    for (let t in e) {
        let n = e[t],
            i = I.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, d.K)(e, n, i);
        if (null == n.parentId || null == e[n.parentId] || e[n.parentId].type !== s.Ip.CATEGORY) {
            l.push(r);
            continue
        }
        let a = n.parentId;
        a in _ || (_[a] = []), _[a].push(r)
    }

    function u(n, s) {
        let {
            isCollapsed: l,
            isMuted: o
        } = s;
        return a()(n).map(n => {
            if (!n.isPrivate() && !C.A.can(L.xB.VIEW_CHANNEL, n)) return null;
            let d = null != i && (i.id === n.id || r === n.id),
                _ = null != i && i.isThread() && i.parent_id === n.id,
                u = (d || _ || !l ? c.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : c.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ?? {},
                g = (0, b.wF)(n, u, i, r, t),
                I = E.A.isCollapsed(n.id),
                h = S.Ay.isChannelMuted(n.guild_id, n.id),
                m = {
                    id: n.id,
                    record: n,
                    category: s,
                    position: e[n.id].order,
                    threadIds: g,
                    threadCount: a().size(g),
                    isCollapsed: I,
                    isMuted: h,
                    isFirstVoiceChannel: !1,
                    subtitle: (0, b.go)(n, I, !1)
                };
            return d || _ || !a().isEmpty(u) || p.Ay.getMentionCount(n.id) > 0 ? m : t && h || l && (h || o || (0, A.gV)(n.type) || (0, A.ig)(n.type) && !1 === p.Ay.hasUnread(n.id)) ? null : m
        }).filter(T.Vq).sortBy(e => {
            let {
                record: t
            } = e;
            return t.isGuildVocal() ? t.position + 1e4 : t.position
        }).value()
    }
    let h = null,
        N = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => l,
            getShownChannelIds: () => l.map(e => e.id),
            getShownChannelAndThreadIds: () => l.map(e => e.id),
            isEmpty: () => 0 === l.length,
            get channelList() {
                return null == h && (h = u(l, this)), h
            }
        },
        O = a()(e).values().filter(e => e.type === s.Ip.CATEGORY).sortBy(e => e.order).map(e => {
            let {
                id: t,
                order: n
            } = e, i = o.A.getCategoryRecord(t);
            if (null == i) return null;
            let r = _[t] ?? [],
                a = S.Ay.isChannelMuted(f.Vc, t),
                s = g.A.isCollapsed(t),
                l = null;
            return {
                isMuted: a,
                isCollapsed: s,
                record: i,
                id: t,
                position: n,
                getChannelRecords: () => r,
                getShownChannelIds: () => r.map(e => e.id),
                getShownChannelAndThreadIds: () => r.map(e => e.id),
                isEmpty: () => 0 === r.length,
                get channelList() {
                    return null == l && (l = u(r, this)), l
                }
            }
        }).filter(e => null != e).value(),
        G = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        U = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: f.Vc,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            e[b.Xt] = 0, e[b.PU] = 0, e[b.HP] = 0, e[b.yO] = 0, e[b.bK] = N.channelList.length;
            for (let t = 0; t < O.length; t++) e[b.TF + t] = Math.max(1, O[t].channelList.length);
            return e
        },
        isPlaceholderRow: (e, t) => !(e < b.TF) && 0 === t && 0 === O[e - b.TF].channelList.length,
        getCategoryFromSection: e => e === b.bK ? N : O[e - b.TF],
        getNamedCategoryFromSection: e => O[e - b.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : {
                category: n,
                channel: n.channelList[t]
            }
        },
        getGuildActionSection: () => G,
        getChannelNoticeSection: () => U,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [N, ...O];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{
                        section: n + b.bK,
                        row: i
                    }];
            return []
        },
        forEachShownChannel(e) {
            for (let t of [N, ...O])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n)
                    }
        },
        forEachChannel(e) {
            for (let t of [N, ...O])
                for (let n of t.getChannelRecords()) e(n)
        },
        getSlicedChannels: e => [
            [], e, []
        ],
        getChannels: () => []
    }
}