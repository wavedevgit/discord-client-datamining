/** Chunk was on web.js **/
/** chunk id: 638324, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(935649),
    o = n(847599),
    l = n(171316),
    c = n(71393),
    u = n(954571),
    d = n(975571),
    f = n(115063),
    p = n(152076),
    _ = n(762183),
    h = n(253932),
    m = n(112469),
    g = n(871930),
    E = n(578746),
    y = n(997913),
    b = n(542457),
    O = n(355097),
    v = n(531525);
n(820575);
var A = n(652215),
    I = n(985018),
    S = n(842130);

function T(e) {
    let {
        ingress: t,
        guildId: n
    } = e, T = (0, m.q9)(), C = (0, _.K)(), N = h.$s.useSetting().includes(n), w = (0, l.uM)(), R = h.YX.useSetting(), P = h.Zr.useSetting().includes(n), D = i.useCallback(e => {
        let r = (0, f.xo)();
        e ? r.delete(n) : r.add(n), h.Zr.updateSetting(Array.from(r)), u.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: b.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [t, n]);

    function x(e, t) {
        u.default.track(A.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    }

    function L(e, t) {
        !e && (0, p.w)() ? s.A.showAgeVerificationGetStartedModal({
            entryPoint: o.q1.MESSAGE_REQUESTS_SETTINGS
        }) : t ? D(e) : j(!e)
    }

    function j(e) {
        let t = () => {
                h.YX.updateSetting(e), h.Zr.updateSetting(e ? c.A.getGuildIds() : []), x(e, !0)
            },
            n = () => {
                h.YX.updateSetting(e), x(e, !1)
            };
        (0, y.O)({
            header: I.intl.string(I.t.yAfu1p),
            body: I.intl.string(I.t.Ry2z74),
            confirmText: I.intl.string(I.t.gm1Vej),
            cancelText: I.intl.string(I.t.p89ACt),
            confirmButtonColor: a.$n.Colors.BRAND,
            onConfirm: n,
            onCancel: t
        })
    }
    return (0, r.jsx)(g.h, {
        setting: v.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: O.d1.MESSAGE_REQUESTS_V2,
        children: "0" === n ? (0, r.jsx)(E.Ay, {
            title: I.intl.string(I.t["3o2ojh"]),
            value: !C && !R,
            onChange: e => L(e, !1),
            disabled: C || w,
            tooltipText: w ? I.intl.string(S.default["6Af/cw"]) : void 0,
            note: I.intl.format(I.t.wkm9a3, {
                helpdeskArticle: d.A.getArticleURL(A.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, r.jsx)(E.Ay, {
            title: I.intl.string(I.t["3o2ojh"]),
            value: !N && !P,
            onChange: e => L(e, !0),
            disabled: N,
            note: T ? I.intl.format(I.t.WpnWLc, {
                helpdeskArticle: d.A.getArticleURL(A.MVz.MESSAGE_REQUESTS)
            }) : I.intl.format(I.t.wkm9a3, {
                helpdeskArticle: d.A.getArticleURL(A.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function C(e) {
    let {
        ingress: t = O.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, m.Tx)();
    return (0, r.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : i
    })
}