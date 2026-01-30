/** chunk id: 794905, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(688810),
    l = n(399925),
    a = n(74847),
    s = n(602902);
let o = e => {
    let {
        analyticsLocations: t
    } = (0, i.Ay)();
    return {
        onShareClick: r.useCallback(async n => {
            let {
                clips: r,
                onShareComplete: i,
                messageReference: o
            } = n;
            if (0 === r.length) return;
            let c = (0, a.t)(e);
            (0, l.H1)(r.map(e => e.id));
            try {
                await (0, s.K)(r, {
                    channelId: c ? e : void 0,
                    analyticsLocations: t,
                    messageReference: o
                })
            } catch (e) {} finally {
                (0, l.H1)(null), null == i || i()
            }
        }, [e, t])
    }
}