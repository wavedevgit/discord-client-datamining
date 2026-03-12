/** chunk id: 160983 params = (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var l = n(777480),
    i = n(107563),
    s = n(994500),
    a = n(622543),
    r = n(570287),
    o = n(646444),
    d = n(913453),
    c = n(667049),
    u = n(837531),
    A = n(186272),
    m = n(518477),
    p = n(985018);

function x(e) {
    let {
        user: t,
        currentUser: n
    } = e, {
        mutualFriendsCount: x,
        mutualGuilds: g
    } = (0, d.A)(t), h = g?.length, f = (0, o.A)(t), I = (0, c.A)(t.id), j = (0, r.A)(t.id), v = [], N = t.id === n?.id, y = a.A.getFirstWishlistId(t.id), E = null != y, T = E ? a.A.getWishlistSettings(t.id, y) : null, C = (E ? i.A.getWishlistItems(y) : []).length > 0, _ = I.length > 0;
    (N || _) && v.push({
        text: p.intl.string(p.t.laViwx),
        section: m.RP.WIDGETS
    }), v.push({
        text: p.intl.string(p.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let P = !1 === t.nsfwAllowed,
        b = s.A.isFriend(t.id),
        O = T?.visibility === l.a.PUBLIC;
    return (N || !N && C && O && j && (!P || P && b)) && v.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), t.id !== n?.id && f && (v.push({
        text: (0, u.A)(x),
        section: m.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, A.A)(h),
        section: m.RP.MUTUAL_GUILDS
    })), v
}