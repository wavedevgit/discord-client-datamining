/** chunk id: 751461, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(421380),
    s = n(171316),
    a = n(71393),
    o = n(954571),
    c = n(115063),
    d = n(762183),
    u = n(253932),
    _ = n(445176),
    p = n(112469),
    m = n(871930),
    g = n(578746),
    A = n(997913),
    f = n(542457),
    b = n(355097),
    h = n(531525);
n(820575);
var E = n(652215),
    O = n(985018),
    x = n(842130);

function C(e) {
    let {
        ingress: t,
        guildId: n
    } = e, b = (0, p.q9)(), C = u.$s.useSetting().includes(n), S = (0, d.K)(), T = (0, _.e)(), I = (0, s.uM)(), N = i.useCallback(e => {
        let r = (0, c.Tb)();
        e ? r.delete(n) : r.add(n), u.$s.updateSetting(Array.from(r)), o.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: f.m.DIRECT_MESSAGES_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [n, t]);

    function j(e, t) {
        o.default.track(E.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    }
    let y = T ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN);
    return (0, r.jsx)(m.h, {
        setting: h.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === n ? (0, r.jsx)(g.Ay, {
            title: y,
            note: T ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT),
            value: !S,
            onChange: e => {
                var t;
                t = !e, (0, A.O)({
                    header: O.intl.string(O.t["uUr+GR"]),
                    body: O.intl.string(O.t.hjGJBp),
                    confirmText: O.intl.string(O.t.gm1Vej),
                    cancelText: O.intl.string(O.t.p89ACt),
                    confirmButtonColor: l.$n.Colors.BRAND,
                    onConfirm: () => {
                        u.n6.updateSetting(t), j(t, !1)
                    },
                    onCancel: () => {
                        u.n6.updateSetting(t), u.$s.updateSetting(t ? a.A.getGuildIds() : []), j(t, !0)
                    }
                })
            },
            disabled: I,
            tooltipText: I ? O.intl.string(x.default["6Af/cw"]) : void 0
        }) : (0, r.jsx)(g.Ay, {
            title: y,
            note: b ? O.intl.string(O.t.V0ka0Q) : T ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo),
            value: !C,
            onChange: N
        })
    })
}

function S(e) {
    let {
        ingress: t = b.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, p.Tx)();
    return (0, r.jsx)(C, {
        ingress: t,
        guildId: null != n ? n : i
    })
}