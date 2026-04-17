/** chunk id: 279547 params = (module,exports,require) **/
n.d(t, {
    d: () => l
});
var i = n(64700),
    a = n(198982);

function l(e) {
    let {
        onError: t,
        onSuccess: n,
        report: l
    } = e, [r, s] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!r) {
                s(!0);
                try {
                    await l(), n?.()
                } catch (n) {
                    let e = new a.LG(n);
                    t?.(e)
                } finally {
                    s(!1)
                }
            }
        }, [r, t, n, l]),
        isReportFalsePositiveLoading: r
    }
}