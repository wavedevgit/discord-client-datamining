/** Chunk was on web.js **/
/** chunk id: 42765, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => b
}), n(667532);
var r = n(627968);
n(64700);
var i = n(873298),
    a = n(935649),
    s = n(847599),
    o = n(390248),
    l = n(444802),
    c = n(278616),
    u = n(771888),
    d = n(171316),
    f = n(945276),
    p = n(86689),
    _ = n(639383),
    h = n(531525),
    m = n(985018),
    g = n(842130);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b() {
    var e;
    let t = null == (e = (0, f.A)()) || e,
        n = (0, d.uM)(),
        E = (0, u.G)(),
        {
            goreContentGuilds: b,
            goreContentFriendDm: O,
            goreContentNonFriendDm: v
        } = (0, c.g)(),
        A = e => {
            let t = Object.values(e);
            (0, o.hK)() && t.includes(i.TO.SHOW) ? a.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, l.qY)(e)
        },
        I = [{
            value: i.TO.BLUR,
            label: m.intl.string(m.t.S49Uad)
        }, {
            value: i.TO.BLOCK,
            label: m.intl.string(m.t["D/157Y"])
        }],
        S = [{
            value: i.TO.BLUR,
            label: m.intl.string(m.t.S49Uad)
        }],
        T = {
            value: i.TO.SHOW,
            label: m.intl.string(m.t["5k5OFp"])
        };
    t && (I.unshift(T), S.unshift(T));
    let C = {
        isDisabled: E,
        tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : void 0
    };
    return (0, r.jsxs)(p.E, {
        setting: h.H.GORE_MEDIA_REDACTION,
        description: m.intl.string(m.t.XgH9eh),
        children: [(0, r.jsx)(_.A, y({
            title: m.intl.string(m.t["+uI23H"]),
            value: O,
            onChange: e => A({
                goreContentFriendDm: e
            }),
            options: I
        }, C)), (0, r.jsx)(_.A, y({
            title: m.intl.string(m.t["Yh+HX1"]),
            value: v,
            onChange: e => A({
                goreContentNonFriendDm: e
            }),
            options: I
        }, C)), (0, r.jsx)(_.A, {
            title: m.intl.string(m.t["FP+a42"]),
            value: b,
            onChange: e => A({
                goreContentGuilds: e
            }),
            isDisabled: !t || E,
            options: S,
            tooltipText: n ? m.intl.string(g.default["6Af/cw"]) : void 0
        })]
    })
}