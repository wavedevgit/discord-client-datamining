/** chunk id: 751461 params = (module,exports,require) **/
_.d(e, {
    A: () => G
});
var E = _(627968),
    A = _(64700),
    I = _(421380),
    n = _(171316),
    S = _(71393),
    T = _(954571),
    C = _(115063),
    i = _(762183),
    l = _(253932),
    R = _(445176),
    r = _(112469),
    u = _(871930),
    s = _(578746),
    d = _(997913),
    N = _(542457),
    a = _(355097),
    o = _(531525);
_(820575);
var O = _(652215),
    D = _(985018),
    V = _(842130);

function P(t) {
    let {
        ingress: e,
        guildId: _
    } = t, a = (0, r.q9)(), P = l.$s.useSetting().includes(_), G = (0, i.K)(), c = (0, R.e)(), Y = (0, n.uM)(), g = A.useCallback(t => {
        let E = (0, C.Tb)();
        t ? E.delete(_) : E.add(_), l.$s.updateSetting(Array.from(E)), T.default.track(O.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: N.m.DIRECT_MESSAGES_TOGGLE,
            ingress: e,
            guild_id: _
        })
    }, [_, e]);

    function L(t, e) {
        T.default.track(O.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e
        })
    }
    let M = c ? D.intl.string(D.t.PMsfcH) : D.intl.string(D.t.RAQUSN);
    return (0, E.jsx)(u.h, {
        setting: o.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === _ ? (0, E.jsx)(s.Ay, {
            title: M,
            note: c ? D.intl.string(D.t.XXGmuB) : D.intl.string(D.t.wbYDfT),
            value: !G,
            onChange: t => {
                var e;
                e = !t, (0, d.O)({
                    header: D.intl.string(D.t["uUr+GR"]),
                    body: D.intl.string(D.t.hjGJBp),
                    confirmText: D.intl.string(D.t.gm1Vej),
                    cancelText: D.intl.string(D.t.p89ACt),
                    confirmButtonColor: I.$n.Colors.BRAND,
                    onConfirm: () => {
                        l.n6.updateSetting(e), L(e, !1)
                    },
                    onCancel: () => {
                        l.n6.updateSetting(e), l.$s.updateSetting(e ? S.A.getGuildIds() : []), L(e, !0)
                    }
                })
            },
            disabled: Y,
            tooltipText: Y ? D.intl.string(V.default["6Af/cw"]) : void 0
        }) : (0, E.jsx)(s.Ay, {
            title: M,
            note: a ? D.intl.string(D.t.V0ka0Q) : c ? D.intl.string(D.t.F9WY3f) : D.intl.string(D.t.G7c3Xo),
            value: !P,
            onChange: g
        })
    })
}

function G(t) {
    let {
        ingress: e = a.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: _
    } = t, A = (0, r.Tx)();
    return (0, E.jsx)(P, {
        ingress: e,
        guildId: _ ?? A
    })
}