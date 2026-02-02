/** chunk id: 212758, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => _
});
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(158954),
    o = r(397927),
    A = r(922529),
    c = r(89300),
    u = r(117816);

function _(e) {
    let {
        headerText: t,
        descriptionText: r,
        infoRows: s,
        onDismissAndStay: _,
        onDismissAndLeave: I,
        leaveButtonText: f,
        stayButtonText: p,
        transitionState: E,
        impression: h
    } = e;
    return (0, n.jsx)(i.ExpressiveModal, {
        transitionState: E,
        onClose: () => (_(), Promise.resolve()),
        trackingProps: {
            impression: h
        },
        graphic: {
            type: "image",
            src: u.A
        },
        title: t,
        subtitle: null != r ? r : void 0,
        actions: [{
            text: p,
            onClick: _,
            variant: "secondary"
        }, {
            text: f,
            onClick: I
        }],
        children: (0, n.jsx)("div", {
            className: c.Cu,
            children: s.map((e, t) => (0, n.jsxs)(a.Fragment, {
                children: [(0, n.jsxs)("div", {
                    className: l()(c.lj, e.className),
                    children: [e.icon, (0, n.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: e.text
                    })]
                }), t < s.length - 1 && (0, n.jsx)(A.A, {})]
            }, t))
        })
    })
}