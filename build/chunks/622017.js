/** Chunk was on 60667 **/
/** chunk id: 622017, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(64700),
    i = n(311907),
    l = n(73153),
    s = n(233317);

function a(e) {
    let {
        useCachedData: t = !1,
        fetch: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
        premiumGroupMembers: a,
        isFetchingMembers: o,
        isUpdatingMembers: c
    } = (0, i.cf)([s.A], () => ({
        premiumGroupMembers: s.A.getMembers(),
        isFetchingMembers: s.A.isFetchingMembers(),
        isUpdatingMembers: s.A.isUpdatingMembers()
    }));
    return (0, r.useEffect)(() => {
        !n || t && s.A.hasFetchedMembers() || null != e && l.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERS_REQUEST",
            subscriptionId: e
        })
    }, [n, e, t]), {
        premiumGroupMembers: a,
        isLoading: o || c
    }
}