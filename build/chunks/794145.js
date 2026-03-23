/** chunk id: 794145 params = (module,exports,require) **/
n.d(t, {
    K: () => E,
    V: () => S
});
var i = n(421380),
    s = n(171316),
    l = n(419954),
    a = n(71393),
    r = n(954571),
    o = n(115063),
    d = n(762183),
    c = n(253932),
    u = n(780964),
    m = n(612025),
    _ = n(445176),
    g = n(112469),
    A = n(137675),
    x = n(542457),
    p = n(355097),
    h = n(652215),
    T = n(985018);
let E = () => (0, _.e)() ? T.intl.string(T.t.PMsfcH) : T.intl.string(T.t.RAQUSN),
    f = (e, t) => {
        r.default.track(h.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    S = (0, l.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: E,
        useSubtitle: () => {
            let e = (0, g.Tx)(),
                t = (0, g.q9)(),
                n = (0, _.e)();
            return e === m.YG ? n ? T.intl.string(T.t.XXGmuB) : T.intl.string(T.t.wbYDfT) : t ? T.intl.string(T.t.V0ka0Q) : n ? T.intl.string(T.t.F9WY3f) : T.intl.string(T.t.G7c3Xo)
        },
        useValue: () => {
            let e = (0, g.Tx)(),
                t = c.$s.useSetting().includes(e),
                n = (0, d.K)();
            return e === m.YG ? !n : !t
        },
        useDisabled: () => {
            let e = (0, s.uM)();
            return (0, g.Tx)() === m.YG && e
        },
        setValue: e => {
            let t = m.xk.getState().selectedGuildId;
            if (t === m.YG) {
                var n;
                n = !e, (0, A.O)({
                    header: T.intl.string(T.t["uUr+GR"]),
                    body: T.intl.string(T.t.hjGJBp),
                    confirmText: T.intl.string(T.t.gm1Vej),
                    cancelText: T.intl.string(T.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        c.n6.updateSetting(n), f(n, !1)
                    },
                    onCancel: () => {
                        c.n6.updateSetting(n), c.$s.updateSetting(n ? a.A.getGuildIds() : []), f(n, !0)
                    }
                })
            } else {
                let n = (0, o.Tb)();
                e ? n.delete(t) : n.add(t), c.$s.updateSetting(Array.from(n)), r.default.track(h.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: x.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: p.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t
                })
            }
        }
    })