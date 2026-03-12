/** chunk id: 478686 params = (module,exports,require) **/
n.d(t, {
    A: () => function e(t, n, s) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (!n.has(t.key)) return null;
        if (!(0, i.nW)(t)) return s.register({
            node: t,
            parentSidebarItemKey: l.sidebarItem,
            parentPanelKey: l.panel?.key,
            parentTabKey: l.tab?.key,
            parentCategoryKey: l.category?.key,
            parentAccordionKey: l.accordion?.key
        }), t;
        let r = l;
        t.type === i.Z6.SIDEBAR_ITEM && (r = {
            ...l,
            sidebarItem: t.key,
            panel: t.layout[0]
        }), t.type === i.Z6.PANEL && (r = {
            ...l,
            panel: t
        }), t.type === i.Z6.NESTED_PANEL && (r = {
            ...l,
            panel: t.layout[0]
        }), t.type === i.Z6.CATEGORY && (r = {
            ...l,
            category: t
        }), t.type === i.Z6.ACCORDION && (r = {
            ...l,
            accordion: t
        }), t.type === i.Z6.TAB_ITEM && (r = {
            ...l,
            tab: t
        });
        let a = t.layout.map(t => e(t, n, s, r)).filter(e => null != e);
        if (0 === a.length && !("StronglyDiscouragedCustomComponent" in t || t.type === i.Z6.SIDEBAR_ITEM && "onClick" in t)) return null;
        let o = {
            ...t,
            layout: a
        };
        return s.register({
            node: o,
            parentSidebarItemKey: r.sidebarItem,
            parentPanelKey: r.panel?.key,
            parentTabKey: r.tab?.key,
            parentCategoryKey: r.category?.key,
            parentAccordionKey: r.accordion?.key
        }), o
    }
});
var i = n(963935)