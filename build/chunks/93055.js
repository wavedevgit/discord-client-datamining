/** chunk id: 93055 params = (module,exports,require) **/
n.d(t, {
    Af: () => v,
    CJ: () => E,
    DZ: () => g,
    Rm: () => b,
    TW: () => _,
    e4: () => p
}), n(321073);
var i = n(478437),
    r = n(311907);
n(734057);
var l = n(808728),
    a = n(967198),
    d = n(287809),
    o = n(474090);
n(661191);
var u = n(181079),
    s = n(379587),
    c = n(11531),
    f = n(5180),
    A = n(652215),
    h = n(788868);

function _(e) {
    let {
        enabled: t,
        hasHigherPrivileges: n
    } = (0, s.m)({
        location: e
    }), i = (0, r.bG)([d.default], () => d.default.getCurrentUser()), l = o.Ay.isPremiumExactly(i, h.PremiumTypes.TIER_2);
    return {
        hasAccess: t && l,
        isExperimentEnabled: t,
        hasHigherPrivileges: n
    }
}

function v(e) {
    return (0, r.bG)([u.A], () => u.A.getFavorite(e))
}

function b() {
    return (0, r.bG)([l.Ay], () => l.Ay.getChannels(A.YYv))[i.r.GUILD_CATEGORY].map(e => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }))
}

function g() {
    let e = (0, r.bG)([a.A], () => a.A.getGuildId());
    return (0, f.ai)(e)
}

function p(e, t) {
    let n = g(),
        {
            hasAccess: i
        } = _(t),
        l = (0, r.bG)([u.A], () => null != e && (u.A.isFavorite(e.id) || e.isThread() && u.A.isFavorite(e.parent_id)), [e]);
    return !n || i && l ? e ?? null : null
}

function E() {
    let e = (0, c.J)(e => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, c.J)(e => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, c.J)(e => e.clearFavoriteAdded)
    }
}