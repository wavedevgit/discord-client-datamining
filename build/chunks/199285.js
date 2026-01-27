/** Chunk was on 41727 **/
/** chunk id: 199285, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => c
});
var r = n(311907),
    l = n(696451),
    i = n(287809),
    s = n(821124),
    a = n(212455),
    o = n(652215);

function c(e) {
    let t = null == e ? void 0 : e.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, r.bG)([a.A, i.default, l.Ay], () => {
            if (null == e) return;
            let t = a.A.getRequest(e.id),
                n = i.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let r = l.Ay.getMember(e.id, t.userId);
            if (!(null != r && !r.isPending) || (0, s.Oe)(t)) return t.applicationStatus
        }, [e]);
    return t ? n : void 0
}