/** chunk id: 404096 params = (module,exports,require) **/
n.d(t, {
    K: () => C,
    w: () => N
});
var i = n(421380),
    s = n(935649),
    l = n(847599),
    a = n(171316),
    r = n(419954),
    o = n(71393),
    d = n(954571),
    c = n(975571),
    u = n(115063),
    m = n(152076),
    g = n(762183),
    _ = n(253932),
    x = n(780964),
    A = n(612025),
    h = n(112469),
    p = n(137675),
    T = n(542457),
    f = n(355097),
    S = n(652215),
    b = n(985018);
let E = (e, t) => {
    d.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t
    })
};

function C() {
    return b.intl.string(b.t["3o2ojh"])
}
let N = (0, r.zD)(x.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: C,
    useSubtitle: () => (0, h.q9)() ? b.intl.format(b.t.WpnWLc, {
        helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS)
    }) : b.intl.format(b.t.wkm9a3, {
        helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS)
    }),
    useValue: () => {
        let e = (0, h.Tx)(),
            t = (0, g.K)(),
            n = _.$s.useSetting().includes(e),
            i = _.YX.useSetting(),
            s = _.Zr.useSetting().includes(e);
        return e === A.YG ? !t && !i : !n && !s
    },
    useDisabled: () => {
        let e = (0, h.Tx)(),
            t = (0, a.uM)(),
            n = (0, g.K)(),
            i = _.$s.useSetting().includes(e);
        return e === A.YG ? n || t : i
    },
    setValue: e => {
        let t = A.xk.getState().selectedGuildId;
        if (!e && (0, m.w)()) return void s.A.showAgeVerificationGetStartedModal({
            entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
        });
        if (t === A.YG) {
            var n;
            n = !e, (0, p.O)({
                header: b.intl.string(b.t.yAfu1p),
                body: b.intl.string(b.t.Ry2z74),
                confirmText: b.intl.string(b.t.gm1Vej),
                cancelText: b.intl.string(b.t.p89ACt),
                confirmButtonColor: i.$n.Colors.BRAND,
                onConfirm: () => {
                    _.YX.updateSetting(n), E(n, !1)
                },
                onCancel: () => {
                    _.YX.updateSetting(n), _.Zr.updateSetting(n ? o.A.getGuildIds() : []), E(n, !0)
                }
            })
        } else {
            let n = (0, u.xo)();
            e ? n.delete(t) : n.add(t), _.Zr.updateSetting(Array.from(n)), d.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: T.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                ingress: f.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t
            })
        }
    }
})