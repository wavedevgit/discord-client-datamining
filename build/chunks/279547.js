/** chunk id: 279547 params = (module,exports,require) **/
n.d(t, {
    d: () => s
});
var i = n(64700),
    l = n(198982);

function s(e) {
    let {
        onError: t,
        onSuccess: n,
        report: s
    } = e, [r, a] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!r) {
                a(!0);
                try {
                    await s(), n?.()
                } catch (n) {
                    let e = new l.LG(n);
                    t?.(e)
                } finally {
                    a(!1)
                }
            }
        }, [r, t, n, s]),
        isReportFalsePositiveLoading: r
    }
}