/** chunk id: 279547 params = (module,exports,require) **/
n.d(e, {
    d: () => s
});
var i = n(64700),
    a = n(198982);

function s(t) {
    let {
        onError: e,
        onSuccess: n,
        report: s
    } = t, [l, r] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                r(!0);
                try {
                    await s(), n?.()
                } catch (n) {
                    let t = new a.LG(n);
                    e?.(t)
                } finally {
                    r(!1)
                }
            }
        }, [l, e, n, s]),
        isReportFalsePositiveLoading: l
    }
}