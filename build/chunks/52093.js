/** Chunk was on 36054 **/
/** chunk id: 52093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => d,
    L5: () => c
});
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(397927);
n(714510), n(92246), n(985018);
var s = n(718493);

function o(e) {
    let {
        children: t,
        isComplete: n,
        hasNextStep: l
    } = e;
    return (0, a.jsxs)("li", {
        className: r()(s.gY, {
            [s.HP]: n
        }, {
            [s.h4]: l
        }),
        children: [(0, a.jsxs)("div", {
            className: s.cJ,
            children: [(0, a.jsx)("div", {
                className: s.$P,
                children: n && (0, a.jsx)(i.rOg, {
                    className: s.ap,
                    color: i.LU0.colors.WHITE
                })
            }), l && (0, a.jsx)("div", {
                className: s.UK
            })]
        }), (0, a.jsx)("div", {
            className: s.M7,
            children: t
        })]
    })
}

function c(e) {
    let {
        children: t
    } = e;
    return (0, a.jsx)(i.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: t
    })
}
let d = function(e) {
    let {
        children: t,
        heading: n,
        steps: l
    } = e;
    return (0, a.jsxs)("div", {
        className: s.iE,
        children: [(0, a.jsx)("div", {
            className: s.Mj,
            children: (0, a.jsx)(i.Heading, {
                className: s.R_,
                color: "text-strong",
                variant: "text-xs/semibold",
                children: n
            })
        }), (0, a.jsx)("div", {
            className: s.lp,
            children: (0, a.jsx)("ul", {
                children: l.map((e, t) => (0, a.jsx)(o, {
                    isComplete: e.isComplete,
                    hasNextStep: t < l.length - 1,
                    children: e.renderContent()
                }, t))
            })
        }), t]
    })
}