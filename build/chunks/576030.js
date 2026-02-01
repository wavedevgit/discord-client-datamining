/** chunk id: 576030, original params: e,t,n (module,exports,require) **/
n.d(t, {
    GM: () => _,
    mW: () => p,
    uq: () => d
});
var r = n(627968);
n(64700);
var l = n(158954),
    o = n(311907),
    i = n(397927),
    a = n(587895),
    s = n(721932),
    u = n(287809),
    c = n(360469);

function d(e) {
    let t = null != e.gifterUserId ? u.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, r.jsx)(i.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: i._3J.SIZE_48,
        "aria-label": t.username
    })
}

function _(e) {
    return (0, r.jsx)(b, {
        wishlistItem: e
    })
}

function p(e) {
    let {
        application: t
    } = e, n = null != t ? t.getIconURL(c.iu.SMALL) : void 0;
    return null != n ? (0, r.jsx)("img", {
        src: n,
        alt: null == t ? void 0 : t.name
    }) : (0, r.jsx)(l.U1X, {
        color: "currentColor",
        size: "xs"
    })
}

function b(e) {
    let {
        wishlistItem: t
    } = e, n = (0, o.bG)([a.A], () => (0, s.$)(t) ? a.A.getApplication(t.sku.applicationId) : void 0);
    return (0, r.jsx)(p, {
        application: n
    })
}