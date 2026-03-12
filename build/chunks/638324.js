/** chunk id: 638324 params = (module,exports,require) **/
A.d(_, {
    A: () => U
});
var I = A(627968),
    T = A(64700),
    S = A(421380),
    t = A(935649),
    e = A(847599),
    C = A(171316),
    O = A(71393),
    R = A(954571),
    n = A(975571),
    N = A(115063),
    P = A(152076),
    i = A(762183),
    l = A(253932),
    r = A(112469),
    D = A(871930),
    V = A(578746),
    L = A(997913),
    u = A(542457),
    s = A(355097),
    d = A(531525);
A(820575);
var a = A(652215),
    G = A(985018),
    o = A(870236);

function Y(E) {
    let {
        ingress: _,
        guildId: A
    } = E, Y = (0, r.q9)(), U = (0, i.K)(), c = l.$s.useSetting().includes(A), g = (0, C.uM)(), M = l.YX.useSetting(), F = l.Zr.useSetting().includes(A), f = T.useCallback(E => {
        let I = (0, N.xo)();
        E ? I.delete(A) : I.add(A), l.Zr.updateSetting(Array.from(I)), R.default.track(a.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: u.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: _,
            guild_id: A
        })
    }, [_, A]);

    function H(E, _) {
        R.default.track(a.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: E,
            applied_to_existing_guilds: _
        })
    }

    function m(E, _) {
        var A;
        !E && (0, P.w)() ? t.A.showAgeVerificationGetStartedModal({
            entryPoint: e.q1.MESSAGE_REQUESTS_SETTINGS
        }) : _ ? f(E) : (A = !E, (0, L.O)({
            header: G.intl.string(G.t.yAfu1p),
            body: G.intl.string(G.t.Ry2z74),
            confirmText: G.intl.string(G.t.gm1Vej),
            cancelText: G.intl.string(G.t.p89ACt),
            confirmButtonColor: S.$n.Colors.BRAND,
            onConfirm: () => {
                l.YX.updateSetting(A), H(A, !1)
            },
            onCancel: () => {
                l.YX.updateSetting(A), l.Zr.updateSetting(A ? O.A.getGuildIds() : []), H(A, !0)
            }
        }))
    }
    return (0, I.jsx)(D.h, {
        setting: d.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: s.d1.MESSAGE_REQUESTS_V2,
        children: "0" === A ? (0, I.jsx)(V.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !U && !M,
            onChange: E => m(E, !1),
            disabled: U || g,
            tooltipText: g ? G.intl.string(o.default["6Af/cw"]) : void 0,
            note: G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: n.A.getArticleURL(a.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, I.jsx)(V.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !c && !F,
            onChange: E => m(E, !0),
            disabled: c,
            note: Y ? G.intl.format(G.t.WpnWLc, {
                helpdeskArticle: n.A.getArticleURL(a.MVz.MESSAGE_REQUESTS)
            }) : G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: n.A.getArticleURL(a.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function U(E) {
    let {
        ingress: _ = s.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = E, T = (0, r.Tx)();
    return (0, I.jsx)(Y, {
        ingress: _,
        guildId: A ?? T
    })
}