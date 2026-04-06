/** chunk id: 160983 params = (module,exports,require) **/
i.d(l, {
    A: () => p
}), i(321073);
var t = i(777480),
    n = i(107563),
    s = i(994500),
    a = i(622543),
    r = i(570287),
    o = i(646444),
    d = i(913453),
    c = i(667049),
    u = i(837531),
    m = i(186272),
    x = i(518477),
    A = i(985018);

function p(e) {
    let {
        user: l,
        currentUser: i
    } = e, {
        mutualFriendsCount: p,
        mutualGuilds: g
    } = (0, d.A)(l), f = g?.length, h = (0, o.A)(l), j = (0, c.A)(l.id), I = (0, r.A)(l.id), v = [], N = l.id === i?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, C = E ? a.A.getWishlistSettings(l.id, y) : null, T = (E ? n.A.getWishlistItems(y) : []).length > 0, _ = j.length > 0;
    (N || _) && v.push({
        text: A.intl.string(A.t.laViwx),
        section: x.RP.WIDGETS
    }), v.push({
        text: A.intl.string(A.t.chq59f),
        section: x.RP.ACTIVITY
    });
    let b = !1 === l.nsfwAllowed,
        P = s.A.isFriend(l.id),
        O = C?.visibility === t.a.PUBLIC;
    return (N || !N && T && O && I && (!b || b && P)) && v.push({
        text: A.intl.string(A.t["7lZ31J"]),
        section: x.RP.WISHLIST
    }), l.id !== i?.id && h && (v.push({
        text: (0, u.A)(p),
        section: x.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, m.A)(f),
        section: x.RP.MUTUAL_GUILDS
    })), v
}