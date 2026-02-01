/** chunk id: 343170, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(366811),
    a = n(71393),
    o = n(531685),
    c = n(263715),
    u = n(131494),
    d = n(330465);

function p(e) {
    let {
        guildId: t
    } = e, n = l.useMemo(() => (0, c.EL)(t), [t]), p = (0, i.bG)([a.A], () => a.A.getGuild(t)), h = (0, i.bG)([o.A], () => o.A.isFocused()), g = t === (0, s.A)(e => {
        let {
            guildId: t
        } = e;
        return t
    }), f = (0, u.A)(t);
    return null == p ? null : (0, r.jsx)(d.A, {
        guildNode: n,
        guild: p,
        animatable: h,
        selected: g,
        draggable: !1,
        mediaState: f
    })
}