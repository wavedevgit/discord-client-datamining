/** Chunk was on 96811 **/
/** chunk id: 429432, original params: e,t,r (module,exports,require) **/
r.d(t, {
    s: () => u
});
var n, i, l = r(311907),
    s = r(250105),
    a = r(217222),
    o = r(128319);
let c = {
        smarterSourceOrdering: !1
    },
    d = (0, s.Ay)({
        name: "2025-08-go-live-source-ordering",
        kind: "user",
        defaultConfig: c,
        variations: {
            1: (n = function(e) {
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
            }({}, c), i = i = {
                smarterSourceOrdering: !0
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
            }), n)
        }
    });

function u(e) {
    let {
        location: t
    } = e;
    return (0, l.bG)([a.A], () => (function(e) {
        let {
            location: t
        } = e, {
            isInHoldout: r
        } = o.p.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !0
        });
        return r ? d.definition.defaultConfig : d.getConfig({
            location: t
        })
    })({
        location: t
    }))
}