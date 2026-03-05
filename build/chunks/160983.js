/** chunk id: 160983 params = (module,exports,require) **/
i.d(t, {
    A: () => p
}), i(321073);
var l = i(777480),
    n = i(107563),
    s = i(994500),
    a = i(622543),
    r = i(570287),
    o = i(646444),
    d = i(913453),
    c = i(667049),
    u = i(837531),
    A = i(186272),
    m = i(518477),
    x = i(985018);

function p(e) {
    let {
        user: t,
        currentUser: i
    } = e, {
        mutualFriendsCount: p,
        mutualGuilds: g
    } = (0, d.A)(t), h = g?.length, I = (0, o.A)(t), f = (0, c.A)(t.id), j = (0, r.A)(t.id), v = [], N = t.id === i?.id, E = a.A.getFirstWishlistId(t.id), y = null != E, T = y ? a.A.getWishlistSettings(t.id, E) : null, _ = (y ? n.A.getWishlistItems(E) : []).length > 0, P = f.length > 0;
    (N || P) && v.push({
        text: x.intl.string(x.t.laViwx),
        section: m.RP.WIDGETS
    }), v.push({
        text: x.intl.string(x.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let C = !1 === t.nsfwAllowed,
        b = s.A.isFriend(t.id),
        O = T?.visibility === l.a.PUBLIC;
    return (N || !N && _ && O && j && (!C || C && b)) && v.push({
        text: x.intl.string(x.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), t.id !== i?.id && I && (v.push({
        text: (0, u.A)(p),
        section: m.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, A.A)(h),
        section: m.RP.MUTUAL_GUILDS
    })), v
}