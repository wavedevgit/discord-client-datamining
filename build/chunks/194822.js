/** chunk id: 194822, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => A
});
var r = l(311907),
    a = l(73153),
    d = l(403362),
    c = l(41770);
let n = (0, d.m6)() ? {
        [c.C8]: {
            "dummy-shop-home": c.uG,
            "dummy-orb-shelf": c.oP,
            "dummy-sku-list": c.Ej
        }
    } : {},
    o = (0, d.m6)() ? ["dummy-skeleton"] : [],
    s = (0, d.m6)() ? {
        [c.C8]: {
            "dummy-popular-picks": c.Ot
        }
    } : {},
    u = (0, d.m6)() ? ["dummy-skeleton-template"] : [],
    i = (e, t) => `${e}/${t}`,
    h = n,
    m = new Set(o),
    p = {},
    k = s,
    b = new Set(u),
    S = {};
class f extends r.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, t) {
        return null == e || null == t ? null : h[e]?.[t] ?? null
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && m.has(i(e, t))
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : p[i(e, t)] ?? null
    }
    getTemplateLayout(e, t) {
        return null == e || null == t ? null : k[e]?.[t] ?? null
    }
    isFetchingTemplate(e, t) {
        return null != e && null != t && b.has(i(e, t))
    }
    getTemplateFetchError(e, t) {
        return null == e || null == t ? null : S[i(e, t)] ?? null
    }
}
let A = new f(a.h, {
    CMS_LAYOUT_FETCH: e => {
        let {
            tenantId: t,
            layoutId: l
        } = e;
        m.add(i(t, l))
    },
    CMS_LAYOUT_FETCH_SUCCESS: e => {
        let {
            tenantId: t,
            layout: l
        } = e;
        (h[t] ??= {})[l.id] = l, delete p[i(t, l.id)], m.delete(i(t, l.id))
    },
    CMS_LAYOUT_FETCH_FAILURE: e => {
        let {
            tenantId: t,
            layoutId: l,
            apiError: r
        } = e;
        p[i(t, l)] = r, m.delete(i(t, l))
    },
    CMS_TEMPLATE_FETCH: e => {
        let {
            tenantId: t,
            templateId: l
        } = e;
        b.add(i(t, l))
    },
    CMS_TEMPLATE_FETCH_SUCCESS: e => {
        let {
            tenantId: t,
            templateId: l,
            layout: r
        } = e;
        (k[t] ??= {})[l] = r, delete S[i(t, l)], b.delete(i(t, l))
    },
    CMS_TEMPLATE_FETCH_FAILURE: e => {
        let {
            tenantId: t,
            templateId: l,
            apiError: r
        } = e;
        S[i(t, l)] = r, b.delete(i(t, l))
    },
    LOGOUT: function() {
        h = {}, m = new Set, p = {}, k = {}, b = new Set, S = {}
    }
})