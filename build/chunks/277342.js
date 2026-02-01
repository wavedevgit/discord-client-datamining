/** chunk id: 277342, original params: e,t,r (module,exports,require) **/
r.d(t, {
    q: () => s
});
var n = r(64700),
    o = r(523875),
    i = r(270737),
    l = r(397927),
    a = r(267102),
    u = r(494783),
    c = r(652215);

function s(e) {
    let t = (0, a.Us)(),
        {
            activeVoice: r
        } = (0, u.f)(),
        s = null != r,
        b = e ? "unmute" : "mute",
        d = (0, i.V)(b),
        p = (0, o.L)(b),
        O = s ? d : p,
        f = t === c.BRT.POPOUT ? s ? e ? l.Ts3 : l.A4$ : e ? l.z0P : l.cNw : O.Component;
    return n.useMemo(() => {
        var e, t;
        return e = function(e) {
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
        }({}, O), t = t = {
            Component: f
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
    }, [O, f])
}