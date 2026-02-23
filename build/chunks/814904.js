/** chunk id: 814904, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    D: () => s
});
var r = l(627968);
l(64700);
var a = l(720462),
    n = l(528226);
let i = () => (0, r.jsx)("div", {
        style: {
            height: 250,
            width: 250,
            background: "pink",
            borderRadius: 6
        }
    }),
    s = {
        title: "Contained Hero",
        stories: [{
            name: "ContainedHero",
            id: "contained-hero",
            component: e => {
                let {
                    containerHeight: t,
                    showChildren: l,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    style: {
                        height: l ? void 0 : t
                    },
                    children: (0, r.jsx)(n.A, {
                        ...s,
                        children: l ? (0, r.jsxs)(a.A, {
                            children: [(0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {}), (0, r.jsx)(i, {})]
                        }) : null
                    })
                })
            },
            controls: {
                bannerSrc: {
                    label: "Banner Source",
                    type: "text",
                    defaultValue: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e"
                },
                logoSrc: {
                    label: "Logo Source",
                    type: "text",
                    defaultValue: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda"
                },
                backgroundColor: {
                    label: "Background Color",
                    type: "text",
                    defaultValue: "#171D55"
                },
                containerHeight: {
                    label: "Container Height",
                    type: "number",
                    defaultValue: 150
                },
                showChildren: {
                    label: "Show Children",
                    type: "boolean",
                    defaultValue: !1
                }
            }
        }]
    }