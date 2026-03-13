/** chunk id: 270887 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(735438),
    r = n.n(i),
    a = n(554146),
    l = n(771781),
    s = n(826673),
    o = n(181079),
    d = n(379587),
    _ = n(832275),
    c = n(366811),
    u = n(309010),
    A = n(967198),
    I = n(711014),
    E = n(287809),
    g = n(619921),
    h = n(265422),
    C = n(652215);
let p = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = I.Ay.getFlattenedGuildIds(),
        {
            enabled: n,
            hasHigherPrivileges: i
        } = d.o.getConfig({
            location: "navigateToServer"
        }),
        r = (0, l.dD)(a.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        p = (0, s.k8)(a.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        f = function(e) {
            let t = c.A.getState().guildId;
            if (null == t) return -2;
            if (t === C.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (f += e) || (0, _.J)(o.A, E.default, A.A, {
            favoritesGuildXPEnabled: n,
            hasHigherPrivileges: i,
            isMenuItemDCSelected: r,
            isIntroDCDismissed: p
        }) || (f += e), -3 === f && (f = t.length - 1), f >= t.length || -2 === f) return void(0, h.a)(g.A.getHomeLink());
    let S = -1 === f ? C.YYv : t[f],
        m = u.A.getChannelId(S);
    (0, h.i)(S, m === S ? null : m, !1)
}, C.ugG)