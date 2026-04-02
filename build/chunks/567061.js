/** chunk id: 567061 params = (module,exports,require) **/
n.d(t, {
    E: () => r
});
var i = n(64700),
    a = n(4106),
    l = n(105971);

function r(e) {
    return i.useCallback(async () => {
        l.k.trackFeedShown({
            variant: e ? "DotShown" : "NoDotShown",
            homeSessionId: "gravity_refresh"
        }), await a.A.fetchDehydrated({
            isReloading: !0
        }), await a.A.reloadICYMITab(), await a.A.getGuildChannelScores(), a.A.getRecommendedGuilds()
    }, [e])
}