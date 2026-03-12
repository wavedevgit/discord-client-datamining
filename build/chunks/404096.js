/** chunk id: 404096 params = (module,exports,require) **/
n.d(t, {
    w: () => N
});
var i = n(421380),
    s = n(935649),
    l = n(847599),
    r = n(171316),
    a = n(419954),
    o = n(71393),
    d = n(954571),
    c = n(975571),
    u = n(115063),
    _ = n(152076),
    m = n(762183),
    g = n(253932),
    A = n(780964),
    h = n(612025),
    x = n(112469),
    p = n(997913),
    T = n(542457),
    E = n(355097),
    C = n(652215),
    S = n(985018);
let f = (e, t) => {
        d.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    N = (0, a.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => S.intl.string(S.t["3o2ojh"]),
        useSubtitle: () => (0, x.q9)() ? S.intl.format(S.t.WpnWLc, {
            helpdeskArticle: c.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
        }) : S.intl.format(S.t.wkm9a3, {
            helpdeskArticle: c.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
        }),
        useValue: () => {
            let e = (0, x.Tx)(),
                t = (0, m.K)(),
                n = g.$s.useSetting().includes(e),
                i = g.YX.useSetting(),
                s = g.Zr.useSetting().includes(e);
            return e === h.YG ? !t && !i : !n && !s
        },
        useDisabled: () => {
            let e = (0, x.Tx)(),
                t = (0, r.uM)(),
                n = (0, m.K)(),
                i = g.$s.useSetting().includes(e);
            return e === h.YG ? n || t : i
        },
        setValue: e => {
            let t = h.xk.getState().selectedGuildId;
            if (!e && (0, _.w)()) return void s.A.showAgeVerificationGetStartedModal({
                entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
            });
            if (t === h.YG) {
                var n;
                n = !e, (0, p.O)({
                    header: S.intl.string(S.t.yAfu1p),
                    body: S.intl.string(S.t.Ry2z74),
                    confirmText: S.intl.string(S.t.gm1Vej),
                    cancelText: S.intl.string(S.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        g.YX.updateSetting(n), f(n, !1)
                    },
                    onCancel: () => {
                        g.YX.updateSetting(n), g.Zr.updateSetting(n ? o.A.getGuildIds() : []), f(n, !0)
                    }
                })
            } else {
                let n = (0, u.xo)();
                e ? n.delete(t) : n.add(t), g.Zr.updateSetting(Array.from(n)), d.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: T.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: E.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t
                })
            }
        }
    })