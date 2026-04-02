/** chunk id: 279547 params = (module,exports,require) **/
n.d(t, {
    d: () => r
});
var i = n(64700),
    a = n(198982);

function r(e) {
    let {
        onError: t,
        onSuccess: n,
        report: r
    } = e, [l, s] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                s(!0);
                try {
                    await r(), n?.()
                } catch (n) {
                    let e = new a.LG(n);
                    t?.(e)
                } finally {
                    s(!1)
                }
            }
        }, [l, t, n, r]),
        isReportFalsePositiveLoading: l
    }
}