/** Chunk was on 2827 **/
/** chunk id: 638324, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    l = n(421380),
    s = n(935649),
    a = n(847599),
    o = n(171316),
    c = n(71393),
    d = n(954571),
    u = n(975571),
    _ = n(115063),
    p = n(152076),
    m = n(762183),
    g = n(253932),
    A = n(112469),
    f = n(871930),
    b = n(578746),
    h = n(997913),
    E = n(542457),
    O = n(355097),
    C = n(531525);
n(820575);
var x = n(652215),
    S = n(985018),
    T = n(842130);

function I(e) {
    let {
        ingress: t,
        guildId: n
    } = e, I = (0, A.q9)(), y = (0, m.K)(), N = g.$s.useSetting().includes(n), j = (0, o.uM)(), v = g.YX.useSetting(), P = g.Zr.useSetting().includes(n), R = i.useCallback(e => {
        let r = (0, _.xo)();
        e ? r.delete(n) : r.add(n), g.Zr.updateSetting(Array.from(r)), d.default.track(x.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [t, n]);

    function D(e, t) {
        d.default.track(x.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    }

    function L(e, t) {
        var n;
        !e && (0, p.w)() ? s.A.showAgeVerificationGetStartedModal({
            entryPoint: a.q1.MESSAGE_REQUESTS_SETTINGS
        }) : t ? R(e) : (n = !e, (0, h.O)({
            header: S.intl.string(S.t.yAfu1p),
            body: S.intl.string(S.t.Ry2z74),
            confirmText: S.intl.string(S.t.gm1Vej),
            cancelText: S.intl.string(S.t.p89ACt),
            confirmButtonColor: l.$n.Colors.BRAND,
            onConfirm: () => {
                g.YX.updateSetting(n), D(n, !1)
            },
            onCancel: () => {
                g.YX.updateSetting(n), g.Zr.updateSetting(n ? c.A.getGuildIds() : []), D(n, !0)
            }
        }))
    }
    return (0, r.jsx)(f.h, {
        setting: C.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: O.d1.MESSAGE_REQUESTS_V2,
        children: "0" === n ? (0, r.jsx)(b.Ay, {
            title: S.intl.string(S.t["3o2ojh"]),
            value: !y && !v,
            onChange: e => L(e, !1),
            disabled: y || j,
            tooltipText: j ? S.intl.string(T.default["6Af/cw"]) : void 0,
            note: S.intl.format(S.t.wkm9a3, {
                helpdeskArticle: u.A.getArticleURL(x.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, r.jsx)(b.Ay, {
            title: S.intl.string(S.t["3o2ojh"]),
            value: !N && !P,
            onChange: e => L(e, !0),
            disabled: N,
            note: I ? S.intl.format(S.t.WpnWLc, {
                helpdeskArticle: u.A.getArticleURL(x.MVz.MESSAGE_REQUESTS)
            }) : S.intl.format(S.t.wkm9a3, {
                helpdeskArticle: u.A.getArticleURL(x.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function y(e) {
    let {
        ingress: t = O.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, A.Tx)();
    return (0, r.jsx)(I, {
        ingress: t,
        guildId: null != n ? n : i
    })
}