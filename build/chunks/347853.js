/** chunk id: 347853 params = (module,exports,require) **/
n.d(t, {
    A: () => r,
    D: () => o
});
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    s = n(573879);

function r() {
    (0, i.mMO)(async () => {
        let {
            default: e
        } = await n.e("28386").then(n.bind(n, 623161));
        return t => (0, a.jsx)(e, {
            ...t
        })
    }, {
        onCloseCallback: () => {
            l.h.dispatch({
                type: "LOGIN_RESET",
                isMultiAccount: !0
            })
        },
        modalKey: s.ov
    })
}

function o() {
    (0, i.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("88890"), n.e("34078"), n.e("85501")]).then(n.bind(n, 365225));
        return t => (0, a.jsx)(e, {
            ...t,
            onBackPressed: r
        })
    }, {
        onCloseCallback: () => {
            l.h.dispatch({
                type: "LOGIN_RESET",
                isMultiAccount: !0
            })
        },
        modalKey: s.Gl
    })
}