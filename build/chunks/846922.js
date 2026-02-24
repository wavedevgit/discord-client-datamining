/** chunk id: 846922, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    h: () => o,
    y: () => s
});
var r, n = a(353640),
    i = a(121894),
    o = ((r = {})[r.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", r[r.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS", r);
let s = (0, n.v)(e => ({
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