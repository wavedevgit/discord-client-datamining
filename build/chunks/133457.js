/** chunk id: 133457 params = (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => s
});
var r = n(64700),
    l = n(826673),
    i = n(894858),
    a = n(49999);

function s(e) {
    let {
        visibleContent: t,
        dismissibleBadges: n,
        accessibleDirectory: s
    } = e, {
        dismissibleContentToNodeKeys: o,
        nodeKeyToDismissibleContents: u
    } = n, c = r.useRef(!1);
    r.useEffect(() => {
        if (c.current = !1, null == t || !o.has(t)) return;
        let e = o.get(t);
        if (null == e) return;
        let n = () => {
                c.current = !1;
                let t = u.get(e.sidebarItemKey);
                null != t && t.forEach(e => {
                    (0, l.Dr)(e, {
                        dismissAction: a.i.AUTO,
                        forceTrack: !0
                    })
                })
            },
            r = i.A.subscribe(e => {
                let {
                    currentPanelKey: t
                } = e;
                return t
            }, t => {
                let r = null != t && null != s ? s.entry(t)?.parentSidebarItemKey : null;
                null != r && (r === e.sidebarItemKey ? c.current = !0 : c.current && n())
            }, {
                equalityFn: (e, t) => e === t,
                fireImmediately: !0
            });
        return () => {
            r(), c.current && n()
        }
    }, [t, o, s, u])
}