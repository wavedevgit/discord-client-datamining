/** chunk id: 181940, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var i = n(64700),
    s = n(942975);

function l(e, t) {
    let [n, l] = i.useState(!1), [a, r] = i.useState(void 0);
    return {
        isLoading: n,
        error: a,
        onToggle: i.useCallback(n => {
            if (null == t) return Promise.resolve();
            let i = n ? s.Qh : s.pz;
            return l(!0), r(void 0), i(e, t.skuId).catch(e => {
                throw r(e.body?.message ?? void 0), e
            }).finally(() => {
                l(!1)
            })
        }, [e, t])
    }
}