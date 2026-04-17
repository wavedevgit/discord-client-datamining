/** chunk id: 270887 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(735438),
    r = n.n(i),
    l = n(554146),
    s = n(771781),
    o = n(826673),
    a = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    _ = n(309010),
    A = n(967198),
    E = n(711014),
    I = n(287809),
    g = n(619921),
    h = n(265422),
    C = n(652215);
let p = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = E.Ay.getFlattenedGuildIds(),
        {
            enabled: n
        } = d.o.getConfig({
            location: "navigateToServer"
        }),
        i = (0, s.dD)(l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        r = (0, o.k8)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        p = function(e) {
            let t = u.A.getState().guildId;
            if (null == t) return -2;
            if (t === C.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (p += e) || (0, c.J)(a.A, I.default, A.A, {
            favoritesGuildXPEnabled: n,
            isMenuItemDCSelected: i,
            isIntroDCDismissed: r
        }) || (p += e), -3 === p && (p = t.length - 1), p >= t.length || -2 === p) return void(0, h.a)(g.A.getHomeLink());
    let S = -1 === p ? C.YYv : t[p],
        T = _.A.getChannelId(S);
    (0, h.i)(S, T === S ? null : T, !1)
}, C.ugG)