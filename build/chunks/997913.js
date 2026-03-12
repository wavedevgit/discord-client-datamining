/** chunk id: 997913 params = (module,exports,require) **/
A.d(t, {
    O: () => T,
    i: () => I
});
var E = A(627968),
    e = A(397927),
    C = A(985018);

function T(_) {
    let {
        body: t,
        ...C
    } = _;
    (0, e.mMO)(async () => {
        let {
            VoidConfirmModal: _
        } = await Promise.resolve().then(A.bind(A, 397927));
        return A => (0, E.jsx)(_, {
            ...A,
            ...C,
            children: (0, E.jsx)(e.Text, {
                variant: "text-md/normal",
                children: t
            })
        })
    })
}

function I(_) {
    let {
        message: t
    } = _;
    T({
        header: C.intl.string(C.t.OjbtDm),
        confirmText: C.intl.string(C.t.BddRzS),
        body: t
    })
}