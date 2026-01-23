/** Chunk was on 39679 **/
/** chunk id: 212758, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var s = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(158954),
    l = n(397927),
    d = n(922529),
    _ = n(89300),
    u = n(117816);

function c(e) {
    let {
        headerText: t,
        descriptionText: n,
        infoRows: r,
        onDismissAndStay: c,
        onDismissAndLeave: m,
        leaveButtonText: g,
        stayButtonText: f,
        transitionState: x,
        impression: N
    } = e;
    return (0, s.jsx)(o.ExpressiveModal, {
        transitionState: x,
        onClose: () => (c(), Promise.resolve()),
        trackingProps: {
            impression: N
        },
        graphic: {
            type: "image",
            src: u.A
        },
        title: t,
        subtitle: null != n ? n : void 0,
        actions: [{
            text: f,
            onClick: c,
            variant: "secondary"
        }, {
            text: g,
            onClick: m
        }],
        children: (0, s.jsx)("div", {
            className: _.Cu,
            children: r.map((e, t) => (0, s.jsxs)(i.Fragment, {
                children: [(0, s.jsxs)("div", {
                    className: a()(_.lj, e.className),
                    children: [e.icon, (0, s.jsx)(l.Text, {
                        variant: "text-md/medium",
                        children: e.text
                    })]
                }), t < r.length - 1 && (0, s.jsx)(d.A, {})]
            }, t))
        })
    })
}