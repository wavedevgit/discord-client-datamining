/** chunk id: 794145, original params: e,t,i (module,exports,require) **/
i.d(t, {
    V: () => N
});
var n = i(421380),
    l = i(171316),
    s = i(419954),
    r = i(71393),
    a = i(954571),
    u = i(115063),
    o = i(762183),
    d = i(253932),
    T = i(780964),
    c = i(612025),
    A = i(445176),
    S = i(112469),
    _ = i(997913),
    E = i(542457),
    g = i(355097),
    I = i(652215),
    O = i(985018);
let C = (e, t) => {
        a.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    N = (0, s.zD)(T.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => (0, A.e)() ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN),
        useSubtitle: () => {
            let e = (0, S.Tx)(),
                t = (0, S.q9)(),
                i = (0, A.e)();
            return e === c.YG ? i ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT) : t ? O.intl.string(O.t.V0ka0Q) : i ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo)
        },
        useValue: () => {
            let e = (0, S.Tx)(),
                t = d.$s.useSetting().includes(e),
                i = (0, o.K)();
            return e === c.YG ? !i : !t
        },
        useDisabled: () => {
            let e = (0, l.uM)();
            return (0, S.Tx)() === c.YG && e
        },
        setValue: e => {
            let t = c.xk.getState().selectedGuildId;
            if (t === c.YG) {
                var i;
                i = !e, (0, _.O)({
                    header: O.intl.string(O.t["uUr+GR"]),
                    body: O.intl.string(O.t.hjGJBp),
                    confirmText: O.intl.string(O.t.gm1Vej),
                    cancelText: O.intl.string(O.t.p89ACt),
                    confirmButtonColor: n.$n.Colors.BRAND,
                    onConfirm: () => {
                        d.n6.updateSetting(i), C(i, !1)
                    },
                    onCancel: () => {
                        d.n6.updateSetting(i), d.$s.updateSetting(i ? r.A.getGuildIds() : []), C(i, !0)
                    }
                })
            } else {
                let i = (0, u.Tb)();
                e ? i.delete(t) : i.add(t), d.$s.updateSetting(Array.from(i)), a.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: E.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: g.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t
                })
            }
        }
    })