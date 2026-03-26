/** chunk id: 189857 params = (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => l,
    Z: () => a
}), n(321073);
var r = n(963935),
    i = n(890934);

function a(e, t) {
    let n = [],
        a = new Map,
        l = new Map,
        s = new Map;
    return (0, i.A)(e, e => {
        if (!("getDismissibleBadges" in e)) return;
        let i = e.getDismissibleBadges?.();
        if (null == i) return;
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
        i.forEach(e => (function(e, t) {
            let {
                dismissibleContent: r
            } = e;
            n.push(r), a.set(r, t), s.set(r, e);
            let i = l.get(t.sidebarItemKey) ?? new Set;
            if (i.add(r), l.set(t.sidebarItemKey, i), null != t.categoryKey) {
                let e = l.get(t.categoryKey) ?? new Set;
                e.add(r), l.set(t.categoryKey, e)
            }
        })(e, u))
    }), {
        allDismissibleContents: n,
        dismissibleContentToNodeKeys: a,
        nodeKeyToDismissibleContents: l,
        dismissibleContentToBadge: s
    }
}

function l(e, t, n) {
    let {
        nodeKeyToDismissibleContents: r,
        dismissibleContentToBadge: i
    } = n, a = r.get(e);
    return null != t && null != a && a.has(t) ? i.get(t) : null
}