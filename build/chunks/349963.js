/** chunk id: 349963, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(299855),
    i = n.n(r),
    l = n(401843),
    a = n(77729),
    s = n(15285),
    o = n(616356),
    c = n(734057),
    u = n(71393),
    d = n(430452),
    p = n(576705),
    h = n(309010),
    g = n(157257),
    f = n(723702),
    m = n(279250),
    A = n(880144),
    _ = n(997630),
    b = n(905552),
    E = n(502075);

function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(0, A.A)(d.A) || null != o.A.getCurrentUserActiveStream()) return !1;
    let n = h.A.getVoiceChannelId(),
        r = c.A.getChannel(n);
    if (null == r) return !1;
    let O = r.getGuildId();
    if (!(0, m.vz)(r, u.A, p.A, !1)) return !1;
    if (d.A.getUseSystemScreensharePicker())(0, f.isMac)() && i().satisfies(null === a.A || void 0 === a.A ? void 0 : a.A.os.release, E.WZ) ? (0, _.a)() : (0, _.a)("window");
    else {
        let n = (0, b.A)(s.Ay, g.A);
        if (null == n || n.isLauncher && !e) return !1;
        (0, l.XI)(O, r.id, {
            pid: n.pid,
            analyticsLocations: t
        })
    }
    return !0
}