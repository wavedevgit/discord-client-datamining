/** chunk id: 42765 params = (module,exports,require) **/
n.d(t, {
    q: () => p
}), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(935649),
    r = n(847599),
    a = n(390248),
    o = n(444802),
    d = n(278616),
    c = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    g = n(639383),
    A = n(531525),
    h = n(985018),
    x = n(870236);

function p() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        {
            goreContentGuilds: p,
            goreContentFriendDm: T,
            goreContentNonFriendDm: E
        } = (0, d.g)(),
        C = e => {
            let t = Object.values(e);
            (0, a.hK)() && t.includes(s.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: r.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.qY)(e)
        },
        S = [{
            value: s.TO.BLUR,
            label: h.intl.string(h.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: h.intl.string(h.t["D/157Y"])
        }],
        f = [{
            value: s.TO.BLUR,
            label: h.intl.string(h.t.S49Uad)
        }],
        N = {
            value: s.TO.SHOW,
            label: h.intl.string(h.t["5k5OFp"])
        };
    e && (S.unshift(N), f.unshift(N));
    let b = {
        isDisabled: n,
        tooltipText: t ? h.intl.string(x.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(m.E, {
        setting: A.H.GORE_MEDIA_REDACTION,
        description: h.intl.string(h.t.XgH9eh),
        children: [(0, i.jsx)(g.A, {
            title: h.intl.string(h.t["+uI23H"]),
            value: T,
            onChange: e => C({
                goreContentFriendDm: e
            }),
            options: S,
            ...b
        }), (0, i.jsx)(g.A, {
            title: h.intl.string(h.t["Yh+HX1"]),
            value: E,
            onChange: e => C({
                goreContentNonFriendDm: e
            }),
            options: S,
            ...b
        }), (0, i.jsx)(g.A, {
            title: h.intl.string(h.t["FP+a42"]),
            value: p,
            onChange: e => C({
                goreContentGuilds: e
            }),
            isDisabled: !e || n,
            options: f,
            tooltipText: t ? h.intl.string(x.default["6Af/cw"]) : void 0
        })]
    })
}