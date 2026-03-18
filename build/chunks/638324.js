/** chunk id: 638324 params = (module,exports,require) **/
e.d(_, {
    A: () => c
});
var E = e(627968),
    A = e(64700),
    I = e(421380),
    S = e(935649),
    T = e(847599),
    n = e(171316),
    C = e(71393),
    R = e(954571),
    i = e(975571),
    l = e(115063),
    r = e(152076),
    u = e(762183),
    N = e(253932),
    d = e(112469),
    s = e(871930),
    O = e(578746),
    V = e(997913),
    a = e(542457),
    D = e(355097),
    o = e(531525);
e(820575);
var P = e(652215),
    G = e(985018),
    Y = e(842130);

function L(t) {
    let {
        ingress: _,
        guildId: e
    } = t, D = (0, d.q9)(), L = (0, u.K)(), c = N.$s.useSetting().includes(e), g = (0, n.uM)(), M = N.YX.useSetting(), U = N.Zr.useSetting().includes(e), F = A.useCallback(t => {
        let E = (0, l.xo)();
        t ? E.delete(e) : E.add(e), N.Zr.updateSetting(Array.from(E)), R.default.track(P.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: a.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: _,
            guild_id: e
        })
    }, [_, e]);

    function f(t, _) {
        R.default.track(P.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: _
        })
    }

    function x(t, _) {
        var e;
        !t && (0, r.w)() ? S.A.showAgeVerificationGetStartedModal({
            entryPoint: T.q1.MESSAGE_REQUESTS_SETTINGS
        }) : _ ? F(t) : (e = !t, (0, V.O)({
            header: G.intl.string(G.t.yAfu1p),
            body: G.intl.string(G.t.Ry2z74),
            confirmText: G.intl.string(G.t.gm1Vej),
            cancelText: G.intl.string(G.t.p89ACt),
            confirmButtonColor: I.$n.Colors.BRAND,
            onConfirm: () => {
                N.YX.updateSetting(e), f(e, !1)
            },
            onCancel: () => {
                N.YX.updateSetting(e), N.Zr.updateSetting(e ? C.A.getGuildIds() : []), f(e, !0)
            }
        }))
    }
    return (0, E.jsx)(s.h, {
        setting: o.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        children: "0" === e ? (0, E.jsx)(O.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !L && !M,
            onChange: t => x(t, !1),
            disabled: L || g,
            tooltipText: g ? G.intl.string(Y.default["6Af/cw"]) : void 0,
            note: G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: i.A.getArticleURL(P.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, E.jsx)(O.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !c && !U,
            onChange: t => x(t, !0),
            disabled: c,
            note: D ? G.intl.format(G.t.WpnWLc, {
                helpdeskArticle: i.A.getArticleURL(P.MVz.MESSAGE_REQUESTS)
            }) : G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: i.A.getArticleURL(P.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function c(t) {
    let {
        ingress: _ = D.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: e
    } = t, A = (0, d.Tx)();
    return (0, E.jsx)(L, {
        ingress: _,
        guildId: e ?? A
    })
}