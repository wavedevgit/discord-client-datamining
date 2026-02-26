/** chunk id: 785330, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Ay: () => k,
    F2: () => i,
    Qs: () => m,
    Z_: () => p
});
var r = l(627968),
    a = l(64700),
    d = l(835245),
    c = l(204990),
    n = l(604238),
    o = l(856535),
    s = l(55391);

function u(e, t) {
    return e.children.map(e => (function e(t, l) {
        if ("string" == typeof t) return t;
        let {
            block: a,
            ...n
        } = t, o = l[a];
        if (null == o) return null;
        let s = (() => {
                if ("children" in t) {
                    if (!Array.isArray(t.children) && null != t.children) return e(t.children, l);
                    if (null != t.children && t.children.length > 0) return t.children.map(t => e(t, l))
                }
                return null
            })(),
            u = c.E.has(a) ? {
                ...n,
                componentMap: l
            } : n;
        return (0, r.jsx)(o, {
            ...u,
            children: s
        }, (0, d.A)())
    })(e, t))
}

function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.E;
    try {
        return u(e, t), !0
    } catch (e) {
        return !1
    }
}
let h = e => {
        let {
            layout: t,
            overrides: l
        } = e, r = (0, n.e)({
            overrides: l
        });
        return a.useMemo(() => u(t, r), [t, r])
    },
    m = e => {
        let {
            layoutId: t,
            tenantId: l,
            overrides: a
        } = e, {
            layout: d
        } = (0, o.A)(l, t);
        return null == d ? null : (0, r.jsx)(h, {
            layout: d,
            overrides: a
        })
    },
    p = e => {
        let {
            templateId: t,
            tenantId: l,
            overrides: a,
            requestParams: d
        } = e, {
            layout: c
        } = (0, s.A)(l, t, d);
        return null == c ? null : (0, r.jsx)(h, {
            layout: c,
            overrides: a
        })
    },
    k = h