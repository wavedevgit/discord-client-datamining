/** Chunk was on 60667 **/
/** chunk id: 807055, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(989349),
    l = n.n(i),
    s = n(405269);
let a = l().duration(30, "days");

function o(e, t) {
    return r.useMemo(() => (0, s.i$)(t ? null != e.outboundRedemptionEndDate ? l()(e.outboundRedemptionEndDate) : l()(e.endDate).add(a) : l()(e.endDate), "LL"), [e, t])
}