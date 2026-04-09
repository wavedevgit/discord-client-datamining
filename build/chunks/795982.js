/** chunk id: 795982 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    l = n(64700),
    s = n(158954),
    r = n(311907),
    a = n(52133),
    o = n(827734),
    d = n(397927),
    c = n(713654),
    u = n(958340),
    m = n(384231),
    _ = n(291812),
    h = n(538355),
    p = n(699352),
    g = n(8455),
    A = n(253932),
    x = n(734057),
    f = n(540999),
    C = n(71393),
    E = n(576705),
    I = n(994500),
    v = n(287809),
    b = n(862804),
    T = n(627950),
    y = n(387408),
    N = n(427209),
    S = n(985018),
    j = n(929694);

function L() {
    return (0, i.jsxs)("div", {
        className: j.N1,
        children: [(0, i.jsx)(N.A, {
            size: "xs",
            className: j.nr,
            color: o.A.colors.TEXT_MUTED
        }), (0, i.jsx)(s.EYj, {
            className: j.TK,
            variant: "text-sm/semibold",
            color: "text-muted",
            children: S.intl.string(S.t.ToyvLk)
        })]
    })
}

function R(e) {
    let {
        message: t,
        snapshot: n,
        index: c
    } = e, m = l.useMemo(() => new b.j(t, n, c), [t, n, c]), _ = (0, r.bG)([x.A, v.default, I.A, E.A, C.A, u.A], () => m.getForwardInfo(x.A, v.default, I.A, E.A, C.A, u.A).footerInfo, [m], a.A), h = (0, r.bG)([x.A], () => x.A.getChannel(t.messageReference?.channel_id)), p = l.useCallback(() => {
        (0, T.A)(t)
    }, [t]);
    return null == _ ? null : (0, i.jsxs)(d.DUT, {
        className: j.xQ,
        onClick: p,
        "aria-label": _.accessibilityLabel,
        children: [null != _.originIconUrl ? (0, i.jsx)("img", {
            className: j.yl,
            src: _.originIconUrl,
            alt: ""
        }) : null, null == _.originIconUrl && h?.isThread() ? (0, i.jsx)(P, {
            channel: h
        }) : null, (0, i.jsx)(s.EYj, {
            className: j.PJ,
            variant: "text-sm/medium",
            color: "none",
            children: `${_.originLabel}  •  ${_.timestampLabel}`
        }), (0, i.jsx)(d._BQ, {
            size: "xxs",
            color: o.A.colors.TEXT_MUTED
        })]
    })
}

function P(e) {
    let {
        channel: t
    } = e, n = (0, g.Vp)({
        location: "ForwardFooter"
    }), s = l.useMemo(() => (0, c.gU)(t), [t]);
    return n.enabled && null != s ? (0, i.jsx)(s, {
        className: j.yl,
        size: "xs",
        color: "currentColor"
    }) : null
}

function D(e) {
    let {
        message: t,
        snapshot: n,
        index: s
    } = e, a = l.useMemo(() => (0, y.A)(t, n), [t, n]), o = A.hD.useSetting(), d = A.rs.useSetting(), c = (0, r.bG)([f.A], () => f.A.isDeveloper), u = (0, m.S)((a.editedTimestamp ?? a.timestamp).valueOf()), {
        content: g,
        hasSpoilerEmbeds: C,
        hasBailedAst: E
    } = (0, h.A)(a, {
        hideSimpleEmbedContent: o && d,
        isInteracting: !1,
        formatInline: !1,
        allowList: u,
        allowHeading: u,
        allowLinks: !0,
        allowDevLinks: c,
        previewLinkTarget: !0
    }), I = (0, r.bG)([x.A], () => x.A.getChannel(t.channel_id)), v = A.hH.useSetting();
    return null == I ? null : (0, i.jsxs)("div", {
        className: j.kL,
        children: [(0, i.jsx)("div", {
            className: j.hD
        }), (0, i.jsxs)("div", {
            className: j.Qs,
            children: [(0, i.jsx)(L, {}), (0, i.jsx)(_.Ay, {
                message: a,
                content: g,
                compact: v
            }), (0, p.A)({
                channelMessageProps: {
                    message: a,
                    channel: I,
                    compact: v
                },
                hasSpoilerEmbeds: C,
                hasBailedAst: E,
                isInteracting: !1,
                isMessageSnapshot: !0,
                renderThreadAccessory: !1
            }), (0, i.jsx)(R, {
                message: t,
                snapshot: n,
                index: s
            })]
        })]
    }, s)
}

function M(e) {
    let {
        message: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(D, {
            message: t,
            snapshot: e,
            index: n
        }, n))
    })
}