/** chunk id: 93055 params = (module,exports,require) **/
n.d(t, {
    Af: () => b,
    CJ: () => E,
    Fe: () => C,
    Rm: () => p,
    TW: () => A
}), n(321073);
var i = n(478437),
    r = n(311907);
n(734057);
var a = n(808728),
    l = n(967198),
    d = n(287809),
    o = n(474090);
n(661191);
var u = n(181079),
    s = n(379587),
    f = n(11531),
    c = n(957300),
    h = n(652215),
    v = n(788868);

function A(e) {
    let {
        enabled: t,
        hasHigherPrivileges: n
    } = (0, s.m)({
        location: e
    }), i = (0, r.bG)([d.default], () => d.default.getCurrentUser()), a = o.Ay.isPremiumExactly(i, v.PremiumTypes.TIER_2);
    return {
        hasAccess: t && a,
        isExperimentEnabled: t,
        isPreviewMode: (0, c.E)(e => e.isPreviewMode),
        hasHigherPrivileges: n
    }
}

function b(e) {
    return (0, r.bG)([u.A], () => u.A.getFavorite(e))
}

function p() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(h.YYv))[i.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function C() {
    return (0, r.bG)([l.A], () => l.A.getGuildId()) === h.YYv
}

function E() {
    let e = (0, f.J)(e => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, f.J)(e => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, f.J)(e => e.clearFavoriteAdded)
    }
}