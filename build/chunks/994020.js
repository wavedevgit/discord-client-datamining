/** chunk id: 994020, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => N,
    x: () => y
}), n(896048), n(321073);
var r = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(873298),
    a = n(933958),
    o = n(181079),
    c = n(424345),
    d = n(698441),
    u = n(863005),
    _ = n(152007),
    p = n(95701),
    m = n(924985),
    g = n(734057),
    A = n(945886),
    f = n(760751),
    b = n(576705),
    h = n(222823),
    E = n(309010),
    O = n(543465),
    C = n(403362),
    x = n(32603),
    S = n(349828),
    T = n(818348);
let I = 21552 == n.j ? [a.Ay, o.A, d.Ay, u.A, _.A, m.A, g.A, f.A, b.A, h.Ay, E.A, O.Ay] : null;

function y() {
    let [e, t] = r.useState(() => N());
    return r.useEffect(() => {
        let e = l().throttle(() => t(N()), 100);
        return I.forEach(t => t.addChangeListener(e)), () => I.forEach(t => t.removeChangeListener(e))
    }, []), e
}

function N() {
    let e = o.A.getFavoriteChannels(),
        t = O.Ay.isGuildCollapsed(S.V),
        n = E.A.getChannelId(),
        r = g.A.getChannel(n),
        i = E.A.getVoiceChannelId(),
        a = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            r = g.A.getChannel(n.id);
        if (null == r || n.type === s.Ip.CATEGORY) continue;
        let i = (0, c.K)(e, n, r);
        if (null == n.parentId || !(n.parentId in e)) {
            a.push(i);
            continue
        }
        n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(i)
    }

    function _(n, s) {
        let {
            isCollapsed: a,
            isMuted: o
        } = s;
        return l()(n).map(n => {
            var c;
            if (!n.isPrivate() && !b.A.can(T.xB.VIEW_CHANNEL, n)) return null;
            let d = null != r && (r.id === n.id || i === n.id),
                _ = null != r && r.isThread() && r.parent_id === n.id,
                m = null != (c = d || _ || !a ? u.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : u.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
                g = (0, x.wF)(n, m, r, i, t),
                f = A.A.isCollapsed(n.id),
                E = O.Ay.isChannelMuted(n.guild_id, n.id),
                C = {
                    id: n.id,
                    record: n,
                    category: s,
                    position: e[n.id].order,
                    threadIds: g,
                    threadCount: l().size(g),
                    isCollapsed: f,
                    isMuted: E,
                    isFirstVoiceChannel: !1,
                    subtitle: (0, x.go)(n, f, !1)
                };
            return d || _ || !l().isEmpty(m) || h.Ay.getMentionCount(n.id) > 0 ? C : t && E || a && (E || o || (0, p.gV)(n.type) || (0, p.ig)(n.type) && !1 === h.Ay.hasUnread(n.id)) ? null : C
        }).filter(C.Vq).sortBy(e => {
            let {
                record: t
            } = e;
            return t.isGuildVocal() ? t.position + 1e4 : t.position
        }).value()
    }
    let f = null,
        I = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => a,
            getShownChannelIds: () => a.map(e => e.id),
            getShownChannelAndThreadIds: () => a.map(e => e.id),
            isEmpty: () => 0 === a.length,
            get channelList() {
                return null == f && (f = _(a, this)), f
            }
        },
        y = l()(e).values().filter(e => e.type === s.Ip.CATEGORY).sortBy(e => e.order).map(e => {
            var t;
            let {
                id: n,
                order: r
            } = e, i = o.A.getCategoryRecord(n), l = null != (t = d[n]) ? t : [], s = O.Ay.isChannelMuted(S.V, n), a = m.A.isCollapsed(n), c = null;
            return {
                isMuted: s,
                isCollapsed: a,
                record: i,
                id: n,
                position: r,
                getChannelRecords: () => l,
                getShownChannelIds: () => l.map(e => e.id),
                getShownChannelAndThreadIds: () => l.map(e => e.id),
                isEmpty: () => 0 === l.length,
                get channelList() {
                    return null == c && (c = _(l, this)), c
                }
            }
        }).value(),
        N = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        j = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: S.V,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            e[x.Xt] = 0, e[x.PU] = 0, e[x.HP] = 0, e[x.yO] = 0, e[x.bK] = I.channelList.length;
            for (let t = 0; t < y.length; t++) e[x.TF + t] = Math.max(1, y[t].channelList.length);
            return e
        },
        isPlaceholderRow: (e, t) => !(e < x.TF) && 0 === t && 0 === y[e - x.TF].channelList.length,
        getCategoryFromSection: e => e === x.bK ? I : y[e - x.TF],
        getNamedCategoryFromSection: e => y[e - x.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : {
                category: n,
                channel: n.channelList[t]
            }
        },
        getGuildActionSection: () => N,
        getChannelNoticeSection: () => j,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [I, ...y];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e) return [{
                        section: n + x.bK,
                        row: r
                    }];
            return []
        },
        forEachShownChannel(e) {
            for (let t of [I, ...y])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n)
                    }
        },
        forEachChannel(e) {
            for (let t of [I, ...y])
                for (let n of t.getChannelRecords()) e(n)
        },
        getSlicedChannels: e => [
            [], e, []
        ],
        getChannels: () => []
    }
}