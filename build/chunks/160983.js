/** chunk id: 160983 params = (module,exports,require) **/
i.d(l, {
    A: () => g
}), i(321073);
var n = i(777480),
    t = i(107563),
    s = i(994500),
    a = i(622543),
    r = i(570287),
    o = i(646444),
    d = i(913453),
    c = i(667049),
    u = i(837531),
    A = i(186272),
    m = i(518477),
    p = i(985018);

function g(e) {
    let {
        user: l,
        currentUser: i
    } = e, {
        mutualFriendsCount: g,
        mutualGuilds: x
    } = (0, d.A)(l), h = x?.length, f = (0, o.A)(l), I = (0, c.A)(l.id), j = (0, r.A)(l.id), v = [], N = l.id === i?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, C = E ? a.A.getWishlistSettings(l.id, y) : null, T = (E ? t.A.getWishlistItems(y) : []).length > 0, _ = I.length > 0;
    (N || _) && v.push({
        text: p.intl.string(p.t.laViwx),
        section: m.RP.WIDGETS
    }), v.push({
        text: p.intl.string(p.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let b = !1 === l.nsfwAllowed,
        P = s.A.isFriend(l.id),
        O = C?.visibility === n.a.PUBLIC;
    return (N || !N && T && O && j && (!b || b && P)) && v.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), l.id !== i?.id && f && (v.push({
        text: (0, u.A)(g),
        section: m.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, A.A)(h),
        section: m.RP.MUTUAL_GUILDS
    })), v
}