/** chunk id: 93055 params = (module,exports,require) **/
t.d(n, {
    Af: () => b,
    CJ: () => g,
    Fe: () => p,
    Rm: () => C,
    TW: () => v
}), t(321073);
var i = t(478437),
    r = t(311907);
t(734057);
var l = t(808728),
    a = t(967198),
    d = t(287809),
    s = t(474090);
t(661191);
var o = t(181079),
    u = t(379587),
    c = t(11531),
    h = t(957300),
    A = t(652215),
    f = t(788868);

function v(e) {
    let {
        enabled: n,
        hasHigherPrivileges: t
    } = (0, u.m)({
        location: e
    }), i = (0, r.bG)([d.default], () => d.default.getCurrentUser()), l = s.Ay.isPremiumExactly(i, f.PremiumTypes.TIER_2);
    return {
        hasAccess: n && l,
        isExperimentEnabled: n,
        isPreviewMode: (0, h.E)(e => e.isPreviewMode),
        hasHigherPrivileges: t
    }
}

function b(e) {
    return (0, r.bG)([o.A], () => o.A.getFavorite(e))
}

function C() {
    return (0, r.bG)([l.Ay], () => l.Ay.getChannels(A.YYv))[i.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function p() {
    return (0, r.bG)([a.A], () => a.A.getGuildId()) === A.YYv
}

function g() {
    let e = (0, c.J)(e => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, c.J)(e => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, c.J)(e => e.clearFavoriteAdded)
    }
}