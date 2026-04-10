/** chunk id: 270887 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(735438),
    r = n.n(i),
    l = n(554146),
    o = n(771781),
    s = n(826673),
    a = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    _ = n(309010),
    A = n(967198),
    E = n(711014),
    I = n(287809),
    h = n(619921),
    g = n(265422),
    C = n(652215);
let p = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = E.Ay.getFlattenedGuildIds(),
        {
            enabled: n
        } = d.o.getConfig({
            location: "navigateToServer"
        }),
        i = (0, o.dD)(l.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        r = (0, s.k8)(l.M.FAVORITES_SERVER_ONBOARDING_INTRO),
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
        }) || (p += e), -3 === p && (p = t.length - 1), p >= t.length || -2 === p) return void(0, g.a)(h.A.getHomeLink());
    let T = -1 === p ? C.YYv : t[p],
        S = _.A.getChannelId(T);
    (0, g.i)(T, S === T ? null : S, !1)
}, C.ugG)