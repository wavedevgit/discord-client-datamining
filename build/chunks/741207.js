/** Chunk was on 47841 **/
/** chunk id: 741207, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
    s = n(397927),
    a = n(71393),
    o = n(576705),
    c = n(239705),
    d = n(411335),
    u = n(652215),
    g = n(200700),
    m = n(985018),
    p = n(86181);

function f(e) {
    var t;
    let {
        action: n,
        triggerType: f,
        guildId: b,
        toggled: h,
        onToggleAction: x
    } = e, j = e => () => x(e), _ = (0, c.x)(n.type, n, f), O = null == (t = n.metadata) ? void 0 : t.durationSeconds, v = null != O ? (0, g.getFriendlyDurationString)(O) : null, y = (0, i.bG)([o.A, a.A], () => o.A.can(u.xBc.MODERATE_MEMBERS, a.A.getGuild(b)), [b]);
    if (null == _) return null;
    let {
        headerText: A,
        descriptionText: E,
        icon: N
    } = _;
    return (0, r.jsxs)("div", {
        className: p.Ik,
        children: [(0, r.jsx)("div", {
            className: p.TV,
            children: (0, r.jsx)(N, {
                size: "md",
                color: "currentColor",
                className: p.gE
            })
        }), (0, r.jsxs)("div", {
            className: p.xj,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-sm/semibold",
                children: A
            }), (0, r.jsx)(s.Text, {
                color: "interactive-text-default",
                variant: "text-xs/medium",
                children: E
            }), h && (0, r.jsxs)(s.Text, {
                color: "interactive-text-default",
                variant: "text-xs/medium",
                children: [null === v ? null : f === d.uh.MENTION_SPAM ? m.intl.format(m.t.i3lsKD, {
                    friendlyDurationString: v
                }) : m.intl.format(m.t.mvHxze, {
                    friendlyDurationString: v
                }), y && (0, r.jsx)(s.DUT, {
                    onClick: j(!0),
                    className: p._2,
                    tag: "span",
                    role: "link",
                    children: m.intl.string(m.t["0B95RJ"])
                })]
            })]
        }), (0, r.jsx)(l.m, {
            text: m.intl.format(m.t.wx6Vb9, {}),
            "aria-label": m.intl.formatToMarkdownString(m.t.wx6Vb9, {}),
            shouldShow: !y,
            children: (0, r.jsx)("div", {
                children: (0, r.jsx)(s.DUT, {
                    onClick: y ? j(!1) : void 0,
                    children: (0, r.jsx)(s.P7L, {
                        checked: h,
                        disabled: !y
                    })
                })
            })
        })]
    })
}