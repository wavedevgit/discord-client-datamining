/** chunk id: 10077 params = (module,exports,require) **/
n.d(t, {
    M: () => u,
    c: () => d
});
var i, s = n(64700),
    l = n(311907),
    r = n(253932),
    a = n(71393),
    o = n(711014),
    d = ((i = {}).SERVER_ORDER = "server-order", i.RECENTLY_JOINED = "recently-joined", i.ACTIVITY_SHARING_ON = "activity-sharing-on", i.ACTIVITY_SHARING_OFF = "activity-sharing-off", i);
let c = {
    "recently-joined": e => e.concat().sort((e, t) => null == e.joinedAt ? -1 : null == t.joinedAt ? 1 : e.joinedAt === t.joinedAt ? 0 : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime()),
    "activity-sharing-on": (e, t) => e.concat().sort((e, n) => {
        let i = t.includes(e.id),
            s = t.includes(n.id);
        return !i && s ? -1 : i && !s ? 1 : 0
    }),
    "activity-sharing-off": (e, t) => e.concat().sort((e, n) => {
        let i = t.includes(e.id),
            s = t.includes(n.id);
        return i && !s ? -1 : !i && s ? 1 : 0
    }),
    "server-order": e => e
};

function u() {
    let [e, t] = (0, s.useState)(""), [n, i] = (0, s.useState)("server-order"), d = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()), u = (0, l.bG)([a.A], () => a.A.getGuilds()), _ = d.map(e => u[e]), m = r.Pw.useSetting(), [g, A] = (0, s.useState)(m);
    (0, s.useEffect)(() => {
        A(m)
    }, [m]);
    let h = async e => {
        A(e);
        try {
            await r.Pw.updateSetting(e)
        } catch (e) {
            A(m)
        }
    }, x = 0 !== g.length, [p, T] = (0, s.useState)(() => c[n](_, m)), E = p.map(e => u[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? E : E.filter(t => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: e => {
            T(c[e](_, m)), i(e)
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: e => {
            let {
                checked: t,
                guildId: n
            } = e, i = new Set(g);
            t ? i.delete(n) : i.add(n), h([...i])
        },
        isActivityRestricted: e => g.includes(e),
        hasActivityRestrictedGuilds: x,
        onToggleAllActivityRestrictedGuilds: () => {
            x ? h([]) : h(d)
        },
        numTotalGuilds: d.length,
        numActivityRestrictedGuilds: g.length
    }
}