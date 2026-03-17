/** chunk id: 409013 params = (module,exports,require) **/
l.d(t, {
    J: () => h,
    v: () => u
});
var r = l(735438),
    n = l(562465),
    i = l(73153),
    o = l(198982),
    a = l(194822),
    s = l(652215);
let d = ["request_params"],
    c = e => (0, r.isObject)(e) ? (0, r.isArray)(e) ? e.map(c) : (0, r.reduce)(e, (e, t, l) => {
        let n = (0, r.camelCase)(l);
        return d.includes(l) ? {
            ...e,
            [n]: t
        } : {
            ...e,
            [n]: c(t)
        }
    }, {}) : e,
    u = async e => {
        let {
            tenantId: t,
            layoutId: l,
            abortSignal: r
        } = e;
        if (!a.A.isFetchingLayout(t, l)) try {
            i.h.dispatch({
                type: "CMS_LAYOUT_FETCH",
                tenantId: t,
                layoutId: l
            });
            let e = await n.Bo.get({
                url: s.Rsh.CMS_LAYOUT(t, l),
                rejectWithError: !0,
                signal: r
            });
            i.h.dispatch({
                type: "CMS_LAYOUT_FETCH_SUCCESS",
                tenantId: t,
                layout: c(e.body)
            })
        } catch (r) {
            let e = new o.LG(r);
            throw i.h.dispatch({
                type: "CMS_LAYOUT_FETCH_FAILURE",
                tenantId: t,
                layoutId: l,
                apiError: e
            }), e
        }
    }, h = async e => {
        let {
            tenantId: t,
            templateId: l,
            abortSignal: r,
            requestParams: d
        } = e;
        if (!a.A.isFetchingTemplate(t, l, d)) try {
            i.h.dispatch({
                type: "CMS_TEMPLATE_FETCH",
                tenantId: t,
                templateId: l,
                requestParams: d
            });
            let e = await n.Bo.get({
                url: s.Rsh.CMS_TEMPLATE(t, l),
                rejectWithError: !0,
                signal: r,
                query: d
            });
            i.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_SUCCESS",
                tenantId: t,
                templateId: l,
                requestParams: d,
                layout: c(e.body)
            })
        } catch (r) {
            let e = new o.LG(r);
            throw i.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_FAILURE",
                tenantId: t,
                templateId: l,
                requestParams: d,
                apiError: e
            }), e
        }
    }