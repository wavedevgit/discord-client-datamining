/** chunk id: 279547, original params: e,t,n (module,exports,require) **/
n.d(t, {
    d: () => r
});
var i = n(64700),
    l = n(198982);

function r(e) {
    let {
        onError: t,
        onSuccess: n,
        report: r
    } = e, [a, s] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!a) {
                s(!0);
                try {
                    await r(), n?.()
                } catch (n) {
                    let e = new l.LG(n);
                    t?.(e)
                } finally {
                    s(!1)
                }
            }
        }, [a, t, n, r]),
        isReportFalsePositiveLoading: a
    }
}