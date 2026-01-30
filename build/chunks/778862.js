/** chunk id: 778862, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var r = n(64700),
    l = n(684339);

function i(e) {
    let {
        location: t,
        videoSpinnerContext: n,
        userId: i,
        streamId: a,
        loading: o,
        paused: s = !1
    } = e, [c] = r.useState(() => new l.M(t));
    r.useEffect(() => {
        s || (o ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, i, a))
    }, [o, s, a, c, n, i])
}