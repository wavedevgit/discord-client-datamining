/** chunk id: 615715 params = (module,exports,require) **/
n.d(t, {
    default: () => h
});
var s = n(627968),
    a = n(64700),
    l = n(311907),
    i = n(181658),
    o = n(557722),
    r = n(515258),
    E = n(870570),
    d = n(287809),
    u = n(446868),
    c = n(662758),
    R = n(985018);
let h = a.forwardRef(function(e, t) {
    let {
        onAddedPhone: n,
        onClose: h,
        transitionState: I,
        reason: p,
        layerContext: _
    } = e, f = (0, l.bG)([d.default], () => d.default.getCurrentUser()), g = (0, l.bG)([E.A], () => E.A.getAction()), [C, A] = a.useState(null), [m, y] = a.useState(null), [F, b] = a.useState(null), [P, x] = a.useState(!1), B = a.useCallback(async e => {
        x(!0);
        try {
            u.A.isPhoneReverification(f, g) ? await o.A.beginReverifyPhone(e, p) : await o.A.beginAddPhone(e, p), b(null), A(e)
        } catch (e) {
            b(new i.A(e))
        }
        x(!1)
    }, [f, p, g]), D = a.useCallback(async e => {
        if (null != C && null != f) {
            x(!0);
            try {
                let {
                    token: t
                } = await o.A.verifyPhone(C, e);
                b(null), y(t)
            } catch (e) {
                b(new i.A(e))
            }
            x(!1)
        }
    }, [f, C]), V = a.useCallback(async e => {
        null != m && (u.A.isPhoneReverification(f, g) ? await o.A.reverifyPhone(m, e, p) : await o.A.addPhone(m, e, p), n?.(), h())
    }, [n, h, m, p, f, g]);
    return null != m ? (0, s.jsx)(c.default, {
        onClose: h,
        transitionState: I,
        title: R.intl.string(R.t.ZtCDc2),
        handleSubmit: V
    }) : (0, s.jsx)(r.default, {
        onClose: h,
        transitionState: I,
        error: F?.getAnyErrorMessage(),
        working: P,
        validPhone: null != C,
        onAddPhone: B,
        onVerifyPhone: D,
        layerContext: _
    })
})