/** Chunk was on 34078 **/
/** chunk id: 628387, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Pd: () => s,
    Vl: () => a
}), r(747238);
var n, s = ((n = {}).PHONE = "phone", n.EMAIL = "email", n);
let i = /^[-() \d]+$/;

function a(e, t) {
    return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && i.test(t)
}