/** Chunk was on web.js **/
/** chunk id: 866485, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    R: () => l
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    o = n(736843),
    s = n(945477);

function l(e) {
    let {
        step: t,
        renderStep: n
    } = e;
    return function(e) {
        let {
            paymentModalStepProps: i,
            unifiedStepDefinition: l
        } = e, {
            renderModalProps: c,
            sharedCheckoutContext: u
        } = (0, o.jP)();
        if (a()(null != l, "Step config for ".concat(t, " is not set")), (0, s.O)(l)) {
            let e = l.StepController;
            return (0, r.jsx)(e, {
                renderStep: n,
                paymentModalStepProps: i,
                sharedCheckoutContext: u,
                renderModalProps: c
            })
        }
        return null
    }
}