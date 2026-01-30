/** chunk id: 997418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(250527),
    o = n(837011),
    c = n(997509),
    d = n(555337),
    u = n(583970),
    g = n(985018);

function m() {
    let e = (0, l.bG)([d.A], () => d.A.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.bG)([d.A], () => d.A.getProfileError()),
        m = (0, l.bG)([d.A], () => d.A.getGuildProfile()),
        p = (0, l.bG)([o.A], () => o.A.getIsUpdating(t)),
        f = i.useMemo(() => (null == n ? void 0 : n.status) === 429 ? g.intl.string(u.default["bFRS/s"]) : null == n ? void 0 : n.getAnyErrorMessage(), [n]),
        h = i.useCallback(() => {
            if (null == e || null == m) return;
            let t = {
                tag: m.tag,
                badge: m.badge,
                badgeColorPrimary: m.badgeColorPrimary,
                badgeColorSecondary: m.badgeColorSecondary
            };
            (0, a._C)(e.id, t)
        }, [e, m]),
        b = i.useCallback(() => {
            null != t && c.A.init(t)
        }, [t]);
    return (0, r.jsx)(s.A, {
        submitting: p,
        errorMessage: f,
        onSave: h,
        onReset: b
    })
}