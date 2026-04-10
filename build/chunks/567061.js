/** chunk id: 567061 params = (module,exports,require) **/
n.d(t, {
    E: () => a
});
var i = n(64700),
    l = n(4106),
    r = n(105971);

function a(e) {
    return i.useCallback(async () => {
        r.k.trackFeedShown({
            variant: e ? "DotShown" : "NoDotShown",
            homeSessionId: "gravity_refresh"
        }), await l.A.fetchDehydrated({
            isReloading: !0
        }), await l.A.reloadICYMITab(), await l.A.getGuildChannelScores(), l.A.getRecommendedGuilds()
    }, [e])
}