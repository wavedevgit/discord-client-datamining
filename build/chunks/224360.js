/** chunk id: 224360 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(915089),
    c = n(201438),
    u = n(61881),
    g = n(788593),
    m = n(985018),
    h = n(496527),
    x = n(853228);

function p(e) {
    let {
        applicationId: t,
        userId: n,
        onClick: a
    } = e, {
        coverImageUrl: l,
        gameName: d,
        isLoading: p
    } = (0, c.A)(t), f = (0, s.bG)([u.A], () => u.A.suggestedFetchIsLoading), A = m.intl.formatToPlainString(m.t["3mb1s5"], {
        game: d
    });
    return p || f ? (0, i.jsx)("div", {
        className: h.mD
    }) : (0, i.jsx)(r.m, {
        text: A,
        ariaHidden: !0,
        children: (0, i.jsxs)(o.DUT, {
            className: x.c9,
            onClick: a,
            "aria-label": A,
            children: [(0, i.jsx)(g.A, {
                className: x.Iv,
                imageSrc: l,
                gameName: d,
                applicationId: t,
                userId: n,
                disableInteraction: !0
            }), (0, i.jsx)(o.pa$, {
                size: "md",
                className: x.Xv,
                color: o.LU0.colors.WHITE
            })]
        })
    })
}

function f(e) {
    let {
        userId: t,
        games: n,
        onDismiss: a,
        onClick: s,
        className: r
    } = e, c = (0, d.GV)();
    return (0, i.jsxs)("aside", {
        className: l()(x.kL, r),
        "aria-labelledby": c,
        children: [(0, i.jsxs)("div", {
            className: x.wx,
            children: [(0, i.jsx)(o.DUT, {
                className: x.r,
                "aria-label": m.intl.string(m.t["pUR+3g"]),
                onClick: a,
                children: (0, i.jsx)(o.PGe, {
                    size: "sm",
                    color: "currentColor"
                })
            }), (0, i.jsx)(o.Heading, {
                id: c,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: m.intl.string(m.t.zMUr6Z)
            })]
        }), (0, i.jsx)("ul", {
            className: x.Vg,
            children: n.map(e => {
                let {
                    applicationId: n
                } = e;
                return (0, i.jsx)("li", {
                    children: (0, i.jsx)(p, {
                        onClick: () => s(n),
                        userId: t,
                        applicationId: n
                    })
                }, n)
            })
        })]
    })
}