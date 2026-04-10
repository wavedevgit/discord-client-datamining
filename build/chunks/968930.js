/** chunk id: 968930 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(73153),
    l = n(272355),
    r = n(688796),
    a = n(207803),
    s = n(84540),
    o = n(287809),
    d = n(927578),
    c = n(919395),
    u = n(339984);
class A extends l.A {
    _initialize() {
        i.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
    }
    _terminate() {
        i.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === u.HL.AVATAR ? (e => {
            let {
                image: t,
                file: n,
                guildId: i,
                isTryItOut: l
            } = e;
            if (l) return void(0, a.e$)(t);
            let A = o.default.getCurrentUser();
            if (d.Ay.canUseAnimatedAvatar(A) || "image/gif" !== n.type) {
                (0, s.p)({
                    guildId: i,
                    avatar: t
                }), (0, c.WU)("set");
                return
            }
            null != A && (0, r.G)({
                uploadType: u.HL.AVATAR
            })
        })(e) : e.uploadType === u.HL.BANNER ? (e => {
            let {
                image: t,
                guildId: n,
                isTryItOut: i
            } = e, l = t.imageUri;
            if (i) return void(0, a.xe)(l);
            let c = o.default.getCurrentUser(),
                A = d.Ay.canUsePremiumProfileCustomization(c);
            d.Ay.canUsePremiumProfileCustomization(c) ? (0, s.p)({
                guildId: n,
                banner: l
            }) : null == c || A || (0, r.G)({
                uploadType: u.HL.BANNER
            })
        })(e) : void 0
    }
}
let h = new A