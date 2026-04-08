/** chunk id: 516286 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(669550),
    s = n(963935),
    r = n(921854),
    o = n(522958);

function d(e) {
    let {
        setting: t,
        depth: n,
        inheritedHighlightMode: i
    } = e, l = function(e, t) {
        if ("migrated" === t) return "migrated";
        switch (e.type) {
            case s.Z6.ROOT:
                return "migrated-root";
            case s.Z6.SECTION:
            case s.Z6.PANEL:
            case s.Z6.SIDEBAR_ITEM:
                return "migrated";
            default:
                return t ?? "migrated"
        }
    }(t, i), r = "migrated" === l ? "migrated" : void 0, c = null;
    return (0, s.nW)(t) && t.layout.length > 0 && (c = t.layout.map(e => (0, a.jsx)(d, {
        setting: e,
        depth: n + 1,
        inheritedHighlightMode: r
    }, e.key))), (0, a.jsx)(o.n, {
        title: t.key,
        initExpanded: n <= 2,
        highlightMode: l,
        children: c
    })
}

function c() {
    let {
        node: e
    } = (0, l.Ay)(r.D, ""), t = (0, l.KA)();
    return (0, a.jsxs)(i.nVY, {
        label: "Settings Tree",
        children: [(0, a.jsx)(i.dOG, {
            label: "Bypass Predicates",
            description: "Forces all migrated settings to be visible.",
            checked: t,
            onChange: l.jL
        }), (0, a.jsx)(d, {
            setting: e,
            depth: 1
        }, e.key)]
    })
}