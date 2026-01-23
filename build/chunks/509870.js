/** Chunk was on 26489 **/
/** chunk id: 509870, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => C
});
var s = i(284009),
    a = i.n(s),
    r = i(311907),
    l = i(851746),
    n = i(985018);
let C = e => {
    let {
        numNewSelected: t,
        anySelected: i
    } = e, s = (0, r.bG)([l.A], () => l.A.getReferralsRemaining());
    a()(null != s, "Referrals remaining should not be null");
    let C = s - t;
    return 0 === s ? n.intl.string(n.t.mPmPri) : 0 !== t || i ? 1 === C ? n.intl.string(n.t.UfPk1t) : C > 0 ? n.intl.formatToPlainString(n.t.hZnIz4, {
        numFriends: C
    }) : n.intl.formatToPlainString(n.t["3PJw6c"], {
        numReferrals: s
    }) : n.intl.formatToPlainString(n.t.GcKM5Z, {
        numReferrals: s
    })
}