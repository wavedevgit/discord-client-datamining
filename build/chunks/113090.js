/** Chunk was on 5606 **/
/** chunk id: 113090, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(64700),
    i = n(311907),
    l = n(73153),
    s = n(233317);

function a() {
    let {
        useCachedData: e = !1,
        fetch: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        premiumGroupMembership: n,
        isFetchingMembership: a
    } = (0, i.cf)([s.A], () => ({
        premiumGroupMembership: s.A.getMembership(),
        isFetchingMembership: s.A.isFetchingMembership()
    }));
    return (0, r.useEffect)(() => {
        !t || e && s.A.hasFetchedMembership() || l.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
        })
    }, [t, e]), {
        premiumGroupMembership: n,
        isLoading: a
    }
}