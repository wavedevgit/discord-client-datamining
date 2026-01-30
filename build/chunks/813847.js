/** chunk id: 813847, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => s
});
var r = n(64700),
    l = n(568065),
    i = n(333354),
    o = n(985018);

function s(e, t, n) {
    return r.useMemo(() => {
        var r, s, a;
        return (null == (r = t.sourceEntitlement) ? void 0 : r.ends_at) != null ? {
            type: "expiring",
            expiringAt: t.sourceEntitlement.ends_at
        } : n && null != e.storeRemovalDate ? {
            type: "removing",
            removingAt: e.storeRemovalDate
        } : t.type === l.b_.LEVEL_ACTIVATED ? {
            type: "active",
            statusText: o.intl.formatToPlainString(i.default.WRRYUT, {
                perkName: null != (s = null == (a = t.sourcePowerup) ? void 0 : a.title) ? s : o.intl.string(o.t.BfF6ED)
            })
        } : t.type !== l.b_.INACTIVE ? {
            type: "active",
            statusText: o.intl.string(i.default.FFLkmx)
        } : void 0
    }, [t, n, e])
}