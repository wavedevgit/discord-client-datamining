/** chunk id: 785330 params = (module,exports,require) **/
t.d(l, {
    Ay: () => _,
    F2: () => u,
    Qs: () => m,
    Z_: () => p
});
var r = t(627968),
    n = t(64700),
    o = t(835245),
    i = t(204990),
    a = t(604238),
    s = t(856535),
    d = t(55391);

function c(e, l) {
    return e.children.map(e => (function e(l, t) {
        if ("string" == typeof l) return l;
        let {
            block: n,
            ...a
        } = l, s = t[n];
        if (null == s) return null;
        let d = (() => {
                if ("children" in l) {
                    if (!Array.isArray(l.children) && null != l.children) return e(l.children, t);
                    if (null != l.children && l.children.length > 0) return l.children.map(l => e(l, t))
                }
                return null
            })(),
            c = i.E.has(n) ? {
                ...a,
                componentMap: t
            } : a;
        return (0, r.jsx)(s, {
            ...c,
            children: d
        }, (0, o.A)())
    })(e, l))
}

function u(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.E;
    try {
        return c(e, l), !0
    } catch (e) {
        return !1
    }
}
let h = e => {
        let {
            layout: l,
            overrides: t
        } = e, r = (0, a.e)({
            overrides: t
        });
        return n.useMemo(() => c(l, r), [l, r])
    },
    m = e => {
        let {
            layoutId: l,
            tenantId: t,
            overrides: n
        } = e, {
            layout: o
        } = (0, s.A)(t, l);
        return null == o ? null : (0, r.jsx)(h, {
            layout: o,
            overrides: n
        })
    },
    p = e => {
        let {
            templateId: l,
            tenantId: t,
            overrides: n,
            requestParams: o
        } = e, {
            layout: i
        } = (0, d.A)(t, l, o);
        return null == i ? null : (0, r.jsx)(h, {
            layout: i,
            overrides: n
        })
    },
    _ = h