/** chunk id: 615715, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => R
}), n(896048);
var l = n(627968),
    s = n(64700),
    a = n(311907),
    i = n(181658),
    o = n(557722),
    r = n(515258),
    u = n(870570),
    E = n(287809),
    c = n(446868),
    d = n(662758),
    h = n(985018);
let R = s.forwardRef(function(e, t) {
    let {
        onAddedPhone: n,
        onClose: R,
        transitionState: I,
        reason: p,
        layerContext: _
    } = e, f = (0, a.bG)([E.default], () => E.default.getCurrentUser()), g = (0, a.bG)([u.A], () => u.A.getAction()), [C, m] = s.useState(null), [b, A] = s.useState(null), [y, F] = s.useState(null), [v, P] = s.useState(!1), x = s.useCallback(async e => {
        P(!0);
        try {
            c.A.isPhoneReverification(f, g) ? await o.A.beginReverifyPhone(e, p) : await o.A.beginAddPhone(e, p), F(null), m(e)
        } catch (e) {
            F(new i.A(e))
        }
        P(!1)
    }, [f, p, g]), V = s.useCallback(async e => {
        if (null != C && null != f) {
            P(!0);
            try {
                let {
                    token: t
                } = await o.A.verifyPhone(C, e);
                F(null), A(t)
            } catch (e) {
                F(new i.A(e))
            }
            P(!1)
        }
    }, [f, C]), B = s.useCallback(async e => {
        null != b && (c.A.isPhoneReverification(f, g) ? await o.A.reverifyPhone(b, e, p) : await o.A.addPhone(b, e, p), null == n || n(), R())
    }, [n, R, b, p, f, g]);
    return null != b ? (0, l.jsx)(d.default, {
        onClose: R,
        transitionState: I,
        title: h.intl.string(h.t.ZtCDc2),
        handleSubmit: B
    }) : (0, l.jsx)(r.default, {
        onClose: R,
        transitionState: I,
        error: null == y ? void 0 : y.getAnyErrorMessage(),
        working: v,
        validPhone: null != C,
        onAddPhone: x,
        onVerifyPhone: V,
        layerContext: _
    })
})