/** Chunk was on 2827 **/
/** chunk id: 231855, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(427262),
    i = n(622017),
    l = n(113090);

function s() {
    var e;
    let {
        useCachedData: t = !0,
        fetch: n = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        premiumGroupMembership: s
    } = (0, l.A)({
        useCachedData: t,
        fetch: n
    }), {
        premiumGroupMembers: a
    } = (0, i.A)(null != (e = null == s ? void 0 : s.subscriptionId) ? e : null, {
        useCachedData: t,
        fetch: n
    });
    return (null == a ? void 0 : a.primary) != null ? (0, r.$3)(null == a ? void 0 : a.primary) : null
}