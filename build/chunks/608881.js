/** chunk id: 608881 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(311907),
    s = n(554146),
    o = n(397927),
    d = n(820284),
    c = n(793574),
    u = n(688810),
    A = n(915089),
    h = n(379848),
    _ = n(193699),
    m = n(153488),
    p = n(426389),
    g = n(652215),
    E = n(985018),
    I = n(498223);

function f() {
    let {
        analyticsLocations: e
    } = (0, u.Ay)(c.A.ACTIVE_NOW_COLUMN), t = (0, r.bG)([m.A], () => m.A.hasConsented(g.YAq.PERSONALIZATION)) ? [] : [s.M.NOW_PLAYING_CONSENT_CARD], n = (0, A.GV)();
    return (0, i.jsx)(u.f5, {
        value: e,
        children: (0, i.jsx)(d.A, {
            section: g.JJy.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)("aside", {
                className: l()(I.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, i.jsx)(o.HOs, {
                    className: I.XG,
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            className: I.wx,
                            id: n,
                            children: E.intl.string(E.t.F4Zggw)
                        }), (0, i.jsx)(h.Ay, {
                            contentTypes: t,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === s.M.NOW_PLAYING_CONSENT_CARD) return (0, i.jsx)(_.A, {
                                    className: I.__invalid_consentCard,
                                    markAsDismissed: n
                                })
                            }
                        }), (0, i.jsx)(p.A, {})]
                    })
                })
            })
        })
    })
}