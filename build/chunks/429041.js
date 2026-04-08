/** chunk id: 429041 params = (module,exports,require) **/
n.d(t, {
    Z: () => h
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
    m = n(945276),
    g = n(562783),
    _ = n(290389),
    x = n(985018),
    A = n(870236);

function h() {
    let e = (0, m.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        {
            explicitContentGuilds: h,
            explicitContentFriendDm: p,
            explicitContentNonFriendDm: T
        } = (0, d.R)(),
        f = e => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.Jz)(e)
        },
        S = [{
            value: s.TO.BLUR,
            label: x.intl.string(x.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: x.intl.string(x.t["D/157Y"])
        }],
        b = [{
            value: s.TO.BLUR,
            label: x.intl.string(x.t.S49Uad)
        }],
        E = {
            value: s.TO.SHOW,
            label: x.intl.string(x.t["5k5OFp"])
        };
    e && (S.unshift(E), b.unshift(E));
    let C = {
        isDisabled: n,
        tooltipText: t ? x.intl.string(A.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(g.E, {
        description: x.intl.string(x.t.Wnojv1),
        children: [(0, i.jsx)(_.A, {
            title: x.intl.string(x.t["+uI23H"]),
            value: p,
            onChange: e => f({
                explicitContentFriendDm: e
            }),
            options: S,
            ...C
        }), (0, i.jsx)(_.A, {
            title: x.intl.string(x.t["Yh+HX1"]),
            value: T,
            onChange: e => f({
                explicitContentNonFriendDm: e
            }),
            options: S,
            ...C
        }), (0, i.jsx)(_.A, {
            title: x.intl.string(x.t["FP+a42"]),
            value: h,
            onChange: e => f({
                explicitContentGuilds: e
            }),
            isDisabled: !e || n,
            tooltipText: t ? x.intl.string(A.default["6Af/cw"]) : void 0,
            options: b
        })]
    })
}