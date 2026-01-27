/** Chunk was on 39048 **/
/** chunk id: 194362, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => l
});
var r = n(104798),
    i = n(652215);
async function l(e) {
    let t = r.A.generateNonce();
    try {
        let n = await r.A.createHandoffToken(t);
        return i.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e)
    } catch (t) {
        return "//".concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, "/").concat(e)
    }
}