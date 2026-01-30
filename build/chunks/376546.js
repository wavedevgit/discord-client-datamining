/** chunk id: 376546, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    M: () => l
});
var r = n(150724),
    i = n(290424),
    a = n(803082),
    o = n(447432),
    s = n(744493);

function l(e, t) {
    let {
        isDisabled: n,
        name: l,
        form: c,
        validationBehavior: u = "aria"
    } = e, {
        isInvalid: d,
        validationErrors: f,
        validationDetails: p
    } = t.displayValidation, {
        labelProps: _,
        fieldProps: h,
        descriptionProps: m,
        errorMessageProps: g
    } = (0, o.M)({
        ...e,
        labelElementType: "span",
        isInvalid: d,
        errorMessage: e.errorMessage || f
    });
    r.n.set(t, {
        name: l,
        form: c,
        descriptionId: m.id,
        errorMessageId: g.id,
        validationBehavior: u
    });
    let E = (0, i.$)(e, {
            labelable: !0
        }),
        {
            focusWithinProps: y
        } = (0, s.R)({
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        });
    return {
        groupProps: (0, a.v)(E, {
            role: "group",
            "aria-disabled": n || void 0,
            ...h,
            ...y
        }),
        labelProps: _,
        descriptionProps: m,
        errorMessageProps: g,
        isInvalid: d,
        validationErrors: f,
        validationDetails: p
    }
}