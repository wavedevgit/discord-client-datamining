/** chunk id: 792849 params = (module,exports,require) **/
l.d(t, {
    g: () => o
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(261225),
    s = l(970488);
let i = e => {
        let {
            color: t,
            children: l
        } = e;
        return (0, a.jsx)("div", {
            style: {
                background: t,
                minHeight: 120,
                height: "100%",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold"
            },
            children: l
        })
    },
    o = {
        name: "Grid",
        id: "grid",
        component: e => {
            let {
                columns: t,
                perPage: l,
                paginationPosition: o,
                gridItemColumns: d,
                gridItemRows: c
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens."
                }), (0, a.jsx)("br", {}), (0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "GridItem is (optionally) used to set the size of a grid itme in the grid."
                }), (0, a.jsx)("div", {
                    style: {
                        marginTop: 24
                    },
                    children: (0, a.jsxs)(n.A, {
                        perPage: l,
                        columns: t,
                        paginationPosition: o,
                        children: [(0, a.jsx)(i, {
                            color: "red"
                        }), (0, a.jsx)(s.A, {
                            columns: d,
                            rows: c,
                            children: (0, a.jsx)(i, {
                                color: "orange",
                                children: (0, a.jsx)(r.Text, {
                                    variant: "text-lg/semibold",
                                    children: "GridItem"
                                })
                            })
                        }), (0, a.jsx)(i, {
                            color: "yellow"
                        }), (0, a.jsx)(i, {
                            color: "green"
                        }), (0, a.jsx)(i, {
                            color: "blue"
                        }), (0, a.jsx)(i, {
                            color: "violet"
                        }), (0, a.jsx)(i, {
                            color: "red"
                        }), (0, a.jsx)(i, {
                            color: "orange"
                        }), (0, a.jsx)(i, {
                            color: "yellow"
                        }), (0, a.jsx)(i, {
                            color: "green"
                        }), (0, a.jsx)(i, {
                            color: "blue"
                        }), (0, a.jsx)(i, {
                            color: "violet"
                        }), (0, a.jsx)(i, {
                            color: "red"
                        }), (0, a.jsx)(i, {
                            color: "orange"
                        }), (0, a.jsx)(i, {
                            color: "yellow"
                        }), (0, a.jsx)(i, {
                            color: "green"
                        }), (0, a.jsx)(i, {
                            color: "blue"
                        }), (0, a.jsx)(i, {
                            color: "violet"
                        }), (0, a.jsx)(i, {
                            color: "red"
                        }), (0, a.jsx)(i, {
                            color: "orange"
                        }), (0, a.jsx)(i, {
                            color: "yellow"
                        }), (0, a.jsx)(i, {
                            color: "green"
                        }), (0, a.jsx)(i, {
                            color: "blue"
                        }), (0, a.jsx)(i, {
                            color: "violet",
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-lg/semibold",
                                children: "Last Child"
                            })
                        })]
                    })
                })]
            })
        },
        controls: {
            columns: {
                label: "Columns",
                type: "number",
                defaultValue: 3
            },
            perPage: {
                label: "Grid Items per Page (default, all)",
                type: "number",
                defaultValue: 3
            },
            paginationPosition: {
                label: "Pagination Position",
                type: "select",
                defaultValue: "bottom",
                options: [{
                    label: "Top",
                    value: "top"
                }, {
                    label: "Bottom",
                    value: "bottom"
                }]
            },
            gridItemColumns: {
                label: "Grid Item Columns",
                type: "number",
                defaultValue: 1
            },
            gridItemRows: {
                label: "Grid Item Rows",
                type: "number",
                defaultValue: 1
            }
        }
    }