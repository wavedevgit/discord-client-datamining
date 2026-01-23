/** Chunk was on 32435 **/
/** chunk id: 24094, original params: t,e,r (module,exports,require) **/
r.d(e, {
    default: () => _
}), r(896048), r(733351);
var n = r(627968),
    a = r(64700),
    i = r(296489),
    l = r.n(i),
    o = r(820284),
    c = r(198982),
    s = r(513461),
    u = r(241499),
    b = r(242273),
    d = r(652215),
    p = r(985018);
let _ = function(t) {
    var e, r;
    let {
        field: i,
        onSave: _,
        onClose: y,
        guild: g
    } = t, [f, O] = a.useState((null == i ? void 0 : i.values) != null ? null == i ? void 0 : i.values.map(t => ({
        id: l()(),
        value: t
    })) : [{
        id: l()(),
        value: ""
    }]), [v, j] = a.useState(null), m = async () => {
        null != v && j(null);
        let t = f.map(t => t.value.trim()).filter(t => "" !== t);
        if (0 === t.length) return void j(p.intl.string(p.t.TCHkcd));
        let e = {
            field_type: s.rX.TERMS,
            label: p.intl.string(p.t["9suSIA"]),
            values: t,
            required: !0
        };
        try {
            await _(e), y()
        } catch (t) {
            j(new c.LG(t).getAnyErrorMessage())
        }
    };
    return (0, n.jsx)(o.A, {
        page: d.liQ.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(b.A, (e = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                }))), n.forEach(function(e) {
                    var n;
                    n = r[e], e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n
                })
            }
            return t
        }({}, t), r = r = {
            errorText: v,
            title: p.intl.string(p.t["3pz9t3"]),
            onCancel: y,
            onConfirm: m,
            children: (0, n.jsx)(u._, {
                guild: g,
                rules: f,
                setRules: O
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }), e))
    })
}