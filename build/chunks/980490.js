/** chunk id: 980490 params = (module,exports,require) **/
n.d(t, {
    q: () => N
});
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(735438),
    u = n(397927),
    o = n(155718),
    c = n(222713),
    A = n(57882),
    d = n(573435),
    h = n(619517),
    _ = n(448381),
    I = n(465364),
    E = n(291812),
    m = n(253932),
    g = n(53228),
    C = n(985018),
    L = n(582068),
    f = n(28289);

function N(e) {
    let {
        message: t,
        forwardOptions: n,
        channel: s
    } = e, N = m.hH.useSetting(), {
        attachments: x,
        embeds: p,
        hasContent: P,
        contentMessage: T
    } = (0, g.A)({
        message: t,
        channel: s,
        forwardOptions: n
    }), b = T.components.length > 0 && T.components[0].type === o.I5.CHECKPOINT_CARD ? T.components[0].checkpointData : null, S = c.f[b?.cardId ?? 0], F = (0, u.rdh)(S.primaryColor).hex(), D = a.useMemo(() => P ? (0, I.Ay)(t, {
        formatInline: !0,
        allowLinks: !0,
        allowHeading: !0,
        allowList: !0,
        hideSimpleEmbedContent: !1,
        contentMessage: T
    }).content : null, [T, P, t]), G = x.length, y = null, O = null, v = null;
    if (G > 0 || p.length > 0) {
        let e = (0, r.countBy)(x, e => (0, _.NI)(e, !0)),
            t = e.IMAGE ?? 0,
            n = e.VIDEO ?? 0;
        t > 0 && n > 0 ? (y = C.intl.formatToPlainString(C.t.Lr0Top, {
            image_count: t,
            video_count: n
        }), O = u.sYc) : n > 0 ? (y = C.intl.formatToPlainString(C.t.SJ6pPX, {
            count: n
        }), O = u.SfG) : t > 0 ? (y = C.intl.formatToPlainString(C.t.h4pFfU, {
            count: t
        }), O = 1 === t ? u.xfq : u.sYc) : (y = C.intl.formatToPlainString(C.t["89ihS8"], {
            count: G
        }), O = u.PtA), n > 0 && G === n ? v = (0, l.jsxs)("div", {
            className: i()(f.cR, f.JZ),
            children: [(0, l.jsx)(h.Ay, {
                className: f.xn,
                src: x[0].proxy_url,
                width: 56,
                height: 56
            }), (0, l.jsx)(u.SfG, {
                className: f.uZ,
                size: "md",
                color: "white"
            })]
        }) : G > 0 ? v = (0, l.jsx)("div", {
            className: f.cR,
            children: (0, l.jsx)(h.Ay, {
                src: x[0].proxy_url,
                width: 56,
                height: 56
            })
        }) : p[0]?.thumbnail?.proxyURL != null && (v = (0, l.jsx)("div", {
            className: f.cR,
            children: (0, l.jsx)(h.Ay, {
                src: p[0].thumbnail.proxyURL,
                width: 56,
                height: 56
            })
        }))
    }
    return G > 1 && null != v && (v = (0, l.jsxs)("div", {
        className: f.EW,
        children: [(0, l.jsx)(d.Ay, {
            mask: d.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
            width: 56,
            height: 56,
            children: v
        }), (0, l.jsxs)(u.Text, {
            className: f.mB,
            variant: "text-xs/semibold",
            color: "text-default",
            children: ["+", G - 1]
        })]
    })), (0, l.jsxs)("div", {
        className: f.sq,
        children: [(0, l.jsxs)("div", {
            className: f.FG,
            children: [null != b && (0, l.jsx)(u.Text, {
                variant: "text-md/medium",
                children: C.intl.string(L.default.goiR2u)
            }), P && (0, l.jsx)(E.Ay, {
                className: i()(f.vp, G > 0 && f.NL),
                message: t,
                content: D,
                compact: N
            }), G > 0 && (0, l.jsxs)("div", {
                className: f.kp,
                children: [null != O && (0, l.jsx)(O, {
                    size: "custom",
                    width: P ? 18 : 20,
                    color: u.LU0.colors.TEXT_MUTED
                }), null != y && (0, l.jsx)(u.Text, {
                    variant: P ? "text-sm/medium" : "text-md/medium",
                    color: "text-muted",
                    children: y
                })]
            })]
        }), v, null != b && (0, l.jsx)("div", {
            className: f.cR,
            children: (0, l.jsx)("img", {
                alt: "",
                style: {
                    backgroundColor: F
                },
                width: 56,
                height: 56,
                src: (0, A.OW)(b.cardId ?? 0)
            })
        })]
    })
}