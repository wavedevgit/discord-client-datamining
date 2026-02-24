/** chunk id: 421248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => E
}), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    a = n(935649),
    l = n(847599),
    r = n(390248),
    o = n(632119),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    A = n(639383),
    g = n(355097),
    h = n(531525),
    x = n(985018),
    p = n(870236);

function E() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, d.G)(),
        {
            explicitContentGuilds: E,
            explicitContentFriendDm: C,
            explicitContentNonFriendDm: T
        } = (0, c.R)(),
        S = e => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW) ? a.A.showAgeVerificationGetStartedModal({
                entryPoint: l.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.Jz)(e)
        },
        I = [{
            value: s.TO.BLUR,
            label: x.intl.string(x.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: x.intl.string(x.t["D/157Y"])
        }],
        f = [{
            value: s.TO.BLUR,
            label: x.intl.string(x.t.S49Uad)
        }],
        N = {
            value: s.TO.SHOW,
            label: x.intl.string(x.t["5k5OFp"])
        };
    e && (I.unshift(N), f.unshift(N));
    let b = {
        isDisabled: n,
        tooltipText: t ? x.intl.string(p.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(m.E, {
        setting: h.H.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: g.d1.EXPLICIT_MEDIA_REDACTION_V2,
        description: x.intl.string(x.t.Wnojv1),
        children: [(0, i.jsx)(A.A, {
            title: x.intl.string(x.t["+uI23H"]),
            value: C,
            onChange: e => S({
                explicitContentFriendDm: e
            }),
            options: I,
            ...b
        }), (0, i.jsx)(A.A, {
            title: x.intl.string(x.t["Yh+HX1"]),
            value: T,
            onChange: e => S({
                explicitContentNonFriendDm: e
            }),
            options: I,
            ...b
        }), (0, i.jsx)(A.A, {
            title: x.intl.string(x.t["FP+a42"]),
            value: E,
            onChange: e => S({
                explicitContentGuilds: e
            }),
            isDisabled: !e || n,
            tooltipText: t ? x.intl.string(p.default["6Af/cw"]) : void 0,
            options: f
        })]
    })
}