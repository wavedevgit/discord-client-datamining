/** chunk id: 421248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => E
}), n(667532);
var r = n(627968);
n(64700);
var i = n(873298),
    l = n(935649),
    s = n(847599),
    a = n(390248),
    o = n(632119),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    _ = n(945276),
    p = n(86689),
    m = n(639383),
    g = n(355097),
    A = n(531525),
    f = n(985018),
    b = n(842130);

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function E() {
    var e;
    let t = null == (e = (0, _.A)()) || e,
        n = (0, u.uM)(),
        E = (0, d.G)(),
        {
            explicitContentGuilds: O,
            explicitContentFriendDm: x,
            explicitContentNonFriendDm: C
        } = (0, c.R)(),
        S = e => {
            let t = Object.values(e);
            (0, a.hK)() && t.includes(i.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.Jz)(e)
        },
        T = [{
            value: i.TO.BLUR,
            label: f.intl.string(f.t.S49Uad)
        }, {
            value: i.TO.BLOCK,
            label: f.intl.string(f.t["D/157Y"])
        }],
        I = [{
            value: i.TO.BLUR,
            label: f.intl.string(f.t.S49Uad)
        }],
        N = {
            value: i.TO.SHOW,
            label: f.intl.string(f.t["5k5OFp"])
        };
    t && (T.unshift(N), I.unshift(N));
    let j = {
        isDisabled: E,
        tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : void 0
    };
    return (0, r.jsxs)(p.E, {
        setting: A.H.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: g.d1.EXPLICIT_MEDIA_REDACTION_V2,
        description: f.intl.string(f.t.Wnojv1),
        children: [(0, r.jsx)(m.A, h({
            title: f.intl.string(f.t["+uI23H"]),
            value: x,
            onChange: e => S({
                explicitContentFriendDm: e
            }),
            options: T
        }, j)), (0, r.jsx)(m.A, h({
            title: f.intl.string(f.t["Yh+HX1"]),
            value: C,
            onChange: e => S({
                explicitContentNonFriendDm: e
            }),
            options: T
        }, j)), (0, r.jsx)(m.A, {
            title: f.intl.string(f.t["FP+a42"]),
            value: O,
            onChange: e => S({
                explicitContentGuilds: e
            }),
            isDisabled: !t || E,
            tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : void 0,
            options: I
        })]
    })
}