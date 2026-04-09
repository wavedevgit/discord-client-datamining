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
    x = n(518477),
    p = n(985018);

function A(e) {
    let {
        user: l,
        currentUser: n
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: g
    } = (0, d.A)(l), f = g?.length, h = (0, o.A)(l), j = (0, c.A)(l.id), v = (0, r.A)(l.id), I = [], N = l.id === n?.id, y = a.A.getFirstWishlistId(l.id), C = null != y, E = C ? a.A.getWishlistSettings(l.id, y) : null, T = (C ? i.A.getWishlistItems(y) : []).length > 0, b = j.length > 0;
    (N || b) && I.push({
        text: p.intl.string(p.t.laViwx),
        section: x.RP.WIDGETS
    }), I.push({
        text: p.intl.string(p.t.chq59f),
        section: x.RP.ACTIVITY
    });
    let P = !1 === l.nsfwAllowed,
        _ = s.A.isFriend(l.id),
        R = E?.visibility === t.a.PUBLIC;
    return (N || !N && T && R && v && (!P || P && _)) && I.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: x.RP.WISHLIST
    }), l.id !== n?.id && h && (I.push({
        text: (0, u.A)(A),
        section: x.RP.MUTUAL_FRIENDS
    }), I.push({
        text: (0, m.A)(f),
        section: x.RP.MUTUAL_GUILDS
    })), I
}