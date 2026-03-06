/** chunk id: 93055 params = (module,exports,require) **/
t.d(n, {
    Af: () => g,
    CJ: () => _,
    Fe: () => m,
    Rm: () => p,
    TW: () => C
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
    A = t(957300),
    f = t(924703),
    h = t(652215),
    v = t(788868);

function C(e) {
    let {
        enabled: n,
        hasHigherPrivileges: t
    } = (0, c.m)({
        location: e
    }), i = (0, r.bG)([d.default], () => d.default.getCurrentUser()), l = o.Ay.isPremiumExactly(i, v.PremiumTypes.TIER_2);
    return {
        hasAccess: n && l,
        isExperimentEnabled: n,
        isPreviewMode: (0, A.E)(e => e.isPreviewMode),
        hasHigherPrivileges: t
    }
}

function g(e) {
    return (0, r.bG)([u.A], () => u.A.getFavorite(e))
}

function p() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(h.YYv))[l.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function m() {
    return (0, r.bG)([s.A], () => s.A.getGuildId()) === h.YYv
}

function _() {
    let e = (0, f.T)(),
        n = i.useCallback(() => {}, [e]),
        t = i.useCallback(() => {}, [e]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: t
    }
}