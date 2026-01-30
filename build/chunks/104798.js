/** chunk id: 104798, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(65821);
var r = n(835245),
    i = n(562465),
    s = n(652215);
let l = {
    generateNonce: function() {
        return (0, r.A)()
    },
    createHandoffToken: async function(e) {
        let {
            body: {
                handoff_token: t
            }
        } = await i.Bo.post({
            url: s.Rsh.HANDOFF,
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