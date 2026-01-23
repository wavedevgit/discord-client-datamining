/** Chunk was on 38663 **/
/** chunk id: 224360, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    o = n(990078),
    s = n(397927),
    c = n(915089),
    u = n(61881),
    d = n(788593),
    f = n(507247),
    p = n(973397),
    g = n(985018),
    m = n(461349),
    b = n(105778);

function y(e) {
    let {
        applicationId: t,
        userId: n,
        onClick: l
    } = e, {
        coverImageUrl: i,
        gameName: c,
        isLoading: f
    } = (0, p.A)(t), y = (0, a.bG)([u.A], () => u.A.suggestedFetchIsLoading), O = g.intl.formatToPlainString(g.t["3mb1s5"], {
        game: c
    });
    return f || y ? (0, r.jsx)("div", {
        className: m.mD
    }) : (0, r.jsx)(o.m, {
        text: O,
        ariaHidden: !0,
        children: (0, r.jsxs)(s.DUT, {
            className: b.c9,
            onClick: l,
            "aria-label": O,
            children: [(0, r.jsx)(d.A, {
                className: b.Iv,
                imageSrc: i,
                gameName: c,
                applicationId: t,
                userId: n,
                disableInteraction: !0
            }), (0, r.jsx)(s.pa$, {
                size: "md",
                className: b.Xv,
                color: s.LU0.colors.WHITE
            })]
        })
    })
}

function O(e) {
    let {
        userId: t,
        games: n,
        onDismiss: l,
        onClick: a,
        className: o
    } = e, u = (0, c.GV)();
    return (0, r.jsxs)("aside", {
        className: i()(b.kL, o),
        "aria-labelledby": u,
        children: [(0, r.jsxs)("div", {
            className: b.wx,
            children: [(0, r.jsx)(s.DUT, {
                className: b.r,
                "aria-label": g.intl.string(g.t["pUR+3g"]),
                onClick: l,
                children: (0, r.jsx)(s.PGe, {
                    size: "sm",
                    color: "currentColor"
                })
            }), (0, r.jsx)(s.Heading, {
                id: u,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: g.intl.string(g.t.zMUr6Z)
            })]
        }), (0, r.jsx)(f.A, {
            games: n,
            renderGame: e => {
                let {
                    applicationId: n
                } = e;
                return (0, r.jsx)(y, {
                    onClick: () => a(n),
                    userId: t,
                    applicationId: n
                })
            }
        })]
    })
}