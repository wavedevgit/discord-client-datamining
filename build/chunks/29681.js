/** chunk id: 29681, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    l = n(311907),
    s = n(397927),
    c = n(97260),
    o = n(117178),
    u = n(775121),
    b = n(532624),
    d = n(350535),
    p = n(980504),
    O = n(652215),
    y = n(985018),
    f = n(316173);

function g(e) {
    var t;
    let {
        transitionState: n,
        onClose: g
    } = e, h = (0, l.bG)([b.Ay], () => b.Ay.getKeybindForAction(O.hCu.SOUNDBOARD_HOLD)), [j, m] = i.useState(null != (t = null == h ? void 0 : h.shortcut) ? t : []), x = i.useCallback(() => {
        if (0 === j.length) return null != h && c.A.deleteKeybind(h.id), g();
        if (null == h) c.A.addKeybind({
            action: O.hCu.SOUNDBOARD_HOLD,
            shortcut: j,
            enabled: !0,
            params: {}
        });
        else {
            var e, t;
            c.A.setKeybind((e = function(e) {
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
            }({}, h), t = t = {
                shortcut: j
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e))
        }
        g()
    }, [h, g, j]);
    i.useEffect(() => (u.A.disable(), () => {
        u.A.enable()
    }), []);
    let v = i.useMemo(() => [{
        text: y.intl.string(y.t["ETE/oC"]),
        onClick: g,
        variant: "secondary"
    }, {
        text: y.intl.string(y.t["R3BPH+"]),
        onClick: x,
        variant: "primary"
    }], [g, x]);
    return (0, r.jsxs)(a.Modal, {
        transitionState: n,
        title: y.intl.string(y.t["0Osu3x"]),
        actions: v,
        onClose: g,
        children: [(0, r.jsx)(s.po8, {
            className: f.$e,
            messageType: s.YCn.WARNING,
            children: y.intl.string(y.t["O2v/eP"])
        }), (0, r.jsx)(s.Heading, {
            className: f._5,
            variant: "eyebrow",
            color: "text-default",
            children: y.intl.string(y.t.UUpAD6)
        }), (0, r.jsx)(s.Text, {
            className: f.XI,
            variant: "text-md/normal",
            children: y.intl.string(y.t["1xFbP/"])
        }), (0, r.jsx)(s.Text, {
            className: f.lf,
            variant: "text-sm/normal",
            children: y.intl.string(y.t.laNlTl)
        }), (0, r.jsx)(s.Heading, {
            className: f._5,
            variant: "eyebrow",
            color: "text-default",
            children: y.intl.string(y.t["1La4tC"])
        }), (0, r.jsx)(o.A, {
            defaultValue: j,
            onChange: m
        }), (0, r.jsx)(s.MzZ, {
            className: f.WA,
            onClick: () => m((0, d.OH)(p.XF)),
            children: y.intl.string(y.t["s7+2rQ"])
        })]
    })
}