/** chunk id: 453854 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var a = l(627968),
    r = l(575593),
    n = l(674658),
    s = l(88686),
    o = l(780898),
    i = l(214881),
    d = l(486020);
let c = e => {
    let {
        skuId: t,
        size: l = 128,
        animated: c = !1
    } = e, {
        product: u
    } = (0, n.q)(t, !0), x = u?.items[0];
    if (null == x) return null;
    if (x.type === r.R.AVATAR_DECORATION) {
        let e = d.Ay.getAvatarDecorationURL({
            avatarDecoration: x,
            size: l,
            canAnimate: c
        });
        return null != e ? (0, a.jsx)("img", {
            src: e,
            alt: x.label
        }) : null
    }
    if (x.type === r.R.PROFILE_EFFECT) {
        let e = x.thumbnailPreviewSrc;
        return (0, a.jsx)("img", {
            src: e,
            alt: x.accessibilityLabel
        })
    }
    if (x.type === r.R.NAMEPLATE) {
        let e = (0, o.WK)(x);
        return (0, a.jsx)(i.A, {
            nameplate: e,
            placement: s.u.PREVIEW
        })
    }
    return null
}