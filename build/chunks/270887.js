/** chunk id: 270887, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(735438),
    r = n.n(i),
    a = n(181079),
    s = n(379587),
    l = n(957300),
    o = n(832275),
    d = n(366811),
    _ = n(309010),
    c = n(711014),
    u = n(287809),
    A = n(619921),
    g = n(265422),
    I = n(652215);
let E = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = c.Ay.getFlattenedGuildIds(),
        n = l.E.getState().isPreviewMode,
        {
            enabled: i,
            hasHigherPrivileges: r
        } = s.o.getConfig({
            location: "navigateToServer"
        }),
        E = function(e) {
            let t = d.A.getState().guildId;
            if (null == t) return -2;
            if (t === I.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (E += e) || (0, o.J)(a.A, u.default, n, i, r) || (E += e), -3 === E && (E = t.length - 1), E >= t.length || -2 === E) return void(0, g.a)(A.A.getHomeLink());
    let h = -1 === E ? I.YYv : t[E],
        C = _.A.getChannelId(h);
    (0, g.i)(h, C === h ? null : C, !1)
}, I.ugG)