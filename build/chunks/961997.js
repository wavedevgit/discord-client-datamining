/** chunk id: 961997 params = (module,exports,require) **/
n.d(t, {
    k: () => I,
    o: () => C
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(508602),
    o = n(158954),
    d = n(630054),
    c = n(607470),
    u = n(77350),
    _ = n(110168),
    m = n(390248),
    h = n(961440),
    p = n(985018),
    g = n(922812);
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
                className: l()(g.Ki, g.$_),
                controls: !0,
                src: t
            }) : (0, i.jsx)("img", {
                className: l()(g.Sl, g.$_),
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

function I(e) {
    let {
        channelId: t,
        messageId: n,
        isReportFalsePositiveLoading: r,
        analyticsContext: l,
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
            context: l
        }), _()
    }, [t, n, l, _]), g = a.useCallback(() => {
        c?.(), (0, m.hv)({
            action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: t,
            messageId: n,
            context: l
        })
    }, [t, n, l, c]);
    return a.useEffect(() => {
        (0, m.hv)({
            action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: t,
            messageId: n,
            context: l
        })
    }, [t, n, l]), (0, i.jsxs)(o.Modal, {
        transitionState: u,
        onClose: _,
        title: p.intl.string(p.t.TPpVkI),
        subtitle: p.intl.string(p.t["z4du/I"]),
        actions: [{
            text: p.intl.string(p.t["ETE/oC"]),
            onClick: h,
            variant: "secondary",
            disabled: r
        }, {
            text: p.intl.string(p.t["cY+Oob"]),
            onClick: g,
            loading: r,
            disabled: r
        }],
        children: [null != s && (0, i.jsx)(A, {
            attachment: s
        }), null != d && (0, i.jsx)(x, {
            embed: d
        })]
    })
}