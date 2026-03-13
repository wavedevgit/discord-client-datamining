/** chunk id: 965407 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153),
    r = n(381941);
let a = {};
class s extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return a[e]
    }
}
let o = new s(l.h, {
    MESSAGE_CREATE: function(e) {
        let {
            message: t,
            sendMessageOptions: n
        } = e;
        null != n && (a[t.id] = {
            ...n,
            location: n.location ?? r.Hx.OTHER
        }), null != t.nonce && t.nonce in a && delete a[t.nonce]
    }
})