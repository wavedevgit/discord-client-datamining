/** chunk id: 567061 params = (module,exports,require) **/
n.d(t, {
    E: () => r
});
var i = n(64700),
    l = n(4106),
    a = n(105971);

function r(e) {
    return i.useCallback(async () => {
        a.k.trackFeedShown({
            variant: e ? "DotShown" : "NoDotShown",
            homeSessionId: "gravity_refresh"
        }), await l.A.fetchDehydrated({
            isReloading: !0
        }), await l.A.reloadICYMITab(), await l.A.getGuildChannelScores(), l.A.getRecommendedGuilds()
    }, [e])
}