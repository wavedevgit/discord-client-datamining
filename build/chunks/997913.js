/** chunk id: 997913 params = (module,exports,require) **/
I.d(_, {
    O: () => C,
    i: () => t
});
var A = I(627968),
    S = I(397927),
    T = I(985018);

function C(E) {
    let {
        body: _,
        ...T
    } = E;
    (0, S.mMO)(async () => {
        let {
            VoidConfirmModal: E
        } = await Promise.resolve().then(I.bind(I, 397927));
        return I => (0, A.jsx)(E, {
            ...I,
            ...T,
            children: (0, A.jsx)(S.Text, {
                variant: "text-md/normal",
                children: _
            })
        })
    })
}

function t(E) {
    let {
        message: _
    } = E;
    C({
        header: T.intl.string(T.t.OjbtDm),
        confirmText: T.intl.string(T.t.BddRzS),
        body: _
    })
}