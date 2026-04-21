/** chunk id: 160983 params = (module,exports,require) **/
l.d(n, {
    A: () => x
}), l(321073);
var t = l(777480),
    i = l(107563),
    s = l(994500),
    a = l(622543),
    r = l(570287),
    o = l(646444),
    d = l(913453),
    c = l(667049),
    u = l(837531),
    m = l(186272),
    A = l(518477),
    p = l(985018);

function x(e) {
    let {
        user: n,
        currentUser: l
    } = e, {
        mutualFriendsCount: x,
        mutualGuilds: g
    } = (0, d.A)(n), f = g?.length, h = (0, o.A)(n), v = (0, c.A)(n.id), j = (0, r.A)(n.id), I = [], N = n.id === l?.id, C = a.A.getFirstWishlistId(n.id), y = null != C, b = y ? a.A.getWishlistSettings(n.id, C) : null, E = (y ? i.A.getWishlistItems(C) : []).length > 0, T = v.length > 0;
    (N || T) && I.push({
        text: p.intl.string(p.t.laViwx),
        section: A.RP.WIDGETS
    }), I.push({
        text: p.intl.string(p.t.chq59f),
        section: A.RP.ACTIVITY
    });
    let P = !1 === n.nsfwAllowed,
        R = s.A.isFriend(n.id),
        _ = b?.visibility === t.a.PUBLIC;
    return (N || !N && E && _ && j && (!P || P && R)) && I.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: A.RP.WISHLIST
    }), n.id !== l?.id && h && (I.push({
        text: (0, u.A)(x),
        section: A.RP.MUTUAL_FRIENDS
    }), I.push({
        text: (0, m.A)(f),
        section: A.RP.MUTUAL_GUILDS
    })), I
}