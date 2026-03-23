/** chunk id: 526838 params = (module,exports,require) **/
l.d(t, {
    Z: () => u
});
var a = l(627968);
l(64700);
var n = l(397927),
    r = l(750338),
    i = l(23003),
    o = l(576765),
    s = l(88433);
let c = {
        none: void 0,
        nitroWheel: n.tvc
    },
    u = {
        title: "Marketing Home",
        stories: [{
            name: "Bento Box",
            component: function(e) {
                let {
                    title: t,
                    description: l,
                    ctaMode: u,
                    descriptionCtaText: d,
                    action1Text: p,
                    action1Variant: m,
                    action2Text: h,
                    action2Variant: b,
                    icon: x,
                    iconPosition: y,
                    index: f,
                    size: g,
                    badgeText: v,
                    badgeVariant: _,
                    isReducedMotion: E,
                    previewImageStyle: C
                } = e, S = () => (0, n.showToast)((0, n.createToast)("CTA clicked!", n.ToastType.SUCCESS)), j = c[x], T = "descriptionCta" === u ? {
                    descriptionCta: d,
                    onClick: S
                } : "actions" === u ? {
                    actions: [{
                        text: p,
                        variant: m,
                        onClick: S,
                        ...null != j ? {
                            icon: j,
                            iconPosition: y
                        } : {}
                    }, ...h.length > 0 ? [{
                        text: h,
                        variant: b,
                        onClick: S
                    }] : []]
                } : {};
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(r.A, {
                        name: i.NI.EMOJIS,
                        title: t,
                        description: l,
                        previewImage: o.A,
                        videoUrl: s.A,
                        shouldLoadVideo: !0,
                        index: f,
                        size: g,
                        badgeText: v.length > 0 ? v : void 0,
                        badgeVariant: _,
                        isReducedMotion: E,
                        previewImageStyle: C,
                        ...T
                    })
                })
            },
            id: "bento-box",
            controls: {
                title: {
                    label: "Title",
                    type: "text",
                    defaultValue: "Express yourself with emoji"
                },
                description: {
                    label: "Description",
                    type: "text",
                    defaultValue: "Use any emoji anywhere — even in servers that don't have them unlocked."
                },
                ctaMode: {
                    label: "CTA Mode",
                    type: "select",
                    defaultValue: "descriptionCta",
                    options: [{
                        label: "descriptionCta + onClick",
                        value: "descriptionCta"
                    }, {
                        label: "actions",
                        value: "actions"
                    }, {
                        label: "None",
                        value: "none"
                    }]
                },
                descriptionCtaText: {
                    label: "descriptionCta Text",
                    type: "text",
                    defaultValue: "Take me there"
                },
                action1Text: {
                    label: "Action 1 Text",
                    type: "text",
                    defaultValue: "Primary action"
                },
                action1Variant: {
                    label: "Action 1 Variant",
                    type: "select",
                    defaultValue: "primary",
                    options: [{
                        label: "Primary",
                        value: "primary"
                    }, {
                        label: "Secondary",
                        value: "secondary"
                    }]
                },
                action2Text: {
                    label: "Action 2 Text (leave empty to hide)",
                    type: "text",
                    defaultValue: "Secondary action"
                },
                action2Variant: {
                    label: "Action 2 Variant",
                    type: "select",
                    defaultValue: "secondary",
                    options: [{
                        label: "Primary",
                        value: "primary"
                    }, {
                        label: "Secondary",
                        value: "secondary"
                    }]
                },
                icon: {
                    label: "Action 1 Icon (actions mode only)",
                    type: "select",
                    defaultValue: "none",
                    options: [{
                        label: "None",
                        value: "none"
                    }, {
                        label: "Nitro Wheel",
                        value: "nitroWheel"
                    }]
                },
                iconPosition: {
                    label: "Action 1 Icon Position (actions mode only)",
                    type: "select",
                    defaultValue: "start",
                    options: [{
                        label: "Start",
                        value: "start"
                    }, {
                        label: "End",
                        value: "end"
                    }]
                },
                index: {
                    label: "Index",
                    type: "number",
                    defaultValue: 0
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: i.A0.LARGE,
                    options: [{
                        label: "Small",
                        value: i.A0.SMALL
                    }, {
                        label: "Medium",
                        value: i.A0.MEDIUM
                    }, {
                        label: "Large",
                        value: i.A0.LARGE
                    }]
                },
                badgeText: {
                    label: "Badge Text",
                    type: "text",
                    defaultValue: ""
                },
                badgeVariant: {
                    label: "Badge Variant",
                    type: "select",
                    defaultValue: "gradient",
                    options: [{
                        label: "Gradient",
                        value: "gradient"
                    }, {
                        label: "Expressive",
                        value: "expressive"
                    }]
                },
                isReducedMotion: {
                    label: "Reduced Motion",
                    type: "boolean",
                    defaultValue: !1
                },
                previewImageStyle: {
                    label: "Preview Image Style",
                    type: "select",
                    defaultValue: i.Tb.CONTAINED,
                    options: [{
                        label: "Contained",
                        value: i.Tb.CONTAINED
                    }, {
                        label: "Overlay",
                        value: i.Tb.OVERLAY
                    }]
                }
            }
        }]
    }