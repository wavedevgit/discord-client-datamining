/** chunk id: 93055 params = (module,exports,require) **/
n.d(e, {
    Af: () => v,
    CJ: () => C,
    DZ: () => p,
    Rm: () => b,
    TW: () => A,
    e4: () => E
}), n(321073);
var i = n(478437),
    a = n(311907);
n(734057);
var l = n(808728),
    r = n(967198),
    d = n(287809),
    o = n(474090);
n(661191);
var u = n(181079),
    s = n(379587),
    c = n(11531),
    f = n(5180),
    h = n(652215),
    _ = n(788868);

function A(t) {
    let {
        enabled: e,
        hasHigherPrivileges: n
    } = (0, s.m)({
        location: t
    }), i = (0, a.bG)([d.default], () => d.default.getCurrentUser()), l = o.Ay.isPremiumExactly(i, _.PremiumTypes.TIER_2);
    return {
        hasAccess: e && l,
        isExperimentEnabled: e,
        hasHigherPrivileges: n
    }
}

function v(t) {
    return (0, a.bG)([u.A], () => u.A.getFavorite(t))
}

function b() {
    return (0, a.bG)([l.Ay], () => l.Ay.getChannels(h.YYv))[i.r.GUILD_CATEGORY].map(t => ({
        id: "null" === t.channel.id ? null : t.channel.id,
        name: t.channel.name
    }))
}

function p() {
    let t = (0, a.bG)([r.A], () => r.A.getGuildId());
    return (0, f.ai)(t)
}

function E(t, e) {
    let n = p(),
        {
            hasAccess: i
        } = A(e),
        l = (0, a.bG)([u.A], () => null != t && (u.A.isFavorite(t.id) || t.isThread() && u.A.isFavorite(t.parent_id)), [t]);
    return !n || i && l ? t ?? null : null
}

function C() {
    let t = (0, c.J)(t => t.favoriteAdded);
    return {
        favoriteAdded: t,
        notifyFavoriteAdded: (0, c.J)(t => t.notifyFavoriteAdded),
        clearFavoriteAdded: (0, c.J)(t => t.clearFavoriteAdded)
    }
}