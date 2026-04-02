/** chunk id: 189857 params = (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => a,
    Z: () => l
}), n(321073);
var r = n(963935),
    i = n(890934);

function l(e, t) {
    let n = [],
        l = new Map,
        a = new Map,
        s = new Map;
    return (0, i.A)(e, e => {
        if (!("getDismissibleBadges" in e)) return;
        let i = e.getDismissibleBadges?.();
        if (null == i) return;
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
        i.forEach(e => (function(e, t) {
            let {
                dismissibleContent: r
            } = e;
            n.push(r), l.set(r, t), s.set(r, e);
            let i = a.get(t.sidebarItemKey) ?? new Set;
            if (i.add(r), a.set(t.sidebarItemKey, i), null != t.categoryKey) {
                let e = a.get(t.categoryKey) ?? new Set;
                e.add(r), a.set(t.categoryKey, e)
            }
        })(e, c))
    }), {
        allDismissibleContents: n,
        dismissibleContentToNodeKeys: l,
        nodeKeyToDismissibleContents: a,
        dismissibleContentToBadge: s
    }
}

function a(e, t, n) {
    let {
        nodeKeyToDismissibleContents: r,
        dismissibleContentToBadge: i
    } = n, l = r.get(e);
    return null != t && null != l && l.has(t) ? i.get(t) : null
}