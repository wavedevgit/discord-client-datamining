/** chunk id: 621956, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E: () => o
});
var r = n(627968),
    l = n(64700),
    i = n(744682);
let a = {
        all: {
            name: "all",
            start: 0,
            duration: 66
        }
    },
    o = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            s = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all")
            }, []),
            c = l.useCallback(t => {
                var l, o;
                return (0, r.jsx)(i.P, (l = function(e) {
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
                }({}, t), o = o = {
                    src: () => n.e("5506").then(n.t.bind(n, 429286, 19)),
                    ref: e,
                    markers: a
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(o)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
                }), l))
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: o,
                onMouseLeave: s
            },
            play: t,
            getDuration: l.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration()
            }, []),
            getCurrentFrame: l.useCallback(() => {
                var t, n;
                return null != (t = null == (n = e.current) ? void 0 : n.getCurrentFrame()) ? t : null
            }, []),
            Component: c
        }
    }