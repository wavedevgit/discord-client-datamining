/** chunk id: 10077, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => u,
    c: () => d
});
var i, s = n(64700),
    l = n(311907),
    a = n(253932),
    r = n(71393),
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
    let [e, t] = (0, s.useState)(""), [n, i] = (0, s.useState)("server-order"), d = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()), u = (0, l.bG)([r.A], () => r.A.getGuilds()), _ = d.map(e => u[e]), g = a.Pw.useSetting(), [m, A] = (0, s.useState)(g);
    (0, s.useEffect)(() => {
        A(g)
    }, [g]);
    let h = async e => {
        A(e);
        try {
            await a.Pw.updateSetting(e)
        } catch (e) {
            A(g)
        }
    }, p = 0 !== m.length, [x, E] = (0, s.useState)(() => c[n](_, g)), T = x.map(e => u[e.id]).filter(Boolean);
    return {
        guilds: "" === e ? T : T.filter(t => t.name.toLowerCase().includes(e.toLowerCase())),
        sortOrder: n,
        searchQuery: e,
        setSortOrder: e => {
            E(c[e](_, g)), i(e)
        },
        setSearchQuery: t,
        onToggleActivityRestrictedGuild: e => {
            let {
                checked: t,
                guildId: n
            } = e, i = new Set(m);
            t ? i.delete(n) : i.add(n), h([...i])
        },
        isActivityRestricted: e => m.includes(e),
        hasActivityRestrictedGuilds: p,
        onToggleAllActivityRestrictedGuilds: () => {
            p ? h([]) : h(d)
        },
        numTotalGuilds: d.length,
        numActivityRestrictedGuilds: m.length
    }
}