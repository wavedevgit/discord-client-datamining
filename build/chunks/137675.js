/** chunk id: 137675 params = (module,exports,require) **/
n.d(t, {
    O: () => u,
    i: () => d
});
var l = n(627968),
    r = n(397927),
    i = n(985018);

function u(e) {
    let {
        body: t,
        ...i
    } = e;
    (0, r.mMO)(async () => {
        let {
            VoidConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 397927));
        return n => (0, l.jsx)(e, {
            ...n,
            ...i,
            children: (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                children: t
            })
        })
    })
}

function d(e) {
    let {
        message: t
    } = e;
    u({
        header: i.intl.string(i.t.OjbtDm),
        confirmText: i.intl.string(i.t.BddRzS),
        body: t
    })
}