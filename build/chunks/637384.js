/** Chunk was on 78528 **/
/** chunk id: 637384, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(353709),
    a = n(417597),
    o = n(397927),
    c = n(922529),
    u = n(340833),
    d = n(913642),
    p = n(513272),
    h = n(798505),
    f = n(670455),
    g = n(381941),
    m = n(985018),
    b = n(112178);

function A(e) {
    let {
        summary: t,
        channel: n
    } = e, l = (0, a.bG)([p.A], () => p.A.summaryFeedback(t)), i = (e, r) => {
        e.stopPropagation(), (0, h.A)({
            summary: t,
            channel: n,
            rating: r
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
    return (0, r.jsx)(r.Fragment, {
        children: c((e, t) => t ? (0, r.jsx)("div", {
            className: b.RD,
            children: (0, r.jsxs)(s.animated.div, {
                style: e,
                className: b.GK,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: m.intl.string(m.t["5ZsiE9"])
                }), (0, r.jsx)(o.DUT, {
                    onClick: e => i(e, f.P0.GOOD),
                    children: (0, r.jsx)(d.A, {
                        className: b.O1,
                        width: 12,
                        height: 12
                    })
                }), (0, r.jsx)(o.DUT, {
                    onClick: e => i(e, f.P0.BAD),
                    children: (0, r.jsx)(u.A, {
                        className: b.O1,
                        width: 12,
                        height: 12
                    })
                })]
            })
        }) : null)
    })
}

function y(e) {
    var t, n;
    let l, {
            item: s,
            channel: u,
            index: d
        } = e,
        h = (0, a.bG)([p.A], () => p.A.selectedSummary(u.id));
    if (null == h) return null;
    let f = null != s.unreadId,
        m = null != s.content;
    return l = m ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Kck, {
            size: "xs",
            color: "currentColor",
            className: b.cR
        }), s.content]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A, {
            summary: h,
            channel: u
        }), (0, r.jsx)(o.Kck, {
            size: "xs",
            color: "currentColor",
            className: b.Jq
        })]
    }), (0, r.jsx)(c.A, {
        className: i()(b.aK, m ? b.Ke : b.hO),
        contentClassName: m ? b.Ew : b.rD,
        isUnread: f,
        id: f ? g.q4 : void 0,
        children: l
    }, "divider-".concat(null != (t = null != (n = s.contentKey) ? n : s.unreadId) ? t : d))
}