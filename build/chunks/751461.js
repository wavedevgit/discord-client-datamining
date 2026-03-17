/** chunk id: 751461 params = (module,exports,require) **/
E.d(t, {
    A: () => G
});
var e = E(627968),
    A = E(64700),
    I = E(421380),
    S = E(171316),
    T = E(71393),
    n = E(954571),
    C = E(115063),
    R = E(762183),
    i = E(253932),
    l = E(445176),
    r = E(112469),
    N = E(871930),
    u = E(578746),
    d = E(997913),
    O = E(542457),
    s = E(355097),
    V = E(531525);
E(820575);
var D = E(652215),
    a = E(985018),
    P = E(842130);

function o(_) {
    let {
        ingress: t,
        guildId: E
    } = _, s = (0, r.q9)(), o = i.$s.useSetting().includes(E), G = (0, R.K)(), Y = (0, l.e)(), L = (0, S.uM)(), c = A.useCallback(_ => {
        let e = (0, C.Tb)();
        _ ? e.delete(E) : e.add(E), i.$s.updateSetting(Array.from(e)), n.default.track(D.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: O.m.DIRECT_MESSAGES_TOGGLE,
            ingress: t,
            guild_id: E
        })
    }, [E, t]);

    function g(_, t) {
        n.default.track(D.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: _,
            applied_to_existing_guilds: t
        })
    }
    let M = Y ? a.intl.string(a.t.PMsfcH) : a.intl.string(a.t.RAQUSN);
    return (0, e.jsx)(N.h, {
        setting: V.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === E ? (0, e.jsx)(u.Ay, {
            title: M,
            note: Y ? a.intl.string(a.t.XXGmuB) : a.intl.string(a.t.wbYDfT),
            value: !G,
            onChange: _ => {
                var t;
                t = !_, (0, d.O)({
                    header: a.intl.string(a.t["uUr+GR"]),
                    body: a.intl.string(a.t.hjGJBp),
                    confirmText: a.intl.string(a.t.gm1Vej),
                    cancelText: a.intl.string(a.t.p89ACt),
                    confirmButtonColor: I.$n.Colors.BRAND,
                    onConfirm: () => {
                        i.n6.updateSetting(t), g(t, !1)
                    },
                    onCancel: () => {
                        i.n6.updateSetting(t), i.$s.updateSetting(t ? T.A.getGuildIds() : []), g(t, !0)
                    }
                })
            },
            disabled: L,
            tooltipText: L ? a.intl.string(P.default["6Af/cw"]) : void 0
        }) : (0, e.jsx)(u.Ay, {
            title: M,
            note: s ? a.intl.string(a.t.V0ka0Q) : Y ? a.intl.string(a.t.F9WY3f) : a.intl.string(a.t.G7c3Xo),
            value: !o,
            onChange: c
        })
    })
}

function G(_) {
    let {
        ingress: t = s.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: E
    } = _, A = (0, r.Tx)();
    return (0, e.jsx)(o, {
        ingress: t,
        guildId: E ?? A
    })
}