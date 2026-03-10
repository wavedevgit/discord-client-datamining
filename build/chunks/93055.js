/** chunk id: 93055 params = (module,exports,require) **/
n.d(t, {
    Af: () => C,
    CJ: () => m,
    Fe: () => g,
    Rm: () => h,
    TW: () => _
}), n(321073);
var i = n(64700),
    a = n(478437),
    l = n(311907);
n(734057);
var r = n(808728),
    o = n(967198),
    d = n(287809),
    u = n(474090);
n(661191);
var s = n(181079),
    f = n(379587),
    c = n(957300),
    v = n(924703),
    A = n(652215),
    p = n(788868);

function _(e) {
    let {
        enabled: t,
        hasHigherPrivileges: n
    } = (0, f.m)({
        location: e
    }), i = (0, l.bG)([d.default], () => d.default.getCurrentUser()), a = u.Ay.isPremiumExactly(i, p.PremiumTypes.TIER_2);
    return {
        hasAccess: t && a,
        isExperimentEnabled: t,
        isPreviewMode: (0, c.E)(e => e.isPreviewMode),
        hasHigherPrivileges: n
    }
}

function C(e) {
    return (0, l.bG)([s.A], () => s.A.getFavorite(e))
}

function h() {
    return (0, l.bG)([r.Ay], () => r.Ay.getChannels(A.YYv))[a.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function g() {
    return (0, l.bG)([o.A], () => o.A.getGuildId()) === A.YYv
}

function m() {
    let e = (0, v.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: n
    }
}