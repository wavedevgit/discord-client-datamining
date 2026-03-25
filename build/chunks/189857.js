/** chunk id: 189857 params = (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => l,
    Z: () => i
}), n(321073);
var r = n(963935),
    a = n(890934);

function i(e, t) {
    let n = [],
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
            e?.type === r.Z6.CATEGORY && (0, r.bJ)(e) && (c = o.parentCategoryKey)
        }
        let u = {
            sidebarItemKey: o.parentSidebarItemKey,
            categoryKey: c
        };
        a.forEach(e => (function(e, t) {
            let {
                dismissibleContent: r
            } = e;
            n.push(r), i.set(r, t), s.set(r, e);
            let a = l.get(t.sidebarItemKey) ?? new Set;
            if (a.add(r), l.set(t.sidebarItemKey, a), null != t.categoryKey) {
                let e = l.get(t.categoryKey) ?? new Set;
                e.add(r), l.set(t.categoryKey, e)
            }
        })(e, u))
    }), {
        allDismissibleContents: n,
        dismissibleContentToNodeKeys: i,
        nodeKeyToDismissibleContents: l,
        dismissibleContentToBadge: s
    }
}

function l(e, t, n) {
    let {
        nodeKeyToDismissibleContents: r,
        dismissibleContentToBadge: a
    } = n, i = r.get(e);
    return null != t && null != i && i.has(t) ? a.get(t) : null
}