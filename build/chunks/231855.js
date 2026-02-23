/** chunk id: 231855, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(427262),
    s = n(622017),
    a = n(113090);

function r() {
    let {
        useCachedData: e = !0,
        fetch: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        premiumGroupMembership: n
    } = (0, a.A)({
        useCachedData: e,
        fetch: t
    }), {
        premiumGroupMembers: r
    } = (0, s.A)(n?.subscriptionId ?? null, {
        useCachedData: e,
        fetch: t
    });
    return r?.primary != null ? (0, i.$3)(r?.primary) : null
}