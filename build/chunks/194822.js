/** chunk id: 194822 params = (module,exports,require) **/
t.d(l, {
    A: () => b
});
var r = t(311907),
    n = t(73153),
    o = t(403362),
    i = t(41770);
let a = (0, o.m6)() ? {
        [i.C8]: {
            "dummy-shop-home": i.uG,
            "dummy-orb-shelf": i.oP,
            "dummy-sku-list": i.Ej
        }
    } : {},
    s = (0, o.m6)() ? ["dummy-skeleton"] : [],
    d = (0, o.m6)() ? {
        [i.C8]: {
            "dummy-popular-picks": i.Ot
        }
    } : {},
    c = (0, o.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, l) => `${e}/${l}`,
    h = a,
    m = new Set(s),
    p = {},
    _ = d,
    T = new Set(c),
    E = {},
    S = function(e) {
        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = Object.entries(l).sort((e, l) => {
                let [t] = e, [r] = l;
                return t.localeCompare(r)
            }).map(e => {
                let [l, t] = e;
                return `${l}:${t}`
            }).join("-");
        return "" !== t ? `${e}-${t}` : e
    };
class A extends r.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, l) {
        return null == e || null == l ? null : h[e]?.[l] ?? null
    }
    isFetchingLayout(e, l) {
        return null != e && null != l && m.has(u(e, l))
    }
    getFetchError(e, l) {
        return null == e || null == l ? null : p[u(e, l)] ?? null
    }
    getTemplateLayout(e, l, t) {
        if (null == e || null == l) return null;
        let r = S(l, t);
        return _[e]?.[r] ?? null
    }
    isFetchingTemplate(e, l, t) {
        let r = S(l ?? "", t);
        return null != e && null != l && T.has(u(e, r))
    }
    getTemplateFetchError(e, l, t) {
        return null == e || null == l ? null : E[u(e, S(l ?? "", t))] ?? null
    }
}
let b = new A(n.h, {
    CMS_LAYOUT_FETCH: e => {
        let {
            tenantId: l,
            layoutId: t
        } = e;
        m.add(u(l, t))
    },
    CMS_LAYOUT_FETCH_SUCCESS: e => {
        let {
            tenantId: l,
            layout: t
        } = e;
        (h[l] ??= {})[t.id] = t, delete p[u(l, t.id)], m.delete(u(l, t.id))
    },
    CMS_LAYOUT_FETCH_FAILURE: e => {
        let {
            tenantId: l,
            layoutId: t,
            apiError: r
        } = e;
        p[u(l, t)] = r, m.delete(u(l, t))
    },
    CMS_TEMPLATE_FETCH: e => {
        let {
            tenantId: l,
            templateId: t,
            requestParams: r
        } = e;
        T.add(u(l, S(t, r)))
    },
    CMS_TEMPLATE_FETCH_SUCCESS: e => {
        let {
            tenantId: l,
            templateId: t,
            requestParams: r,
            layout: n
        } = e, o = S(t, r);
        (_[l] ??= {})[o] = n, delete E[u(l, o)], T.delete(u(l, o))
    },
    CMS_TEMPLATE_FETCH_FAILURE: e => {
        let {
            tenantId: l,
            templateId: t,
            requestParams: r,
            apiError: n
        } = e, o = S(t, r);
        E[u(l, o)] = n, T.delete(u(l, o))
    },
    LOGOUT: function() {
        h = {}, m = new Set, p = {}, _ = {}, T = new Set, E = {}
    }
})