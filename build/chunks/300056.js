/** chunk id: 300056 params = (module,exports,require) **/
l.d(t, {
    a: () => s
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(287944);
let s = {
    name: "Tooltip",
    id: "cms-tooltip",
    component: e => (0, a.jsx)(n.A, {
        ...e,
        children: (0, a.jsx)("div", {
            style: {
                width: 300,
                background: "pink",
                borderRadius: 8,
                padding: 12
            },
            children: (0, a.jsx)(r.Text, {
                variant: "text-lg/semibold",
                children: "Hover me."
            })
        })
    }),
    controls: {
        text: {
            type: "text",
            label: "Content",
            defaultValue: "Hello, world!"
        },
        position: {
            type: "select",
            label: "Position",
            defaultValue: "top",
            options: [{
                label: "top",
                value: "top"
            }, {
                label: "left",
                value: "left"
            }, {
                label: "right",
                value: "right"
            }, {
                label: "bottom",
                value: "bottom"
            }]
        }
    }
}