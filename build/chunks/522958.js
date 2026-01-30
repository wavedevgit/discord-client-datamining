/** chunk id: 522958, original params: e,t,n (module,exports,require) **/
n.d(t, {
    n: () => d
}), n(747238), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(397927),
    i = n(147925),
    s = n(159452);

function o(e) {
    let {
        text: t
    } = e;
    return (0, a.jsx)("span", {
        className: s.IR,
        children: t.split("").map((e, t) => (0, a.jsx)("span", {
            className: s.ZF,
            style: {
                "--custom-letter-index": t
            },
            children: e
        }, t))
    })
}

function c(e) {
    let {
        text: t
    } = e;
    return (0, a.jsx)("span", {
        className: s.IR,
        children: "⭐ ".concat(t).split("").map((e, t) => (0, a.jsx)("span", {
            className: s.EC,
            style: {
                "--custom-letter-index": t
            },
            children: e
        }, t))
    })
}

function d(e) {
    let {
        title: t,
        initExpanded: n,
        highlightMode: d = "none",
        children: u
    } = e, [m, p] = l.useState(n), h = l.useCallback(() => {
        p(!m)
    }, [m]), x = "root" === d ? "status-warning" : "status-positive", g = e => "migrated" === d ? (0, a.jsx)(r.Text, {
        variant: e,
        children: (0, a.jsx)(o, {
            text: t
        })
    }) : "migrated-root" === d ? (0, a.jsx)(r.Text, {
        variant: e,
        children: (0, a.jsx)(c, {
            text: t
        })
    }) : (0, a.jsx)(r.Text, {
        variant: e,
        color: x,
        children: t
    });
    return null == u ? (0, a.jsx)("div", {
        className: s.NF,
        children: g("text-md/normal")
    }) : (0, a.jsxs)("div", {
        className: s.NF,
        children: [(0, a.jsxs)(r.DUT, {
            className: s.jr,
            onClick: h,
            children: [g("text-md/bold"), (0, a.jsx)(i.A, {
                direction: m ? i.A.Directions.DOWN : i.A.Directions.RIGHT,
                className: s.D
            })]
        }), m && (0, a.jsx)("div", {
            className: s.m4,
            children: u
        })]
    })
}