/** chunk id: 42765, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => p
}), n(667532);
var i = n(627968);
n(64700);
var s = n(873298),
    a = n(935649),
    l = n(847599),
    r = n(390248),
    o = n(444802),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    _ = n(945276),
    m = n(86689),
    A = n(639383),
    g = n(531525),
    h = n(985018),
    x = n(842130);

function p() {
    let e = (0, _.A)() ?? !0,
        t = (0, u.uM)(),
        n = (0, d.G)(),
        {
            goreContentGuilds: p,
            goreContentFriendDm: E,
            goreContentNonFriendDm: C
        } = (0, c.g)(),
        T = e => {
            let t = Object.values(e);
            (0, r.hK)() && t.includes(s.TO.SHOW) ? a.A.showAgeVerificationGetStartedModal({
                entryPoint: l.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.qY)(e)
        },
        S = [{
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
    e && (S.unshift(f), I.unshift(f));
    let N = {
        isDisabled: n,
        tooltipText: t ? h.intl.string(x.default["6Af/cw"]) : void 0
    };
    return (0, i.jsxs)(m.E, {
        setting: g.H.GORE_MEDIA_REDACTION,
        description: h.intl.string(h.t.XgH9eh),
        children: [(0, i.jsx)(A.A, {
            title: h.intl.string(h.t["+uI23H"]),
            value: E,
            onChange: e => T({
                goreContentFriendDm: e
            }),
            options: S,
            ...N
        }), (0, i.jsx)(A.A, {
            title: h.intl.string(h.t["Yh+HX1"]),
            value: C,
            onChange: e => T({
                goreContentNonFriendDm: e
            }),
            options: S,
            ...N
        }), (0, i.jsx)(A.A, {
            title: h.intl.string(h.t["FP+a42"]),
            value: p,
            onChange: e => T({
                goreContentGuilds: e
            }),
            isDisabled: !e || n,
            options: I,
            tooltipText: t ? h.intl.string(x.default["6Af/cw"]) : void 0
        })]
    })
}