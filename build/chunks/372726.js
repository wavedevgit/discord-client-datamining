/** Chunk was on 16864 **/
/** chunk id: 372726, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    F: () => c
});
var n = r(627968),
    a = r(64700),
    s = r(397927),
    i = r(200330),
    l = r(321987),
    o = r(628103);

function c(e) {
    let {
        data: t,
        onDenied: r,
        onError: c,
        onSuccess: d
    } = e, u = (0, o.n)(r, c, d), p = a.useCallback(e => u(t, e), [t, u]);
    return (0, n.jsx)(l.$, {
        removeChildWrapper: !0,
        children: (0, n.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: s.ip4.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: p
        })
    })
}