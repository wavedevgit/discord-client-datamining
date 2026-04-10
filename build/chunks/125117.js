/** chunk id: 125117 params = (module,exports,require) **/
n.d(t, {
    b: () => m,
    n: () => E
});
var i = n(64700),
    l = n(311907),
    r = n(870391),
    s = n(379078),
    a = n(704554),
    o = n(461213),
    u = n(403362),
    d = n(185657);

function c(e) {
    return {
        user: e.user,
        activities: e.activities,
        nickname: e.nickname,
        relationshipType: e.relationshipType
    }
}

function h(e) {
    return e.map(c)
}

function g(e, t) {
    let [, n] = e, [, i] = t;
    return n === i
}

function m() {
    let [e] = (0, l.bG)([d.A, r.A, o.A], () => {
        let e = r.A.getGroups(),
            [t, n] = d.A.getRows(d.j.FRIEND_REQUESTS),
            i = h(t),
            l = h(d.A.getRows(d.j.SUGGESTIONS)[0]),
            s = h(d.A.getRows(d.j.SAME_ACTIVITY)[0]),
            a = h(d.A.getRows(d.j.ACTIVITIES)[0]),
            u = h(d.A.getRows(d.j.IN_GAME)[0]),
            c = h(d.A.getRows(d.j.ONLINE)[0]),
            g = h(d.A.getRows(d.j.OFFLINE)[0]),
            m = e.map(e => {
                let [t] = d.A.getRows(`GROUP:${e.id}`);
                return {
                    id: e.id,
                    name: e.name,
                    users: h(t)
                }
            }),
            f = o.A.getPrimaryActivity()?.name ?? "",
            A = e.map(e => `${e.id}\0${e.name}\0${e.userIds.length}`).join("|"),
            I = `${n}\0${A}\0${f}`;
        return [{
            groups: m,
            friendRequests: i,
            suggestions: l,
            inGame: u,
            activities: a,
            sameActivity: s,
            online: c,
            offline: g,
            currentActivityName: f
        }, I]
    }, [], g);
    return e
}

function f(e) {
    let {
        user: t,
        activities: n,
        nickname: i
    } = e;
    return [t.username, t.globalName, i, ...n.map(e => e.name)].filter(u.Vq)
}
let A = {
    searchType: s.n.FUZZY,
    searchStringGenerator: f,
    sortType: s.r.JARO_WINKLER,
    throttleMs: 100
};

function I(e, t) {
    let [n, l] = i.useState(t), r = i.useCallback(() => l(t), [t]);
    return (0, a.RT)(e, t, l, A), [n, r]
}

function E(e) {
    let [t, n] = i.useState(""), [l, r] = I(t, e.friendRequests), [s, a] = I(t, e.suggestions), [o, u] = I(t, e.sameActivity), [d, c] = I(t, e.activities), [h, g] = I(t, e.inGame), [m, A] = I(t, e.online), [E, p] = I(t, e.offline), _ = i.useMemo(() => {
        if ("" === t.trim()) return e.groups;
        let n = t.toLowerCase();
        return e.groups.map(e => {
            let t = e.users.filter(e => f(e).some(e => null != e && e.toLowerCase().includes(n)));
            return {
                ...e,
                users: t
            }
        }).filter(e => e.users.length > 0)
    }, [t, e.groups]), S = i.useCallback(() => {
        n(""), r(), a(), u(), c(), g(), A(), p()
    }, [r, a, u, c, g, A, p]);
    return {
        groups: _,
        friendRequests: l,
        suggestions: s,
        sameActivity: o,
        inGame: h,
        activities: d,
        online: m,
        offline: E,
        currentActivityName: e.currentActivityName,
        searchQuery: t,
        setSearchQuery: n,
        clearSearch: S
    }
}