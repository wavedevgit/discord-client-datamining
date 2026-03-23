/** chunk id: 794145 params = (module,exports,require) **/
n.d(t, {
    K: () => T,
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
    f = n(985018);
let T = () => (0, _.e)() ? f.intl.string(f.t.PMsfcH) : f.intl.string(f.t.RAQUSN),
    E = (e, t) => {
        r.default.track(h.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    S = (0, l.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: T,
        useSubtitle: () => {
            let e = (0, g.Tx)(),
                t = (0, g.q9)(),
                n = (0, _.e)();
            return e === m.YG ? n ? f.intl.string(f.t.XXGmuB) : f.intl.string(f.t.wbYDfT) : t ? f.intl.string(f.t.V0ka0Q) : n ? f.intl.string(f.t.F9WY3f) : f.intl.string(f.t.G7c3Xo)
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
                    header: f.intl.string(f.t["uUr+GR"]),
                    body: f.intl.string(f.t.hjGJBp),
                    confirmText: f.intl.string(f.t.gm1Vej),
                    cancelText: f.intl.string(f.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        c.n6.updateSetting(n), E(n, !1)
                    },
                    onCancel: () => {
                        c.n6.updateSetting(n), c.$s.updateSetting(n ? a.A.getGuildIds() : []), E(n, !0)
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