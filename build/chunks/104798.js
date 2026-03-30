/** chunk id: 104798 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(835245),
    l = n(562465),
    i = n(652215);
let r = {
    generateNonce: function() {
        return (0, a.A)()
    },
    createHandoffToken: async function(e) {
        let {
            body: {
                handoff_token: t
            }
        } = await l.Bo.post({
            url: i.Rsh.HANDOFF,
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