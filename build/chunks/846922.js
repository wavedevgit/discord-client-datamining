/** chunk id: 846922 params = (module,exports,require) **/
r.d(t, {
    h: () => a,
    y: () => s
});
var n, i = r(353640),
    l = r(121894),
    a = ((n = {})[n.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", n[n.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", n);
let s = (0, i.v)(e => ({
    listings: {},
    setListing: (t, r) => (0, l.r)(() => e(e => ({
        listings: {
            ...e.listings,
            [t]: r(e.listings[t])
        }
    }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, r) => (0, l.r)(() => {
        e(e => ({
            editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: r(e.editStateIdsForGroup[t])
            }
        }))
    })
}))