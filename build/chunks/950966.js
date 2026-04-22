/** chunk id: 950966 params = (module,exports,require) **/
l.d(t, {
    Z: () => o
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(264302);
let s = e => {
        let {
            color: t,
            children: l
        } = e;
        return (0, a.jsx)(r.ZpM, {
            style: {
                backgroundColor: t,
                padding: "16px",
                minWidth: "100px",
                minHeight: "100px"
            },
            children: (0, a.jsx)(r.Text, {
                variant: "text-md/semibold",
                children: l
            })
        })
    },
    o = {
        name: "Stack",
        id: "cms-stack",
        component: e => (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(r.Text, {
                variant: "text-lg/semibold",
                children: "Stack component for CMS layouts."
            }), (0, a.jsx)("div", {
                style: {
                    border: "1px dashed #ccc",
                    padding: "16px"
                },
                children: (0, a.jsxs)(n.A, {
                    ...e,
                    children: [(0, a.jsx)(s, {
                        color: "#5865F2",
                        children: "Item 1"
                    }), (0, a.jsx)(s, {
                        color: "#57F287",
                        children: "Item 2"
                    }), (0, a.jsx)(s, {
                        color: "#FEE75C",
                        children: "Item 3"
                    })]
                })
            }), (0, a.jsx)("hr", {}), (0, a.jsx)(r.Text, {
                variant: "text-md/semibold",
                children: "Horizontal Stack"
            }), (0, a.jsx)("div", {
                style: {
                    border: "1px dashed #ccc",
                    padding: "16px"
                },
                children: (0, a.jsxs)(n.A, {
                    ...e,
                    direction: "horizontal",
                    children: [(0, a.jsx)(s, {
                        color: "#5865F2",
                        children: "Item 1"
                    }), (0, a.jsx)(s, {
                        color: "#57F287",
                        children: "Item 2"
                    }), (0, a.jsx)(s, {
                        color: "#FEE75C",
                        children: "Item 3"
                    })]
                })
            }), (0, a.jsx)(r.Text, {
                variant: "text-md/semibold",
                children: "Vertical Stack"
            }), (0, a.jsx)("div", {
                style: {
                    border: "1px dashed #ccc",
                    padding: "16px"
                },
                children: (0, a.jsxs)(n.A, {
                    ...e,
                    direction: "vertical",
                    children: [(0, a.jsx)(s, {
                        color: "#5865F2",
                        children: "Item 1"
                    }), (0, a.jsx)(s, {
                        color: "#57F287",
                        children: "Item 2"
                    }), (0, a.jsx)(s, {
                        color: "#FEE75C",
                        children: "Item 3"
                    })]
                })
            })]
        }),
        controls: {
            direction: {
                type: "select",
                label: "Direction",
                defaultValue: "vertical",
                options: [{
                    label: "Horizontal",
                    value: "horizontal"
                }, {
                    label: "Vertical",
                    value: "vertical"
                }]
            },
            align: {
                type: "select",
                label: "Align",
                defaultValue: "start",
                options: [{
                    label: "Start",
                    value: "start"
                }, {
                    label: "Center",
                    value: "center"
                }, {
                    label: "End",
                    value: "end"
                }, {
                    label: "Stretch",
                    value: "stretch"
                }]
            },
            justify: {
                type: "select",
                label: "Justify",
                defaultValue: "start",
                options: [{
                    label: "Start",
                    value: "start"
                }, {
                    label: "Center",
                    value: "center"
                }, {
                    label: "End",
                    value: "end"
                }, {
                    label: "Space Between",
                    value: "space-between"
                }, {
                    label: "Space Around",
                    value: "space-around"
                }]
            }
        }
    }