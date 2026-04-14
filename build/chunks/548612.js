/** chunk id: 548612 params = (module,exports,require) **/
n.d(l, {
    A: () => u
});
var t = n(627968),
    i = n(64700),
    s = n(317097),
    a = n(397927),
    r = n(930349),
    o = n(985018),
    d = n(881091);

function c(e) {
    let {
        color: l,
        suggestedColors: n,
        disabled: r,
        ariaLabel: o,
        onSelect: c
    } = e, u = i.useRef(null), m = (0, s.Hl)(l);
    return (0, t.jsx)(a.YNO, {
        targetElementRef: u,
        renderPopout: e => (0, t.jsx)(a.VNw, {
            ...e,
            value: l,
            onChange: c,
            suggestedColors: n,
            showEyeDropper: !0
        }),
        children: e => {
            let {
                onClick: l,
                ...n
            } = e;
            return (0, t.jsx)(a.DUT, {
                ...n,
                innerRef: u,
                className: d.Dh,
                onClick: r ? void 0 : l,
                "aria-label": o,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", {
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
        secondaryColor: n,
        onSelectPrimaryColor: i,
        onSelectSecondaryColor: a,
        suggestedColors: u,
        disabled: m = !1
    } = e, p = (0, s.Hl)(l), x = (0, s.Hl)(n), A = `linear-gradient(to bottom, ${p}, ${x})`, g = o.intl.formatToPlainString(o.t.FquTfm, {
        colorLabel: p
    }), f = o.intl.formatToPlainString(o.t.xOnm4z, {
        colorLabel: x
    });
    return (0, t.jsx)(r.Yt, {
        variant: "square",
        disabled: m,
        children: (0, t.jsxs)("div", {
            className: d.D7,
            style: {
                background: A
            },
            children: [(0, t.jsx)(c, {
                color: l,
                suggestedColors: u,
                ariaLabel: g,
                onSelect: i,
                disabled: m
            }), (0, t.jsx)(c, {
                color: n,
                suggestedColors: u,
                ariaLabel: f,
                onSelect: a,
                disabled: m
            })]
        })
    })
}