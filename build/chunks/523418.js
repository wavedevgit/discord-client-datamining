/** chunk id: 523418, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => u
});
var r = n(397927),
    l = n(723702),
    i = n(360619),
    s = n(682262),
    a = n(531525),
    o = n(857266),
    c = n(985018);

function u() {
    let e = (0, s.b_)(),
        t = (0, i.AC)(a.H.GAMES),
        n = [{
            id: o.J.MY_GAMES,
            title: c.intl.string(c.t["5DMgp9"]),
            icon: r.LVO,
            predicate: () => !l.isPlatformEmbedded,
            setting: a.H.GAMES_MY_GAMES
        }, {
            id: o.J.OVERLAY,
            title: c.intl.string(c.t.bNqkD9),
            icon: r.vH5,
            predicate: () => !e,
            setting: a.H.GAMES_OVERLAY
        }, {
            id: o.J.ACTIVITY_PRIVACY,
            title: c.intl.string(c.t.Cq98yL),
            icon: r.gXB,
            setting: a.H.GAMES_ACTIVITY_PRIVACY
        }].filter(e => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
        let e = n.filter(e => t.has(e.setting));
        return e.length > 0 ? e : n
    }
    return n
}