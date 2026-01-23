/** Chunk was on 5705 **/
/** chunk id: 465105, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => l
}), e(896048);
var a = e(64700),
    i = e(198982);

function l(t) {
    let {
        onSubmit: n,
        onClose: e
    } = t, [l, r] = a.useState(!1), [s, c] = a.useState(null), o = a.useCallback(async () => {
        if (!l) {
            r(!0), c(null);
            try {
                await n(), e()
            } catch (t) {
                c(new i.LG(t).getAnyErrorMessage()), r(!1)
            }
        }
    }, [e, n, l]);
    return {
        submitting: l,
        errorMessage: s,
        onSubmit: o
    }
}