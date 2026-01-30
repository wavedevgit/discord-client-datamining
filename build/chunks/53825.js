/** chunk id: 53825, original params: e,t,i (module,exports,require) **/
i.d(t, {
    N: () => I
});
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(311907),
    u = i(397927),
    o = i(97260),
    d = i(117178),
    T = i(734066),
    c = i(419954),
    A = i(532624),
    S = i(780964),
    _ = i(652215),
    E = i(985018),
    g = i(280973);
let I = (0, c.E2)(S.X.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [E.intl.string(E.t["0U/hj7"]), E.intl.string(E.t["5zxkdo"])],
    usePredicate: T.BW,
    Component: () => {
        let e = (0, a.bG)([A.Ay], () => A.Ay.getKeybindForAction(_.hCu.SAVE_CLIP, !0)),
            t = (0, a.bG)([A.Ay], () => A.Ay.getKeybindForAction(_.hCu.SAVE_SCREENSHOT, !0));
        r()(null != e, "Save clip keybind unset"), r()(null != t, "Save screenshot keybind unset");
        let i = l.useCallback(e => {
            var i, n;
            o.A.setKeybind((i = function(e) {
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
            }({}, t), n = n = {
                shortcut: e
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    i.push.apply(i, n)
                }
                return i
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e))
            }), i))
        }, [t]);
        return (0, n.jsx)(u.D0$, {
            label: E.intl.string(E.t["0U/hj7"]),
            description: E.intl.string(E.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: g.g,
                children: (0, n.jsx)(d.A, {
                    defaultValue: t.shortcut,
                    onChange: i
                })
            })
        })
    }
})