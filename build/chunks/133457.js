/** chunk id: 133457 params = (module,exports,require) **/
"use strict";
r.d(t, {
    B: () => s
});
var n = r(64700),
    a = r(826673),
    i = r(894858),
    l = r(49999);

function s(e) {
    let {
        visibleContent: t,
        dismissibleBadges: r,
        accessibleDirectory: s
    } = e, {
        dismissibleContentToNodeKeys: o,
        nodeKeyToDismissibleContents: c
    } = r, u = n.useRef(!1);
    n.useEffect(() => {
        if (u.current = !1, null == t || !o.has(t)) return;
        let e = o.get(t);
        if (null == e) return;
        let r = () => {
                u.current = !1;
                let t = c.get(e.sidebarItemKey);
                null != t && t.forEach(e => {
                    (0, a.Dr)(e, {
                        dismissAction: l.i.AUTO,
                        forceTrack: !0
                    })
                })
            },
            n = i.A.subscribe(e => {
                let {
                    currentPanelKey: t
                } = e;
                return t
            }, t => {
                let n = null != t && null != s ? s.entry(t)?.parentSidebarItemKey : null;
                null != n && (n === e.sidebarItemKey ? u.current = !0 : u.current && r())
            }, {
                equalityFn: (e, t) => e === t,
                fireImmediately: !0
            });
        return () => {
            n(), u.current && r()
        }
    }, [t, o, s, c])
}