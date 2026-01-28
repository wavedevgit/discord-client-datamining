/** Chunk was on 5606 **/
/** chunk id: 980545, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(835245),
    o = n(582754),
    c = n(397927),
    d = n(736653),
    u = n(12901),
    p = n(954571),
    _ = n(341915),
    m = n(590202),
    g = n(545986),
    f = n(652215),
    b = n(985018),
    h = n(608821),
    A = n(641701);

function E(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, o.Mw)((0, d.Ay)()), l = i.useMemo(() => ({
        backgroundImage: "url(".concat("https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png", ")")
    }), []), E = i.useCallback(() => {
        (0, u.default)(), (0, g.navigateToQuestHome)({
            fromContent: _.uF.QUEST_HOME_MOVE_CALLOUT
        }), p.default.track(f.HAw.QUEST_CONTENT_CLICKED, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            cta_name: m.Cy.VIEW_QUESTS,
            click_id: (0, a.A)(),
            is_targeted: !1
        }, (0, m.fF)(_.uF.QUEST_HOME_MOVE_CALLOUT)))
    }, []);
    return (0, r.jsx)("div", {
        className: s()(h.kL, {
            [h.Zd]: t
        }),
        style: l,
        children: (0, r.jsxs)(c.BJc, {
            className: h.FS,
            justify: "space-between",
            children: [(0, r.jsxs)(c.BJc, {
                gap: 4,
                children: [(0, r.jsxs)("div", {
                    className: h.N1,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: A,
                        className: h.Kk
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        children: b.intl.string(b.t.z8YP2A)
                    })]
                }), (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: b.intl.string(b.t.HdKh65)
                })]
            }), (0, r.jsx)(c.Button, {
                variant: n ? "primary" : "overlay-primary",
                text: b.intl.string(b.t.GURBQl),
                onClick: E
            })]
        })
    })
}