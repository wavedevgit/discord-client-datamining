/** chunk id: 577806 params = (module,exports,require) **/
n.d(t, {
    _: () => u
});
var i = n(627968),
    s = n(158954),
    l = n(397927),
    r = n(933297);

function a(e) {
    let {
        decoration: t
    } = e, {
        type: n,
        id: l,
        ...r
    } = t;
    return (0, i.jsx)(s.$nd, {
        variant: "secondary",
        ...r
    })
}

function o(e) {
    let {
        decoration: t
    } = e, n = t.button;
    return (0, i.jsx)(n, {})
}

function d(e) {
    let {
        decoration: t
    } = e;
    return (0, i.jsx)(s.BJc, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: t.buttons.map(e => {
            switch (e.type) {
                case r.UV.BUTTON:
                    return (0, i.jsx)(a, {
                        decoration: e
                    }, e.id);
                case r.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, i.jsx)(o, {
                        decoration: e
                    }, e.id)
            }
        })
    })
}

function c(e) {
    let {
        decoration: t
    } = e;
    return null == t ? null : t.type === r.WX.BUTTON_GROUP ? (0, i.jsx)(d, {
        decoration: t
    }) : void 0
}

function u(e) {
    let {
        title: t,
        icon: n,
        subtitle: r,
        decoration: a
    } = e;
    return (0, i.jsxs)(s.BJc, {
        direction: "horizontal",
        align: "center",
        gap: 16,
        padding: {
            left: "sm",
            right: "sm",
            bottom: "lg"
        },
        children: [(0, i.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 4,
            children: [(0, i.jsxs)(s.BJc, {
                direction: "horizontal",
                gap: 8,
                children: [(0, i.jsx)(s.DZT, {
                    variant: "heading-xl/normal",
                    color: "text-strong",
                    children: t
                }), null != n && (0, i.jsx)(n, {
                    color: l.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                    size: "md"
                })]
            }), null != r && (0, i.jsx)(s.EYj, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: r
            })]
        }), (0, i.jsx)(c, {
            decoration: a
        })]
    })
}