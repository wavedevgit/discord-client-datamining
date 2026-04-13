/** chunk id: 794905 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(64700),
    r = n(688810),
    s = n(399925),
    a = n(74847),
    l = n(602902);
let o = e => {
    let {
        analyticsLocations: t
    } = (0, r.Ay)();
    return {
        onShareClick: i.useCallback(async n => {
            let {
                clips: i,
                onShareComplete: r,
                messageReference: o
            } = n;
            if (0 === i.length) return;
            let c = (0, a.t)(e);
            (0, s.H1)(i.map(e => e.id));
            try {
                await (0, l.K)(i, {
                    channelId: c ? e : void 0,
                    analyticsLocations: t,
                    messageReference: o
                })
            } catch (e) {} finally {
                (0, s.H1)(null), r?.()
            }
        }, [e, t])
    }
}