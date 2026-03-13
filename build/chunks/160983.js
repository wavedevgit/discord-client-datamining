/** chunk id: 160983 params = (module,exports,require) **/
i.d(l, {
    A: () => x
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

function x(e) {
    let {
        user: l,
        currentUser: i
    } = e, {
        mutualFriendsCount: x,
        mutualGuilds: g
    } = (0, d.A)(l), h = g?.length, f = (0, o.A)(l), j = (0, c.A)(l.id), I = (0, r.A)(l.id), v = [], N = l.id === i?.id, y = a.A.getFirstWishlistId(l.id), E = null != y, T = E ? a.A.getWishlistSettings(l.id, y) : null, C = (E ? t.A.getWishlistItems(y) : []).length > 0, _ = j.length > 0;
    (N || _) && v.push({
        text: p.intl.string(p.t.laViwx),
        section: m.RP.WIDGETS
    }), v.push({
        text: p.intl.string(p.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let P = !1 === l.nsfwAllowed,
        O = s.A.isFriend(l.id),
        b = T?.visibility === n.a.PUBLIC;
    return (N || !N && C && b && I && (!P || P && O)) && v.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), l.id !== i?.id && f && (v.push({
        text: (0, u.A)(x),
        section: m.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, A.A)(h),
        section: m.RP.MUTUAL_GUILDS
    })), v
}