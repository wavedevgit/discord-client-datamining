/** Chunk was on 99484 **/
/** chunk id: 26095, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var i = n(397927),
    o = n(73153);
let a = {
    open(e) {
        o.h.dispatch({
            type: "SAFETY_HUB_APPEAL_OPEN",
            classificationId: e
        }), (0, i.mMO)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("74327"), n.e("5482")]).then(n.bind(n, 355690));
            return n => (0, r.jsx)(t, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({
                classificationId: e
            }, n))
        })
    },
    close() {
        o.h.dispatch({
            type: "SAFETY_HUB_APPEAL_CLOSE"
        })
    }
}