/** chunk id: 997913 params = (module,exports,require) **/
_.d(e, {
    O: () => n,
    i: () => S
});
var E = _(627968),
    A = _(397927),
    I = _(985018);

function n(t) {
    let {
        body: e,
        ...I
    } = t;
    (0, A.mMO)(async () => {
        let {
            VoidConfirmModal: t
        } = await Promise.resolve().then(_.bind(_, 397927));
        return _ => (0, E.jsx)(t, {
            ..._,
            ...I,
            children: (0, E.jsx)(A.Text, {
                variant: "text-md/normal",
                children: e
            })
        })
    })
}

function S(t) {
    let {
        message: e
    } = t;
    n({
        header: I.intl.string(I.t.OjbtDm),
        confirmText: I.intl.string(I.t.BddRzS),
        body: e
    })
}