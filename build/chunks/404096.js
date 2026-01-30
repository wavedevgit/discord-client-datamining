/** chunk id: 404096, original params: e,t,i (module,exports,require) **/
i.d(t, {
    w: () => m
});
var n = i(421380),
    l = i(935649),
    s = i(847599),
    r = i(171316),
    a = i(419954),
    u = i(71393),
    o = i(954571),
    d = i(975571),
    T = i(115063),
    c = i(152076),
    A = i(762183),
    S = i(253932),
    _ = i(780964),
    E = i(612025),
    g = i(112469),
    I = i(997913),
    O = i(542457),
    C = i(355097),
    N = i(652215),
    b = i(985018);
let p = (e, t) => {
        o.default.track(N.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    m = (0, a.zD)(_.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => b.intl.string(b.t["3o2ojh"]),
        useSubtitle: () => (0, g.q9)() ? b.intl.format(b.t.WpnWLc, {
            helpdeskArticle: d.A.getArticleURL(N.MVz.MESSAGE_REQUESTS)
        }) : b.intl.format(b.t.wkm9a3, {
            helpdeskArticle: d.A.getArticleURL(N.MVz.MESSAGE_REQUESTS)
        }),
        useValue: () => {
            let e = (0, g.Tx)(),
                t = (0, A.K)(),
                i = S.$s.useSetting().includes(e),
                n = S.YX.useSetting(),
                l = S.Zr.useSetting().includes(e);
            return e === E.YG ? !t && !n : !i && !l
        },
        useDisabled: () => {
            let e = (0, g.Tx)(),
                t = (0, r.uM)(),
                i = (0, A.K)(),
                n = S.$s.useSetting().includes(e);
            return e === E.YG ? i || t : n
        },
        setValue: e => {
            let t = E.xk.getState().selectedGuildId;
            if (!e && (0, c.w)()) return void l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS
            });
            if (t === E.YG) {
                var i;
                i = !e, (0, I.O)({
                    header: b.intl.string(b.t.yAfu1p),
                    body: b.intl.string(b.t.Ry2z74),
                    confirmText: b.intl.string(b.t.gm1Vej),
                    cancelText: b.intl.string(b.t.p89ACt),
                    confirmButtonColor: n.$n.Colors.BRAND,
                    onConfirm: () => {
                        S.YX.updateSetting(i), p(i, !1)
                    },
                    onCancel: () => {
                        S.YX.updateSetting(i), S.Zr.updateSetting(i ? u.A.getGuildIds() : []), p(i, !0)
                    }
                })
            } else {
                let i = (0, T.xo)();
                e ? i.delete(t) : i.add(t), S.Zr.updateSetting(Array.from(i)), o.default.track(N.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: O.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: C.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t
                })
            }
        }
    })