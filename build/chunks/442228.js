/** chunk id: 442228, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(688810),
    c = n(183555),
    u = n(657331),
    d = n(389996),
    f = n(985018),
    p = n(200894);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let E = 57.75,
    y = i.memo(function(e) {
        let {
            user: t,
            onClose: n,
            bio: a,
            hidePersonalInformation: _,
            viewFullBioDisabled: m = !1
        } = e, {
            context: y
        } = (0, c.NJ)(), {
            analyticsLocations: b
        } = (0, l.Ay)(), [O, v] = i.useState(!1), [A, I] = i.useState(!1), S = i.useRef(null), T = e => {
            S.current = e, null == e || (v(!A && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > E && I(!0))
        }, C = () => {
            null == n || n(), (0, u.openUserProfileModal)(g(h({}, y), {
                userId: t.id,
                sourceAnalyticsLocations: b
            }))
        }, N = e => {
            null == S.current || S.current.contains(e.relatedTarget) || (S.current.scrollTop = 0)
        };
        return _ || null == a || "" === a ? null : (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                ref: T,
                className: o()(p.mA, A && p.Em),
                onBlur: N,
                children: (0, r.jsx)(d.A, {
                    userBio: a,
                    setLineClamp: !1,
                    textColor: "text-strong"
                })
            }), (O || A) && (0, r.jsx)("div", {
                className: p.HV,
                children: (0, r.jsx)(s.QWc, {
                    textVariant: "text-xs/normal",
                    size: "sm",
                    variant: "secondary",
                    text: f.intl.string(f.t.YDiPq8),
                    onClick: C,
                    disabled: m
                })
            })]
        })
    })