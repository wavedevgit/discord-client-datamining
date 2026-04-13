/** chunk id: 548612 params = (module,exports,require) **/
t.d(l, {
    A: () => u
});
var n = t(627968),
    i = t(64700),
    s = t(317097),
    a = t(397927),
    r = t(930349),
    o = t(985018),
    d = t(881091);

function c(e) {
    let {
        color: l,
        suggestedColors: t,
        disabled: r,
        ariaLabel: o,
        onSelect: c
    } = e, u = i.useRef(null), m = (0, s.Hl)(l);
    return (0, n.jsx)(a.YNO, {
        targetElementRef: u,
        renderPopout: e => (0, n.jsx)(a.VNw, {
            ...e,
            value: l,
            onChange: c,
            suggestedColors: t,
            showEyeDropper: !0
        }),
        children: e => {
            let {
                onClick: l,
                ...t
            } = e;
            return (0, n.jsx)(a.DUT, {
                ...t,
                innerRef: u,
                className: d.Dh,
                onClick: r ? void 0 : l,
                "aria-label": o,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, n.jsx)("div", {
                    className: d.Hy,
                    style: {
                        backgroundColor: m
                    }
                })
            })
        }
    })
}

function u(e) {
    let {
        primaryColor: l,
        secondaryColor: t,
        onSelectPrimaryColor: i,
        onSelectSecondaryColor: a,
        suggestedColors: u,
        disabled: m = !1
    } = e, p = (0, s.Hl)(l), x = (0, s.Hl)(t), A = `linear-gradient(to bottom, ${p}, ${x})`, g = o.intl.formatToPlainString(o.t.FquTfm, {
        colorLabel: p
    }), f = o.intl.formatToPlainString(o.t.xOnm4z, {
        colorLabel: x
    });
    return (0, n.jsx)(r.Yt, {
        variant: "square",
        disabled: m,
        children: (0, n.jsxs)("div", {
            className: d.D7,
            style: {
                background: A
            },
            children: [(0, n.jsx)(c, {
                color: l,
                suggestedColors: u,
                ariaLabel: g,
                onSelect: i,
                disabled: m
            }), (0, n.jsx)(c, {
                color: t,
                suggestedColors: u,
                ariaLabel: f,
                onSelect: a,
                disabled: m
            })]
        })
    })
}