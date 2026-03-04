/** chunk id: 93055, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Af: () => _,
    CJ: () => m,
    Fe: () => p,
    Rm: () => g,
    TW: () => A
}), n(321073);
var i = n(64700),
    r = n(478437),
    l = n(311907);
n(734057);
var a = n(808728),
    s = n(967198),
    o = n(287809),
    c = n(474090);
n(661191);
var d = n(181079),
    u = n(379587),
    h = n(924703),
    C = n(652215),
    E = n(788868);

function A(e) {
    let {
        enabled: t,
        hasHigherPrivileges: n
    } = (0, u.m)({
        location: e
    }), i = (0, l.bG)([o.default], () => o.default.getCurrentUser()), r = c.Ay.isPremiumExactly(i, E.PremiumTypes.TIER_2);
    return {
        hasAccess: t && r,
        isExperimentEnabled: t,
        isPremiumTier2: r,
        hasHigherPrivileges: n
    }
}

function _(e) {
    return (0, l.bG)([d.A], () => d.A.getFavorite(e))
}

function g() {
    return (0, l.bG)([a.Ay], () => a.Ay.getChannels(C.YYv))[r.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function p() {
    return (0, l.bG)([s.A], () => s.A.getGuildId()) === C.YYv
}

function m() {
    let e = (0, h.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: n
    }
}