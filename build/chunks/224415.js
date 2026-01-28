/** Chunk was on 83759 **/
/** chunk id: 224415, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d,
    r: () => c
});
var r = n(311907),
    l = n(541702),
    i = n(309632),
    a = n(253932),
    o = n(617617),
    s = n(222823),
    u = n(461012);

function c(e) {
    return (0, r.bG)([o.A], () => {
        var t, n, r;
        let l;
        return t = o.A.settings.guilds, null != (l = null != e ? null == t || null == (r = t.guilds[e]) || null == (n = r.mobileRedesignChannelListSettings) ? void 0 : n.messagePreviews : null) && a.AB.has(l.value) ? l.value : a.wT.getSetting()
    })
}

function d(e, t) {
    let {
        unread: n,
        disabled: a
    } = t, o = c(e.guild_id), d = (0, r.bG)([s.Ay], () => null != e && s.Ay.hasUnread(e.id)), p = (0, l.A)(e), m = a || p || o === u.P.NONE || o === u.P.UNREADS && !(null != n ? n : d);
    return (0, i.A)(e, m)
}