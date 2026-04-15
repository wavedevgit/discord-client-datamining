/** chunk id: 160983 params = (module,exports,require) **/
l.d(n, {
    A: () => A
}), l(321073);
var i = l(777480),
    t = l(107563),
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
        user: n,
        currentUser: l
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: g
    } = (0, d.A)(n), f = g?.length, h = (0, o.A)(n), v = (0, c.A)(n.id), j = (0, r.A)(n.id), I = [], N = n.id === l?.id, y = a.A.getFirstWishlistId(n.id), C = null != y, b = C ? a.A.getWishlistSettings(n.id, y) : null, E = (C ? t.A.getWishlistItems(y) : []).length > 0, T = v.length > 0;
    (N || T) && I.push({
        text: x.intl.string(x.t.laViwx),
        section: p.RP.WIDGETS
    }), I.push({
        text: x.intl.string(x.t.chq59f),
        section: p.RP.ACTIVITY
    });
    let P = !1 === n.nsfwAllowed,
        _ = s.A.isFriend(n.id),
        R = b?.visibility === i.a.PUBLIC;
    return (N || !N && E && R && j && (!P || P && _)) && I.push({
        text: x.intl.string(x.t["7lZ31J"]),
        section: p.RP.WISHLIST
    }), n.id !== l?.id && h && (I.push({
        text: (0, u.A)(A),
        section: p.RP.MUTUAL_FRIENDS
    }), I.push({
        text: (0, m.A)(f),
        section: p.RP.MUTUAL_GUILDS
    })), I
}