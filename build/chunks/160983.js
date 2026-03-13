/** chunk id: 160983 params = (module,exports,require) **/
n.d(l, {
    A: () => x
}), n(321073);
var i = n(777480),
    t = n(107563),
    s = n(994500),
    a = n(622543),
    r = n(570287),
    o = n(646444),
    d = n(913453),
    c = n(667049),
    u = n(837531),
    A = n(186272),
    m = n(518477),
    p = n(985018);

function x(e) {
    let {
        user: l,
        currentUser: n
    } = e, {
        mutualFriendsCount: x,
        mutualGuilds: g
    } = (0, d.A)(l), h = g?.length, f = (0, o.A)(l), I = (0, c.A)(l.id), j = (0, r.A)(l.id), v = [], N = l.id === n?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, T = E ? a.A.getWishlistSettings(l.id, y) : null, C = (E ? t.A.getWishlistItems(y) : []).length > 0, _ = I.length > 0;
    (N || _) && v.push({
        text: p.intl.string(p.t.laViwx),
        section: m.RP.WIDGETS
    }), v.push({
        text: p.intl.string(p.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let P = !1 === l.nsfwAllowed,
        b = s.A.isFriend(l.id),
        O = T?.visibility === i.a.PUBLIC;
    return (N || !N && C && O && j && (!P || P && b)) && v.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), l.id !== n?.id && f && (v.push({
        text: (0, u.A)(x),
        section: m.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, A.A)(h),
        section: m.RP.MUTUAL_GUILDS
    })), v
}