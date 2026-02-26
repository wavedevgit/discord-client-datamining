/** chunk id: 576030, original params: e,t,i (module,exports,require) **/
i.d(t, {
    GM: () => I,
    mW: () => h,
    uq: () => c
});
var r = i(627968);
i(64700);
var l = i(158954),
    s = i(311907),
    n = i(397927),
    u = i(587895),
    a = i(721932),
    d = i(287809),
    o = i(360469);

function c(e) {
    let t = null != e.gifterUserId ? d.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, r.jsx)(n.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: n._3J.SIZE_48,
        "aria-label": t.username
    })
}

function I(e) {
    return (0, r.jsx)(S, {
        wishlistItem: e
    })
}

function h(e) {
    let {
        application: t
    } = e, i = null != t ? t.getIconURL(o.iu.SMALL) : void 0;
    return null != i ? (0, r.jsx)("img", {
        src: i,
        alt: t?.name
    }) : (0, r.jsx)(l.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function S(e) {
    let {
        wishlistItem: t
    } = e, i = (0, s.bG)([u.A], () => (0, a.$)(t) ? u.A.getApplication(t.sku.applicationId) : void 0);
    return (0, r.jsx)(h, {
        application: i
    })
}