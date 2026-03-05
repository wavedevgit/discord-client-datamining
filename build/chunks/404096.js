/** chunk id: 404096, original params: e,t,n (module,exports,require) **/
n.d(t, {
    w: () => I
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
    _ = n(152076),
    g = n(762183),
    m = n(253932),
    A = n(780964),
    h = n(612025),
    p = n(112469),
    x = n(997913),
    E = n(542457),
    T = n(355097),
    S = n(652215),
    C = n(985018);
let f = (e, t) => {
        d.default.track(S.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    I = (0, r.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => C.intl.string(C.t["3o2ojh"]),
        useSubtitle: () => (0, p.q9)() ? C.intl.format(C.t.WpnWLc, {
            helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS)
        }) : C.intl.format(C.t.wkm9a3, {
            helpdeskArticle: c.A.getArticleURL(S.MVz.MESSAGE_REQUESTS)
        }),
        useValue: () => {
            let e = (0, p.Tx)(),
                t = (0, g.K)(),
                n = m.$s.useSetting().includes(e),
                i = m.YX.useSetting(),
                s = m.Zr.useSetting().includes(e);
            return e === h.YG ? !t && !i : !n && !s
        },
        useDisabled: () => {
            let e = (0, p.Tx)(),
                t = (0, a.uM)(),
                n = (0, g.K)(),
                i = m.$s.useSetting().includes(e);
            return e === h.YG ? n || t : i
        },
        setValue: e => {
            let t = h.xk.getState().selectedGuildId;
            if (!e && (0, _.w)()) return void s.A.showAgeVerificationGetStartedModal({
                entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
            });
            if (t === h.YG) {
                var n;
                n = !e, (0, x.O)({
                    header: C.intl.string(C.t.yAfu1p),
                    body: C.intl.string(C.t.Ry2z74),
                    confirmText: C.intl.string(C.t.gm1Vej),
                    cancelText: C.intl.string(C.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        m.YX.updateSetting(n), f(n, !1)
                    },
                    onCancel: () => {
                        m.YX.updateSetting(n), m.Zr.updateSetting(n ? o.A.getGuildIds() : []), f(n, !0)
                    }
                })
            } else {
                let n = (0, u.xo)();
                e ? n.delete(t) : n.add(t), m.Zr.updateSetting(Array.from(n)), d.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: T.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t
                })
            }
        }
    })