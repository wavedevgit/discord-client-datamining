/** chunk id: 229659, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(502671),
    a = n(827734),
    o = n(397927);

function s(e) {
    let t = (0, l.useRef)(null),
        [n, s] = (0, l.useState)(null),
        [c] = (0, l.useState)(() => new i.TimelineDataSeries),
        u = (0, o.rdh)(a.A.colors.BACKGROUND_BASE_LOW).hsl(),
        d = (0, o.rdh)(a.A.colors.TEXT_DEFAULT).hsl(),
        f = (0, o.rdh)(a.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        p = (0, o.rdh)(a.A.unsafe_rawColors.BRAND_500).hsl();
    (0, l.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let r = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
        r.backgroundColor = u, r.textColor = d, r.gridColor = f, r.timeOptions = {
            timeStyle: "short"
        }, r.fontFamily = "gg sans", r.fontSize = 11, c.setColor(p), r.addDataSeries(c), r.updateEndDate(), s(r)
    }, [t, u, p, f, d, c]);
    let g = e.converter,
        m = null != g ? e.dataPoints.map(e => {
            var t, n;
            return t = function(e) {
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
            }({}, e), n = n = {
                value: g(e.value)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
        }) : e.dataPoints;
    c.setPoints(m), null == n || n.updateEndDate();
    let _ = {
        width: e.width,
        height: e.height
    };
    return (0, r.jsx)("canvas", {
        style: _,
        width: e.width,
        height: e.height,
        ref: t
    }, "canvas")
}