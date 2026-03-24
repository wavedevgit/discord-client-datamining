/** chunk id: 813847 params = (module,exports,require) **/
n.d(t, {
    e: () => o
});
var r = n(64700),
    i = n(568065),
    s = n(333354),
    l = n(985018);

function o(e, t, n) {
    return r.useMemo(() => t.sourceEntitlement?.ends_at != null ? {
        type: "expiring",
        expiringAt: t.sourceEntitlement.ends_at
    } : n && null != e.storeRemovalDate ? {
        type: "removing",
        removingAt: e.storeRemovalDate
    } : t.type === i.b_.LEVEL_ACTIVATED ? {
        type: "active",
        statusText: l.intl.formatToPlainString(s.default.WRRYUT, {
            perkName: t.sourcePowerup?.title ?? l.intl.string(l.t.BfF6ED)
        })
    } : t.type !== i.b_.INACTIVE ? {
        type: "active",
        statusText: l.intl.string(s.default.FFLkmx)
    } : void 0, [t, n, e])
}