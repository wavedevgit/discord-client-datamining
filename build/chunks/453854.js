/** chunk id: 453854, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => c
});
var l = a(627968),
    r = a(575593),
    n = a(674658),
    s = a(226540),
    i = a(369496),
    o = a(227),
    d = a(486020);
let c = e => {
    let {
        skuId: t,
        size: a = 128,
        animated: c = !1
    } = e, {
        product: u
    } = (0, n.q)(t, !0), x = u?.items[0];
    if (null == x) return null;
    if (x.type === r.R.AVATAR_DECORATION) {
        let e = d.Ay.getAvatarDecorationURL({
            avatarDecoration: x,
            size: a,
            canAnimate: c
        });
        return null != e ? (0, l.jsx)("img", {
            src: e,
            alt: x.label
        }) : null
    }
    if (x.type === r.R.PROFILE_EFFECT) {
        let e = x.thumbnailPreviewSrc;
        return (0, l.jsx)("img", {
            src: e,
            alt: x.accessibilityLabel
        })
    }
    if (x.type === r.R.NAMEPLATE) {
        let e = (0, i.WK)(x);
        return (0, l.jsx)(o.A, {
            nameplate: e,
            placement: s.u.PREVIEW
        })
    }
    return null
}