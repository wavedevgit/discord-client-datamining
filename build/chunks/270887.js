/** chunk id: 270887 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(735438),
    r = n.n(i),
    a = n(554146),
    s = n(771781),
    l = n(826673),
    o = n(181079),
    d = n(379587),
    _ = n(832275),
    c = n(366811),
    u = n(309010),
    A = n(967198),
    E = n(711014),
    I = n(287809),
    g = n(619921),
    h = n(265422),
    p = n(652215);
let C = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = E.Ay.getFlattenedGuildIds(),
        {
            enabled: n
        } = d.o.getConfig({
            location: "navigateToServer"
        }),
        i = (0, s.dD)(a.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        r = (0, l.k8)(a.M.FAVORITES_SERVER_ONBOARDING_INTRO),
        C = function(e) {
            let t = c.A.getState().guildId;
            if (null == t) return -2;
            if (t === p.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (C += e) || (0, _.J)(o.A, I.default, A.A, {
            favoritesGuildXPEnabled: n,
            isMenuItemDCSelected: i,
            isIntroDCDismissed: r
        }) || (C += e), -3 === C && (C = t.length - 1), C >= t.length || -2 === C) return void(0, h.a)(g.A.getHomeLink());
    let f = -1 === C ? p.YYv : t[C],
        m = u.A.getChannelId(f);
    (0, h.i)(f, m === f ? null : m, !1)
}, p.ugG)