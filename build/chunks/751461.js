/** chunk id: 751461 params = (module,exports,require) **/
A.d(t, {
    A: () => G
});
var E = A(627968),
    e = A(64700),
    C = A(421380),
    T = A(171316),
    I = A(71393),
    S = A(954571),
    n = A(115063),
    R = A(762183),
    i = A(253932),
    l = A(445176),
    r = A(112469),
    N = A(871930),
    O = A(578746),
    u = A(997913),
    s = A(542457),
    d = A(355097),
    a = A(531525);
A(820575);
var o = A(652215),
    D = A(985018),
    P = A(870236);

function V(_) {
    let {
        ingress: t,
        guildId: A
    } = _, d = (0, r.q9)(), V = i.$s.useSetting().includes(A), G = (0, R.K)(), Y = (0, l.e)(), c = (0, T.uM)(), L = e.useCallback(_ => {
        let E = (0, n.Tb)();
        _ ? E.delete(A) : E.add(A), i.$s.updateSetting(Array.from(E)), S.default.track(o.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: s.m.DIRECT_MESSAGES_TOGGLE,
            ingress: t,
            guild_id: A
        })
    }, [A, t]);

    function g(_, t) {
        S.default.track(o.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: _,
            applied_to_existing_guilds: t
        })
    }
    let U = Y ? D.intl.string(D.t.PMsfcH) : D.intl.string(D.t.RAQUSN);
    return (0, E.jsx)(N.h, {
        setting: a.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === A ? (0, E.jsx)(O.Ay, {
            title: U,
            note: Y ? D.intl.string(D.t.XXGmuB) : D.intl.string(D.t.wbYDfT),
            value: !G,
            onChange: _ => {
                var t;
                t = !_, (0, u.O)({
                    header: D.intl.string(D.t["uUr+GR"]),
                    body: D.intl.string(D.t.hjGJBp),
                    confirmText: D.intl.string(D.t.gm1Vej),
                    cancelText: D.intl.string(D.t.p89ACt),
                    confirmButtonColor: C.$n.Colors.BRAND,
                    onConfirm: () => {
                        i.n6.updateSetting(t), g(t, !1)
                    },
                    onCancel: () => {
                        i.n6.updateSetting(t), i.$s.updateSetting(t ? I.A.getGuildIds() : []), g(t, !0)
                    }
                })
            },
            disabled: c,
            tooltipText: c ? D.intl.string(P.default["6Af/cw"]) : void 0
        }) : (0, E.jsx)(O.Ay, {
            title: U,
            note: d ? D.intl.string(D.t.V0ka0Q) : Y ? D.intl.string(D.t.F9WY3f) : D.intl.string(D.t.G7c3Xo),
            value: !V,
            onChange: L
        })
    })
}

function G(_) {
    let {
        ingress: t = d.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = _, e = (0, r.Tx)();
    return (0, E.jsx)(V, {
        ingress: t,
        guildId: A ?? e
    })
}