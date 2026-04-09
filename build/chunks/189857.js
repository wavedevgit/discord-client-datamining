/** chunk id: 189857 params = (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => a,
    Z: () => i
}), n(321073);
var r = n(963935),
    l = n(890934);

function i(e, t) {
    let n = [],
        i = new Map,
        a = new Map,
        s = new Map;
    return (0, l.A)(e, e => {
        if (!("getDismissibleBadges" in e)) return;
        let l = e.getDismissibleBadges?.();
        if (null == l) return;
        let o = t.entry(e.key);
        if (o?.parentSidebarItemKey == null) return;
        let u = null;
        if (null != o.parentCategoryKey) {
            let e = t.get(o.parentCategoryKey);
            e?.type === r.Z6.CATEGORY && (0, r.bJ)(e) && (u = o.parentCategoryKey)
        }
        let c = {
            sidebarItemKey: o.parentSidebarItemKey,
            categoryKey: u
        };
        l.forEach(e => (function(e, t) {
            let {
                dismissibleContent: r
            } = e;
            n.push(r), i.set(r, t), s.set(r, e);
            let l = a.get(t.sidebarItemKey) ?? new Set;
            if (l.add(r), a.set(t.sidebarItemKey, l), null != t.categoryKey) {
                let e = a.get(t.categoryKey) ?? new Set;
                e.add(r), a.set(t.categoryKey, e)
            }
        })(e, c))
    }), {
        allDismissibleContents: n,
        dismissibleContentToNodeKeys: i,
        nodeKeyToDismissibleContents: a,
        dismissibleContentToBadge: s
    }
}

function a(e, t, n) {
    let {
        nodeKeyToDismissibleContents: r,
        dismissibleContentToBadge: l
    } = n, i = r.get(e);
    return null != t && null != i && i.has(t) ? l.get(t) : null
}