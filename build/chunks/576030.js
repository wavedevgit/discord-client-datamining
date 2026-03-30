/** chunk id: 576030 params = (module,exports,require) **/
l.d(t, {
    GM: () => h,
    mW: () => C,
    uq: () => d
});
var i = l(627968);
l(64700);
var n = l(158954),
    r = l(311907),
    a = l(397927),
    u = l(587895),
    s = l(721932),
    o = l(287809),
    c = l(360469);

function d(e) {
    let t = null != e.gifterUserId ? o.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, i.jsx)(a.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: a._3J.SIZE_48,
        "aria-label": t.username
    })
}

function h(e) {
    return (0, i.jsx)(p, {
        wishlistItem: e
    })
}

function C(e) {
    let {
        application: t
    } = e, l = null != t ? t.getIconURL(c.iu.SMALL) : void 0;
    return null != l ? (0, i.jsx)("img", {
        src: l,
        alt: t?.name
    }) : (0, i.jsx)(n.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function p(e) {
    let {
        wishlistItem: t
    } = e, l = (0, r.bG)([u.A], () => (0, s.$)(t) ? u.A.getApplication(t.sku.applicationId) : void 0);
    return (0, i.jsx)(C, {
        application: l
    })
}