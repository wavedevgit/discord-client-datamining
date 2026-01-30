/** chunk id: 331611, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => s
});
var r = n(627968),
    i = n(64700),
    a = n(459793),
    o = n(156312);
let s = e => {
    let {
        paymentModalStepProps: t,
        defaultStep: n
    } = e, s = (0, i.useRef)(!1), {
        blockedPayments: l
    } = (0, o.P5)(), {
        handleStepChange: c,
        handleClose: u
    } = t;
    return ((0, i.useEffect)(() => {
        l || s.current || (c(n), s.current = !0)
    }, [l, c, n]), l) ? (0, r.jsx)(a.oO, {
        onClose: u
    }) : null
}