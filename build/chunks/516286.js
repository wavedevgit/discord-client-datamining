/** chunk id: 516286 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(669550),
    r = n(963935),
    o = n(921854),
    d = n(522958),
    c = n(983078),
    u = n(159452);

function m(e) {
    let {
        setting: t,
        depth: n,
        highlightMode: l
    } = e, s = i.useContext(x)?.get(t), r = null;
    return null != s && s.length > 0 && (r = s.sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(m, {
        setting: e,
        depth: n + 1,
        highlightMode: l
    }, e))), (0, a.jsx)(d.n, {
        title: t,
        initExpanded: n <= 2,
        highlightMode: l,
        children: r
    })
}

function h(e) {
    let {
        setting: t,
        depth: n,
        inheritedHighlightMode: i
    } = e, l = function(e, t) {
        if ("migrated" === t) return "migrated";
        switch (e.type) {
            case r.Z6.ROOT:
                return "migrated-root";
            case r.Z6.SECTION:
            case r.Z6.PANEL:
            case r.Z6.SIDEBAR_ITEM:
                return "migrated";
            default:
                return t ?? "migrated"
        }
    }(t, i), s = "migrated" === l ? "migrated" : void 0, o = null;
    return (0, r.nW)(t) && t.layout.length > 0 && (o = t.layout.map(e => (0, a.jsx)(h, {
        setting: e,
        depth: n + 1,
        inheritedHighlightMode: s
    }, e.key))), (0, a.jsx)(d.n, {
        title: t.key,
        initExpanded: n <= 2,
        highlightMode: l,
        children: o
    })
}
let x = i.createContext(null);

function p() {
    let [e, t] = i.useState(!1), {
        legacySettingDirectory: n
    } = (0, c.B)(), {
        node: r
    } = (0, s.Ay)(o.D, ""), d = (0, s.KA)();
    return (0, a.jsxs)(l.nVY, {
        label: "Settings Tree",
        children: [(0, a.jsx)(l.dOG, {
            label: "Bypass Predicates",
            description: "Forces all migrated settings to be visible.",
            checked: d,
            onChange: s.jL
        }), (0, a.jsx)(l.dOG, {
            checked: e,
            onChange: e => t(e),
            label: "Show Legacy Settings Tree"
        }), (0, a.jsx)(x.Provider, {
            value: n,
            children: (0, a.jsxs)("div", {
                className: u.B2,
                children: [e && (0, a.jsx)(m, {
                    setting: "root",
                    depth: 1
                }, "root"), !e && (0, a.jsx)(h, {
                    setting: r,
                    depth: 1
                }, r.key)]
            })
        })]
    })
}