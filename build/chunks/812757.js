/** Chunk was on 28979 **/
/** chunk id: 812757, original params: t,e,i (module,exports,require) **/
i.d(e, {
    t: () => c
});
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    u = i(311907),
    a = i(397927),
    o = i(97260),
    T = i(117178),
    d = i(419954),
    A = i(532624),
    S = i(780964),
    E = i(652215),
    g = i(985018),
    _ = i(280973);
let c = (0, d.E2)(S.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
    Component: () => {
        let t = (0, u.bG)([A.Ay], () => A.Ay.getKeybindForAction(E.hCu.SAVE_CLIP, !0));
        r()(null != t, "Save clip keybind unset");
        let e = l.useCallback(e => {
            var i, n;
            o.A.setKeybind((i = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.forEach(function(e) {
                        var n;
                        n = i[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    })
                }
                return t
            }({}, t), n = n = {
                shortcut: e
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    i.push.apply(i, n)
                }
                return i
            })(Object(n)).forEach(function(t) {
                Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(n, t))
            }), i))
        }, [t]);
        return (0, n.jsx)(a.D0$, {
            label: g.intl.string(g.t.pf54EU),
            description: g.intl.string(g.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: _.g,
                children: (0, n.jsx)(T.A, {
                    defaultValue: t.shortcut,
                    onChange: e
                })
            })
        })
    }
})