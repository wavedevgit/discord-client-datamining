/** Chunk was on web.js **/
/** chunk id: 980545, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(12901),
    f = n(954571),
    p = n(341915),
    _ = n(590202),
    h = n(545986),
    m = n(652215),
    g = n(985018),
    E = n(608821),
    y = n(641701);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}
let v = "https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png";

function A(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, l.Mw)((0, u.Ay)()), a = i.useMemo(() => ({
        backgroundImage: "url(".concat(v, ")")
    }), []), b = i.useCallback(() => {
        (0, d.default)(), (0, h.navigateToQuestHome)({
            fromContent: p.uF.QUEST_HOME_MOVE_CALLOUT
        }), f.default.track(m.HAw.QUEST_CONTENT_CLICKED, O({
            cta_name: _.Cy.VIEW_QUESTS,
            click_id: (0, o.A)(),
            is_targeted: !1
        }, (0, _.fF)(p.uF.QUEST_HOME_MOVE_CALLOUT)))
    }, []);
    return (0, r.jsx)("div", {
        className: s()(E.kL, {
            [E.Zd]: t
        }),
        style: a,
        children: (0, r.jsxs)(c.BJc, {
            className: E.FS,
            justify: "space-between",
            children: [(0, r.jsxs)(c.BJc, {
                gap: 4,
                children: [(0, r.jsxs)("div", {
                    className: E.N1,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: y,
                        className: E.Kk
                    }), (0, r.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        children: g.intl.string(g.t.z8YP2A)
                    })]
                }), (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: g.intl.string(g.t.HdKh65)
                })]
            }), (0, r.jsx)(c.Button, {
                variant: n ? "primary" : "overlay-primary",
                text: g.intl.string(g.t.GURBQl),
                onClick: b
            })]
        })
    })
}