/** chunk id: 268199, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m,
    h: () => h
});
var i, r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(421380),
    o = n(397927),
    c = n(985018),
    d = n(734591);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
var m = ((i = {}).DENY = "DENY", i.PASSTHROUGH = "PASSTHROUGH", i.ALLOW = "ALLOW", i);
let g = Object.keys(m);

function b(e) {
    let {
        value: t = "PASSTHROUGH",
        onChange: n,
        labelledBy: i,
        disabled: l = !1,
        id: o
    } = e, c = (0, s._u)({
        orientation: "horizontal",
        isDisabled: l,
        labelledBy: i
    }), {
        ref: m
    } = c, b = function(e, t) {
        if (null == e) return {};
        var n, i, r, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    l = Object.getOwnPropertyNames(e);
                for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }(c, ["ref"]);
    return (0, r.jsx)("div", p(u({
        className: a()(d.Os, {
            [d.r9]: l
        }),
        ref: m,
        id: o
    }, b), {
        children: g.map(e => (0, r.jsx)(f, {
            type: e,
            isSelected: t === e,
            onSelect: e => {
                t === e || l || n(e)
            }
        }, e))
    }))
}

function f(e) {
    let t, n, i, {
        type: l,
        onSelect: m,
        isSelected: g
    } = e;
    switch (l) {
        case "DENY":
            i = c.intl.string(c.t["6639O5"]), t = o.PGe, n = d.Xg;
            break;
        case "ALLOW":
            i = c.intl.string(c.t.RzDfSk), t = o.A9s, n = d.cw;
            break;
        default:
            i = c.intl.string(c.t.ujC3ZS), t = o.Fb4, n = d.le
    }
    let b = (0, s.Gx)({
        isSelected: g,
        label: i
    });
    return (0, r.jsx)(o.DUT, p(u({
        className: a()(d.AS, n, {
            [d.wH]: g
        }),
        onClick: () => m(l)
    }, b), {
        children: (0, r.jsx)(t, {
            color: "currentColor",
            size: "xs"
        })
    }))
}
b.Types = m;
let h = b