/** chunk id: 956450 params = (module,exports,require) **/
A.d(_, {
    default: () => P
});
var I = A(627968);
A(64700);
var T = A(397927),
    O = A(780964),
    S = A(840065),
    C = A(257110),
    e = A(706069),
    R = A(652215),
    N = A(531525),
    t = A(265626);
let P = E => {
    let {
        transitionState: _,
        onClose: A,
        classificationId: P,
        source: i
    } = E, n = (0, C.A)(), D = () => {
        A(), (0, S.openUserSettings)(O.X.ACCOUNT_PANEL, {
            section: R.nc_.ACCOUNT,
            subsection: N.H.PRIVACY_AND_SAFETY_STANDING
        })
    };
    return (0, I.jsxs)(T.EOs, {
        className: t.CR,
        transitionState: _,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [(0, I.jsx)("div", {
            className: t.Hc,
            children: (0, I.jsx)(T.s_y, {
                "data-migration-pending": !0,
                className: t.g8,
                onClick: A
            })
        }), (0, I.jsx)(T.$mQ, {
            "data-migration-pending": !0,
            className: t.jE,
            children: n ? (0, I.jsx)(T.y$y, {}) : (0, I.jsx)(e.A, {
                classificationId: P,
                source: i,
                onError: D,
                onClose: D
            })
        })]
    })
}