/** chunk id: 270887, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(735438),
    r = n.n(i),
    a = n(181079),
    s = n(832275),
    l = n(366811),
    o = n(734057),
    d = n(576705),
    _ = n(309010),
    c = n(711014),
    u = n(619921),
    A = n(265422),
    g = n(652215);
let E = r().throttle(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = c.Ay.getFlattenedGuildIds(),
        n = function(e) {
            let t = l.A.getState().guildId;
            if (null == t) return -2;
            if (t === g.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n
        }(t);
    if (-1 !== (n += e) || (0, s.J)(a.A, o.A, d.A) || (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n) return void(0, A.a)(u.A.getHomeLink());
    let i = -1 === n ? g.YYv : t[n],
        r = _.A.getChannelId(i);
    (0, A.i)(i, r === i ? null : r, !1)
}, g.ugG)