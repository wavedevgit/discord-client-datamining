/** chunk id: 996759, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => o
});
var r = n(562465),
    i = n(73153),
    a = n(652215);

function o(e) {
    return i.h.dispatch({
        type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING",
        applicationId: e
    }), r.Bo.get({
        url: a.Rsh.STORE_LAYOUT(e),
        rejectWithError: !0
    }).then(t => (i.h.dispatch({
        type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
        applicationId: e,
        layout: t.body
    }), t.body)).catch(() => {
        i.h.dispatch({
            type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
            applicationId: e
        })
    })
}