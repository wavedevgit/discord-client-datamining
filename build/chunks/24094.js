/** chunk id: 24094, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => f
}), n(896048), n(733351);
var l = n(627968),
    r = n(64700),
    i = n(296489),
    a = n.n(i),
    o = n(820284),
    s = n(198982),
    c = n(513461),
    u = n(241499),
    d = n(242273),
    p = n(652215),
    b = n(985018);
let f = function(e) {
    var t, n;
    let {
        field: i,
        onSave: f,
        onClose: g,
        guild: x
    } = e, [h, v] = r.useState((null == i ? void 0 : i.values) != null ? null == i ? void 0 : i.values.map(e => ({
        id: a()(),
        value: e
    })) : [{
        id: a()(),
        value: ""
    }]), [y, m] = r.useState(null), j = async () => {
        null != y && m(null);
        let e = h.map(e => e.value.trim()).filter(e => "" !== e);
        if (0 === e.length) return void m(b.intl.string(b.t.TCHkcd));
        let t = {
            field_type: c.rX.TERMS,
            label: b.intl.string(b.t["9suSIA"]),
            values: e,
            required: !0
        };
        try {
            await f(t), g()
        } catch (e) {
            m(new s.LG(e).getAnyErrorMessage())
        }
    };
    return (0, l.jsx)(o.A, {
        page: p.liQ.GUILD_RULES_CREATE_MODAL,
        children: (0, l.jsx)(d.A, (t = function(e) {
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
        }({}, e), n = n = {
            errorText: y,
            title: b.intl.string(b.t["3pz9t3"]),
            onCancel: g,
            onConfirm: j,
            children: (0, l.jsx)(u._, {
                guild: x,
                rules: h,
                setRules: v
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    })
}