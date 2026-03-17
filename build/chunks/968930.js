/** chunk id: 968930 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(73153),
    a = n(631670),
    r = n(272355),
    l = n(159001),
    s = n(688796),
    o = n(101058),
    d = n(207803),
    c = n(287809),
    u = n(927578),
    A = n(339984);
class h extends r.A {
    _initialize() {
        i.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
    }
    _terminate() {
        i.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === A.HL.AVATAR ? (e => {
            let {
                image: t,
                file: n,
                guildId: i,
                analyticsSource: r,
                isTryItOut: h
            } = e;
            if (h) return void(0, d.e$)(t);
            let _ = c.default.getCurrentUser(),
                m = null != i ? l.zq : a.zq,
                g = u.Ay.canUseAnimatedAvatar(_);
            if (g || "image/gif" !== n.type) return void m(t);
            if (null == _) return;
            let p = (0, o.V7)({
                userId: _.id,
                image: t
            });
            if (!g) return void(0, s.G)({
                uploadType: A.HL.AVATAR,
                imageSrc: p,
                analyticsSource: r
            })
        })(e) : e.uploadType === A.HL.BANNER ? (e => {
            let {
                image: t,
                guildId: n,
                analyticsSource: i,
                isTryItOut: a
            } = e, r = t.imageUri;
            if (a) return void(0, d.xe)(r);
            let o = c.default.getCurrentUser(),
                h = null != n ? l.Iz : d.Iz,
                _ = u.Ay.canUsePremiumProfileCustomization(o);
            u.Ay.canUsePremiumProfileCustomization(o) ? h(r) : null == o || _ || (0, s.G)({
                uploadType: A.HL.BANNER,
                imageSrc: r,
                analyticsSource: i
            })
        })(e) : void 0
    }
}
let _ = new h