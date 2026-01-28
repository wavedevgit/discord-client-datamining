/** Chunk was on 83759 **/
/** chunk id: 576030, original params: e,t,n (module,exports,require) **/
n.d(t, {
    GM: () => p,
    mW: () => m,
    uq: () => d
});
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(311907),
    a = n(397927),
    o = n(587895),
    s = n(721932),
    u = n(287809),
    c = n(360469);

function d(e) {
    let t = null != e.gifterUserId ? u.default.getUser(e.gifterUserId) : null;
    return null == t ? null : (0, r.jsx)(a.euF, {
        src: t.getAvatarURL(void 0, 48),
        size: a._3J.SIZE_48,
        "aria-label": t.username
    })
}

function p(e) {
    return (0, r.jsx)(f, {
        wishlistItem: e
    })
}

function m(e) {
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

function f(e) {
    let {
        wishlistItem: t
    } = e, n = (0, i.bG)([o.A], () => (0, s.$)(t) ? o.A.getApplication(t.sku.applicationId) : void 0);
    return (0, r.jsx)(m, {
        application: n
    })
}