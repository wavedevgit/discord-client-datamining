/** chunk id: 846922 params = (module,exports,require) **/
"use strict";
r.d(t, {
    h: () => o,
    y: () => s
});
var n, i = r(353640),
    a = r(121894),
    o = ((n = {})[n.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", n[n.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", n);
let s = (0, i.v)(e => ({
    listings: {},
    setListing: (t, r) => (0, a.r)(() => e(e => ({
        listings: {
            ...e.listings,
            [t]: r(e.listings[t])
        }
    }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, r) => (0, a.r)(() => {
        e(e => ({
            editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: r(e.editStateIdsForGroup[t])
            }
        }))
    })
}))