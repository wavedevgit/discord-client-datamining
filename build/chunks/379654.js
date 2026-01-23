/** Chunk was on web.js **/
/** chunk id: 379654, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(688810),
    s = n(850046),
    o = n(183555),
    l = n(633075),
    c = n(289173),
    u = n(80330),
    d = n(274900),
    f = n(783256),
    p = n(518477),
    _ = n(985018);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e) {
    let {
        user: t,
        widgets: n = [],
        onOpenUserProfileModal: h
    } = e, g = i.useMemo(() => n.filter(e => e instanceof l.R), [n]), {
        analyticsLocations: E
    } = (0, a.Ay)(), {
        trackUserProfileAction: y
    } = (0, o.NJ)(), b = (0, s.A)(t.id, g), O = i.useCallback(() => {
        null == h || h({
            tabSection: p.RP.WIDGETS
        })
    }, [h]), v = i.useCallback(e => {
        let t = !1,
            i = [];
        for (let a of n) a instanceof l.R ? null != b[a.applicationId] && i.push((0, r.jsx)(d.A, m({
            previewData: b[a.applicationId],
            onClick: O
        }, e), "application-widget-".concat(a.applicationId))) : a instanceof c.Yy && !t && (i.push((0, r.jsx)(f.A, m({
            widgets: n,
            onClick: O
        }, e), "collection-breadcrumb")), t = !0);
        return i
    }, [b, O, n]);
    return 0 === n.length ? null : (0, r.jsx)(u.A, {
        renderCards: v,
        heading: _.intl.string(_.t.Y55Tua),
        onExpand: () => {
            y({
                action: "PRESS_SHOW_MORE_WIDGETS",
                analyticsLocations: E
            }), O()
        }
    })
}