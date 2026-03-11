/** chunk id: 421248 params = (module,exports,require) **/
n.d(t, {
    Z: () => E
}), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    a = n(847599),
    r = n(390248),
    o = n(632119),
    d = n(278616),
    c = n(771888),
    u = n(171316),
    _ = n(945276),
    g = n(86689),
    A = n(639383),
    m = n(355097),
    h = n(531525),
    p = n(985018),
    x = n(842130);

function E() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        {
            explicitContentGuilds: E,
            explicitContentFriendDm: T,
            explicitContentNonFriendDm: S
        } = (0, d.R)(),
        C = e => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.Jz)(e)
        },
        I = [{
            value: s.TO.BLUR,
            label: p.intl.string(p.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: p.intl.string(p.t["D/157Y"])
        }],
        f = [{
            value: s.TO.BLUR,
            label: p.intl.string(p.t.S49Uad)
        }],
        N = {
            value: s.TO.SHOW,
            label: p.intl.string(p.t["5k5OFp"])
        };
    e && (I.unshift(N), f.unshift(N));
    let b = {
        isDisabled: n,
        tooltipText: t ? p.intl.string(x.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(g.E, {
        setting: h.H.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: m.d1.EXPLICIT_MEDIA_REDACTION_V2,
        description: p.intl.string(p.t.Wnojv1),
        children: [(0, i.jsx)(A.A, {
            title: p.intl.string(p.t["+uI23H"]),
            value: T,
            onChange: e => C({
                explicitContentFriendDm: e
            }),
            options: I,
            ...b
        }), (0, i.jsx)(A.A, {
            title: p.intl.string(p.t["Yh+HX1"]),
            value: S,
            onChange: e => C({
                explicitContentNonFriendDm: e
            }),
            options: I,
            ...b
        }), (0, i.jsx)(A.A, {
            title: p.intl.string(p.t["FP+a42"]),
            value: E,
            onChange: e => C({
                explicitContentGuilds: e
            }),
            isDisabled: !e || n,
            tooltipText: t ? p.intl.string(x.default["6Af/cw"]) : void 0,
            options: f
        })]
    })
}