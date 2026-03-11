/** chunk id: 42765 params = (module,exports,require) **/
n.d(t, {
    q: () => x
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
    _ = n(945276),
    g = n(86689),
    A = n(639383),
    m = n(531525),
    h = n(985018),
    p = n(842130);

function x() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, c.G)(),
        {
            goreContentGuilds: x,
            goreContentFriendDm: E,
            goreContentNonFriendDm: T
        } = (0, d.g)(),
        S = e => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: a.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.qY)(e)
        },
        C = [{
            value: s.TO.BLUR,
            label: h.intl.string(h.t.S49Uad)
        }, {
            value: s.TO.BLOCK,
            label: h.intl.string(h.t["D/157Y"])
        }],
        I = [{
            value: s.TO.BLUR,
            label: h.intl.string(h.t.S49Uad)
        }],
        f = {
            value: s.TO.SHOW,
            label: h.intl.string(h.t["5k5OFp"])
        };
    e && (C.unshift(f), I.unshift(f));
    let N = {
        isDisabled: n,
        tooltipText: t ? h.intl.string(p.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(g.E, {
        setting: m.H.GORE_MEDIA_REDACTION,
        description: h.intl.string(h.t.XgH9eh),
        children: [(0, i.jsx)(A.A, {
            title: h.intl.string(h.t["+uI23H"]),
            value: E,
            onChange: e => S({
                goreContentFriendDm: e
            }),
            options: C,
            ...N
        }), (0, i.jsx)(A.A, {
            title: h.intl.string(h.t["Yh+HX1"]),
            value: T,
            onChange: e => S({
                goreContentNonFriendDm: e
            }),
            options: C,
            ...N
        }), (0, i.jsx)(A.A, {
            title: h.intl.string(h.t["FP+a42"]),
            value: x,
            onChange: e => S({
                goreContentGuilds: e
            }),
            isDisabled: !e || n,
            options: I,
            tooltipText: t ? h.intl.string(p.default["6Af/cw"]) : void 0
        })]
    })
}