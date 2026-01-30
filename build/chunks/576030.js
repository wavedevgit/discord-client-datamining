/** chunk id: 576030, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    GM: () => p,
    mW: () => h,
    uq: () => u
});
var i = n(627968);
n(64700);
var r = n(158954),
    s = n(311907),
    l = n(397927),
    o = n(587895),
    a = n(721932),
    c = n(287809),
    d = n(360469);

function u(e) {
    let t = null != e.gifterUserId ? c.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, i.jsx)(l.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: l._3J.SIZE_48,
        "aria-label": t.username
    })
}

function p(e) {
    return (0, i.jsx)(f, {
        wishlistItem: e
    })
}

function h(e) {
    let {
        application: t
    } = e, n = null != t ? t.getIconURL(d.iu.SMALL) : void 0;
    return null != n ? (0, i.jsx)("img", {
        src: n,
        alt: null == t ? void 0 : t.name
    }) : (0, i.jsx)(r.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function f(e) {
    let {
        wishlistItem: t
    } = e, n = (0, s.bG)([o.A], () => (0, a.$)(t) ? o.A.getApplication(t.sku.applicationId) : void 0);
    return (0, i.jsx)(h, {
        application: n
    })
}