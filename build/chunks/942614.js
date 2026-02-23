/** chunk id: 942614, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => s,
    D: () => r
});
var i = n(73153);

function s(e) {
    i.h.wait(() => i.h.dispatch({
        type: "NUF_NEW_USER",
        newUserType: e
    }))
}

function r() {
    i.h.wait(() => i.h.dispatch({
        type: "NUF_COMPLETE"
    }))
}