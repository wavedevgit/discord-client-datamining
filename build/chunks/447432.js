/** chunk id: 447432, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    M: () => o
});
var r = n(783786),
    i = n(723906),
    a = n(803082);

function o(e) {
    let {
        description: t,
        errorMessage: n,
        isInvalid: o,
        validationState: s
    } = e, {
        labelProps: l,
        fieldProps: c
    } = (0, r.M)(e), u = (0, i.X1)([!!t, !!n, o, s]), d = (0, i.X1)([!!t, !!n, o, s]);
    return {
        labelProps: l,
        fieldProps: c = (0, a.v)(c, {
            "aria-describedby": [u, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }),
        descriptionProps: {
            id: u
        },
        errorMessageProps: {
            id: d
        }
    }
}