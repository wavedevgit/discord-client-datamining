/** Chunk was on web.js **/
/** chunk id: 646865, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => s,
    w: () => l
});
var r = n(73153),
    i = n(87001),
    a = n(574172),
    o = n(652215);

function s() {
    return !1
}
async function l(e, t) {
    let n, s = i.A.getWindowOpen(o.MLl.ACTIVITY_POPOUT);
    e && !s && r.h.wait(() => {
        r.h.dispatch({
            type: "ACTIVITY_POPOUT_WINDOW_OPEN"
        })
    });
    try {
        n = await t()
    } catch (e) {
        n = !1
    }
    return !n && e && a.close(o.MLl.ACTIVITY_POPOUT), n
}