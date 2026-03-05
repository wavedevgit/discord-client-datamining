/** chunk id: 751461 params = (module,exports,require) **/
I.d(_, {
    A: () => d
});
var S = I(627968),
    A = I(64700),
    T = I(421380),
    C = I(171316),
    O = I(71393),
    t = I(954571),
    e = I(115063),
    R = I(762183),
    N = I(253932),
    n = I(445176),
    P = I(112469),
    D = I(871930),
    L = I(578746),
    i = I(997913),
    l = I(542457),
    r = I(355097),
    V = I(531525);
I(820575);
var Y = I(652215),
    G = I(985018),
    u = I(870236);

function s(E) {
    let {
        ingress: _,
        guildId: I
    } = E, r = (0, P.q9)(), s = N.$s.useSetting().includes(I), d = (0, R.K)(), a = (0, n.e)(), o = (0, C.uM)(), U = A.useCallback(E => {
        let S = (0, e.Tb)();
        E ? S.delete(I) : S.add(I), N.$s.updateSetting(Array.from(S)), t.default.track(Y.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: l.m.DIRECT_MESSAGES_TOGGLE,
            ingress: _,
            guild_id: I
        })
    }, [I, _]);

    function M(E, _) {
        t.default.track(Y.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: E,
            applied_to_existing_guilds: _
        })
    }
    let c = a ? G.intl.string(G.t.PMsfcH) : G.intl.string(G.t.RAQUSN);
    return (0, S.jsx)(D.h, {
        setting: V.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === I ? (0, S.jsx)(L.Ay, {
            title: c,
            note: a ? G.intl.string(G.t.XXGmuB) : G.intl.string(G.t.wbYDfT),
            value: !d,
            onChange: E => {
                var _;
                _ = !E, (0, i.O)({
                    header: G.intl.string(G.t["uUr+GR"]),
                    body: G.intl.string(G.t.hjGJBp),
                    confirmText: G.intl.string(G.t.gm1Vej),
                    cancelText: G.intl.string(G.t.p89ACt),
                    confirmButtonColor: T.$n.Colors.BRAND,
                    onConfirm: () => {
                        N.n6.updateSetting(_), M(_, !1)
                    },
                    onCancel: () => {
                        N.n6.updateSetting(_), N.$s.updateSetting(_ ? O.A.getGuildIds() : []), M(_, !0)
                    }
                })
            },
            disabled: o,
            tooltipText: o ? G.intl.string(u.default["6Af/cw"]) : void 0
        }) : (0, S.jsx)(L.Ay, {
            title: c,
            note: r ? G.intl.string(G.t.V0ka0Q) : a ? G.intl.string(G.t.F9WY3f) : G.intl.string(G.t.G7c3Xo),
            value: !s,
            onChange: U
        })
    })
}

function d(E) {
    let {
        ingress: _ = r.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, A = (0, P.Tx)();
    return (0, S.jsx)(s, {
        ingress: _,
        guildId: I ?? A
    })
}