/** Chunk was on 4670 **/
/** chunk id: 464895, original params: e,t,i (module,exports,require) **/
i.d(t, {
    X: () => o
});
var n = i(311907),
    l = i(274372),
    s = i(399925),
    r = i(419954),
    a = i(780964),
    u = i(985018);
let o = (0, r.zD)(a.X.CLIPS_ENABLE_GAME_SIGNALS, {
    useTitle: () => u.intl.string(u.t.iV6KcI),
    useSubtitle: () => u.intl.string(u.t["dJ2tX+"]),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipSignals.enableGameSignals),
    setValue: e => {
        var t, i;
        let n = l.A.getSettings().clipSignals;
        s.PW((t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = i[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, n), i = i = {
            enableGameSignals: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                i.push.apply(i, n)
            }
            return i
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
    }
})