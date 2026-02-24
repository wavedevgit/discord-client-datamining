/** chunk id: 622017, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    s = n(311907),
    a = n(73153),
    l = n(233317);

function r(e) {
    let {
        useCachedData: t = !1,
        fetch: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
        premiumGroupMembers: r,
        isFetchingMembers: o,
        isUpdatingMembers: c
    } = (0, s.cf)([l.A], () => ({
        premiumGroupMembers: l.A.getMembers(),
        isFetchingMembers: l.A.isFetchingMembers(),
        isUpdatingMembers: l.A.isUpdatingMembers()
    }));
    return (0, i.useEffect)(() => {
        !n || t && l.A.hasFetchedMembers() || null != e && a.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERS_REQUEST",
            subscriptionId: e
        })
    }, [n, e, t]), {
        premiumGroupMembers: r,
        isLoading: o || c
    }
}