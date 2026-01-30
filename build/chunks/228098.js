/** chunk id: 228098, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(311907),
    l = n(473529),
    i = n(543465),
    s = n(395504),
    a = n(652215),
    o = n(746080);

function c(e) {
    var t;
    let n = (0, s.jN)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : a.eGj),
        c = (0, r.bG)([i.Ay], () => null != e && i.Ay.isChannelRecordOrParentOptedIn(e)),
        u = (0, l.d)(null != (t = null == e ? void 0 : e.guild_id) ? t : a.eGj);
    if (null == e) return !1;
    let d = u && e.hasFlag(o.lx.IS_GUILD_RESOURCE_CHANNEL);
    return n && !d && !c && !e.isThread()
}