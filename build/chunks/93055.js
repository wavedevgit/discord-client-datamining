/** chunk id: 93055, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Af: () => p,
    CJ: () => A,
    Fe: () => v,
    Rm: () => b,
    pe: () => f
}), n(896048), n(321073);
var r = n(64700),
    i = n(478437),
    a = n(311907);
n(734057);
var l = n(808728),
    o = n(967198);
n(661191);
var d = n(181079),
    c = n(616075),
    u = n(924703),
    s = n(652215);

function f(e) {
    let {
        favoritesEnabled: t,
        hasStaffPrivileges: n
    } = (0, c.l)("useCanFavoriteChannel"), r = (0, a.bG)([d.A], () => d.A.isFavorite(e.id)), i = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !r && (!i || n)
}

function p(e) {
    return (0, a.bG)([d.A], () => d.A.getFavorite(e))
}

function b() {
    return (0, a.bG)([l.Ay], () => l.Ay.getChannels(s.YYv))[i.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function v() {
    return (0, a.bG)([o.A], () => o.A.getGuildId()) === s.YYv
}

function A() {
    let {
        isFavoritesPerk: e
    } = (0, c.l)("useFavoriteAdded"), t = (0, u.T)(), n = r.useCallback(() => {
        e && t.notifyFavoriteAdded()
    }, [t, e]), i = r.useCallback(() => {
        e && t.clearFavoriteAdded()
    }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: i
    }
}