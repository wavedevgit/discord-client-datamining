/** chunk id: 409013, original params: e,t,l (module,exports,require) **/
l.d(t, {
    J: () => h,
    v: () => i
});
var r = l(735438),
    a = l(562465),
    d = l(73153),
    c = l(198982),
    n = l(194822),
    o = l(652215);
let s = ["request_params"],
    u = e => (0, r.isObject)(e) ? (0, r.isArray)(e) ? e.map(u) : (0, r.reduce)(e, (e, t, l) => {
        let a = (0, r.camelCase)(l);
        return s.includes(l) ? {
            ...e,
            [a]: t
        } : {
            ...e,
            [a]: u(t)
        }
    }, {}) : e,
    i = async e => {
        let {
            tenantId: t,
            layoutId: l,
            abortSignal: r
        } = e;
        if (!n.A.isFetchingLayout(t, l)) try {
            d.h.dispatch({
                type: "CMS_LAYOUT_FETCH",
                tenantId: t,
                layoutId: l
            });
            let e = await a.Bo.get({
                url: o.Rsh.CMS_LAYOUT(t, l),
                rejectWithError: !0,
                signal: r
            });
            d.h.dispatch({
                type: "CMS_LAYOUT_FETCH_SUCCESS",
                tenantId: t,
                layout: u(e.body)
            })
        } catch (r) {
            let e = new c.LG(r);
            throw d.h.dispatch({
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
            requestParams: s
        } = e;
        if (!n.A.isFetchingTemplate(t, l)) try {
            d.h.dispatch({
                type: "CMS_TEMPLATE_FETCH",
                tenantId: t,
                templateId: l
            });
            let e = await a.Bo.get({
                url: o.Rsh.CMS_TEMPLATE(t, l),
                rejectWithError: !0,
                signal: r,
                query: s
            });
            d.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_SUCCESS",
                tenantId: t,
                templateId: l,
                layout: u(e.body)
            })
        } catch (r) {
            let e = new c.LG(r);
            throw d.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_FAILURE",
                tenantId: t,
                templateId: l,
                apiError: e
            }), e
        }
    }