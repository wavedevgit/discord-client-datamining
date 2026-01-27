/** Chunk was on 86142 **/
/** chunk id: 341371, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r, i, s = n(311907),
    l = n(73153);
let a = !1,
    o = null,
    c = null;
class d extends(i = s.Ay.Store) {
    getState() {
        return {
            verifySuccess: a,
            verifyErrors: o,
            redirectGuildId: c
        }
    }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
    value: "HubEmailVerificationStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : d[r] = "HubEmailVerificationStore";
let u = new d(l.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function(e) {
        let {
            guildId: t
        } = e;
        a = !0, o = null, c = t
    },
    HUB_VERIFY_EMAIL_FAILURE: function(e) {
        let {
            errors: t
        } = e;
        a = !1, o = t
    }
})