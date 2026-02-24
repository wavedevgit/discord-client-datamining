/** chunk id: 478686, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => function e(t, n, s) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (!n.has(t.key)) return null;
        if (!(0, i.nW)(t)) return s.register({
            node: t,
            parentSidebarItemKey: a.sidebarItem,
            parentPanelKey: a.panel?.key,
            parentTabKey: a.tab?.key,
            parentCategoryKey: a.category?.key,
            parentAccordionKey: a.accordion?.key
        }), t;
        let l = a;
        t.type === i.Z6.SIDEBAR_ITEM && (l = {
            ...a,
            sidebarItem: t.key,
            panel: t.layout[0]
        }), t.type === i.Z6.PANEL && (l = {
            ...a,
            panel: t
        }), t.type === i.Z6.NESTED_PANEL && (l = {
            ...a,
            panel: t.layout[0]
        }), t.type === i.Z6.CATEGORY && (l = {
            ...a,
            category: t
        }), t.type === i.Z6.ACCORDION && (l = {
            ...a,
            accordion: t
        }), t.type === i.Z6.TAB_ITEM && (l = {
            ...a,
            tab: t
        });
        let r = t.layout.map(t => e(t, n, s, l)).filter(e => null != e);
        if (0 === r.length && !("StronglyDiscouragedCustomComponent" in t || t.type === i.Z6.SIDEBAR_ITEM && "onClick" in t)) return null;
        let o = {
            ...t,
            layout: r
        };
        return s.register({
            node: o,
            parentSidebarItemKey: l.sidebarItem,
            parentPanelKey: l.panel?.key,
            parentTabKey: l.tab?.key,
            parentCategoryKey: l.category?.key,
            parentAccordionKey: l.accordion?.key
        }), o
    }
});
var i = n(963935)