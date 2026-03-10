/** chunk id: 846922 params = (module,exports,require) **/
n.d(t, {
    h: () => r,
    y: () => s
});
var i, l = n(353640),
    a = n(121894),
    r = ((i = {})[i.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", i[i.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", i);
let s = (0, l.v)(e => ({
    listings: {},
    setListing: (t, n) => (0, a.r)(() => e(e => ({
        listings: {
            ...e.listings,
            [t]: n(e.listings[t])
        }
    }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) => (0, a.r)(() => {
        e(e => ({
            editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: n(e.editStateIdsForGroup[t])
            }
        }))
    })
}))