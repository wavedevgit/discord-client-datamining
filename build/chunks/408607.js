/** chunk id: 408607, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var l = n(64700),
    r = n(311907),
    i = n(686956),
    s = n(287809);

function a(e) {
    let t = (0, r.bG)([s.default], () => s.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return l.useEffect(() => {
        null == t && (null == e ? void 0 : e.creator_id) != null && i.A.requestMembersById(e.guild_id, e.creator_id)
    }, [e, t]), t
}