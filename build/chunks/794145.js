/** chunk id: 794145, original params: e,t,n (module,exports,require) **/
n.d(t, {
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
    _ = n(612025),
    g = n(445176),
    m = n(112469),
    A = n(997913),
    h = n(542457),
    p = n(355097),
    x = n(652215),
    E = n(985018);
let T = (e, t) => {
        r.default.track(x.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    },
    S = (0, l.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => (0, g.e)() ? E.intl.string(E.t.PMsfcH) : E.intl.string(E.t.RAQUSN),
        useSubtitle: () => {
            let e = (0, m.Tx)(),
                t = (0, m.q9)(),
                n = (0, g.e)();
            return e === _.YG ? n ? E.intl.string(E.t.XXGmuB) : E.intl.string(E.t.wbYDfT) : t ? E.intl.string(E.t.V0ka0Q) : n ? E.intl.string(E.t.F9WY3f) : E.intl.string(E.t.G7c3Xo)
        },
        useValue: () => {
            let e = (0, m.Tx)(),
                t = c.$s.useSetting().includes(e),
                n = (0, d.K)();
            return e === _.YG ? !n : !t
        },
        useDisabled: () => {
            let e = (0, s.uM)();
            return (0, m.Tx)() === _.YG && e
        },
        setValue: e => {
            let t = _.xk.getState().selectedGuildId;
            if (t === _.YG) {
                var n;
                n = !e, (0, A.O)({
                    header: E.intl.string(E.t["uUr+GR"]),
                    body: E.intl.string(E.t.hjGJBp),
                    confirmText: E.intl.string(E.t.gm1Vej),
                    cancelText: E.intl.string(E.t.p89ACt),
                    confirmButtonColor: i.$n.Colors.BRAND,
                    onConfirm: () => {
                        c.n6.updateSetting(n), T(n, !1)
                    },
                    onCancel: () => {
                        c.n6.updateSetting(n), c.$s.updateSetting(n ? a.A.getGuildIds() : []), T(n, !0)
                    }
                })
            } else {
                let n = (0, o.Tb)();
                e ? n.delete(t) : n.add(t), c.$s.updateSetting(Array.from(n)), r.default.track(x.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: h.m.DIRECT_MESSAGES_TOGGLE,
                    ingress: p.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t
                })
            }
        }
    })