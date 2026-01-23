/** Chunk was on web.js **/
/** chunk id: 751461, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(171316),
    o = n(71393),
    l = n(954571),
    c = n(115063),
    u = n(762183),
    d = n(253932),
    f = n(445176),
    p = n(112469),
    _ = n(871930),
    h = n(578746),
    m = n(997913),
    g = n(542457),
    E = n(355097),
    y = n(531525);
n(820575);
var b = n(652215),
    O = n(985018),
    v = n(842130);

function A(e) {
    let {
        ingress: t,
        guildId: n
    } = e, E = (0, p.q9)(), A = d.$s.useSetting().includes(n), I = (0, u.K)(), S = (0, f.e)(), T = (0, s.uM)(), C = i.useCallback(e => {
        let r = (0, c.Tb)();
        e ? r.delete(n) : r.add(n), d.$s.updateSetting(Array.from(r)), l.default.track(b.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: g.m.DIRECT_MESSAGES_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [n, t]);

    function N(e, t) {
        l.default.track(b.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    }
    let w = e => {
            R(!e)
        },
        R = e => {
            let t = () => {
                    d.n6.updateSetting(e), d.$s.updateSetting(e ? o.A.getGuildIds() : []), N(e, !0)
                },
                n = () => {
                    d.n6.updateSetting(e), N(e, !1)
                };
            (0, m.O)({
                header: O.intl.string(O.t["uUr+GR"]),
                body: O.intl.string(O.t.hjGJBp),
                confirmText: O.intl.string(O.t.gm1Vej),
                cancelText: O.intl.string(O.t.p89ACt),
                confirmButtonColor: a.$n.Colors.BRAND,
                onConfirm: n,
                onCancel: t
            })
        },
        P = S ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN);
    return (0, r.jsx)(_.h, {
        setting: y.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children: "0" === n ? (0, r.jsx)(h.Ay, {
            title: P,
            note: S ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT),
            value: !I,
            onChange: w,
            disabled: T,
            tooltipText: T ? O.intl.string(v.default["6Af/cw"]) : void 0
        }) : (0, r.jsx)(h.Ay, {
            title: P,
            note: E ? O.intl.string(O.t.V0ka0Q) : S ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo),
            value: !A,
            onChange: C
        })
    })
}

function I(e) {
    let {
        ingress: t = E.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, p.Tx)();
    return (0, r.jsx)(A, {
        ingress: t,
        guildId: null != n ? n : i
    })
}