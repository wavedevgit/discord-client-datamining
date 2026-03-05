/** chunk id: 638324, original params: E,_,I (module,exports,require) **/
I.d(_, {
    A: () => U
});
var S = I(627968),
    A = I(64700),
    T = I(421380),
    C = I(935649),
    O = I(847599),
    t = I(171316),
    e = I(71393),
    R = I(954571),
    N = I(975571),
    n = I(115063),
    P = I(152076),
    D = I(762183),
    L = I(253932),
    i = I(112469),
    l = I(871930),
    r = I(578746),
    V = I(997913),
    Y = I(542457),
    G = I(355097),
    u = I(531525);
I(820575);
var s = I(652215),
    d = I(985018),
    a = I(842130);

function o(E) {
    let {
        ingress: _,
        guildId: I
    } = E, o = (0, i.q9)(), U = (0, D.K)(), M = L.$s.useSetting().includes(I), c = (0, t.uM)(), g = L.YX.useSetting(), B = L.Zr.useSetting().includes(I), F = A.useCallback(E => {
        let S = (0, n.xo)();
        E ? S.delete(I) : S.add(I), L.Zr.updateSetting(Array.from(S)), R.default.track(s.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: Y.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: _,
            guild_id: I
        })
    }, [_, I]);

    function H(E, _) {
        R.default.track(s.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: E,
            applied_to_existing_guilds: _
        })
    }

    function f(E, _) {
        var I;
        !E && (0, P.w)() ? C.A.showAgeVerificationGetStartedModal({
            entryPoint: O.q1.MESSAGE_REQUESTS_SETTINGS
        }) : _ ? F(E) : (I = !E, (0, V.O)({
            header: d.intl.string(d.t.yAfu1p),
            body: d.intl.string(d.t.Ry2z74),
            confirmText: d.intl.string(d.t.gm1Vej),
            cancelText: d.intl.string(d.t.p89ACt),
            confirmButtonColor: T.$n.Colors.BRAND,
            onConfirm: () => {
                L.YX.updateSetting(I), H(I, !1)
            },
            onCancel: () => {
                L.YX.updateSetting(I), L.Zr.updateSetting(I ? e.A.getGuildIds() : []), H(I, !0)
            }
        }))
    }
    return (0, S.jsx)(l.h, {
        setting: u.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: G.d1.MESSAGE_REQUESTS_V2,
        children: "0" === I ? (0, S.jsx)(r.Ay, {
            title: d.intl.string(d.t["3o2ojh"]),
            value: !U && !g,
            onChange: E => f(E, !1),
            disabled: U || c,
            tooltipText: c ? d.intl.string(a.default["6Af/cw"]) : void 0,
            note: d.intl.format(d.t.wkm9a3, {
                helpdeskArticle: N.A.getArticleURL(s.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, S.jsx)(r.Ay, {
            title: d.intl.string(d.t["3o2ojh"]),
            value: !M && !B,
            onChange: E => f(E, !0),
            disabled: M,
            note: o ? d.intl.format(d.t.WpnWLc, {
                helpdeskArticle: N.A.getArticleURL(s.MVz.MESSAGE_REQUESTS)
            }) : d.intl.format(d.t.wkm9a3, {
                helpdeskArticle: N.A.getArticleURL(s.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function U(E) {
    let {
        ingress: _ = G.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, A = (0, i.Tx)();
    return (0, S.jsx)(o, {
        ingress: _,
        guildId: I ?? A
    })
}