/** Chunk was on 39048 **/
/** chunk id: 647171, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(997509),
    o = n(555337),
    c = n(310527),
    d = n(737331),
    u = n(446291),
    g = n(927573);

function m() {
    let {
        vanityURLCode: e,
        hasChanges: t,
        errorDetails: n
    } = (0, l.cf)([d.A], () => ({
        vanityURLCode: d.A.vanityURLCode,
        hasChanges: d.A.hasChanges(),
        errorDetails: d.A.errorDetails
    })), {
        guild: m,
        submitting: p,
        errors: f,
        hasChanges: h
    } = (0, l.cf)([o.A], () => o.A.getProps()), b = i.useMemo(() => null != n ? (0, u.z)(null == n ? void 0 : n.code) : (0, g.$s)(f), [f, n]), x = i.useCallback(async () => {
        if (null != m && (t && await (0, c.zf)(m.id, e, {
                throwErr: !0
            }), h)) {
            let e = {
                premiumProgressBarEnabled: m.premiumProgressBarEnabled,
                banner: m.banner,
                splash: m.splash
            };
            await a.A.saveGuild(m.id, e, {
                throwErr: !0
            })
        }
    }, [m, h, t, e]), j = i.useCallback(() => {
        null != m && (a.A.init(m.id), (0, c.fx)())
    }, [m]);
    return (0, r.jsx)(s.A, {
        submitting: p,
        errorMessage: b,
        onSave: x,
        onReset: j
    })
}