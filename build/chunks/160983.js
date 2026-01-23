/** Chunk was on 64228 **/
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
    c = n(913453),
    d = n(667049),
    u = n(837531),
    p = n(186272),
    m = n(518477),
    f = n(985018);

function A(e) {
    let {
        user: t,
        currentUser: n
    } = e, {
        mutualFriendsCount: A,
        mutualGuilds: x
    } = (0, c.A)(t), j = null == x ? void 0 : x.length, h = (0, a.A)(t), g = (0, d.A)(t.id), v = (0, o.A)(t.id), b = [], I = t.id === (null == n ? void 0 : n.id), y = s.A.getFirstWishlistId(t.id), _ = null != y, O = _ ? s.A.getWishlistSettings(t.id, y) : null, N = (_ ? i.A.getWishlistItems(y) : []).length > 0, E = g.length > 0;
    (I || E) && b.push({
        text: f.intl.string(f.t.laViwx),
        section: m.RP.WIDGETS
    }), b.push({
        text: f.intl.string(f.t.chq59f),
        section: m.RP.ACTIVITY
    });
    let T = !1 === t.nsfwAllowed,
        P = r.A.isFriend(t.id),
        C = (null == O ? void 0 : O.visibility) === l.a.PUBLIC;
    return (I || !I && N && C && v && (!T || T && P)) && b.push({
        text: f.intl.string(f.t["7lZ31J"]),
        section: m.RP.WISHLIST
    }), t.id !== (null == n ? void 0 : n.id) && h && (b.push({
        text: (0, u.A)(A),
        section: m.RP.MUTUAL_FRIENDS
    }), b.push({
        text: (0, p.A)(j),
        section: m.RP.MUTUAL_GUILDS
    })), b
}