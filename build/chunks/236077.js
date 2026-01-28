/** Chunk was on 5606 **/
/** chunk id: 236077, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(896048);
var r = n(284009),
    i = n.n(r),
    l = n(963935);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class a {
    register(e) {
        let {
            node: t,
            parentPanelKey: n,
            parentTabKey: r,
            parentCategoryKey: i,
            parentAccordionKey: l
        } = e;
        this.map.set(t.key, {
            node: t,
            parentPanelKey: n,
            parentTabKey: r,
            parentCategoryKey: i,
            parentAccordionKey: l
        })
    }
    entry(e) {
        return this.map.get(e)
    }
    get(e) {
        var t;
        return null == (t = this.entry(e)) ? void 0 : t.node
    }
    setDefaultPanel(e) {
        this.defaultPanel = e
    }
    getDefaultPanel() {
        return this.defaultPanel
    }
    getPanelOrThrow(e) {
        let t = this.get(e);
        return i()((null == t ? void 0 : t.type) === l.Z6.PANEL, "[SettingsDirectory] key is not for a panel: ".concat(e)), t
    }
    constructor() {
        s(this, "map", new Map), s(this, "defaultPanel", void 0)
    }
}