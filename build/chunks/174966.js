/** chunk id: 174966, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    o = n(931991),
    u = n(698441),
    a = n(508654),
    c = n(652215),
    s = n(985018);

function d(e, t, d) {
    var g;
    let {
        canManageGuildEvent: E
    } = (0, o.nr)(null != d ? d : t), f = (0, r.bG)([u.Ay], () => u.Ay.getGuildScheduledEvent(e), [e]), A = E(f), y = null != (0, a.Qs)(null != (g = null == d ? void 0 : d.id) ? g : c.dJq), p = null != f && (0, u.Fd)(f);
    return !A || p || y ? null : (0, l.jsx)(i.Drp, {
        id: s.intl.string(s.t.cK1GGY),
        label: s.intl.string(s.t.cK1GGY),
        action: function() {
            null != f && (0, i.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("77223"), n.e("5784")]).then(n.bind(n, 199226));
                return t => {
                    var n, r;
                    return (0, l.jsx)(e, (n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), l.forEach(function(t) {
                                var l;
                                l = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: l,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = l
                            })
                        }
                        return e
                    }({}, t), r = r = {
                        event: f
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, l)
                        }
                        return n
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }), n))
                }
            })
        }
    })
}