/** chunk id: 942596 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => c
});
var r = n(627968),
    i = n(397927),
    a = n(933297),
    l = n(985018);

function s(e) {
    let {
        useCount: t
    } = e, n = t();
    return 0 === n ? null : (0, r.jsx)(i.hVq, {
        count: n
    })
}

function o(e) {
    let {
        getDismissibleContentTypes: t,
        stronglyDiscouragedBadgeComponent: n,
        visibleContent: a,
        isSelected: s
    } = e, o = t?.(), u = null != a && o.includes(a) && !s, c = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(i.LpS, {
        text: l.intl.string(l.t.y2b7CA)
    });
    return u ? c : null
}

function u(e) {
    let {
        useCustomDecoration: t,
        visibleContent: n,
        isSelected: r
    } = e;
    return t(n, r)
}

function c(e) {
    let {
        trailing: t,
        visibleContent: n,
        isSelected: i
    } = e;
    if (null == t) return null;
    switch (t.type) {
        case a.Si.BADGE_COUNT:
            return (0, r.jsx)(s, {
                ...t
            });
        case a.Si.BADGE_NEW:
            return (0, r.jsx)(o, {
                ...t,
                visibleContent: n,
                isSelected: i
            });
        case a.Si.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(u, {
                ...t,
                visibleContent: n,
                isSelected: i
            })
    }
}