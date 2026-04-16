/** chunk id: 93055 params = (module,exports,require) **/
n.d(e, {
    Af: () => A,
    CJ: () => E,
    DZ: () => p,
    Rm: () => v,
    TW: () => h,
    e4: () => b,
    m_: () => _
}), n(321073);
var i = n(311907),
    l = n(873298);
n(734057);
var a = n(967198),
    r = n(287809),
    o = n(474090);
n(661191);
var d = n(181079),
    u = n(379587),
    s = n(11531),
    f = n(5180),
    c = n(788868);

function h(t) {
    let {
        enabled: e,
        hasHigherPrivileges: n
    } = (0, u.m)({
        location: t
    }), l = (0, i.bG)([r.default], () => r.default.getCurrentUser()), a = o.Ay.isPremiumExactly(l, c.PremiumTypes.TIER_2);
    return {
        hasAccess: e && a,
        isExperimentEnabled: e,
        hasHigherPrivileges: n
    }
}

function A(t) {
    return (0, i.bG)([d.A], () => d.A.getFavorite(t))
}

function _() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.A.getFavoriteChannels(),
        e = [{
            id: null,
            name: ""
        }];
    for (let n in t) {
        let i = t[n];
        i.type === l.Ip.CATEGORY && e.push({
            id: i.id,
            name: i.nickname ?? ""
        })
    }
    return e.sort((e, n) => (t[e.id]?.order ?? 0) - (t[n.id]?.order ?? 0)), e
}

function v() {
    return (0, i.bG)([d.A], () => _(d.A.getFavoriteChannels()))
}

function p() {
    let t = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, f.ai)(t)
}

function b(t, e) {
    let n = p(),
        {
            hasAccess: l
        } = h(e),
        a = (0, i.bG)([d.A], () => null != t && (d.A.isFavorite(t.id) || t.isThread() && d.A.isFavorite(t.parent_id)), [t]);
    return n && (!l || !a || t?.isCategory()) ? null : t ?? null
}

function E() {
    let t = (0, s.J)(t => t.favoriteAdded);
    return {
        favoriteAdded: t,
        notifyFavoriteAdded: (0, s.J)(t => t.notifyFavoriteAdded),
        clearFavoriteAdded: (0, s.J)(t => t.clearFavoriteAdded)
    }
}