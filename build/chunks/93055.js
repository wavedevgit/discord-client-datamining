/** chunk id: 93055, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Af: () => h,
    CJ: () => v,
    Fe: () => g,
    Rm: () => m,
    pe: () => f
}), t(321073);
var r = t(64700),
    i = t(478437),
    a = t(311907);
t(734057);
var l = t(808728),
    d = t(967198);
t(661191);
var s = t(181079),
    c = t(924703),
    u = t(781489),
    o = t(652215);

function f(e) {
    let {
        isEnabled: n,
        hasStaffPrivileges: t
    } = (0, u.e)("useCanFavoriteChannel"), r = (0, a.bG)([s.A], () => s.A.isFavorite(e.id)), i = e.isThread();
    return n && !__OVERLAY__ && !r && (!i || t)
}

function h(e) {
    return (0, a.bG)([s.A], () => s.A.getFavorite(e))
}

function m() {
    return (0, a.bG)([l.Ay], () => l.Ay.getChannels(o.YYv))[i.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function g() {
    return (0, a.bG)([d.A], () => d.A.getGuildId()) === o.YYv
}

function v() {
    let e = (0, c.T)(),
        n = r.useCallback(() => {}, [e]),
        t = r.useCallback(() => {}, [e]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: t
    }
}