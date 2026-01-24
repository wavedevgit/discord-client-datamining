/** Chunk was on 28979 **/
/** chunk id: 794145, original params: t,e,i (module,exports,require) **/
i.d(e, {
    V: () => C
});
var n = i(421380),
    l = i(171316),
    s = i(419954),
    r = i(71393),
    u = i(954571),
    a = i(115063),
    o = i(762183),
    T = i(253932),
    A = i(780964),
    d = i(612025),
    S = i(445176),
    E = i(112469),
    _ = i(997913),
    g = i(542457),
    c = i(355097),
    I = i(652215),
    O = i(985018);
let N = (t, e) => {
        u.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e
        })
    },
    C = (0, s.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => (0, S.e)() ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN),
        useSubtitle: () => {
            let t = (0, E.Tx)(),
                e = (0, E.q9)(),
                i = (0, S.e)();
            return t === d.YG ? i ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT) : e ? O.intl.string(O.t.V0ka0Q) : i ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo)
        },
        useValue: () => {
            let t = (0, E.Tx)(),
                e = T.$s.useSetting().includes(t),
                i = (0, o.K)();
            return t === d.YG ? !i : !e
        },
        useDisabled: () => {
            let t = (0, l.uM)();
            return (0, E.Tx)() === d.YG && t
        },
        setValue: t => {
            let e = d.xk.getState().selectedGuildId;
            if (e === d.YG) {
                var i;
                i = !t, (0, _.O)({
                    header: O.intl.string(O.t["uUr+GR"]),
                    body: O.intl.string(O.t.hjGJBp),
                    confirmText: O.intl.string(O.t.gm1Vej),
                    cancelText: O.intl.string(O.t.p89ACt),
                    confirmButtonColor: n.$n.Colors.BRAND,
                    onConfirm: () => {
                        T.n6.updateSetting(i), N(i, !1)
                    },
                    onCancel: () => {
                        T.n6.updateSetting(i), T.$s.updateSetting(i ? r.A.getGuildIds() : []), N(i, !0)
                    }
                })
            } else {
                let i = (0, a.Tb)();
                t ? i.delete(e) : i.add(e), T.$s.updateSetting(Array.from(i)), u.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: g.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: c.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: e
                })
            }
        }
    })