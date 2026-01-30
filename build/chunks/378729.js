/** chunk id: 378729, original params: e,t,i (module,exports,require) **/
i.d(t, {
    e8: () => r
});
var n = i(600975),
    l = i(428835);
let s = (0, n.C)({
        id: "2025-11_game_update_notification",
        kind: "user",
        label: "Game Update Notification",
        defaultConfig: {
            showToggle: !1
        },
        treatments: [{
            id: 1,
            label: "User can receive game update notifications. Show settings toggle.",
            config: {
                showToggle: !0
            }
        }]
    }),
    r = e => {
        var t, i;
        return (0, l.u5)(s, (t = function(e) {
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
        }({}, e), i = i = {
            autoTrackExposure: !1
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