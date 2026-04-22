/** chunk id: 194822 params = (module,exports,require) **/
r.d(t, {
    A: () => x
});
var l = r(311907),
    n = r(73153),
    a = r(403362),
    s = r(41770);
let c = (0, a.m6)() ? {
        [s.C8]: {
            "dummy-shop-home": s.uG,
            "dummy-orb-shelf": s.oP,
            "dummy-sku-list": s.Ej
        }
    } : {},
    i = (0, a.m6)() ? ["dummy-skeleton"] : [],
    d = (0, a.m6)() ? {
        [s.C8]: {
            "dummy-popular-picks": s.Ot
        }
    } : {},
    o = (0, a.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, t) => `${e}/${t}`,
    m = c,
    h = new Set(i),
    p = {},
    A = d,
    v = new Set(o),
    g = {},
    f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = Object.entries(t).sort((e, t) => {
                let [r] = e, [l] = t;
                return r.localeCompare(l)
            }).map(e => {
                let [t, r] = e;
                return `${t}:${r}`
            }).join("-");
        return "" !== r ? `${e}-${r}` : e
    };
class E extends l.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, t) {
        return null == e || null == t ? null : m[e]?.[t] ?? null
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && h.has(u(e, t))
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : p[u(e, t)] ?? null
    }
    getTemplateLayout(e, t, r) {
        if (null == e || null == t) return null;
        let l = f(t, r);
        return A[e]?.[l] ?? null
    }
    isFetchingTemplate(e, t, r) {
        let l = f(t ?? "", r);
        return null != e && null != t && v.has(u(e, l))
    }
    getTemplateFetchError(e, t, r) {
        return null == e || null == t ? null : g[u(e, f(t ?? "", r))] ?? null
    }
}
let x = new E(n.h, {
    CMS_LAYOUT_FETCH: e => {
        let {
            tenantId: t,
            layoutId: r
        } = e;
        h.add(u(t, r))
    },
    CMS_LAYOUT_FETCH_SUCCESS: e => {
        let {
            tenantId: t,
            layout: r
        } = e;
        (m[t] ??= {})[r.id] = r, delete p[u(t, r.id)], h.delete(u(t, r.id))
    },
    CMS_LAYOUT_FETCH_FAILURE: e => {
        let {
            tenantId: t,
            layoutId: r,
            apiError: l
        } = e;
        p[u(t, r)] = l, h.delete(u(t, r))
    },
    CMS_TEMPLATE_FETCH: e => {
        let {
            tenantId: t,
            templateId: r,
            requestParams: l
        } = e;
        v.add(u(t, f(r, l)))
    },
    CMS_TEMPLATE_FETCH_SUCCESS: e => {
        let {
            tenantId: t,
            templateId: r,
            requestParams: l,
            layout: n
        } = e, a = f(r, l);
        (A[t] ??= {})[a] = n, delete g[u(t, a)], v.delete(u(t, a))
    },
    CMS_TEMPLATE_FETCH_FAILURE: e => {
        let {
            tenantId: t,
            templateId: r,
            requestParams: l,
            apiError: n
        } = e, a = f(r, l);
        g[u(t, a)] = n, v.delete(u(t, a))
    },
    LOGOUT: function() {
        m = {}, h = new Set, p = {}, A = {}, v = new Set, g = {}
    }
})