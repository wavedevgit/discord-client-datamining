/** Chunk was on 9407 **/
/** chunk id: 956450, original params: E,_,I (module,exports,require) **/
I.d(_, {
    default: () => n
});
var A = I(627968);
I(64700);
var S = I(397927),
    T = I(780964),
    O = I(840065),
    C = I(257110),
    e = I(706069),
    t = I(652215),
    N = I(531525),
    R = I(524988);
let n = E => {
    let {
        transitionState: _,
        onClose: I,
        classificationId: n,
        source: P
    } = E, i = (0, C.A)(), L = () => {
        I(), (0, O.openUserSettings)(T.X.ACCOUNT_PANEL, {
            section: t.nc_.ACCOUNT,
            subsection: N.H.PRIVACY_AND_SAFETY_STANDING
        })
    };
    return (0, A.jsxs)(S.EOs, {
        className: R.CR,
        transitionState: _,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [(0, A.jsx)("div", {
            className: R.Hc,
            children: (0, A.jsx)(S.s_y, {
                "data-migration-pending": !0,
                className: R.g8,
                onClick: I
            })
        }), (0, A.jsx)(S.$mQ, {
            "data-migration-pending": !0,
            className: R.jE,
            children: i ? (0, A.jsx)(S.y$y, {}) : (0, A.jsx)(e.A, {
                classificationId: n,
                source: P,
                onError: L,
                onClose: L
            })
        })]
    })
}