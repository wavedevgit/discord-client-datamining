/** chunk id: 961997, original params: t,e,n (module,exports,require) **/
n.d(e, {
    k: () => h,
    o: () => T
}), n(228524);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(508602),
    s = n(158954),
    c = n(630054),
    u = n(607470),
    d = n(77350),
    _ = n(110168),
    I = n(390248),
    v = n(961440),
    E = n(985018),
    m = n(954141);
let p = t => {
        let {
            attachment: e
        } = t, {
            url: n,
            description: l
        } = e;
        return null == n ? null : (0, i.jsx)(x, {
            url: n,
            description: l
        })
    },
    f = t => {
        var e, n, l;
        let {
            embed: a
        } = t;
        if (!v.Tj.has(a.type)) return null;
        let r = void 0 !== a.video && a.type !== o.A.GIFV ? a.video.url : null != (e = null == (n = a.thumbnail) ? void 0 : n.url) ? e : null == (l = a.image) ? void 0 : l.url;
        return null == r ? null : (0, i.jsx)(x, {
            url: r
        })
    },
    x = t => {
        let {
            url: e,
            description: n
        } = t, l = (0, d.r1)(e);
        return (0, i.jsx)("div", {
            className: m.il,
            children: l ? (0, i.jsx)(u.A, {
                className: r()(m.Ki, m.$_),
                controls: !0,
                src: e
            }) : (0, i.jsx)("img", {
                className: r()(m.Sl, m.$_),
                src: e,
                alt: n
            })
        })
    };

function T(t) {
    c.A.pop(), (0, _.r)({
        id: "explicit-media-false-positive-modal",
        text: E.intl.string(E.t.gFsTKu)
    }), t()
}

function h(t) {
    let {
        channelId: e,
        messageId: n,
        isReportFalsePositiveLoading: a,
        analyticsContext: r,
        attachmentPreview: o,
        embedPreview: c,
        onConfirmPress: u,
        transitionState: d,
        onClose: _
    } = t, v = l.useCallback(() => {
        (0, I.hv)({
            action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
            channelId: e,
            messageId: n,
            context: r
        }), _()
    }, [e, n, r, _]), m = l.useCallback(() => {
        null == u || u(), (0, I.hv)({
            action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: e,
            messageId: n,
            context: r
        })
    }, [e, n, r, u]);
    return l.useEffect(() => {
        (0, I.hv)({
            action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: e,
            messageId: n,
            context: r
        })
    }, [e, n, r]), (0, i.jsxs)(s.Modal, {
        transitionState: d,
        onClose: _,
        title: E.intl.string(E.t.TPpVkI),
        subtitle: E.intl.string(E.t["z4du/I"]),
        actions: [{
            text: E.intl.string(E.t["ETE/oC"]),
            onClick: v,
            variant: "secondary",
            disabled: a
        }, {
            text: E.intl.string(E.t["cY+Oob"]),
            onClick: m,
            loading: a,
            disabled: a
        }],
        children: [null != o && (0, i.jsx)(p, {
            attachment: o
        }), null != c && (0, i.jsx)(f, {
            embed: c
        })]
    })
}