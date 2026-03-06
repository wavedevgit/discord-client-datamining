/** chunk id: 846922 params = (module,exports,require) **/
"use strict";
a.d(t, {
    h: () => o,
    y: () => s
});
var n, r = a(353640),
    i = a(121894),
    o = ((n = {})[n.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", n[n.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", n);
let s = (0, r.v)(e => ({
    listings: {},
    setListing: (t, a) => (0, i.r)(() => e(e => ({
        listings: {
            ...e.listings,
            [t]: a(e.listings[t])
        }
    }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, a) => (0, i.r)(() => {
        e(e => ({
            editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: a(e.editStateIdsForGroup[t])
            }
        }))
    })
}))