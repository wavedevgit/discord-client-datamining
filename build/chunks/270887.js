/** chunk id: 270887, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    I = n(265422),
    E = n(652215);
let g = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = c.Ay.getFlattenedGuildIds(),
        n = l.E.getState().isPreviewMode,
        {
            enabled: i,
            hasHigherPrivileges: r
        } = s.o.getConfig({
            location: "navigateToServer"
        }),
        g = function(e) {
            let t = d.A.getState().guildId;
            if (null == t) return -2;
            if (t === E.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (g += e) || (0, o.J)(a.A, u.default, n, i, r) || (g += e), -3 === g && (g = t.length - 1), g >= t.length || -2 === g) return void(0, I.a)(A.A.getHomeLink());
    let C = -1 === g ? E.YYv : t[g],
        h = _.A.getChannelId(C);
    (0, I.i)(C, h === C ? null : h, !1)
}, E.ugG)