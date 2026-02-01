/** chunk id: 53825, original params: t,e,i (module,exports,require) **/
i.d(e, {
    N: () => I
});
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    u = i(311907),
    a = i(397927),
    o = i(97260),
    d = i(117178),
    T = i(734066),
    A = i(419954),
    S = i(532624),
    c = i(780964),
    E = i(652215),
    g = i(985018),
    _ = i(280973);
let I = (0, A.E2)(c.X.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [g.intl.string(g.t["0U/hj7"]), g.intl.string(g.t["5zxkdo"])],
    usePredicate: T.BW,
    Component: () => {
        let t = (0, u.bG)([S.Ay], () => S.Ay.getKeybindForAction(E.hCu.SAVE_CLIP, !0)),
            e = (0, u.bG)([S.Ay], () => S.Ay.getKeybindForAction(E.hCu.SAVE_SCREENSHOT, !0));
        r()(null != t, "Save clip keybind unset"), r()(null != e, "Save screenshot keybind unset");
        let i = l.useCallback(t => {
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
            }({}, e), n = n = {
                shortcut: t
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
        }, [e]);
        return (0, n.jsx)(a.D0$, {
            label: g.intl.string(g.t["0U/hj7"]),
            description: g.intl.string(g.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: _.g,
                children: (0, n.jsx)(d.A, {
                    defaultValue: e.shortcut,
                    onChange: i
                })
            })
        })
    }
})