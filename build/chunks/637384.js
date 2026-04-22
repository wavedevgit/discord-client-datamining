/** chunk id: 637384 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(517738),
    r = n(417597),
    o = n(397927),
    c = n(922529),
    d = n(340833),
    u = n(913642),
    h = n(513272),
    m = n(798505),
    A = n(670455),
    g = n(381941),
    _ = n(985018),
    p = n(182147);

function f(e) {
    let {
        summary: t,
        channel: n
    } = e, l = (0, r.bG)([h.A], () => h.A.summaryFeedback(t)), a = (e, i) => {
        e.stopPropagation(), (0, m.A)({
            summary: t,
            channel: n,
            rating: i
        })
    }, c = (0, o.pnh)(null == l, {
        enter: {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        },
        leave: {
            opacity: 0
        },
        config: {
            mass: 1,
            tension: 500,
            friction: 18,
            clamp: !0
        }
    }, "animate-always");
    return (0, i.jsx)(i.Fragment, {
        children: c((e, t) => t ? (0, i.jsx)("div", {
            className: p.RD,
            children: (0, i.jsxs)(s.animated.div, {
                style: e,
                className: p.GK,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: _.intl.string(_.t["5ZsiE9"])
                }), (0, i.jsx)(o.DUT, {
                    onClick: e => a(e, A.P0.GOOD),
                    children: (0, i.jsx)(u.A, {
                        className: p.O1,
                        width: 12,
                        height: 12
                    })
                }), (0, i.jsx)(o.DUT, {
                    onClick: e => a(e, A.P0.BAD),
                    children: (0, i.jsx)(d.A, {
                        className: p.O1,
                        width: 12,
                        height: 12
                    })
                })]
            })
        }) : null)
    })
}

function E(e) {
    let t, {
            item: n,
            channel: l,
            index: s
        } = e,
        d = (0, r.bG)([h.A], () => h.A.selectedSummary(l.id));
    if (null == d) return null;
    let u = null != n.unreadId,
        m = null != n.content;
    return t = m ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.Kck, {
            size: "xs",
            color: "currentColor",
            className: p.cR
        }), n.content]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f, {
            summary: d,
            channel: l
        }), (0, i.jsx)(o.Kck, {
            size: "xs",
            color: "currentColor",
            className: p.Jq
        })]
    }), (0, i.jsx)(c.A, {
        className: a()(p.aK, m ? p.Ke : p.hO),
        contentClassName: m ? p.Ew : p.rD,
        isUnread: u,
        id: u ? g.q4 : void 0,
        children: t
    }, `divider-${n.contentKey??n.unreadId??s}`)
}