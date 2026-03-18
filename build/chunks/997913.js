/** chunk id: 997913 params = (module,exports,require) **/
e.d(_, {
    O: () => S,
    i: () => T
});
var E = e(627968),
    A = e(397927),
    I = e(985018);

function S(t) {
    let {
        body: _,
        ...I
    } = t;
    (0, A.mMO)(async () => {
        let {
            VoidConfirmModal: t
        } = await Promise.resolve().then(e.bind(e, 397927));
        return e => (0, E.jsx)(t, {
            ...e,
            ...I,
            children: (0, E.jsx)(A.Text, {
                variant: "text-md/normal",
                children: _
            })
        })
    })
}

function T(t) {
    let {
        message: _
    } = t;
    S({
        header: I.intl.string(I.t.OjbtDm),
        confirmText: I.intl.string(I.t.BddRzS),
        body: _
    })
}