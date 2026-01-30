/** chunk id: 542717, original params: t,e,r (module,exports,require) **/
r.d(e, {
    ParagraphFormFieldModal: () => y,
    TextInputFormFieldModal: () => d
}), r(228524), r(896048), r(747238), r(812715), r(733351);
var n = r(627968),
    i = r(64700),
    a = r(397927),
    l = r(198982),
    o = r(513461),
    c = r(242273),
    s = r(260197),
    u = r(985018);

function b(t) {
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
}

function p(t) {
    var e, r, o;
    let {
        type: p,
        title: d,
        description: y,
        field: g,
        onSave: _,
        onClose: f
    } = t, [O, j] = i.useState(null != (e = null == g ? void 0 : g.label) ? e : ""), [m, h] = i.useState(null), w = async () => {
        null != m && h(null);
        let t = O.trim();
        if ("" === t) return void h(u.intl.string(u.t["G+TI44"]));
        try {
            await _({
                field_type: p,
                label: t,
                required: !0
            }), f()
        } catch (t) {
            h(new l.LG(t).getAnyErrorMessage())
        }
    };
    return (0, n.jsx)(c.A, (r = b({}, t), o = o = {
        errorText: m,
        title: d,
        description: y,
        onConfirm: w,
        onCancel: f,
        children: (0, n.jsx)(a.ksK, {
            onChange: t => {
                null != m && h(null);
                let e = t.replace(/(\r\n|\n|\r)/g, " ");
                e.length > s.Ty && (e = e.slice(0, s.Ty)), j(e)
            },
            placeholder: u.intl.string(u.t.fqVmbL),
            value: O,
            onKeyDown: t => "Enter" === t.key && w()
        })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            r.push.apply(r, n)
        }
        return r
    })(Object(o)).forEach(function(t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
    }), r))
}

function d(t) {
    return (0, n.jsx)(p, b({
        title: u.intl.string(u.t.w6Q9wz),
        description: u.intl.string(u.t["A6M+qv"]),
        type: o.rX.TEXT_INPUT
    }, t))
}

function y(t) {
    return (0, n.jsx)(p, b({
        title: u.intl.string(u.t.gG0JBN),
        description: u.intl.string(u.t.SMX0ia),
        type: o.rX.PARAGRAPH
    }, t))
}