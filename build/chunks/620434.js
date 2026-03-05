/** chunk id: 620434 params = (module,exports,require) **/
"use strict";
n.d(t, {
    c: () => c
});
var a = n(64700),
    l = n(311907),
    s = n(688810),
    r = n(622543),
    i = n(808247),
    o = n(594832);

function c(e) {
    let {
        currentUser: t,
        skuId: n,
        onAddSuccess: c,
        onRemoveSuccess: d,
        onError: u
    } = e, {
        analyticsLocations: _
    } = (0, s.Ay)(), m = (0, l.bG)([r.A], () => null != t ? r.A.getFirstWishlistId(t.id) : null), h = (0, o.rJ)(m, n), [p, b] = a.useState(null), [f, g] = a.useState(!1), A = null !== p ? p : h;
    a.useEffect(() => {
        b(null), g(!1)
    }, [n]);
    let C = a.useCallback(async () => {
        if (null != t && !f)
            if (g(!0), A && null != m) {
                b(!1);
                try {
                    await i.A.removeSkuFromWishlist(m, n, _), d?.()
                } catch (e) {
                    u?.(e)
                } finally {
                    b(null), g(!1)
                }
            } else {
                b(!0);
                try {
                    await i.A.addSkuToWishlist(n, _), c?.()
                } catch (e) {
                    u?.(e)
                } finally {
                    b(null), g(!1)
                }
            }
    }, [t, f, A, m, n, _, c, d, u]);
    return {
        isWishlisted: A,
        isBusy: f,
        handleToggle: C
    }
}