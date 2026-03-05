/** chunk id: 93055, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Af: () => _,
    CJ: () => g,
    Fe: () => h,
    Rm: () => C,
    TW: () => A
}), n(321073);
var i = n(64700),
    a = n(478437),
    l = n(311907);
n(734057);
var r = n(808728),
    o = n(967198),
    u = n(287809),
    d = n(474090);
n(661191);
var s = n(181079),
    f = n(379587),
    c = n(924703),
    v = n(652215),
    p = n(788868);

function A(e) {
    let {
        enabled: t,
        hasHigherPrivileges: n
    } = (0, f.m)({
        location: e
    }), i = (0, l.bG)([u.default], () => u.default.getCurrentUser()), a = d.Ay.isPremiumExactly(i, p.PremiumTypes.TIER_2);
    return {
        hasAccess: t && a,
        isExperimentEnabled: t,
        isPremiumTier2: a,
        hasHigherPrivileges: n
    }
}

function _(e) {
    return (0, l.bG)([s.A], () => s.A.getFavorite(e))
}

function C() {
    return (0, l.bG)([r.Ay], () => r.Ay.getChannels(v.YYv))[a.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function h() {
    return (0, l.bG)([o.A], () => o.A.getGuildId()) === v.YYv
}

function g() {
    let e = (0, c.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return {
        favoriteAdded: e.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: n
    }
}