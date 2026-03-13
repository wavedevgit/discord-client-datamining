/** chunk id: 270887 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(735438),
    r = n.n(i),
    a = n(554146),
    s = n(771781),
    l = n(826673),
    o = n(181079),
    d = n(379587),
    c = n(832275),
    _ = n(366811),
    u = n(309010),
    A = n(967198),
    E = n(711014),
    g = n(287809),
    I = n(619921),
    h = n(265422),
    C = n(652215);
let p = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = E.Ay.getFlattenedGuildIds(),
        {
            enabled: n,
            hasHigherPrivileges: i
        } = d.o.getConfig({
            location: "navigateToServer"
        }),
        r = (0, s.dD)(a.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        p = (0, l.k8)(a.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        f = function(e) {
            let t = _.A.getState().guildId;
            if (null == t) return -2;
            if (t === C.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (f += e) || (0, c.J)(o.A, g.default, A.A, {
            favoritesGuildXPEnabled: n,
            hasHigherPrivileges: i,
            isMenuItemDCSelected: r,
            isIntroDCDismissed: p
        }) || (f += e), -3 === f && (f = t.length - 1), f >= t.length || -2 === f) return void(0, h.a)(I.A.getHomeLink());
    let m = -1 === f ? C.YYv : t[f],
        S = u.A.getChannelId(m);
    (0, h.i)(m, S === m ? null : S, !1)
}, C.ugG)