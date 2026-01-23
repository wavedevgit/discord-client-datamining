/** Chunk was on 97492 **/
/** chunk id: 494208, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(323073),
    a = n(58736),
    o = n(707539),
    c = n(617011),
    u = n(985018),
    d = n(498654);

function p(e) {
    let {
        channel: t
    } = e, [n, p] = l.useState(!1), h = l.useRef(null), f = (0, s.vL)(t), g = l.useCallback(() => {
        p(!1)
    }, []), m = l.useCallback(() => {
        n || (0, o.D3)("Popout"), p(!n)
    }, [n]);
    return (0, r.jsx)(i.YNO, {
        targetElementRef: h,
        animation: i.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: g,
        renderPopout: function() {
            return (0, r.jsx)(i.lGe, {
                children: (0, r.jsx)(c.A, {
                    className: d.T,
                    channel: t,
                    onClose: g,
                    context: "popout"
                })
            })
        },
        clickTrap: !0,
        children: (e, t) => {
            var n, l;
            let {
                isShown: s
            } = t;
            return (0, r.jsx)(a.In, (n = function(e) {
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
            }({}, e), l = l = {
                ref: h,
                className: d.Kk,
                onClick: m,
                icon: i.ysw,
                "aria-label": u.intl.string(u.t.B2panI),
                tooltip: s ? null : u.intl.string(u.t.B2panI),
                disabled: f,
                selected: s
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
        }
    })
}