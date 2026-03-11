/** chunk id: 160983 params = (module,exports,require) **/
i.d(t, {
    A: () => x
}), i(321073);
var l = i(777480),
    n = i(107563),
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
        user: t,
        currentUser: i
    } = e, {
        mutualFriendsCount: x,
        mutualGuilds: g
    } = (0, d.A)(t), h = g?.length, f = (0, o.A)(t), I = (0, c.A)(t.id), j = (0, r.A)(t.id), v = [], N = t.id === i?.id, y = a.A.getFirstWishlistId(t.id), E = null != y, T = E ? a.A.getWishlistSettings(t.id, y) : null, _ = (E ? n.A.getWishlistItems(y) : []).length > 0, C = I.length > 0;
    (N || C) && v.push({
        text: p.intl.string(p.t.laViwx),
        section: m.RP.WIDGETS
    }), v.push({
        text: p.intl.string(p.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let P = !1 === t.nsfwAllowed,
        b = s.A.isFriend(t.id),
        O = T?.visibility === l.a.PUBLIC;
    return (N || !N && _ && O && j && (!P || P && b)) && v.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), t.id !== i?.id && f && (v.push({
        text: (0, u.A)(x),
        section: m.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, A.A)(h),
        section: m.RP.MUTUAL_GUILDS
    })), v
}