/** chunk id: 349963 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(299855),
    r = n.n(i),
    l = n(401843),
    a = n(77729),
    s = n(15285),
    o = n(616356),
    d = n(734057),
    c = n(71393),
    u = n(430452),
    A = n(576705),
    h = n(309010),
    _ = n(157257),
    m = n(723702),
    g = n(279250),
    p = n(880144),
    E = n(997630),
    I = n(905552),
    f = n(502075);

function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(0, p.A)(u.Ay) || null != o.A.getCurrentUserActiveStream()) return !1;
    let n = h.A.getVoiceChannelId(),
        i = d.A.getChannel(n);
    if (null == i) return !1;
    let C = i.getGuildId();
    if (!(0, g.vz)(i, c.A, A.A, !1)) return !1;
    if (u.Ay.getUseSystemScreensharePicker())(0, m.isMac)() && r().satisfies(a.A?.os.release, f.WZ) ? (0, E.a)() : (0, E.a)("window");
    else {
        let n = (0, I.A)(s.Ay, _.A);
        if (null == n || n.isLauncher && !e) return !1;
        (0, l.XI)(C, i.id, {
            pid: n.pid,
            analyticsLocations: t
        })
    }
    return !0
}