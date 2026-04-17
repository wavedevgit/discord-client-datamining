/** chunk id: 794905 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(64700),
    r = n(688810),
    l = n(399925),
    s = n(74847),
    a = n(602902);
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
            let c = (0, s.t)(e);
            (0, l.H1)(i.map(e => e.id));
            try {
                await (0, a.K)(i, {
                    channelId: c ? e : void 0,
                    analyticsLocations: t,
                    messageReference: o
                })
            } catch (e) {} finally {
                (0, l.H1)(null), r?.()
            }
        }, [e, t])
    }
}