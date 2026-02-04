/** chunk id: 349555, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n(960488),
    c = n(397927),
    u = n(341915),
    d = n(710969),
    p = n(439075),
    h = n(985018),
    f = n(142011);

function g(e) {
    let {
        quests: t,
        excludedQuests: n,
        isFetching: l,
        hasFetched: g,
        hasFiltersApplied: m = !1,
        onClearFilters: A
    } = e, _ = i.useRef(!1), b = (0, o.zy)(), E = i.useMemo(() => {
        if (b.hash.length > 0) {
            let e = b.hash.slice(1),
                r = (0, d.vc)(e, t, n);
            if (null != r) return r.id
        }
        return null
    }, [t, n, b.hash]);
    i.useEffect(() => {
        _.current = !1
    }, [b.hash]), i.useEffect(() => {
        if (null == E || _.current || l || !g) return;
        let e = document.getElementById("quest-tile-".concat(E));
        null == e || e.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }), _.current = !0
    }, [t, E, b, l, g]);
    let O = null != E,
        [y, I] = i.useState(window.innerWidth);
    i.useEffect(() => {
        let e = (0, s.debounce)(() => {
            I(window.innerWidth)
        }, 250);
        return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
        }
    }, []);
    let v = y >= 1610 ? 3 : y >= 1340 ? 2 : 1;
    return l && 0 === t.length ? (0, r.jsx)(c.y$y, {
        className: f.u1
    }) : 0 === t.length ? (0, r.jsxs)("div", {
        className: f.y7,
        children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xl/semibold",
            children: h.intl.string(m ? h.t.PBfFnx : h.t.NqFP6z)
        }), (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: m ? h.intl.format(h.t.LdYS1H, {
                onClick: A
            }) : h.intl.string(h.t.LhD4yH)
        })]
    }) : (0, r.jsx)("div", {
        className: f.kL,
        children: t.map((e, t) => {
            let n = Math.floor(t / v);
            return (0, r.jsx)(p.A, {
                quest: e,
                questContent: u.uF.QUEST_HOME_DESKTOP,
                contentPosition: t,
                rowIndex: n,
                className: a()(f.d, {
                    [f.wH]: O && e.id === E,
                    [f.tP]: O && e.id !== E
                }),
                sourceQuestContent: u.uF.QUEST_HOME_DESKTOP
            }, e.id)
        })
    }, E)
}