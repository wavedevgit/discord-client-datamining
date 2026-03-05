/** chunk id: 113090, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    s = n(311907),
    l = n(73153),
    a = n(233317);

function r() {
    let {
        useCachedData: e = !1,
        fetch: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        premiumGroupMembership: n,
        isFetchingMembership: r
    } = (0, s.cf)([a.A], () => ({
        premiumGroupMembership: a.A.getMembership(),
        isFetchingMembership: a.A.isFetchingMembership()
    }));
    return (0, i.useEffect)(() => {
        !t || e && a.A.hasFetchedMembership() || l.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
        })
    }, [t, e]), {
        premiumGroupMembership: n,
        isLoading: r
    }
}