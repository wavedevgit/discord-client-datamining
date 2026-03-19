/** chunk id: 279547 params = (module,exports,require) **/
n.d(t, {
    d: () => a
});
var i = n(64700),
    r = n(198982);

function a(e) {
    let {
        onError: t,
        onSuccess: n,
        report: a
    } = e, [l, s] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                s(!0);
                try {
                    await a(), n?.()
                } catch (n) {
                    let e = new r.LG(n);
                    t?.(e)
                } finally {
                    s(!1)
                }
            }
        }, [l, t, n, a]),
        isReportFalsePositiveLoading: l
    }
}