/** chunk id: 113090 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    s = n(311907),
    l = n(73153),
    r = n(233317);

function a() {
    let {
        useCachedData: e = !1,
        fetch: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        premiumGroupMembership: n,
        isFetchingMembership: a
    } = (0, s.cf)([r.A], () => ({
        premiumGroupMembership: r.A.getMembership(),
        isFetchingMembership: r.A.isFetchingMembership()
    }));
    return (0, i.useEffect)(() => {
        !t || e && r.A.hasFetchedMembership() || l.h.dispatch({
            type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST"
        })
    }, [t, e]), {
        premiumGroupMembership: n,
        isLoading: a
    }
}