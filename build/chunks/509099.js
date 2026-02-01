/** chunk id: 509099, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(989349),
    i = n.n(r),
    l = n(554146),
    a = n(45143),
    s = n(826673),
    o = n(367727),
    c = n(507263),
    u = n(71393),
    d = n(287809),
    p = n(536194),
    h = n(661191),
    g = n(664531),
    m = n(652215),
    f = n(49999);
let A = {
    init(e) {
        let {
            hasModalOpen: t,
            openModal: n
        } = e;
        p.P.isDisallowPopupsSet() || (0, c.B)(() => {
            if ((0, a.A)()) return;
            let e = d.default.getCurrentUser(),
                r = null != e && 7 > i()().diff(i()(h.default.extractTimestamp(e.id)), "days"),
                c = null != u.A.getGuildsArray().find(e => e.features.has(m.GuildFeatures.HUB)),
                p = !(0, s.k8)(l.M.HUB_BACK_TO_SCHOOL_UPSELL);
            !(r || t() || c || !p) && (0, g.a)() && (g.A.trackExposure({
                location: "8b792a_1"
            }), n(), (0, o.Vh)(l.M.HUB_BACK_TO_SCHOOL_UPSELL))
        })
    },
    hideHubUpsell() {
        (0, s.Dr)(l.M.HUB_BACK_TO_SCHOOL_UPSELL, {
            dismissAction: f.i.AUTO
        })
    }
}