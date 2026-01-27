/** Chunk was on web.js **/
/** chunk id: 618651, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => o
});
var r = n(110259),
    i = n(861638),
    a = n(183636);

function o() {
    let e = (0, i.Vc)(),
        t = (0, r.getSuperProperties)(),
        n = {},
        o = null == e ? void 0 : e.uuid;
    o !== (null == t ? void 0 : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = o);
    let s = a.A.getState();
    s !== (null == t ? void 0 : t.client_app_state) && (n.client_app_state = s), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n)
}