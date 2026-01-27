/** Chunk was on 63974 **/
/** chunk id: 160983, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(321073);
var l = n(777480),
    i = n(107563),
    r = n(994500),
    s = n(622543),
    o = n(570287),
    a = n(646444),
    d = n(913453),
    c = n(667049),
    u = n(837531),
    p = n(186272),
    f = n(518477),
    m = n(985018);

function A(e) {
    let {
        user: t,
        currentUser: n
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: x
    } = (0, d.A)(t), g = null == x ? void 0 : x.length, j = (0, a.A)(t), h = (0, c.A)(t.id), b = (0, o.A)(t.id), v = [], I = t.id === (null == n ? void 0 : n.id), y = s.A.getFirstWishlistId(t.id), _ = null != y, O = _ ? s.A.getWishlistSettings(t.id, y) : null, N = (_ ? i.A.getWishlistItems(y) : []).length > 0, E = h.length > 0;
    (I || E) && v.push({
        text: m.intl.string(m.t.laViwx),
        section: f.RP.WIDGETS
    }), v.push({
        text: m.intl.string(m.t.chq59f),
        section: f.RP.ACTIVITY
    });
    let P = !1 === t.nsfwAllowed,
        T = r.A.isFriend(t.id),
        C = (null == O ? void 0 : O.visibility) === l.a.PUBLIC;
    return (I || !I && N && C && b && (!P || P && T)) && v.push({
        text: m.intl.string(m.t["7lZ31J"]),
        section: f.RP.WISHLIST
    }), t.id !== (null == n ? void 0 : n.id) && j && (v.push({
        text: (0, u.A)(A),
        section: f.RP.MUTUAL_FRIENDS
    }), v.push({
        text: (0, p.A)(g),
        section: f.RP.MUTUAL_GUILDS
    })), v
}