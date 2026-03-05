/** chunk id: 997913, original params: E,_,I (module,exports,require) **/
I.d(_, {
    O: () => C,
    i: () => O
});
var S = I(627968),
    A = I(397927),
    T = I(985018);

function C(E) {
    let {
        body: _,
        ...T
    } = E;
    (0, A.mMO)(async () => {
        let {
            VoidConfirmModal: E
        } = await Promise.resolve().then(I.bind(I, 397927));
        return I => (0, S.jsx)(E, {
            ...I,
            ...T,
            children: (0, S.jsx)(A.Text, {
                variant: "text-md/normal",
                children: _
            })
        })
    })
}

function O(E) {
    let {
        message: _
    } = E;
    C({
        header: T.intl.string(T.t.OjbtDm),
        confirmText: T.intl.string(T.t.BddRzS),
        body: _
    })
}