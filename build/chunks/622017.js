/** chunk id: 622017 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    s = n(311907),
    l = n(73153),
    r = n(233317);

function a(e) {
    let {
        useCachedData: t = !1,
        fetch: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
        premiumGroupMembers: a,
        isFetchingMembers: o,
        isUpdatingMembers: d
    } = (0, s.cf)([r.A], () => ({
        premiumGroupMembers: r.A.getMembers(),
        isFetchingMembers: r.A.isFetchingMembers(),
        isUpdatingMembers: r.A.isUpdatingMembers()
    }));
    return (0, i.useEffect)(() => {
        !n || t && r.A.hasFetchedMembers() || null != e && l.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERS_REQUEST",
            subscriptionId: e
        })
    }, [n, e, t]), {
        premiumGroupMembers: a,
        isLoading: o || d
    }
}