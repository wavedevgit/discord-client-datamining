/** Chunk was on 87557 **/
/** chunk id: 787301, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a, l, r = n(311907),
    i = n(73153);
let s = null,
    o = !1;
class c extends(l = r.Ay.Store) {
    get loading() {
        return o
    }
    get methods() {
        return s
    }
}(a = "displayName") in c ? Object.defineProperty(c, a, {
    value: "AgeVerificationStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : c[a] = "AgeVerificationStore";
let d = new c(i.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function() {
        o = !0
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function(e) {
        let {
            methods: t
        } = e;
        s = t, o = !1
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function() {
        o = !1
    }
})