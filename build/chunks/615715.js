/** Chunk was on web.js **/
/** chunk id: 615715, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(181658),
    o = n(557722),
    l = n(515258),
    c = n(870570),
    u = n(287809),
    d = n(446868),
    f = n(662758),
    p = n(985018);
let _ = i.forwardRef(function(e, t) {
    let {
        onAddedPhone: n,
        onClose: _,
        transitionState: h,
        reason: m,
        layerContext: g
    } = e, E = (0, a.bG)([u.default], () => u.default.getCurrentUser()), y = (0, a.bG)([c.A], () => c.A.getAction()), [b, O] = i.useState(null), [v, A] = i.useState(null), [I, S] = i.useState(null), [T, C] = i.useState(!1), N = i.useCallback(async e => {
        C(!0);
        try {
            d.A.isPhoneReverification(E, y) ? await o.A.beginReverifyPhone(e, m) : await o.A.beginAddPhone(e, m), S(null), O(e)
        } catch (e) {
            S(new s.A(e))
        }
        C(!1)
    }, [E, m, y]), w = i.useCallback(async e => {
        if (null != b && null != E) {
            C(!0);
            try {
                let {
                    token: t
                } = await o.A.verifyPhone(b, e);
                S(null), A(t)
            } catch (e) {
                S(new s.A(e))
            }
            C(!1)
        }
    }, [E, b]), R = i.useCallback(async e => {
        null != v && (d.A.isPhoneReverification(E, y) ? await o.A.reverifyPhone(v, e, m) : await o.A.addPhone(v, e, m), null == n || n(), _())
    }, [n, _, v, m, E, y]);
    return null != v ? (0, r.jsx)(f.default, {
        onClose: _,
        transitionState: h,
        title: p.intl.string(p.t.ZtCDc2),
        handleSubmit: R
    }) : (0, r.jsx)(l.default, {
        onClose: _,
        transitionState: h,
        error: null == I ? void 0 : I.getAnyErrorMessage(),
        working: T,
        validPhone: null != b,
        onAddPhone: N,
        onVerifyPhone: w,
        layerContext: g
    })
})