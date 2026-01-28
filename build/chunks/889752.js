/** Chunk was on 78528 **/
/** chunk id: 889752, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(64700),
    l = n(311907),
    i = n(211059),
    s = n(609511),
    a = n(696451),
    o = n(71393),
    c = n(287809),
    u = n(652215),
    d = n(957173);

function p(e) {
    let t = (0, l.bG)([o.A, s.A, c.default, a.Ay], () => {
        let t = o.A.getGuild(e);
        if ((null == t ? void 0 : t.features.has(u.GuildFeatures.HUB)) !== !0 || !0 === s.A.hasViewedPrompt(d.X.REAL_NAME_PROMPT, t.id)) return null;
        let n = c.default.getCurrentUser();
        if (null == n) return null;
        let r = a.Ay.getMember(t.id, null == n ? void 0 : n.id);
        return (null == r ? void 0 : r.nick) == null
    });
    return r.useEffect(() => {
        null != e && null != t && (t || i.A.viewPrompt(d.X.REAL_NAME_PROMPT, e))
    }, [t, e]), !0 === t
}