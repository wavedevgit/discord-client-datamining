/** chunk id: 638324 params = (module,exports,require) **/
_.d(e, {
    A: () => g
});
var E = _(627968),
    A = _(64700),
    I = _(421380),
    n = _(935649),
    S = _(847599),
    T = _(171316),
    C = _(71393),
    i = _(954571),
    l = _(975571),
    R = _(115063),
    r = _(152076),
    u = _(762183),
    s = _(253932),
    d = _(112469),
    N = _(871930),
    a = _(578746),
    o = _(997913),
    O = _(542457),
    D = _(355097),
    V = _(531525);
_(820575);
var P = _(652215),
    G = _(985018),
    c = _(842130);

function Y(t) {
    let {
        ingress: e,
        guildId: _
    } = t, Y = (0, d.q9)(), g = (0, u.K)(), L = s.$s.useSetting().includes(_), M = (0, T.uM)(), f = s.YX.useSetting(), U = s.Zr.useSetting().includes(_), F = A.useCallback(t => {
        let E = (0, R.xo)();
        t ? E.delete(_) : E.add(_), s.Zr.updateSetting(Array.from(E)), i.default.track(P.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: O.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: e,
            guild_id: _
        })
    }, [e, _]);

    function m(t, e) {
        i.default.track(P.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e
        })
    }

    function p(t, e) {
        var _;
        !t && (0, r.w)() ? n.A.showAgeVerificationGetStartedModal({
            entryPoint: S.q1.MESSAGE_REQUESTS_SETTINGS
        }) : e ? F(t) : (_ = !t, (0, o.O)({
            header: G.intl.string(G.t.yAfu1p),
            body: G.intl.string(G.t.Ry2z74),
            confirmText: G.intl.string(G.t.gm1Vej),
            cancelText: G.intl.string(G.t.p89ACt),
            confirmButtonColor: I.$n.Colors.BRAND,
            onConfirm: () => {
                s.YX.updateSetting(_), m(_, !1)
            },
            onCancel: () => {
                s.YX.updateSetting(_), s.Zr.updateSetting(_ ? C.A.getGuildIds() : []), m(_, !0)
            }
        }))
    }
    return (0, E.jsx)(N.h, {
        setting: V.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: D.d1.MESSAGE_REQUESTS_V2,
        children: "0" === _ ? (0, E.jsx)(a.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !g && !f,
            onChange: t => p(t, !1),
            disabled: g || M,
            tooltipText: M ? G.intl.string(c.default["6Af/cw"]) : void 0,
            note: G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: l.A.getArticleURL(P.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, E.jsx)(a.Ay, {
            title: G.intl.string(G.t["3o2ojh"]),
            value: !L && !U,
            onChange: t => p(t, !0),
            disabled: L,
            note: Y ? G.intl.format(G.t.WpnWLc, {
                helpdeskArticle: l.A.getArticleURL(P.MVz.MESSAGE_REQUESTS)
            }) : G.intl.format(G.t.wkm9a3, {
                helpdeskArticle: l.A.getArticleURL(P.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function g(t) {
    let {
        ingress: e = D.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: _
    } = t, A = (0, d.Tx)();
    return (0, E.jsx)(Y, {
        ingress: e,
        guildId: _ ?? A
    })
}