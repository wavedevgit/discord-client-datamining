/** chunk id: 638324 params = (module,exports,require) **/
A.d(t, {
    A: () => L
});
var E = A(627968),
    e = A(64700),
    C = A(421380),
    T = A(935649),
    I = A(847599),
    S = A(171316),
    n = A(71393),
    R = A(954571),
    i = A(975571),
    l = A(115063),
    r = A(152076),
    N = A(762183),
    O = A(253932),
    u = A(112469),
    s = A(871930),
    d = A(578746),
    a = A(997913),
    o = A(542457),
    D = A(355097),
    P = A(531525);
A(820575);
var V = A(652215),
    G = A(985018),
    Y = A(870236);

function c(_) {
    let {
        ingress: t,
        guildId: A
    } = _, c = (0, u.q9)(), L = (0, N.K)(), g = O.$s.useSetting().includes(A), U = (0, S.uM)(), M = O.YX.useSetting(), F = O.Zr.useSetting().includes(A), f = e.useCallback(_ => {
        let E = (0, l.xo)();
        _ ? E.delete(A) : E.add(A), O.Zr.updateSetting(Array.from(E)), R.default.track(V.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: o.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: t,
            guild_id: A
        })
    }, [t, A]);

    function m(_, t) {
        R.default.track(V.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: _,
            applied_to_existing_guilds: t
        })
    }

    function H(_, t) {
        var A;
        !_ && (0, r.w)() ? T.A.showAgeVerificationGetStartedModal({
            entryPoint: I.q1.MESSAGE_REQUESTS_SETTINGS
        }) : t ? f(_) : (A = !_, (0, a.O)({
            header: G.intl.string(G.t.yAfu1p),
            body: G.intl.string(G.t.Ry2z74),
            confirmText: G.intl.string(G.t.gm1Vej),
            cancelText: G.intl.string(G.t.p89ACt),
            confirmButtonColor: C.$n.Colors.BRAND,
            onConfirm: () => {
                O.YX.updateSetting(A), m(A, !1)
            },
            onCancel: () => {
                O.YX.updateSetting(A), O.Zr.updateSetting(A ? n.A.getGuildIds() : []), m(A, !0)
            }
        }))
    }
    return (0, E.jsx)(s.h, {
        setting: P.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: D.d1.MESSAGE_REQUESTS_V2,
        children: "0" === A ? (0, E.jsx)(d.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !L && !M,
            onChange: _ => H(_, !1),
            disabled: L || U,
            tooltipText: U ? G.intl.string(Y.default["6Af/cw"]) : void 0,
            note: G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: i.A.getArticleURL(V.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, E.jsx)(d.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !g && !F,
            onChange: _ => H(_, !0),
            disabled: g,
            note: c ? G.intl.format(G.t.WpnWLc, {
                helpdeskArticle: i.A.getArticleURL(V.MVz.MESSAGE_REQUESTS)
            }) : G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: i.A.getArticleURL(V.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function L(_) {
    let {
        ingress: t = D.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = _, e = (0, u.Tx)();
    return (0, E.jsx)(c, {
        ingress: t,
        guildId: A ?? e
    })
}