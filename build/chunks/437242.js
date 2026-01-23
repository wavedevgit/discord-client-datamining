/** Chunk was on 47841 **/
/** chunk id: 437242, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(47167),
    a = n(734057),
    o = n(994500),
    c = n(287809),
    d = n(239705),
    u = n(985018),
    g = n(86181);

function m(e) {
    var t;
    let {
        action: n,
        triggerType: m,
        toggled: p,
        onToggleAction: f
    } = e, b = e => () => f(e), h = (0, d.x)(n.type, n, m), x = null == (t = n.metadata) ? void 0 : t.channelId, j = (0, i.bG)([c.default, o.A, a.A], () => {
        let e = a.A.getChannel(x);
        return null == e ? null : (0, s.m1)(e, c.default, o.A)
    }, [x]);
    if (null == h) return null;
    let {
        headerText: _,
        descriptionText: O,
        icon: v
    } = h;
    return (0, r.jsxs)("div", {
        className: g.Ik,
        children: [(0, r.jsx)("div", {
            className: g.TV,
            children: (0, r.jsx)(v, {
                size: "md",
                color: "currentColor",
                className: g.gE
            })
        }), (0, r.jsxs)("div", {
            className: g.xj,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                children: _
            }), (0, r.jsx)(l.Text, {
                color: "interactive-text-default",
                variant: "text-xs/medium",
                children: O
            }), p && (0, r.jsxs)(l.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: [null != j && u.intl.format(u.t["8Sr/ar"], {
                    channelName: j
                }), (0, r.jsx)(l.DUT, {
                    onClick: b(!0),
                    className: g._2,
                    tag: "span",
                    role: "link",
                    children: u.intl.string(u.t["3gUsJb"])
                })]
            })]
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)(l.DUT, {
                onClick: h.isEditable ? b(!1) : void 0,
                children: (0, r.jsx)(l.P7L, {
                    checked: p,
                    disabled: !h.isEditable
                })
            })
        })]
    })
}