/** chunk id: 453854, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    A: () => c
});
var r = l(627968),
    a = l(575593),
    n = l(674658),
    i = l(226540),
    s = l(369496),
    o = l(227),
    d = l(486020);
let c = e => {
    let {
        skuId: t,
        size: l = 128,
        animated: c = !1
    } = e, {
        product: u
    } = (0, n.q)(t, !0), h = u?.items[0];
    if (null == h) return null;
    if (h.type === a.R.AVATAR_DECORATION) {
        let e = d.Ay.getAvatarDecorationURL({
            avatarDecoration: h,
            size: l,
            canAnimate: c
        });
        return null != e ? (0, r.jsx)("img", {
            src: e,
            alt: h.label
        }) : null
    }
    if (h.type === a.R.PROFILE_EFFECT) {
        let e = h.thumbnailPreviewSrc;
        return (0, r.jsx)("img", {
            src: e,
            alt: h.accessibilityLabel
        })
    }
    if (h.type === a.R.NAMEPLATE) {
        let e = (0, s.WK)(h);
        return (0, r.jsx)(o.A, {
            nameplate: e,
            placement: i.u.PREVIEW
        })
    }
    return null
}