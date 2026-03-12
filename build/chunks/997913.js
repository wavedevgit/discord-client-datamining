/** chunk id: 997913 params = (module,exports,require) **/
A.d(_, {
    O: () => t,
    i: () => e
});
var I = A(627968),
    T = A(397927),
    S = A(985018);

function t(E) {
    let {
        body: _,
        ...S
    } = E;
    (0, T.mMO)(async () => {
        let {
            VoidConfirmModal: E
        } = await Promise.resolve().then(A.bind(A, 397927));
        return A => (0, I.jsx)(E, {
            ...A,
            ...S,
            children: (0, I.jsx)(T.Text, {
                variant: "text-md/normal",
                children: _
            })
        })
    })
}

function e(E) {
    let {
        message: _
    } = E;
    t({
        header: S.intl.string(S.t.OjbtDm),
        confirmText: S.intl.string(S.t.BddRzS),
        body: _
    })
}