/** chunk id: 93055 params = (module,exports,require) **/
t.d(n, {
    Af: () => C,
    CJ: () => m,
    Fe: () => p,
    Rm: () => g,
    TW: () => v
}), t(321073);
var i = t(64700),
    l = t(478437),
    r = t(311907);
t(734057);
var a = t(808728),
    s = t(967198),
    d = t(287809),
    o = t(474090);
t(661191);
var u = t(181079),
    c = t(379587),
    A = t(924703),
    f = t(652215),
    h = t(788868);

function v(e) {
    let {
        enabled: n,
        hasHigherPrivileges: t
    } = (0, c.m)({
        location: e
    }), i = (0, r.bG)([d.default], () => d.default.getCurrentUser()), l = o.Ay.isPremiumExactly(i, h.PremiumTypes.TIER_2);
    return {
        hasAccess: n && l,
        isExperimentEnabled: n,
        isPremiumTier2: l,
        hasHigherPrivileges: t
    }
}

function C(e) {
    return (0, r.bG)([u.A], () => u.A.getFavorite(e))
}

function g() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(f.YYv))[l.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function p() {
    return (0, r.bG)([s.A], () => s.A.getGuildId()) === f.YYv
}

function m() {
    let e = (0, A.T)(),
        n = i.useCallback(() => {}, [e]),
        t = i.useCallback(() => {}, [e]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: t
    }
}