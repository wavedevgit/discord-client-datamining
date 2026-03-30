/** chunk id: 639491 params = (module,exports,require) **/
n.d(t, {
    q: () => h
}), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    a = n(847599),
    r = n(390248),
    o = n(444802),
    d = n(278616),
    c = n(771888),
    u = n(171316),
    m = n(945276),
    _ = n(562783),
    g = n(290389),
    A = n(985018),
    x = n(842130);

function h() {
    let e = (0, m.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        {
            goreContentGuilds: h,
            goreContentFriendDm: p,
            goreContentNonFriendDm: T
        } = (0, d.g)(),
        f = e => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.qY)(e)
        },
        S = [{
            value: s.TO.BLUR,
            label: A.intl.string(A.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: A.intl.string(A.t["D/157Y"])
        }],
        E = [{
            value: s.TO.BLUR,
            label: A.intl.string(A.t.S49Uad)
        }],
        b = {
            value: s.TO.SHOW,
            label: A.intl.string(A.t["5k5OFp"])
        };
    e && (S.unshift(b), E.unshift(b));
    let C = {
        isDisabled: n,
        tooltipText: t ? A.intl.string(x.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(_.E, {
        description: A.intl.string(A.t.XgH9eh),
        children: [(0, i.jsx)(g.A, {
            title: A.intl.string(A.t["+uI23H"]),
            value: p,
            onChange: e => f({
                goreContentFriendDm: e
            }),
            options: S,
            ...C
        }), (0, i.jsx)(g.A, {
            title: A.intl.string(A.t["Yh+HX1"]),
            value: T,
            onChange: e => f({
                goreContentNonFriendDm: e
            }),
            options: S,
            ...C
        }), (0, i.jsx)(g.A, {
            title: A.intl.string(A.t["FP+a42"]),
            value: h,
            onChange: e => f({
                goreContentGuilds: e
            }),
            isDisabled: !e || n,
            options: E,
            tooltipText: t ? A.intl.string(x.default["6Af/cw"]) : void 0
        })]
    })
}