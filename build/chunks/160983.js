/** chunk id: 160983 params = (module,exports,require) **/
t.d(l, {
    A: () => p
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
    x = t(985018);

function p(e) {
    let {
        user: l,
        currentUser: t
    } = e, {
        mutualFriendsCount: p,
        mutualGuilds: g
    } = (0, d.A)(l), f = g?.length, h = (0, o.A)(l), j = (0, c.A)(l.id), I = (0, r.A)(l.id), v = [], N = l.id === t?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, T = E ? a.A.getWishlistSettings(l.id, y) : null, C = (E ? n.A.getWishlistItems(y) : []).length > 0, _ = j.length > 0;
    (N || _) && v.push({
        text: x.intl.string(x.t.laViwx),
        section: A.RP.WIDGETS
    }), v.push({
        text: x.intl.string(x.t.chq59f),
        section: A.RP.ACTIVITY
    });
    let b = !1 === l.nsfwAllowed,
        P = s.A.isFriend(l.id),
        O = T?.visibility === i.a.PUBLIC;
    return (N || !N && C && O && I && (!b || b && P)) && v.push({
        text: x.intl.string(x.t["7lZ31J"]),
        section: A.RP.WISHLIST
    }), l.id !== t?.id && h && (v.push({
        text: (0, u.A)(p),
        section: A.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, m.A)(f),
        section: A.RP.MUTUAL_GUILDS
    })), v
}