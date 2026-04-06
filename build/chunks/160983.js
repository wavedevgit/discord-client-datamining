/** chunk id: 160983 params = (module,exports,require) **/
t.d(l, {
    A: () => A
}), t(321073);
var n = t(777480),
    i = t(107563),
    s = t(994500),
    a = t(622543),
    r = t(570287),
    o = t(646444),
    d = t(913453),
    c = t(667049),
    u = t(837531),
    m = t(186272),
    p = t(518477),
    x = t(985018);

function A(e) {
    let {
        user: l,
        currentUser: t
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: g
    } = (0, d.A)(l), f = g?.length, h = (0, o.A)(l), j = (0, c.A)(l.id), I = (0, r.A)(l.id), v = [], N = l.id === t?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, C = E ? a.A.getWishlistSettings(l.id, y) : null, T = (E ? i.A.getWishlistItems(y) : []).length > 0, b = j.length > 0;
    (N || b) && v.push({
        text: x.intl.string(x.t.laViwx),
        section: p.RP.WIDGETS
    }), v.push({
        text: x.intl.string(x.t.chq59f),
        section: p.RP.ACTIVITY
    });
    let _ = !1 === l.nsfwAllowed,
        P = s.A.isFriend(l.id),
        O = C?.visibility === n.a.PUBLIC;
    return (N || !N && T && O && I && (!_ || _ && P)) && v.push({
        text: x.intl.string(x.t["7lZ31J"]),
        section: p.RP.WISHLIST
    }), l.id !== t?.id && h && (v.push({
        text: (0, u.A)(A),
        section: p.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, m.A)(f),
        section: p.RP.MUTUAL_GUILDS
    })), v
}