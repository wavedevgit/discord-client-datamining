/** chunk id: 622017, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    s = n(311907),
    l = n(73153),
    a = n(233317);

function r(e) {
    let {
        useCachedData: t = !1,
        fetch: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
        premiumGroupMembers: r,
        isFetchingMembers: o,
        isUpdatingMembers: d
    } = (0, s.cf)([a.A], () => ({
        premiumGroupMembers: a.A.getMembers(),
        isFetchingMembers: a.A.isFetchingMembers(),
        isUpdatingMembers: a.A.isUpdatingMembers()
    }));
    return (0, i.useEffect)(() => {
        !n || t && a.A.hasFetchedMembers() || null != e && l.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERS_REQUEST",
            subscriptionId: e
        })
    }, [n, e, t]), {
        premiumGroupMembers: r,
        isLoading: o || d
    }
}