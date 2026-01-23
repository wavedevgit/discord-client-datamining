/** Chunk was on 28979 **/
/** chunk id: 404096, original params: t,e,i (module,exports,require) **/
i.d(e, {
    w: () => R
});
var n = i(421380),
    l = i(935649),
    s = i(847599),
    r = i(171316),
    u = i(419954),
    a = i(71393),
    o = i(954571),
    T = i(975571),
    A = i(115063),
    d = i(152076),
    S = i(762183),
    E = i(253932),
    _ = i(780964),
    g = i(612025),
    c = i(112469),
    I = i(997913),
    O = i(542457),
    N = i(355097),
    C = i(652215),
    L = i(985018);
let b = (t, e) => {
        o.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e
        })
    },
    R = (0, u.zD)(_.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => L.intl.string(L.t["3o2ojh"]),
        useSubtitle: () => (0, c.q9)() ? L.intl.format(L.t.WpnWLc, {
            helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
        }) : L.intl.format(L.t.wkm9a3, {
            helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
        }),
        useValue: () => {
            let t = (0, c.Tx)(),
                e = (0, S.K)(),
                i = E.$s.useSetting().includes(t),
                n = E.YX.useSetting(),
                l = E.Zr.useSetting().includes(t);
            return t === g.YG ? !e && !n : !i && !l
        },
        useDisabled: () => {
            let t = (0, c.Tx)(),
                e = (0, r.uM)(),
                i = (0, S.K)(),
                n = E.$s.useSetting().includes(t);
            return t === g.YG ? i || e : n
        },
        setValue: t => {
            let e = g.xk.getState().selectedGuildId;
            if (!t && (0, d.w)()) return void l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS
            });
            if (e === g.YG) {
                var i;
                i = !t, (0, I.O)({
                    header: L.intl.string(L.t.yAfu1p),
                    body: L.intl.string(L.t.Ry2z74),
                    confirmText: L.intl.string(L.t.gm1Vej),
                    cancelText: L.intl.string(L.t.p89ACt),
                    confirmButtonColor: n.$n.Colors.BRAND,
                    onConfirm: () => {
                        E.YX.updateSetting(i), b(i, !1)
                    },
                    onCancel: () => {
                        E.YX.updateSetting(i), E.Zr.updateSetting(i ? a.A.getGuildIds() : []), b(i, !0)
                    }
                })
            } else {
                let i = (0, A.xo)();
                t ? i.delete(e) : i.add(e), E.Zr.updateSetting(Array.from(i)), o.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: O.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: N.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: e
                })
            }
        }
    })