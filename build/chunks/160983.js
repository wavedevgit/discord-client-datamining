/** chunk id: 160983 params = (module,exports,require) **/
n.d(l, {
    A: () => A
}), n(321073);
var t = n(777480),
    i = n(107563),
    s = n(994500),
    a = n(622543),
    r = n(570287),
    o = n(646444),
    d = n(913453),
    c = n(667049),
    u = n(837531),
    m = n(186272),
    p = n(518477),
    x = n(985018);

function A(e) {
    let {
        user: l,
        currentUser: n
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: g
    } = (0, d.A)(l), f = g?.length, h = (0, o.A)(l), j = (0, c.A)(l.id), I = (0, r.A)(l.id), v = [], N = l.id === n?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, C = E ? a.A.getWishlistSettings(l.id, y) : null, T = (E ? i.A.getWishlistItems(y) : []).length > 0, b = j.length > 0;
    (N || b) && v.push({
        text: x.intl.string(x.t.laViwx),
        section: p.RP.WIDGETS
    }), v.push({
        text: x.intl.string(x.t.chq59f),
        section: p.RP.ACTIVITY
    });
    let _ = !1 === l.nsfwAllowed,
        P = s.A.isFriend(l.id),
        R = C?.visibility === t.a.PUBLIC;
    return (N || !N && T && R && I && (!_ || _ && P)) && v.push({
        text: x.intl.string(x.t["7lZ31J"]),
        section: p.RP.WISHLIST
    }), l.id !== n?.id && h && (v.push({
        text: (0, u.A)(A),
        section: p.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, m.A)(f),
        section: p.RP.MUTUAL_GUILDS
    })), v
}