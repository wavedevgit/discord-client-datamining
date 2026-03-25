/** chunk id: 93055 params = (module,exports,require) **/
n.d(t, {
    Af: () => h,
    CJ: () => p,
    DZ: () => b,
    Rm: () => v,
    TW: () => A,
    e4: () => g,
    m_: () => _
}), n(321073);
var i = n(311907),
    r = n(873298);
n(734057);
var l = n(967198),
    a = n(287809),
    d = n(474090);
n(661191);
var o = n(181079),
    u = n(379587),
    s = n(11531),
    c = n(5180),
    f = n(788868);

function A(e) {
    let {
        enabled: t,
        hasHigherPrivileges: n
    } = (0, u.m)({
        location: e
    }), r = (0, i.bG)([a.default], () => a.default.getCurrentUser()), l = d.Ay.isPremiumExactly(r, f.PremiumTypes.TIER_2);
    return {
        hasAccess: t && l,
        isExperimentEnabled: t,
        hasHigherPrivileges: n
    }
}

function h(e) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(e))
}

function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
        t = [{
            id: null,
            name: ""
        }];
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && t.push({
            id: i.id,
            name: i.nickname ?? ""
        })
    }
    return t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t
}

function v() {
    return (0, i.bG)([o.A], () => _(o.A.getFavoriteChannels()))
}

function b() {
    let e = (0, i.bG)([l.A], () => l.A.getGuildId());
    return (0, c.ai)(e)
}

function g(e, t) {
    let n = b(),
        {
            hasAccess: r
        } = A(t),
        l = (0, i.bG)([o.A], () => null != e && (o.A.isFavorite(e.id) || e.isThread() && o.A.isFavorite(e.parent_id)), [e]);
    return !n || r && l ? e ?? null : null
}

function p() {
    let e = (0, s.J)(e => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, s.J)(e => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, s.J)(e => e.clearFavoriteAdded)
    }
}