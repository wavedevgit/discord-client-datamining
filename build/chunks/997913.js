/** chunk id: 997913 params = (module,exports,require) **/
E.d(t, {
    O: () => S,
    i: () => T
});
var e = E(627968),
    A = E(397927),
    I = E(985018);

function S(_) {
    let {
        body: t,
        ...I
    } = _;
    (0, A.mMO)(async () => {
        let {
            VoidConfirmModal: _
        } = await Promise.resolve().then(E.bind(E, 397927));
        return E => (0, e.jsx)(_, {
            ...E,
            ...I,
            children: (0, e.jsx)(A.Text, {
                variant: "text-md/normal",
                children: t
            })
        })
    })
}

function T(_) {
    let {
        message: t
    } = _;
    S({
        header: I.intl.string(I.t.OjbtDm),
        confirmText: I.intl.string(I.t.BddRzS),
        body: t
    })
}