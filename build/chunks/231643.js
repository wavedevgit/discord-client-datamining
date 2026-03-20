/** chunk id: 231643 params = (module,exports,require) **/
n.d(t, {
    Ay: () => b,
    BW: () => _,
    fu: () => g
});
var a, i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(421380),
    d = n(397927),
    c = n(765671),
    u = n(61780),
    m = n(403362),
    h = n(867041),
    p = n(786574),
    x = n(930821),
    g = ((a = {}).NONE = "", a.DCF = "DCF", a.EXPERIMENTS = "Experiments", a.EVENTS = "Events", a.PREMIUM = "Premium", a.QUESTS = "Quests", a.BILLING = "Billing", a.SHOP = "Shop", a.USERS = "Users", a.GUILDS = "Guilds", a.UI = "UI", a.GAMES = "Games", a.AUDIO_VIDEO = "Audio / Video", a.DEVELOPMENT = "Development", a.BOOSTING = "Boosting", a);
let _ = ["Experiments", "DCF", "Events", "Premium", "Quests", "Billing", "Shop", "Users", "Guilds", "UI", "Games", "Boosting", "Audio / Video", "Development"],
    f = l.forwardRef(function(e, t) {
        let {
            id: n,
            selected: a,
            onClick: l,
            children: s
        } = e;
        return (0, i.jsx)(d.DUT, {
            className: r()(x.V3, {
                [x.wH]: a
            }),
            "data-tab-id": n,
            innerRef: t,
            onClick: l,
            children: s
        })
    });

function v(e) {
    let {
        tabs: t,
        selectedTabId: n,
        onSelectTab: a
    } = e, s = l.useRef(new Map), [r, g] = l.useState(() => new Set), {
        ref: _,
        width: v
    } = (0, c.Ay)(), b = l.useRef(null), j = (0, p.N)(t, a);
    l.useEffect(() => {
        if (null == v) return;
        let e = new Set,
            a = v ?? 0;
        for (let i of (a -= s.current.get(n)?.getBoundingClientRect().width ?? 0, t)) i.id !== n && (a -= s.current.get(i.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(i.id);
        g(e)
    }, [t, v, _, n]);
    let A = l.useCallback(e => {
        let {
            closePopout: t
        } = e;
        return (0, i.jsx)(d.W1t, {
            "data-menu-migrated": !0,
            navId: "devtools-overflow",
            variant: "fixed",
            onClose: t,
            "aria-label": "Overflowed DevTools Tabs",
            onSelect: t,
            children: j
        })
    }, [j]);
    return (0, i.jsxs)("div", {
        className: x.Mv,
        children: [(0, i.jsxs)("div", {
            className: x.$H,
            ref: _,
            children: [t.map(e => {
                let {
                    id: t,
                    name: l
                } = e;
                if (!r.has(t)) return (0, i.jsx)(f, {
                    id: t,
                    selected: n === t,
                    onClick: n !== t ? () => a(t) : void 0,
                    children: l
                }, t)
            }).filter(m.Vq), (0, i.jsx)("div", {
                className: x.g,
                children: t.map(e => {
                    let {
                        id: t,
                        name: l
                    } = e;
                    return (0, i.jsx)(f, {
                        id: t,
                        selected: n === t,
                        ref: e => {
                            s.current.set(t, e)
                        },
                        onClick: n !== t ? () => a(t) : void 0,
                        children: l
                    }, t)
                })
            })]
        }), (0, i.jsx)("div", {
            className: x.MK,
            children: r.size > 0 && (0, i.jsx)(d.YNO, {
                targetElementRef: b,
                layerContext: h.He,
                renderPopout: A,
                position: "bottom",
                align: "right",
                autoInvert: !1,
                spacing: 0,
                children: e => (0, i.jsx)(o.$n, {
                    ...e,
                    buttonRef: b,
                    className: x.Iq,
                    size: o.$n.Sizes.ICON,
                    look: o.$n.Looks.BLANK,
                    children: (0, i.jsx)(u.A, {
                        className: x.__invalid_overflowIcon,
                        width: 16,
                        height: 16
                    })
                })
            })
        })]
    })
}

function b(e, t) {
    let {
        tabs: n,
        initialSelectedTabId: a,
        onChangeTab: s
    } = e, [r, o] = l.useState(a ?? n[0]?.id);
    return {
        TabBar: l.useCallback(() => (0, i.jsx)(v, {
            tabs: n,
            selectedTabId: r,
            onSelectTab: e => {
                o(e), s?.(e)
            }
        }), [r, o, s, ...t]),
        renderSelectedTab: n.find(e => e.id === r)?.render ?? (() => null),
        selectedTabId: r
    }
}