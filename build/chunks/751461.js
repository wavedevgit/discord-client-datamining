/** chunk id: 751461 params = (module,exports,require) **/
e.d(_, {
    A: () => G
});
var E = e(627968),
    A = e(64700),
    I = e(421380),
    T = e(171316),
    S = e(71393),
    n = e(954571),
    C = e(115063),
    R = e(762183),
    i = e(253932),
    l = e(445176),
    r = e(112469),
    u = e(871930),
    d = e(578746),
    N = e(997913),
    s = e(542457),
    V = e(355097),
    O = e(531525);
e(820575);
var a = e(652215),
    D = e(985018),
    o = e(842130);

function P(t) {
    let {
        ingress: _,
        guildId: e
    } = t, V = (0, r.q9)(), P = i.$s.useSetting().includes(e), G = (0, R.K)(), Y = (0, l.e)(), L = (0, T.uM)(), c = A.useCallback(t => {
        let E = (0, C.Tb)();
        t ? E.delete(e) : E.add(e), i.$s.updateSetting(Array.from(E)), n.default.track(a.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: s.m.DIRECT_MESSAGES_TOGGLE,
            ingress: _,
            guild_id: e
        })
    }, [e, _]);

    function g(t, _) {
        n.default.track(a.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: _
        })
    }
    let M = Y ? D.intl.string(D.t.PMsfcH) : D.intl.string(D.t.RAQUSN);
    return (0, E.jsx)(u.h, {
        setting: O.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === e ? (0, E.jsx)(d.Ay, {
            title: M,
            note: Y ? D.intl.string(D.t.XXGmuB) : D.intl.string(D.t.wbYDfT),
            value: !G,
            onChange: t => {
                var _;
                _ = !t, (0, N.O)({
                    header: D.intl.string(D.t["uUr+GR"]),
                    body: D.intl.string(D.t.hjGJBp),
                    confirmText: D.intl.string(D.t.gm1Vej),
                    cancelText: D.intl.string(D.t.p89ACt),
                    confirmButtonColor: I.$n.Colors.BRAND,
                    onConfirm: () => {
                        i.n6.updateSetting(_), g(_, !1)
                    },
                    onCancel: () => {
                        i.n6.updateSetting(_), i.$s.updateSetting(_ ? S.A.getGuildIds() : []), g(_, !0)
                    }
                })
            },
            disabled: L,
            tooltipText: L ? D.intl.string(o.default["6Af/cw"]) : void 0
        }) : (0, E.jsx)(d.Ay, {
            title: M,
            note: V ? D.intl.string(D.t.V0ka0Q) : Y ? D.intl.string(D.t.F9WY3f) : D.intl.string(D.t.G7c3Xo),
            value: !P,
            onChange: c
        })
    })
}

function G(t) {
    let {
        ingress: _ = V.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: e
    } = t, A = (0, r.Tx)();
    return (0, E.jsx)(P, {
        ingress: _,
        guildId: e ?? A
    })
}