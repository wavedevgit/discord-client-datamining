/** Chunk was on web.js **/
/** chunk id: 661439, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => c
});
var r = n(562465),
    i = n(73153),
    a = n(90165),
    o = n(927813),
    s = n(652215);
let l = 6 * o.A.Millis.HOUR;
async function c() {
    let e = a.A.lastFetched;
    if (!(null != e && Date.now() - e < l)) try {
        let e = await r.Bo.get({
            url: s.Rsh.USER_ACTIVITY_STATISTICS,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        i.h.dispatch({
            type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
            statistics: e.body
        })
    } catch (e) {
        return e
    }
}