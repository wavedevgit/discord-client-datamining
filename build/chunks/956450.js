/** chunk id: 956450 params = (module,exports,require) **/
E.d(A, {
    default: () => R
});
var e = E(627968);
E(64700);
var I = E(397927),
    T = E(780964),
    C = E(840065),
    t = E(257110),
    S = E(706069),
    i = E(652215),
    n = E(531525),
    N = E(265626);
let R = _ => {
    let {
        transitionState: A,
        onClose: E,
        classificationId: R,
        source: a
    } = _, l = (0, t.A)(), O = () => {
        E(), (0, C.openUserSettings)(T.X.ACCOUNT_PANEL, {
            section: i.nc_.ACCOUNT,
            subsection: n.H.PRIVACY_AND_SAFETY_STANDING
        })
    };
    return (0, e.jsxs)(I.EOs, {
        className: N.CR,
        transitionState: A,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [(0, e.jsx)("div", {
            className: N.Hc,
            children: (0, e.jsx)(I.s_y, {
                "data-migration-pending": !0,
                className: N.g8,
                onClick: E
            })
        }), (0, e.jsx)(I.$mQ, {
            "data-migration-pending": !0,
            className: N.jE,
            children: l ? (0, e.jsx)(I.y$y, {}) : (0, e.jsx)(S.A, {
                classificationId: R,
                source: a,
                onError: O,
                onClose: O
            })
        })]
    })
}