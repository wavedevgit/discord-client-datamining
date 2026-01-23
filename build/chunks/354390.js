/** Chunk was on 47841 **/
/** chunk id: 354390, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => o
});
var r = n(627968),
    i = n(64700),
    l = n(95035),
    s = n(192701);

function a(e) {
    return e
}

function o(e) {
    let {
        onEnableMFAClick: t,
        onMFAEnabled: n
    } = e, {
        isUserMFAEnabled: o,
        isModerationMFAEnabled: c
    } = (0, s.f)(), d = i.useCallback(async () => {
        await t(), null == n || n()
    }, [t, n]), u = i.useCallback(e => (0, r.jsx)(l.A, {
        onClick: d,
        children: e
    }), [d]);
    return o && c ? a : u
}