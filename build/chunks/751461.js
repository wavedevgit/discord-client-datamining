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
    u = I(985018),
    s = I(842130);

function G(E) {
    let {
        ingress: _,
        guildId: I
    } = E, r = (0, P.q9)(), G = N.$s.useSetting().includes(I), d = (0, R.K)(), a = (0, n.e)(), o = (0, C.uM)(), U = A.useCallback(E => {
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
    let c = a ? u.intl.string(u.t.PMsfcH) : u.intl.string(u.t.RAQUSN);
    return (0, S.jsx)(D.h, {
        setting: V.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === I ? (0, S.jsx)(L.Ay, {
            title: c,
            note: a ? u.intl.string(u.t.XXGmuB) : u.intl.string(u.t.wbYDfT),
            value: !d,
            onChange: E => {
                var _;
                _ = !E, (0, i.O)({
                    header: u.intl.string(u.t["uUr+GR"]),
                    body: u.intl.string(u.t.hjGJBp),
                    confirmText: u.intl.string(u.t.gm1Vej),
                    cancelText: u.intl.string(u.t.p89ACt),
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
            tooltipText: o ? u.intl.string(s.default["6Af/cw"]) : void 0
        }) : (0, S.jsx)(L.Ay, {
            title: c,
            note: r ? u.intl.string(u.t.V0ka0Q) : a ? u.intl.string(u.t.F9WY3f) : u.intl.string(u.t.G7c3Xo),
            value: !G,
            onChange: U
        })
    })
}

function d(E) {
    let {
        ingress: _ = r.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, A = (0, P.Tx)();
    return (0, S.jsx)(G, {
        ingress: _,
        guildId: I ?? A
    })
}