/** chunk id: 160983 params = (module,exports,require) **/
t.d(l, {
    A: () => x
}), t(321073);
var i = t(777480),
    n = t(107563),
    s = t(994500),
    a = t(622543),
    r = t(570287),
    o = t(646444),
    d = t(913453),
    c = t(667049),
    u = t(837531),
    m = t(186272),
    A = t(518477),
    p = t(985018);

function x(e) {
    let {
        user: l,
        currentUser: t
    } = e, {
        mutualFriendsCount: x,
        mutualGuilds: g
    } = (0, d.A)(l), h = g?.length, f = (0, o.A)(l), j = (0, c.A)(l.id), I = (0, r.A)(l.id), v = [], N = l.id === t?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, T = E ? a.A.getWishlistSettings(l.id, y) : null, C = (E ? n.A.getWishlistItems(y) : []).length > 0, _ = j.length > 0;
    (N || _) && v.push({
        text: p.intl.string(p.t.laViwx),
        section: A.RP.WIDGETS
    }), v.push({
        text: p.intl.string(p.t.chq59f),
        section: A.RP.ACTIVITY
    });
    let b = !1 === l.nsfwAllowed,
        O = s.A.isFriend(l.id),
        P = T?.visibility === i.a.PUBLIC;
    return (N || !N && C && P && I && (!b || b && O)) && v.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: A.RP.WISHLIST
    }), l.id !== t?.id && f && (v.push({
        text: (0, u.A)(x),
        section: A.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, m.A)(h),
        section: A.RP.MUTUAL_GUILDS
    })), v
}