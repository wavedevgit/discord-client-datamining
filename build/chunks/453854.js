/** chunk id: 453854 params = (module,exports,require) **/
a.d(t, {
    A: () => c
});
var l = a(627968),
    n = a(575593),
    r = a(674658),
    s = a(226540),
    i = a(369496),
    d = a(227),
    o = a(486020);
let c = e => {
    let {
        skuId: t,
        size: a = 128,
        animated: c = !1
    } = e, {
        product: u
    } = (0, r.q)(t, !0), x = u?.items[0];
    if (null == x) return null;
    if (x.type === n.R.AVATAR_DECORATION) {
        let e = o.Ay.getAvatarDecorationURL({
            avatarDecoration: x,
            size: a,
            canAnimate: c
        });
        return null != e ? (0, l.jsx)("img", {
            src: e,
            alt: x.label
        }) : null
    }
    if (x.type === n.R.PROFILE_EFFECT) {
        let e = x.thumbnailPreviewSrc;
        return (0, l.jsx)("img", {
            src: e,
            alt: x.accessibilityLabel
        })
    }
    if (x.type === n.R.NAMEPLATE) {
        let e = (0, i.WK)(x);
        return (0, l.jsx)(d.A, {
            nameplate: e,
            placement: s.u.PREVIEW
        })
    }
    return null
}