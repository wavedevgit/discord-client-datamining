/** chunk id: 409013 params = (module,exports,require) **/
r.d(t, {
    J: () => m,
    v: () => u
});
var l = r(735438),
    n = r(562465),
    a = r(73153),
    s = r(198982),
    c = r(972441),
    i = r(652215);
let d = ["request_params"],
    o = e => (0, l.isObject)(e) ? (0, l.isArray)(e) ? e.map(o) : (0, l.reduce)(e, (e, t, r) => {
        let n = (0, l.camelCase)(r);
        return d.includes(r) ? {
            ...e,
            [n]: t
        } : {
            ...e,
            [n]: o(t)
        }
    }, {}) : e,
    u = async e => {
        let {
            tenantId: t,
            layoutId: r,
            abortSignal: l
        } = e;
        if (!c.A.isFetchingLayout(t, r)) try {
            a.h.dispatch({
                type: "CMS_LAYOUT_FETCH",
                tenantId: t,
                layoutId: r
            });
            let e = await n.Bo.get({
                url: i.Rsh.CMS_LAYOUT(t, r),
                rejectWithError: !0,
                signal: l
            });
            a.h.dispatch({
                type: "CMS_LAYOUT_FETCH_SUCCESS",
                tenantId: t,
                layout: o(e.body)
            })
        } catch (l) {
            let e = new s.LG(l);
            throw a.h.dispatch({
                type: "CMS_LAYOUT_FETCH_FAILURE",
                tenantId: t,
                layoutId: r,
                apiError: e
            }), e
        }
    }, m = async e => {
        let {
            tenantId: t,
            templateId: r,
            abortSignal: l,
            requestParams: d
        } = e;
        if (!c.A.isFetchingTemplate(t, r, d)) try {
            a.h.dispatch({
                type: "CMS_TEMPLATE_FETCH",
                tenantId: t,
                templateId: r,
                requestParams: d
            });
            let e = await n.Bo.get({
                url: i.Rsh.CMS_TEMPLATE(t, r),
                rejectWithError: !0,
                signal: l,
                query: d
            });
            a.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_SUCCESS",
                tenantId: t,
                templateId: r,
                requestParams: d,
                layout: o(e.body)
            })
        } catch (l) {
            let e = new s.LG(l);
            throw a.h.dispatch({
                type: "CMS_TEMPLATE_FETCH_FAILURE",
                tenantId: t,
                templateId: r,
                requestParams: d,
                apiError: e
            }), e
        }
    }