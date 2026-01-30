/** chunk id: 608881, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    c = n(820284),
    u = n(793574),
    d = n(688810),
    p = n(915089),
    h = n(379848),
    g = n(193699),
    f = n(153488),
    m = n(426389),
    A = n(652215),
    _ = n(985018),
    b = n(181485);

function E() {
    let {
        analyticsLocations: e
    } = (0, d.Ay)(u.A.ACTIVE_NOW_COLUMN), t = (0, a.bG)([f.A], () => f.A.hasConsented(A.YAq.PERSONALIZATION)) ? [] : [s.M.NOW_PLAYING_CONSENT_CARD], n = (0, p.GV)();
    return (0, r.jsx)(d.f5, {
        value: e,
        children: (0, r.jsx)(c.A, {
            section: A.JJy.ACTIVE_NOW_COLUMN,
            children: (0, r.jsx)("aside", {
                className: l()(b.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, r.jsx)(o.HOs, {
                    className: b.XG,
                    children: (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            className: b.wx,
                            id: n,
                            children: _.intl.string(_.t.F4Zggw)
                        }), (0, r.jsx)(h.Ay, {
                            contentTypes: t,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === s.M.NOW_PLAYING_CONSENT_CARD) return (0, r.jsx)(g.A, {
                                    className: b.__invalid_consentCard,
                                    markAsDismissed: n
                                })
                            }
                        }), (0, r.jsx)(m.A, {})]
                    })
                })
            })
        })
    })
}