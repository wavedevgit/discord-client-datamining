/** chunk id: 576030 params = (module,exports,require) **/
i.d(t, {
    GM: () => I,
    mW: () => h,
    uq: () => c
});
var r = i(627968);
i(64700);
var l = i(158954),
    n = i(311907),
    s = i(397927),
    u = i(587895),
    o = i(721932),
    a = i(287809),
    d = i(360469);

function c(e) {
    let t = null != e.gifterUserId ? a.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, r.jsx)(s.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: s._3J.SIZE_48,
        "aria-label": t.username
    })
}

function I(e) {
    return (0, r.jsx)(g, {
        wishlistItem: e
    })
}

function h(e) {
    let {
        application: t
    } = e, i = null != t ? t.getIconURL(d.iu.SMALL) : void 0;
    return null != i ? (0, r.jsx)("img", {
        src: i,
        alt: t?.name
    }) : (0, r.jsx)(l.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function g(e) {
    let {
        wishlistItem: t
    } = e, i = (0, n.bG)([u.A], () => (0, o.$)(t) ? u.A.getApplication(t.sku.applicationId) : void 0);
    return (0, r.jsx)(h, {
        application: i
    })
}