/** Chunk was on 5606 **/
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
    p = n(945276),
    _ = n(86689),
    m = n(639383),
    g = n(355097),
    f = n(531525),
    b = n(985018),
    h = n(842130);

function A(e) {
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
    let t = null == (e = (0, p.A)()) || e,
        n = (0, u.uM)(),
        E = (0, d.G)(),
        {
            explicitContentGuilds: x,
            explicitContentFriendDm: O,
            explicitContentNonFriendDm: C
        } = (0, c.R)(),
        y = e => {
            let t = Object.values(e);
            (0, a.hK)() && t.includes(i.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.Jz)(e)
        },
        j = [{
            value: i.TO.BLUR,
            label: b.intl.string(b.t.S49Uad)
        }, {
            value: i.TO.BLOCK,
            label: b.intl.string(b.t["D/157Y"])
        }],
        T = [{
            value: i.TO.BLUR,
            label: b.intl.string(b.t.S49Uad)
        }],
        v = {
            value: i.TO.SHOW,
            label: b.intl.string(b.t["5k5OFp"])
        };
    t && (j.unshift(v), T.unshift(v));
    let S = {
        isDisabled: E,
        tooltipText: n ? b.intl.string(h.default["6Af/cw"]) : void 0
    };
    return (0, r.jsxs)(_.E, {
        setting: f.H.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: g.d1.EXPLICIT_MEDIA_REDACTION_V2,
        description: b.intl.string(b.t.Wnojv1),
        children: [(0, r.jsx)(m.A, A({
            title: b.intl.string(b.t["+uI23H"]),
            value: O,
            onChange: e => y({
                explicitContentFriendDm: e
            }),
            options: j
        }, S)), (0, r.jsx)(m.A, A({
            title: b.intl.string(b.t["Yh+HX1"]),
            value: C,
            onChange: e => y({
                explicitContentNonFriendDm: e
            }),
            options: j
        }, S)), (0, r.jsx)(m.A, {
            title: b.intl.string(b.t["FP+a42"]),
            value: x,
            onChange: e => y({
                explicitContentGuilds: e
            }),
            isDisabled: !t || E,
            tooltipText: n ? b.intl.string(h.default["6Af/cw"]) : void 0,
            options: T
        })]
    })
}