/** chunk id: 785330, original params: e,l,t (module,exports,require) **/
t.d(l, {
    Ay: () => b,
    F2: () => u,
    Qs: () => p,
    Z_: () => m
});
var r = t(627968),
    o = t(64700),
    n = t(835245),
    a = t(204990),
    i = t(604238),
    d = t(856535),
    s = t(55391);

function c(e, l) {
    return e.children.map(e => (function e(l, t) {
        if ("string" == typeof l) return l;
        let {
            block: o,
            ...i
        } = l, d = t[o];
        if (null == d) return null;
        let s = (() => {
                if ("children" in l) {
                    if (!Array.isArray(l.children) && null != l.children) return e(l.children, t);
                    if (null != l.children && l.children.length > 0) return l.children.map(l => e(l, t))
                }
                return null
            })(),
            c = a.E.has(o) ? {
                ...i,
                componentMap: t
            } : i;
        return (0, r.jsx)(d, {
            ...c,
            children: s
        }, (0, n.A)())
    })(e, l))
}

function u(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.E;
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
        } = e, r = (0, i.e)({
            overrides: t
        });
        return o.useMemo(() => c(l, r), [l, r])
    },
    p = e => {
        let {
            layoutId: l,
            tenantId: t,
            overrides: o
        } = e, {
            layout: n
        } = (0, d.A)(t, l);
        return null == n ? null : (0, r.jsx)(h, {
            layout: n,
            overrides: o
        })
    },
    m = e => {
        let {
            templateId: l,
            tenantId: t,
            overrides: o,
            requestParams: n
        } = e, {
            layout: a
        } = (0, s.A)(t, l, n);
        return null == a ? null : (0, r.jsx)(h, {
            layout: a,
            overrides: o
        })
    },
    b = h