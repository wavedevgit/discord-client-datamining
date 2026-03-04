/** chunk id: 794145, original params: t,e,i (module,exports,require) **/
i.d(e, {
    V: () => O
});
var n = i(421380),
    l = i(171316),
    s = i(419954),
    a = i(71393),
    r = i(954571),
    u = i(115063),
    o = i(762183),
    d = i(253932),
    A = i(780964),
    T = i(612025),
    S = i(445176),
    E = i(112469),
    g = i(997913),
    c = i(542457),
    _ = i(355097),
    I = i(652215),
    C = i(985018);
let N = (t, e) => {
        r.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e
        })
    },
    O = (0, s.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => (0, S.e)() ? C.intl.string(C.t.PMsfcH) : C.intl.string(C.t.RAQUSN),
        useSubtitle: () => {
            let t = (0, E.Tx)(),
                e = (0, E.q9)(),
                i = (0, S.e)();
            return t === T.YG ? i ? C.intl.string(C.t.XXGmuB) : C.intl.string(C.t.wbYDfT) : e ? C.intl.string(C.t.V0ka0Q) : i ? C.intl.string(C.t.F9WY3f) : C.intl.string(C.t.G7c3Xo)
        },
        useValue: () => {
            let t = (0, E.Tx)(),
                e = d.$s.useSetting().includes(t),
                i = (0, o.K)();
            return t === T.YG ? !i : !e
        },
        useDisabled: () => {
            let t = (0, l.uM)();
            return (0, E.Tx)() === T.YG && t
        },
        setValue: t => {
            let e = T.xk.getState().selectedGuildId;
            if (e === T.YG) {
                var i;
                i = !t, (0, g.O)({
                    header: C.intl.string(C.t["uUr+GR"]),
                    body: C.intl.string(C.t.hjGJBp),
                    confirmText: C.intl.string(C.t.gm1Vej),
                    cancelText: C.intl.string(C.t.p89ACt),
                    confirmButtonColor: n.$n.Colors.BRAND,
                    onConfirm: () => {
                        d.n6.updateSetting(i), N(i, !1)
                    },
                    onCancel: () => {
                        d.n6.updateSetting(i), d.$s.updateSetting(i ? a.A.getGuildIds() : []), N(i, !0)
                    }
                })
            } else {
                let i = (0, u.Tb)();
                t ? i.delete(e) : i.add(e), d.$s.updateSetting(Array.from(i)), r.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: c.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: _.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: e
                })
            }
        }
    })