/** chunk id: 274604 params = (module,exports,require) **/
n.d(t, {
    X: () => a
});
var r = n(627968),
    l = n(64700),
    s = n(397927),
    i = n(681636);

function a(e) {
    let {
        text: t,
        isLoading: n = !1,
        onClose: a
    } = e, o = l.useMemo(() => (t ?? "").split("\n").map(e => e.trim()).filter(e => e.length > 0), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: i.Mm,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "currentColor",
                children: "Transcript"
            }), (0, r.jsx)(s.DUT, {
                onClick: a,
                className: i.GI,
                children: (0, r.jsx)(s.PGe, {
                    color: "currentColor"
                })
            })]
        }), (0, r.jsx)(s.vN3, {
            children: (0, r.jsx)(s.ArX, {
                className: i.j5,
                fade: !0,
                children: (0, r.jsx)("div", {
                    className: i.FN,
                    children: n ? (0, r.jsx)("div", {
                        className: i.Cw,
                        children: (0, r.jsx)(s.y$y, {
                            type: s.y$y.Type.WANDERING_CUBES
                        })
                    }) : (0, r.jsx)(s.Heading, {
                        variant: "heading-md/normal",
                        color: "text-muted",
                        children: o.map((e, t) => (0, r.jsx)("p", {
                            children: e
                        }, t))
                    })
                })
            })
        })]
    })
}