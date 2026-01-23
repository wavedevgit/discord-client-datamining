/** Chunk was on 47841 **/
/** chunk id: 489154, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(250527),
    o = n(837011),
    c = n(997509),
    d = n(555337);

function u() {
    let e = (0, l.bG)([d.A], () => d.A.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.bG)([d.A], () => d.A.getProfileError()),
        u = (0, l.bG)([d.A], () => d.A.getGuildProfile()),
        g = (0, l.bG)([o.A], () => o.A.getIsUpdating(t)),
        m = i.useMemo(() => null == n ? void 0 : n.getAnyErrorMessage(), [n]),
        p = i.useCallback(() => {
            if (null == e || null == u) return;
            let t = {
                name: u.name,
                description: u.description,
                icon: u.icon,
                brandColorPrimary: u.brandColorPrimary,
                traits: u.traits,
                visibility: u.visibility,
                gameApplicationIds: u.gameApplicationIds,
                customBanner: u.customBanner
            };
            (0, a._C)(e.id, t)
        }, [e, u]),
        f = i.useCallback(() => {
            null != t && c.A.init(t)
        }, [t]);
    return (0, r.jsx)(s.A, {
        submitting: g,
        errorMessage: m,
        onSave: p,
        onReset: f
    })
}