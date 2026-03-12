/** chunk id: 93055 params = (module,exports,require) **/
t.d(n, {
    Af: () => p,
    CJ: () => E,
    Fe: () => _,
    Rm: () => b,
    TW: () => v
}), t(321073);
var i = t(478437),
    r = t(311907);
t(734057);
var l = t(808728),
    a = t(967198),
    d = t(287809),
    o = t(474090);
t(661191);
var u = t(181079),
    s = t(379587),
    c = t(11531),
    f = t(957300),
    h = t(652215),
    A = t(788868);

function v(e) {
    let {
        enabled: n,
        hasHigherPrivileges: t
    } = (0, s.m)({
        location: e
    }), i = (0, r.bG)([d.default], () => d.default.getCurrentUser()), l = o.Ay.isPremiumExactly(i, A.PremiumTypes.TIER_2);
    return {
        hasAccess: n && l,
        isExperimentEnabled: n,
        isPreviewMode: (0, f.E)(e => e.isPreviewMode),
        hasHigherPrivileges: t
    }
}

function p(e) {
    return (0, r.bG)([u.A], () => u.A.getFavorite(e))
}

function b() {
    return (0, r.bG)([l.Ay], () => l.Ay.getChannels(h.YYv))[i.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function _() {
    return (0, r.bG)([a.A], () => a.A.getGuildId()) === h.YYv
}

function E() {
    let e = (0, c.J)(e => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, c.J)(e => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, c.J)(e => e.clearFavoriteAdded)
    }
}