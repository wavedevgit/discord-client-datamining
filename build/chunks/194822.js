/** chunk id: 194822, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => C
});
var r = t(311907),
    o = t(73153),
    n = t(403362),
    i = t(41770);
let a = (0, n.m6)() ? {
        [i.C8]: {
            "dummy-shop-home": i.uG,
            "dummy-orb-shelf": i.oP,
            "dummy-sku-list": i.Ej
        }
    } : {},
    d = (0, n.m6)() ? ["dummy-skeleton"] : [],
    c = (0, n.m6)() ? {
        [i.C8]: {
            "dummy-popular-picks": i.Ot
        }
    } : {},
    s = (0, n.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, l) => `${e}/${l}`,
    h = a,
    p = new Set(d),
    m = {},
    _ = c,
    b = new Set(s),
    S = {};
class T extends r.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, l) {
        return null == e || null == l ? null : h[e]?.[l] ?? null
    }
    isFetchingLayout(e, l) {
        return null != e && null != l && p.has(u(e, l))
    }
    getFetchError(e, l) {
        return null == e || null == l ? null : m[u(e, l)] ?? null
    }
    getTemplateLayout(e, l) {
        return null == e || null == l ? null : _[e]?.[l] ?? null
    }
    isFetchingTemplate(e, l) {
        return null != e && null != l && b.has(u(e, l))
    }
    getTemplateFetchError(e, l) {
        return null == e || null == l ? null : S[u(e, l)] ?? null
    }
}
let C = new T(o.h, {
    CMS_LAYOUT_FETCH: e => {
        let {
            tenantId: l,
            layoutId: t
        } = e;
        p.add(u(l, t))
    },
    CMS_LAYOUT_FETCH_SUCCESS: e => {
        let {
            tenantId: l,
            layout: t
        } = e;
        (h[l] ??= {})[t.id] = t, delete m[u(l, t.id)], p.delete(u(l, t.id))
    },
    CMS_LAYOUT_FETCH_FAILURE: e => {
        let {
            tenantId: l,
            layoutId: t,
            apiError: r
        } = e;
        m[u(l, t)] = r, p.delete(u(l, t))
    },
    CMS_TEMPLATE_FETCH: e => {
        let {
            tenantId: l,
            templateId: t
        } = e;
        b.add(u(l, t))
    },
    CMS_TEMPLATE_FETCH_SUCCESS: e => {
        let {
            tenantId: l,
            templateId: t,
            layout: r
        } = e;
        (_[l] ??= {})[t] = r, delete S[u(l, t)], b.delete(u(l, t))
    },
    CMS_TEMPLATE_FETCH_FAILURE: e => {
        let {
            tenantId: l,
            templateId: t,
            apiError: r
        } = e;
        S[u(l, t)] = r, b.delete(u(l, t))
    },
    LOGOUT: function() {
        h = {}, p = new Set, m = {}, _ = {}, b = new Set, S = {}
    }
})