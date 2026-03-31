/** chunk id: 270887 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(735438),
    l = n.n(i),
    r = n(554146),
    s = n(771781),
    o = n(826673),
    a = n(181079),
    d = n(379587),
    c = n(832275),
    u = n(366811),
    A = n(309010),
    E = n(967198),
    _ = n(711014),
    I = n(287809),
    g = n(619921),
    C = n(265422),
    h = n(652215);
let p = l().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = _.Ay.getFlattenedGuildIds(),
        {
            enabled: n
        } = d.o.getConfig({
            location: "navigateToServer"
        }),
        i = (0, s.dD)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        l = (0, o.k8)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        p = function(e) {
            let t = u.A.getState().guildId;
            if (null == t) return -2;
            if (t === h.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (p += e) || (0, c.J)(a.A, I.default, E.A, {
            favoritesGuildXPEnabled: n,
            isMenuItemDCSelected: i,
            isIntroDCDismissed: l
        }) || (p += e), -3 === p && (p = t.length - 1), p >= t.length || -2 === p) return void(0, C.a)(g.A.getHomeLink());
    let T = -1 === p ? h.YYv : t[p],
        S = A.A.getChannelId(T);
    (0, C.i)(T, S === T ? null : S, !1)
}, h.ugG)