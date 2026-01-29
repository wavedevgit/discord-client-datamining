/** Chunk was on 4670 **/
/** chunk id: 812757, original params: e,t,i (module,exports,require) **/
i.d(t, {
    t: () => g
});
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(311907),
    u = i(397927),
    o = i(97260),
    d = i(117178),
    T = i(419954),
    c = i(532624),
    A = i(780964),
    S = i(652215),
    _ = i(985018),
    E = i(280973);
let g = (0, T.E2)(A.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [_.intl.string(_.t.pf54EU), _.intl.string(_.t["QyB/jK"])],
    Component: () => {
        let e = (0, a.bG)([c.Ay], () => c.Ay.getKeybindForAction(S.hCu.SAVE_CLIP, !0));
        r()(null != e, "Save clip keybind unset");
        let t = l.useCallback(t => {
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
            }({}, e), n = n = {
                shortcut: t
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
        }, [e]);
        return (0, n.jsx)(u.D0$, {
            label: _.intl.string(_.t.pf54EU),
            description: _.intl.string(_.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: E.g,
                children: (0, n.jsx)(d.A, {
                    defaultValue: e.shortcut,
                    onChange: t
                })
            })
        })
    }
})