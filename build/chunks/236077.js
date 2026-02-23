/** chunk id: 236077, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(284009),
    s = n.n(i),
    a = n(963935);
class r {
    map = new Map;
    defaultPanel;
    register(e) {
        let {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentTabKey: s,
            parentCategoryKey: a,
            parentAccordionKey: r
        } = e;
        this.map.set(t.key, {
            node: t,
            parentSidebarItemKey: n,
            parentPanelKey: i,
            parentTabKey: s,
            parentCategoryKey: a,
            parentAccordionKey: r
        })
    }
    entry(e) {
        return this.map.get(e)
    }
    get(e) {
        return this.entry(e)?.node
    }
    setDefaultPanel(e) {
        this.defaultPanel = e
    }
    getDefaultPanel() {
        return this.defaultPanel
    }
    getPanelOrThrow(e) {
        let t = this.get(e);
        return s()(t?.type === a.Z6.PANEL, `[SettingsDirectory] key is not for a panel: ${e}`), t
    }
}