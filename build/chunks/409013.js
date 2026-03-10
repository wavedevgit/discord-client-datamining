/** chunk id: 409013 params = (module,exports,require) **/
t.d(l, {
    J: () => h,
    v: () => u
});
var r = t(735438),
    n = t(562465),
    o = t(73153),
    i = t(198982),
    a = t(194822),
    s = t(652215);
let d = ["request_params"],
    c = e => (0, r.isObject)(e) ? (0, r.isArray)(e) ? e.map(c) : (0, r.reduce)(e, (e, l, t) => {
        let n = (0, r.camelCase)(t);
        return d.includes(t) ? {
            ...e,
            [n]: l
        } : {
            ...e,
            [n]: c(l)
        }
    }, {}) : e,
    u = async e => {
        let {
            tenantId: l,
            layoutId: t,
            abortSignal: r
        } = e;
        if (!a.A.isFetchingLayout(l, t)) try {
            o.h.dispatch({
                type: "CMS_LAYOUT_FETCH",
                tenantId: l,
                layoutId: t
            });
            let e = await n.Bo.get({
                url: s.Rsh.CMS_LAYOUT(l, t),
                rejectWithError: !0,
                signal: r
            });
            o.h.dispatch({
                type: "CMS_LAYOUT_FETCH_SUCCESS",
                tenantId: l,
                layout: c(e.body)
            })
        } catch (r) {
            let e = new i.LG(r);
            throw o.h.dispatch({
                type: "CMS_LAYOUT_FETCH_FAILURE",
                tenantId: l,
                layoutId: t,
                apiError: e
            }), e
        }
    }, h = async e => {
        let {
            tenantId: l,
            templateId: t,
            abortSignal: r,
            requestParams: d
        } = e;
        if (!a.A.isFetchingTemplate(l, t, d)) try {
            o.h.dispatch({
                type: "CMS_TEMPLATE_FETCH",
                tenantId: l,
                templateId: t,
                requestParams: d
            });
            let e = await n.Bo.get({
                url: s.Rsh.CMS_TEMPLATE(l, t),
                rejectWithError: !0,
                signal: r,
                query: d
            });
            o.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_SUCCESS",
                tenantId: l,
                templateId: t,
                requestParams: d,
                layout: c(e.body)
            })
        } catch (r) {
            let e = new i.LG(r);
            throw o.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_FAILURE",
                tenantId: l,
                templateId: t,
                requestParams: d,
                apiError: e
            }), e
        }
    }