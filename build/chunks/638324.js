/** Chunk was on 5606 **/
/** chunk id: 638324, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
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
    p = n(115063),
    _ = n(152076),
    m = n(762183),
    g = n(253932),
    f = n(112469),
    b = n(871930),
    h = n(578746),
    A = n(997913),
    E = n(542457),
    x = n(355097),
    O = n(531525);
n(820575);
var C = n(652215),
    y = n(985018),
    j = n(842130);

function T(e) {
    let {
        ingress: t,
        guildId: n
    } = e, T = (0, f.q9)(), v = (0, m.K)(), S = g.$s.useSetting().includes(n), I = (0, o.uM)(), N = g.YX.useSetting(), P = g.Zr.useSetting().includes(n), R = i.useCallback(e => {
        let r = (0, p.xo)();
        e ? r.delete(n) : r.add(n), g.Zr.updateSetting(Array.from(r)), d.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: E.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [t, n]);

    function D(e, t) {
        d.default.track(C.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        })
    }

    function w(e, t) {
        var n;
        !e && (0, _.w)() ? s.A.showAgeVerificationGetStartedModal({
            entryPoint: a.q1.MESSAGE_REQUESTS_SETTINGS
        }) : t ? R(e) : (n = !e, (0, A.O)({
            header: y.intl.string(y.t.yAfu1p),
            body: y.intl.string(y.t.Ry2z74),
            confirmText: y.intl.string(y.t.gm1Vej),
            cancelText: y.intl.string(y.t.p89ACt),
            confirmButtonColor: l.$n.Colors.BRAND,
            onConfirm: () => {
                g.YX.updateSetting(n), D(n, !1)
            },
            onCancel: () => {
                g.YX.updateSetting(n), g.Zr.updateSetting(n ? c.A.getGuildIds() : []), D(n, !0)
            }
        }))
    }
    return (0, r.jsx)(b.h, {
        setting: O.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: x.d1.MESSAGE_REQUESTS_V2,
        children: "0" === n ? (0, r.jsx)(h.Ay, {
            title: y.intl.string(y.t["3o2ojh"]),
            value: !v && !N,
            onChange: e => w(e, !1),
            disabled: v || I,
            tooltipText: I ? y.intl.string(j.default["6Af/cw"]) : void 0,
            note: y.intl.format(y.t.wkm9a3, {
                helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
            })
        }) : (0, r.jsx)(h.Ay, {
            title: y.intl.string(y.t["3o2ojh"]),
            value: !S && !P,
            onChange: e => w(e, !0),
            disabled: S,
            note: T ? y.intl.format(y.t.WpnWLc, {
                helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
            }) : y.intl.format(y.t.wkm9a3, {
                helpdeskArticle: u.A.getArticleURL(C.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}

function v(e) {
    let {
        ingress: t = x.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, f.Tx)();
    return (0, r.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : i
    })
}