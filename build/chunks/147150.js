/** chunk id: 147150 params = (module,exports,require) **/
n.d(t, {
    a: () => l
});
var a = n(64700),
    i = n(101292);

function l(e) {
    let t = a.useCallback(t => !0 === t.seenUnfurlQuestIds[e], [e]),
        n = (0, i.q)(t),
        l = (0, i.q)(e => e.markUnfurlSeen);
    return {
        hasSeenUnfurl: n,
        handleUnfurlDismissed: a.useCallback(() => {
            l(e)
        }, [l, e])
    }
}