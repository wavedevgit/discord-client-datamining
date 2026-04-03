/** chunk id: 93055 params = (module,exports,require) **/
n.d(e, {
    Af: () => h,
    CJ: () => E,
    DZ: () => b,
    Rm: () => _,
    TW: () => A,
    e4: () => p,
    m_: () => v
}), n(321073);
var i = n(311907),
    l = n(873298);
n(734057);
var a = n(967198),
    r = n(287809),
    d = n(474090);
n(661191);
var o = n(181079),
    u = n(379587),
    s = n(11531),
    c = n(5180),
    f = n(788868);

function A(t) {
    let {
        enabled: e,
        hasHigherPrivileges: n
    } = (0, u.m)({
        location: t
    }), l = (0, i.bG)([r.default], () => r.default.getCurrentUser()), a = d.Ay.isPremiumExactly(l, f.PremiumTypes.TIER_2);
    return {
        hasAccess: e && a,
        isExperimentEnabled: e,
        hasHigherPrivileges: n
    }
}

function h(t) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(t))
}

function v() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
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

function _() {
    return (0, i.bG)([o.A], () => v(o.A.getFavoriteChannels()))
}

function b() {
    let t = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, c.ai)(t)
}

function p(t, e) {
    let n = b(),
        {
            hasAccess: l
        } = A(e),
        a = (0, i.bG)([o.A], () => null != t && (o.A.isFavorite(t.id) || t.isThread() && o.A.isFavorite(t.parent_id)), [t]);
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