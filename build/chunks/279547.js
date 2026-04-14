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
    } = e, [s, r] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!s) {
                r(!0);
                try {
                    await l(), n?.()
                } catch (n) {
                    let e = new a.LG(n);
                    t?.(e)
                } finally {
                    r(!1)
                }
            }
        }, [s, t, n, l]),
        isReportFalsePositiveLoading: s
    }
}