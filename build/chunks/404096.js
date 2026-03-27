/** chunk id: 404096 params = (module,exports,require) **/
n.d(t, {
    K: () => C,
    w: () => v
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
    _ = n(762183),
    g = n(253932),
    A = n(780964),
    x = n(612025),
    h = n(112469),
    p = n(137675),
    f = n(542457),
    T = n(355097),
    S = n(652215),
    E = n(985018);
let b = (e, t) => {
    d.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t
    })
};

function C() {
    return E.intl.string(E.t["3o2ojh"])
}
let v = (0, r.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
    useTitle: C,
    useSubtitle: () => (0, h.q9)() ? E.intl.format(E.t.WpnWLc, {
        helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS)
    }) : E.intl.format(E.t.wkm9a3, {
        helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS)
    }),
    useValue: () => {
        let e = (0, h.Tx)(),
            t = (0, _.K)(),
            n = g.$s.useSetting().includes(e),
            i = g.YX.useSetting(),
            s = g.Zr.useSetting().includes(e);
        return e === x.YG ? !t && !i : !n && !s
    },
    useDisabled: () => {
        let e = (0, h.Tx)(),
            t = (0, a.uM)(),
            n = (0, _.K)(),
            i = g.$s.useSetting().includes(e);
        return e === x.YG ? n || t : i
    },
    setValue: e => {
        let t = x.xk.getState().selectedGuildId;
        if (!e && (0, m.w)()) return void s.A.showAgeVerificationGetStartedModal({
            entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
        });
        if (t === x.YG) {
            var n;
            n = !e, (0, p.O)({
                header: E.intl.string(E.t.yAfu1p),
                body: E.intl.string(E.t.Ry2z74),
                confirmText: E.intl.string(E.t.gm1Vej),
                cancelText: E.intl.string(E.t.p89ACt),
                confirmButtonColor: i.$n.Colors.BRAND,
                onConfirm: () => {
                    g.YX.updateSetting(n), b(n, !1)
                },
                onCancel: () => {
                    g.YX.updateSetting(n), g.Zr.updateSetting(n ? o.A.getGuildIds() : []), b(n, !0)
                }
            })
        } else {
            let n = (0, u.xo)();
            e ? n.delete(t) : n.add(t), g.Zr.updateSetting(Array.from(n)), d.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: f.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                ingress: T.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t
            })
        }
    }
})