/** chunk id: 436102 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(361158),
    l = n(80556),
    r = n(163679),
    o = n(524134),
    d = n(87404),
    c = n(872985),
    u = n(930821);

function m() {
    return (0, a.jsx)(i.IpV, {
        className: u.nd,
        children: (0, a.jsxs)("div", {
            className: c.l$,
            children: [(0, a.jsxs)("section", {
                className: c.uW,
                children: [(0, a.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    children: "Verification Layer"
                }), (0, a.jsx)("div", {
                    className: c.bd,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        text: "Open Verification Layer",
                        onClick: () => {
                            (0, s.B8)(() => (0, a.jsx)(o.A, {}), {
                                layerKey: d._s,
                                Layer: l.Ay
                            })
                        }
                    })
                })]
            }), (0, a.jsxs)("section", {
                className: c.uW,
                children: [(0, a.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    children: "Safety Flow"
                }), (0, a.jsx)("div", {
                    className: c.bd,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        text: "Open Safety Flow",
                        onClick: () => {
                            (0, s.B8)(e => {
                                let {
                                    closeLayer: t
                                } = e;
                                return (0, a.jsx)(r.A, {
                                    onClose: t
                                })
                            }, {
                                layerKey: d._s,
                                Layer: l.Ay
                            })
                        }
                    })
                })]
            }), (0, a.jsxs)("section", {
                className: c.uW,
                children: [(0, a.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    children: "Layer Controls"
                }), (0, a.jsx)("div", {
                    className: c.bd,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        text: "Close All Layers",
                        onClick: () => {
                            s.xr.setState({
                                fullScreenLayers: []
                            })
                        }
                    })
                })]
            })]
        })
    })
}