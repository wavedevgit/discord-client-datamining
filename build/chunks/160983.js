/** chunk id: 160983 params = (module,exports,require) **/
t.d(l, {
    A: () => A
}), t(321073);
var n = t(777480),
    i = t(107563),
    s = t(994500),
    a = t(622543),
    r = t(570287),
    o = t(646444),
    d = t(913453),
    c = t(667049),
    u = t(837531),
    m = t(186272),
    x = t(518477),
    p = t(985018);

function A(e) {
    let {
        user: l,
        currentUser: t
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: g
    } = (0, d.A)(l), f = g?.length, h = (0, o.A)(l), j = (0, c.A)(l.id), v = (0, r.A)(l.id), I = [], N = l.id === t?.id, y = a.A.getFirstWishlistId(l.id), C = null != y, E = C ? a.A.getWishlistSettings(l.id, y) : null, T = (C ? i.A.getWishlistItems(y) : []).length > 0, b = j.length > 0;
    (N || b) && I.push({
        text: p.intl.string(p.t.laViwx),
        section: x.RP.WIDGETS
    }), I.push({
        text: p.intl.string(p.t.chq59f),
        section: x.RP.ACTIVITY
    });
    let P = !1 === l.nsfwAllowed,
        O = s.A.isFriend(l.id),
        _ = E?.visibility === n.a.PUBLIC;
    return (N || !N && T && _ && v && (!P || P && O)) && I.push({
        text: p.intl.string(p.t["7lZ31J"]),
        section: x.RP.WISHLIST
    }), l.id !== t?.id && h && (I.push({
        text: (0, u.A)(A),
        section: x.RP.MUTUAL_FRIENDS
    }), I.push({
        text: (0, m.A)(f),
        section: x.RP.MUTUAL_GUILDS
    })), I
}