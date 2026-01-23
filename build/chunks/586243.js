/** Chunk was on 47841 **/
/** chunk id: 586243, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(64700),
    i = n(181658),
    l = n(493540);

function s(e) {
    let [t, n] = r.useState(), [s, a] = r.useState(!1), [o, c] = r.useState(!1);
    return {
        error: t,
        loading: s,
        createEnableRequest: r.useCallback(async () => {
            if (null != e) {
                a(!0), n(void 0), c(!1);
                try {
                    await l.gO(e), c(!0)
                } catch (e) {
                    n(new i.A(e))
                } finally {
                    a(!1)
                }
            }
        }, [e]),
        submittedRequest: o
    }
}