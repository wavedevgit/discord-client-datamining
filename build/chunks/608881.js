/** chunk id: 608881 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(311907),
    s = n(554146),
    o = n(397927),
    d = n(820284),
    c = n(793574),
    u = n(688810),
    A = n(915089),
    _ = n(379848),
    h = n(193699),
    m = n(153488),
    g = n(426389),
    p = n(652215),
    E = n(985018),
    I = n(498223);

function f() {
    let {
        analyticsLocations: e
    } = (0, u.Ay)(c.A.ACTIVE_NOW_COLUMN), t = (0, l.bG)([m.A], () => m.A.hasConsented(p.YAq.PERSONALIZATION)) ? [] : [s.M.NOW_PLAYING_CONSENT_CARD], n = (0, A.GV)();
    return (0, i.jsx)(u.f5, {
        value: e,
        children: (0, i.jsx)(d.A, {
            section: p.JJy.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)("aside", {
                className: r()(I.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, i.jsx)(o.HOs, {
                    className: I.XG,
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            className: I.wx,
                            id: n,
                            children: E.intl.string(E.t.F4Zggw)
                        }), (0, i.jsx)(_.Ay, {
                            contentTypes: t,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === s.M.NOW_PLAYING_CONSENT_CARD) return (0, i.jsx)(h.A, {
                                    className: I.__invalid_consentCard,
                                    markAsDismissed: n
                                })
                            }
                        }), (0, i.jsx)(g.A, {})]
                    })
                })
            })
        })
    })
}