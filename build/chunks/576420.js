/** chunk id: 576420 params = (module,exports,require) **/
n.d(t, {
    A2: () => a,
    Ay: () => o,
    WS: () => r
});
var i = n(839214),
    l = n(914853);
let r = 1e3,
    s = (0, i.D)((e, t) => ({
        activeTab: l.x.FRIENDS,
        recentlyAddedFavoriteTimestampMsByKey: {},
        setActiveTab: n => {
            t().activeTab !== n && e({
                activeTab: n
            })
        },
        markFavoriteAdded: (t, n) => {
            let i = n ?? Date.now();
            e(e => ({
                recentlyAddedFavoriteTimestampMsByKey: {
                    ...e.recentlyAddedFavoriteTimestampMsByKey,
                    [t]: i
                }
            }))
        },
        clearFavoriteAdded: t => {
            e(e => null == e.recentlyAddedFavoriteTimestampMsByKey[t] ? {} : {
                recentlyAddedFavoriteTimestampMsByKey: {
                    ...e.recentlyAddedFavoriteTimestampMsByKey,
                    [t]: void 0
                }
            })
        }
    }));

function a(e) {
    return s.useState(t => t.recentlyAddedFavoriteTimestampMsByKey[e] ?? null)
}
let o = s