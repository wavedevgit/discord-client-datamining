/** chunk id: 93055, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Af: () => A,
    CJ: () => h,
    Fe: () => f,
    Rm: () => _,
    pe: () => E
}), n(896048), n(321073);
var r = n(64700),
    i = n(478437),
    a = n(311907);
n(734057);
var l = n(808728),
    o = n(967198);
n(661191);
var u = n(181079),
    d = n(616075),
    s = n(924703),
    c = n(652215);

function E(t) {
    let {
        favoritesEnabled: e,
        hasStaffPrivileges: n
    } = (0, d.l)("useCanFavoriteChannel"), r = (0, a.bG)([u.A], () => u.A.isFavorite(t.id)), i = t.isDM() || t.isThread();
    return e && !__OVERLAY__ && !r && (!i || n)
}

function A(t) {
    return (0, a.bG)([u.A], () => u.A.getFavorite(t))
}

function _() {
    return (0, a.bG)([l.Ay], () => l.Ay.getChannels(c.YYv))[i.r.GUILD_CATEGORY].map(t => ({
        id: "null" === t.channel.id ? null : t.channel.id,
        name: t.channel.name
    }))
}

function f() {
    return (0, a.bG)([o.A], () => o.A.getGuildId()) === c.YYv
}

function h() {
    let {
        isFavoritesPerk: t
    } = (0, d.l)("useFavoriteAdded"), e = (0, s.T)(), n = r.useCallback(() => {
        t && e.notifyFavoriteAdded()
    }, [e, t]), i = r.useCallback(() => {
        t && e.clearFavoriteAdded()
    }, [e, t]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: i
    }
}