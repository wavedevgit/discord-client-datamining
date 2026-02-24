/** chunk id: 104798, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var i = n(835245),
    s = n(562465),
    r = n(652215);
let l = {
    generateNonce: function() {
        return (0, i.A)()
    },
    createHandoffToken: async function(e) {
        let {
            body: {
                handoff_token: t
            }
        } = await s.Bo.post({
            url: r.Rsh.HANDOFF,
            body: {
                key: e
            },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1
        });
        if (null != t) return t;
        throw Error("Missing handoff token!")
    }
}