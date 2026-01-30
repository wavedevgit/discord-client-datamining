/** Chunk was on 66009 **/
/** chunk id: 279547, original params: t,e,n (module,exports,require) **/
n.d(e, {
    d: () => a
}), n(896048);
var i = n(64700),
    l = n(198982);

function a(t) {
    let {
        onError: e,
        onSuccess: n,
        report: a
    } = t, [r, o] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!r) {
                o(!0);
                try {
                    await a(), null == n || n()
                } catch (n) {
                    let t = new l.LG(n);
                    null == e || e(t)
                } finally {
                    o(!1)
                }
            }
        }, [r, e, n, a]),
        isReportFalsePositiveLoading: r
    }
}