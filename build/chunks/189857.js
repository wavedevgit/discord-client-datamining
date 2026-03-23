/** chunk id: 189857 params = (module,exports,require) **/
"use strict";
r.d(t, {
    H: () => l,
    Z: () => i
}), r(321073);
var n = r(963935),
    a = r(890934);

function i(e, t) {
    let r = [],
        i = new Map,
        l = new Map,
        s = new Map;
    return (0, a.A)(e, e => {
        if (!("getDismissibleBadges" in e)) return;
        let a = e.getDismissibleBadges?.();
        if (null == a) return;
        let o = t.entry(e.key);
        if (o?.parentSidebarItemKey == null) return;
        let c = null;
        if (null != o.parentCategoryKey) {
            let e = t.get(o.parentCategoryKey);
            e?.type === n.Z6.CATEGORY && (0, n.bJ)(e) && (c = o.parentCategoryKey)
        }
        let u = {
            sidebarItemKey: o.parentSidebarItemKey,
            categoryKey: c
        };
        a.forEach(e => (function(e, t) {
            let {
                dismissibleContent: n
            } = e;
            r.push(n), i.set(n, t), s.set(n, e);
            let a = l.get(t.sidebarItemKey) ?? new Set;
            if (a.add(n), l.set(t.sidebarItemKey, a), null != t.categoryKey) {
                let e = l.get(t.categoryKey) ?? new Set;
                e.add(n), l.set(t.categoryKey, e)
            }
        })(e, u))
    }), {
        allDismissibleContents: r,
        dismissibleContentToNodeKeys: i,
        nodeKeyToDismissibleContents: l,
        dismissibleContentToBadge: s
    }
}

function l(e, t, r) {
    let {
        nodeKeyToDismissibleContents: n,
        dismissibleContentToBadge: a
    } = r, i = n.get(e);
    return null != t && null != i && i.has(t) ? a.get(t) : null
}