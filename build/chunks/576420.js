/** chunk id: 576420 params = (module,exports,require) **/
n.d(t, {
    A2: () => a,
    Ay: () => o,
    WS: () => l
});
var i = n(839214),
    r = n(914853);
let l = 1e3,
    s = (0, i.D)((e, t) => ({
        activeTab: r.x.FRIENDS,
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