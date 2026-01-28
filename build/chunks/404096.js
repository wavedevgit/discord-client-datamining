/** Chunk was on 28979 **/
/** chunk id: 404096, original params: t,e,i (module,exports,require) **/
i.d(e, {
    w: () => D
});
var n = i(421380),
    l = i(935649),
    s = i(847599),
    r = i(171316),
    u = i(419954),
    a = i(71393),
    o = i(954571),
    T = i(975571),
    d = i(115063),
    A = i(152076),
    S = i(762183),
    E = i(253932),
    g = i(780964),
    _ = i(612025),
    c = i(112469),
    I = i(997913),
    O = i(542457),
    N = i(355097),
    C = i(652215),
    b = i(985018);
let L = (t, e) => {
        o.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e
        })
    },
    D = (0, u.zD)(g.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: () => b.intl.string(b.t["3o2ojh"]),
        useSubtitle: () => (0, c.q9)() ? b.intl.format(b.t.WpnWLc, {
            helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
        }) : b.intl.format(b.t.wkm9a3, {
            helpdeskArticle: T.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
        }),
        useValue: () => {
            let t = (0, c.Tx)(),
                e = (0, S.K)(),
                i = E.$s.useSetting().includes(t),
                n = E.YX.useSetting(),
                l = E.Zr.useSetting().includes(t);
            return t === _.YG ? !e && !n : !i && !l
        },
        useDisabled: () => {
            let t = (0, c.Tx)(),
                e = (0, r.uM)(),
                i = (0, S.K)(),
                n = E.$s.useSetting().includes(t);
            return t === _.YG ? i || e : n
        },
        setValue: t => {
            let e = _.xk.getState().selectedGuildId;
            if (!t && (0, A.w)()) return void l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.MESSAGE_REQUESTS_SETTINGS
            });
            if (e === _.YG) {
                var i;
                i = !t, (0, I.O)({
                    header: b.intl.string(b.t.yAfu1p),
                    body: b.intl.string(b.t.Ry2z74),
                    confirmText: b.intl.string(b.t.gm1Vej),
                    cancelText: b.intl.string(b.t.p89ACt),
                    confirmButtonColor: n.$n.Colors.BRAND,
                    onConfirm: () => {
                        E.YX.updateSetting(i), L(i, !1)
                    },
                    onCancel: () => {
                        E.YX.updateSetting(i), E.Zr.updateSetting(i ? a.A.getGuildIds() : []), L(i, !0)
                    }
                })
            } else {
                let i = (0, d.xo)();
                t ? i.delete(e) : i.add(e), E.Zr.updateSetting(Array.from(i)), o.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: O.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                    ingress: N.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: e
                })
            }
        }
    })