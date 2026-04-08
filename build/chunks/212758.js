/** chunk id: 212758 params = (module,exports,require) **/
_.d(t, {
    A: () => I
});
var s = _(627968),
    i = _(64700),
    a = _(503698),
    n = _.n(a),
    A = _(158954),
    r = _(397927),
    l = _(922529),
    o = _(272022),
    c = _(117816);

function I(e) {
    let {
        headerText: t,
        descriptionText: _,
        infoRows: a,
        onDismissAndStay: I,
        onDismissAndLeave: d,
        leaveButtonText: E,
        stayButtonText: u,
        transitionState: h,
        impression: L
    } = e;
    return (0, s.jsx)(A.ExpressiveModal, {
        transitionState: h,
        onClose: () => (I(), Promise.resolve()),
        trackingProps: {
            impression: L
        },
        graphic: {
            type: "image",
            src: c.A
        },
        title: t,
        subtitle: _ ?? void 0,
        actions: [{
            text: u,
            onClick: I,
            variant: "secondary"
        }, {
            text: E,
            onClick: d
        }],
        children: (0, s.jsx)("div", {
            className: o.Cu,
            children: a.map((e, t) => (0, s.jsxs)(i.Fragment, {
                children: [(0, s.jsxs)("div", {
                    className: n()(o.lj, e.className),
                    children: [e.icon, (0, s.jsx)(r.Text, {
                        variant: "text-md/medium",
                        children: e.text
                    })]
                }), t < a.length - 1 && (0, s.jsx)(l.A, {})]
            }, t))
        })
    })
}