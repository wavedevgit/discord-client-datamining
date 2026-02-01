/** chunk id: 968930, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(73153),
    i = n(631670),
    l = n(272355),
    a = n(159001),
    s = n(688796),
    o = n(101058),
    c = n(207803),
    u = n(287809),
    d = n(927578),
    p = n(339984);
class h extends l.A {
    _initialize() {
        r.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
    }
    _terminate() {
        r.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === p.HL.AVATAR ? (e => {
            let {
                image: t,
                file: n,
                guildId: r,
                analyticsSource: l,
                isTryItOut: h
            } = e;
            if (h) return void(0, c.e$)(t);
            let g = u.default.getCurrentUser(),
                m = null != r ? a.zq : i.zq,
                f = d.Ay.canUseAnimatedAvatar(g);
            if (f || "image/gif" !== n.type) return void m(t);
            if (null == g) return;
            let A = (0, o.V7)({
                userId: g.id,
                image: t
            });
            if (!f) return void(0, s.G)({
                uploadType: p.HL.AVATAR,
                imageSrc: A,
                analyticsSource: l
            })
        })(e) : e.uploadType === p.HL.BANNER ? (e => {
            let {
                image: t,
                guildId: n,
                analyticsSource: r,
                isTryItOut: i
            } = e, l = t.imageUri;
            if (i) return void(0, c.xe)(l);
            let o = u.default.getCurrentUser(),
                h = null != n ? a.Iz : c.Iz,
                g = d.Ay.canUsePremiumProfileCustomization(o);
            d.Ay.canUsePremiumProfileCustomization(o) ? h(l) : null == o || g || (0, s.G)({
                uploadType: p.HL.BANNER,
                imageSrc: l,
                analyticsSource: r
            })
        })(e) : void 0
    }
}
let g = new h