/** chunk id: 807055 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    s = n(989349),
    l = n.n(s),
    r = n(405269);
let a = l().duration(30, "days");

function o(e, t) {
    return i.useMemo(() => (0, r.i$)(t ? null != e.outboundRedemptionEndDate ? l()(e.outboundRedemptionEndDate) : l()(e.endDate).add(a) : l()(e.endDate), "LL"), [e, t])
}