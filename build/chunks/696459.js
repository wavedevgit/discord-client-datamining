/** Chunk was on web.js **/
/** chunk id: 696459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(562465),
    i = n(73153),
    a = n(29599),
    o = n(652215);
let s = {
    search(e, t) {
        null == a.A.getResults(e, t) && (i.h.dispatch({
            type: "INTEGRATION_QUERY",
            integration: e,
            query: t
        }), r.Bo.get({
            url: o.Rsh.INTEGRATION_SEARCH("tenor"),
            query: {
                q: t
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(n => {
            i.h.dispatch({
                type: "INTEGRATION_QUERY_SUCCESS",
                integration: e,
                query: t,
                results: n.body
            })
        }, () => i.h.dispatch({
            type: "INTEGRATION_QUERY_FAILURE",
            integration: e,
            query: t
        })))
    }
}