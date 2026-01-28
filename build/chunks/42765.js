/** Chunk was on 5606 **/
/** chunk id: 42765, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => A
}), n(667532);
var r = n(627968);
n(64700);
var i = n(873298),
    l = n(935649),
    s = n(847599),
    a = n(390248),
    o = n(444802),
    c = n(278616),
    d = n(771888),
    u = n(171316),
    p = n(945276),
    _ = n(86689),
    m = n(639383),
    g = n(531525),
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

function A() {
    var e;
    let t = null == (e = (0, p.A)()) || e,
        n = (0, u.uM)(),
        A = (0, d.G)(),
        {
            goreContentGuilds: E,
            goreContentFriendDm: x,
            goreContentNonFriendDm: O
        } = (0, c.g)(),
        C = e => {
            let t = Object.values(e);
            (0, a.hK)() && t.includes(i.TO.SHOW) ? l.A.showAgeVerificationGetStartedModal({
                entryPoint: s.q1.SENSITIVE_MEDIA_FILTER_SETTINGS
            }) : (0, o.qY)(e)
        },
        y = [{
            value: i.TO.BLUR,
            label: f.intl.string(f.t.S49Uad)
        }, {
            value: i.TO.BLOCK,
            label: f.intl.string(f.t["D/157Y"])
        }],
        j = [{
            value: i.TO.BLUR,
            label: f.intl.string(f.t.S49Uad)
        }],
        T = {
            value: i.TO.SHOW,
            label: f.intl.string(f.t["5k5OFp"])
        };
    t && (y.unshift(T), j.unshift(T));
    let v = {
        isDisabled: A,
        tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : void 0
    };
    return (0, r.jsxs)(_.E, {
        setting: g.H.GORE_MEDIA_REDACTION,
        description: f.intl.string(f.t.XgH9eh),
        children: [(0, r.jsx)(m.A, h({
            title: f.intl.string(f.t["+uI23H"]),
            value: x,
            onChange: e => C({
                goreContentFriendDm: e
            }),
            options: y
        }, v)), (0, r.jsx)(m.A, h({
            title: f.intl.string(f.t["Yh+HX1"]),
            value: O,
            onChange: e => C({
                goreContentNonFriendDm: e
            }),
            options: y
        }, v)), (0, r.jsx)(m.A, {
            title: f.intl.string(f.t["FP+a42"]),
            value: E,
            onChange: e => C({
                goreContentGuilds: e
            }),
            isDisabled: !t || A,
            options: j,
            tooltipText: n ? f.intl.string(b.default["6Af/cw"]) : void 0
        })]
    })
}