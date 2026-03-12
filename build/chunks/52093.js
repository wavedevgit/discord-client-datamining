/** chunk id: 52093 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    L5: () => d
});
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(397927);
n(714510), n(92246), n(985018);
var r = n(787059);

function o(e) {
    let {
        children: t,
        isComplete: n,
        hasNextStep: i
    } = e;
    return (0, a.jsxs)("li", {
        className: s()(r.gY, {
            [r.HP]: n
        }, {
            [r.h4]: i
        }),
        children: [(0, a.jsxs)("div", {
            className: r.cJ,
            children: [(0, a.jsx)("div", {
                className: r.$P,
                children: n && (0, a.jsx)(l.rOg, {
                    className: r.ap,
                    color: l.LU0.colors.WHITE
                })
            }), i && (0, a.jsx)("div", {
                className: r.UK
            })]
        }), (0, a.jsx)("div", {
            className: r.M7,
            children: t
        })]
    })
}

function d(e) {
    let {
        children: t
    } = e;
    return (0, a.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: t
    })
}
let c = function(e) {
    let {
        children: t,
        heading: n,
        steps: i
    } = e;
    return (0, a.jsxs)("div", {
        className: r.iE,
        children: [(0, a.jsx)("div", {
            className: r.Mj,
            children: (0, a.jsx)(l.Heading, {
                className: r.R_,
                color: "text-strong",
                variant: "text-xs/semibold",
                children: n
            })
        }), (0, a.jsx)("div", {
            className: r.lp,
            children: (0, a.jsx)("ul", {
                children: i.map((e, t) => (0, a.jsx)(o, {
                    isComplete: e.isComplete,
                    hasNextStep: t < i.length - 1,
                    children: e.renderContent()
                }, t))
            })
        }), t]
    })
}