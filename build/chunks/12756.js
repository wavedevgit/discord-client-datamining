/** chunk id: 12756 params = (module,exports,require) **/
n.d(t, {
    C: () => c
});
var i = n(311907),
    s = n(521933),
    l = n(419954),
    r = n(933297),
    a = n(287809),
    o = n(780964),
    d = n(985018);
let c = (0, l.Tf)(o.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
    usePredicate: () => {
        let e = (0, i.bG)([a.default], () => a.default.getCurrentUser());
        return null != e && !e.isClaimed()
    },
    useTitle: () => d.intl.string(d.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({
        type: r._1.TEXT,
        useText: () => d.intl.string(d.t.qxk9zo)
    }),
    useLabel: () => d.intl.string(d.t.BleMPB),
    onClick: () => s.A.openClaimAccountModal()
})