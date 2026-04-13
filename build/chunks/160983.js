/** chunk id: 160983 params = (module,exports,require) **/
l.d(t, {
    A: () => A
}), l(321073);
var n = l(777480),
    i = l(107563),
    s = l(994500),
    a = l(622543),
    r = l(570287),
    o = l(646444),
    d = l(913453),
    c = l(667049),
    u = l(837531),
    m = l(186272),
    p = l(518477),
    x = l(985018);

function A(e) {
    let {
        user: t,
        currentUser: l
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: g
    } = (0, d.A)(t), f = g?.length, h = (0, o.A)(t), j = (0, c.A)(t.id), v = (0, r.A)(t.id), I = [], N = t.id === l?.id, y = a.A.getFirstWishlistId(t.id), C = null != y, E = C ? a.A.getWishlistSettings(t.id, y) : null, T = (C ? i.A.getWishlistItems(y) : []).length > 0, b = j.length > 0;
    (N || b) && I.push({
        text: x.intl.string(x.t.laViwx),
        section: p.RP.WIDGETS
    }), I.push({
        text: x.intl.string(x.t.chq59f),
        section: p.RP.ACTIVITY
    });
    let P = !1 === t.nsfwAllowed,
        _ = s.A.isFriend(t.id),
        O = E?.visibility === n.a.PUBLIC;
    return (N || !N && T && O && v && (!P || P && _)) && I.push({
        text: x.intl.string(x.t["7lZ31J"]),
        section: p.RP.WISHLIST
    }), t.id !== l?.id && h && (I.push({
        text: (0, u.A)(A),
        section: p.RP.MUTUAL_FRIENDS
    }), I.push({
        text: (0, m.A)(f),
        section: p.RP.MUTUAL_GUILDS
    })), I
}