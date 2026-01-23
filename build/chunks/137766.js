/** Chunk was on 67096 **/
/** chunk id: 137766, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => v
});
var r = t(627968),
    n = t(64700),
    l = t(284009),
    a = t.n(l),
    i = t(317097),
    o = t(397927),
    s = t(915089),
    d = t(411342),
    u = t(652215),
    c = t(985018),
    g = t(228580);

function p(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(A) {
            var r;
            r = t[A], A in e ? Object.defineProperty(e, A, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[A] = r
        })
    }
    return e
}

function f(e, A) {
    return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
        }
        return t
    })(Object(A)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
    }), e
}
let m = (0, s.Ld)();

function v(e) {
    let {
        newRoleParams: A,
        setNewRoleParams: t
    } = e, l = n.useRef(null), {
        name: s,
        color: v
    } = A, h = e => t(A => (a()(null != A, "newRoleParams should be defined"), f(p({}, A), {
        color: e
    })));
    return (0, r.jsxs)("div", {
        className: g.CJ,
        children: [(0, r.jsx)(o.ksK, {
            autoFocus: !0,
            value: s,
            onChange: e => t(A => (a()(null != A, "newRoleParams should be defined"), f(p({}, A), {
                name: e
            }))),
            id: m,
            placeholder: c.intl.string(c.t.oNauug),
            maxLength: u.fHV
        }), (0, r.jsxs)("div", {
            className: g.P4,
            children: [(0, r.jsx)(o.AC4, {
                children: c.intl.format(c.t["Vlq/pH"], {
                    color: (0, i.Hl)(v)
                })
            }), (0, r.jsx)(o.YNO, {
                targetElementRef: l,
                renderPopout: e => (0, r.jsx)(o.VNw, f(p({}, e), {
                    value: v,
                    onChange: h
                })),
                children: e => (0, r.jsx)(o.K0, f(p({}, e), {
                    variant: "secondary",
                    icon: o.dDg,
                    buttonRef: l,
                    "aria-label": c.intl.string(c.t.QLgdlS)
                }))
            })]
        }), (0, r.jsx)(d.A, {
            role: A
        })]
    })
}