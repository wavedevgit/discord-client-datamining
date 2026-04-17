/** chunk id: 961997 params = (module,exports,require) **/
n.d(t, {
    k: () => E,
    o: () => C
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(508602),
    o = n(158954),
    d = n(630054),
    c = n(607470),
    u = n(77350),
    _ = n(110168),
    m = n(390248),
    h = n(961440),
    p = n(985018),
    g = n(515052);
let A = e => {
        let {
            attachment: t
        } = e, {
            url: n,
            description: a
        } = t;
        return null == n ? null : (0, i.jsx)(f, {
            url: n,
            description: a
        })
    },
    x = e => {
        let {
            embed: t
        } = e;
        if (!h.Tj.has(t.type)) return null;
        let n = void 0 !== t.video && t.type !== s.A.GIFV ? t.video.url : t.thumbnail?.url ?? t.image?.url;
        return null == n ? null : (0, i.jsx)(f, {
            url: n
        })
    },
    f = e => {
        let {
            url: t,
            description: n
        } = e, a = (0, u.r1)(t);
        return (0, i.jsx)("div", {
            className: g.il,
            children: a ? (0, i.jsx)(c.A, {
                className: r()(g.Ki, g.$_),
                controls: !0,
                src: t
            }) : (0, i.jsx)("img", {
                className: r()(g.Sl, g.$_),
                src: t,
                alt: n
            })
        })
    };

function C(e) {
    d.A.pop(), (0, _.r)({
        id: "explicit-media-false-positive-modal",
        text: p.intl.string(p.t.gFsTKu)
    }), e()
}

function E(e) {
    let {
        channelId: t,
        messageId: n,
        isReportFalsePositiveLoading: l,
        analyticsContext: r,
        attachmentPreview: s,
        embedPreview: d,
        onConfirmPress: c,
        transitionState: u,
        onClose: _
    } = e, h = a.useCallback(() => {
        (0, m.hv)({
            action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
            channelId: t,
            messageId: n,
            context: r
        }), _()
    }, [t, n, r, _]), g = a.useCallback(() => {
        c?.(), (0, m.hv)({
            action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: t,
            messageId: n,
            context: r
        })
    }, [t, n, r, c]);
    return a.useEffect(() => {
        (0, m.hv)({
            action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: t,
            messageId: n,
            context: r
        })
    }, [t, n, r]), (0, i.jsxs)(o.Modal, {
        transitionState: u,
        onClose: _,
        title: p.intl.string(p.t.TPpVkI),
        subtitle: p.intl.string(p.t["z4du/I"]),
        actions: [{
            text: p.intl.string(p.t["ETE/oC"]),
            onClick: h,
            variant: "secondary",
            disabled: l
        }, {
            text: p.intl.string(p.t["cY+Oob"]),
            onClick: g,
            loading: l,
            disabled: l
        }],
        children: [null != s && (0, i.jsx)(A, {
            attachment: s
        }), null != d && (0, i.jsx)(x, {
            embed: d
        })]
    })
}