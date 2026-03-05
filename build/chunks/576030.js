/** chunk id: 576030 params = (module,exports,require) **/
l.d(t, {
    GM: () => h,
    mW: () => A,
    uq: () => c
});
var r = l(627968);
l(64700);
var n = l(158954),
    i = l(311907),
    a = l(397927),
    s = l(587895),
    u = l(721932),
    o = l(287809),
    d = l(360469);

function c(e) {
    let t = null != e.gifterUserId ? o.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, r.jsx)(a.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: a._3J.SIZE_48,
        "aria-label": t.username
    })
}

function h(e) {
    return (0, r.jsx)(p, {
        wishlistItem: e
    })
}

function A(e) {
    let {
        application: t
    } = e, l = null != t ? t.getIconURL(d.iu.SMALL) : void 0;
    return null != l ? (0, r.jsx)("img", {
        src: l,
        alt: t?.name
    }) : (0, r.jsx)(n.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function p(e) {
    let {
        wishlistItem: t
    } = e, l = (0, i.bG)([s.A], () => (0, u.$)(t) ? s.A.getApplication(t.sku.applicationId) : void 0);
    return (0, r.jsx)(A, {
        application: l
    })
}