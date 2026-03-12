/** chunk id: 751461 params = (module,exports,require) **/
A.d(_, {
    A: () => G
});
var I = A(627968),
    T = A(64700),
    S = A(421380),
    t = A(171316),
    e = A(71393),
    C = A(954571),
    O = A(115063),
    R = A(762183),
    n = A(253932),
    N = A(445176),
    P = A(112469),
    i = A(871930),
    l = A(578746),
    r = A(997913),
    D = A(542457),
    V = A(355097),
    L = A(531525);
A(820575);
var u = A(652215),
    s = A(985018),
    d = A(870236);

function a(E) {
    let {
        ingress: _,
        guildId: A
    } = E, V = (0, P.q9)(), a = n.$s.useSetting().includes(A), G = (0, R.K)(), o = (0, N.e)(), Y = (0, t.uM)(), U = T.useCallback(E => {
        let I = (0, O.Tb)();
        E ? I.delete(A) : I.add(A), n.$s.updateSetting(Array.from(I)), C.default.track(u.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: D.m.DIRECT_MESSAGES_TOGGLE,
            ingress: _,
            guild_id: A
        })
    }, [A, _]);

    function c(E, _) {
        C.default.track(u.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: E,
            applied_to_existing_guilds: _
        })
    }
    let g = o ? s.intl.string(s.t.PMsfcH) : s.intl.string(s.t.RAQUSN);
    return (0, I.jsx)(i.h, {
        setting: L.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === A ? (0, I.jsx)(l.Ay, {
            title: g,
            note: o ? s.intl.string(s.t.XXGmuB) : s.intl.string(s.t.wbYDfT),
            value: !G,
            onChange: E => {
                var _;
                _ = !E, (0, r.O)({
                    header: s.intl.string(s.t["uUr+GR"]),
                    body: s.intl.string(s.t.hjGJBp),
                    confirmText: s.intl.string(s.t.gm1Vej),
                    cancelText: s.intl.string(s.t.p89ACt),
                    confirmButtonColor: S.$n.Colors.BRAND,
                    onConfirm: () => {
                        n.n6.updateSetting(_), c(_, !1)
                    },
                    onCancel: () => {
                        n.n6.updateSetting(_), n.$s.updateSetting(_ ? e.A.getGuildIds() : []), c(_, !0)
                    }
                })
            },
            disabled: Y,
            tooltipText: Y ? s.intl.string(d.default["6Af/cw"]) : void 0
        }) : (0, I.jsx)(l.Ay, {
            title: g,
            note: V ? s.intl.string(s.t.V0ka0Q) : o ? s.intl.string(s.t.F9WY3f) : s.intl.string(s.t.G7c3Xo),
            value: !a,
            onChange: U
        })
    })
}

function G(E) {
    let {
        ingress: _ = V.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = E, T = (0, P.Tx)();
    return (0, I.jsx)(a, {
        ingress: _,
        guildId: A ?? T
    })
}