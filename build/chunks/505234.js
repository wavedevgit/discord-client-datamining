/** chunk id: 505234, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => l
});
var i = s(627968);
s(64700);
var n = s(621466),
    r = s(442433);
let l = e => {
    let {
        facepileRef: t,
        goToThread: l,
        channel: a
    } = e;
    return {
        handleLeftClick: e => {
            var s;
            (0, n.vq)(e.target) && (null == (s = t.current) ? void 0 : s.contains(e.target)) || l(a, e.shiftKey)
        },
        handleRightClick: e => (0, r.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([s.e("78441"), s.e("32885")]).then(s.bind(s, 44536));
            return t => {
                var s, n;
                return (0, i.jsx)(e, (s = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(s);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(s, e).enumerable
                        }))), i.forEach(function(t) {
                            var i;
                            i = s[t], t in e ? Object.defineProperty(e, t, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = i
                        })
                    }
                    return e
                }({}, t), n = n = {
                    channel: a
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var s = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        s.push.apply(s, i)
                    }
                    return s
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(n, e))
                }), s))
            }
        })
    }
}