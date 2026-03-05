/** chunk id: 942596, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => c
});
var r = n(627968),
    a = n(397927),
    i = n(933297),
    l = n(985018);

function s(e) {
    let {
        useCount: t
    } = e, n = t();
    return 0 === n ? null : (0, r.jsx)(a.hVq, {
        count: n
    })
}

function o(e) {
    let {
        getDismissibleContentTypes: t,
        stronglyDiscouragedBadgeComponent: n,
        visibleContent: i,
        isSelected: s
    } = e, o = t?.(), u = null != i && o.includes(i) && !s, c = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(a.LpS, {
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
        isSelected: a
    } = e;
    if (null == t) return null;
    switch (t.type) {
        case i.Si.BADGE_COUNT:
            return (0, r.jsx)(s, {
                ...t
            });
        case i.Si.BADGE_NEW:
            return (0, r.jsx)(o, {
                ...t,
                visibleContent: n,
                isSelected: a
            });
        case i.Si.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(u, {
                ...t,
                visibleContent: n,
                isSelected: a
            })
    }
}