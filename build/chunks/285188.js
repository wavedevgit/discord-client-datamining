/** chunk id: 285188 params = (module,exports,require) **/
a.d(t, {
    N: () => _
});
var n = a(975975),
    r = a.n(n),
    l = a(843472),
    s = a(451909),
    o = a(223863),
    i = a(734057),
    c = a(403362),
    u = a(381941);
let d = async (e, t, a) => {
    let n = i.A.getChannel(a);
    if (null == n) throw Error("Unable to find destination channel for message");
    let r = s.Ay.parse(n, t);
    return l.A.sendMessage(n.id, r, !1, {
        location: u.Hx.SHARE_CUSTOM_THEME,
        eagerDispatch: !1,
        sharedCustomTheme: e
    })
}, _ = async (e, t, a) => {
    let n = (await Promise.all(e.map(o.pk))).filter(c.Vq);
    return r()(n.map(async e => d(t, a, e)))
}