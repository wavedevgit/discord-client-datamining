/** Chunk was on 76850 **/
/** chunk id: 674272, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
});
var n = r(627968);
r(64700);
var i = r(397927);

function o(e) {
    let {
        source: t,
        onClose: o
    } = e;
    (0, i.mMO)(async () => {
        let {
            default: e
        } = await r.e("61376").then(r.bind(r, 999235));
        return r => {
            var i, o;
            return (0, n.jsx)(e, (i = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, r), o = o = {
                source: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
            }), i))
        }
    }, {
        onCloseCallback: o,
        backdropStyle: i.F2Z.BLUR
    })
}