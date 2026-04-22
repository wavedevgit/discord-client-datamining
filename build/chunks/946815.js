/** chunk id: 946815 params = (module,exports,require) **/
s.d(e, {
    default: () => E
});
var n = s(627968),
    i = s(64700),
    a = s(311907),
    l = s(397927),
    r = s(830215),
    o = s(631670),
    h = s(146634),
    d = s(836602),
    g = s(828578),
    p = s(870570),
    u = s(287809),
    c = s(446868),
    m = s(652215),
    C = s(985018);
let E = t => {
    let {
        transitionState: e,
        onClose: s
    } = t, {
        formState: E,
        errors: f
    } = (0, a.cf)([d.A], () => ({
        formState: d.A.getFormState(),
        errors: d.A.getErrors()
    })), y = (0, a.bG)([u.default], () => u.default.getCurrentUser()), k = (0, a.bG)([p.A], () => p.A.getAction()), A = !c.A.isEmailReverification(k), [R, S] = i.useState(!0), b = E === m.XlH.SUBMITTING;

    function v(t) {
        return f?.[t]?.[0] ?? ""
    }
    let w = v("email"),
        P = v("password");
    return (0, n.jsx)(h.A, {
        transitionState: e,
        email: y?.email,
        emailError: w,
        passwordError: P,
        submitting: b,
        canResend: R && !b && y?.email != null && 0 === w.length && 0 === P.length,
        canChange: A,
        onChangeEmailClick: function() {
            S(!1)
        },
        onVerify: function(t, e) {
            (0, o._L)({
                email: t,
                password: e
            }).then(t => {
                t?.ok || (t?.body?.username != null ? (0, g.E)() : 0 === P.length && 0 === w.length && (0, l.showToast)((0, l.createToast)(C.intl.string(C.t.R0RpRX), l.ToastType.FAILURE)))
            }), S(!0)
        },
        onResend: function() {
            r.A.verifyResend()
        },
        onClose: s
    })
}