/** chunk id: 961997 params = (module,exports,require) **/
n.d(e, {
    k: () => p,
    o: () => h
});
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(508602),
    o = n(158954),
    c = n(630054),
    d = n(607470),
    u = n(77350),
    _ = n(110168),
    I = n(390248),
    E = n(961440),
    x = n(985018),
    v = n(922812);
let m = t => {
        let {
            attachment: e
        } = t, {
            url: n,
            description: a
        } = e;
        return null == n ? null : (0, i.jsx)(C, {
            url: n,
            description: a
        })
    },
    T = t => {
        let {
            embed: e
        } = t;
        if (!E.Tj.has(e.type)) return null;
        let n = void 0 !== e.video && e.type !== r.A.GIFV ? e.video.url : e.thumbnail?.url ?? e.image?.url;
        return null == n ? null : (0, i.jsx)(C, {
            url: n
        })
    },
    C = t => {
        let {
            url: e,
            description: n
        } = t, a = (0, u.r1)(e);
        return (0, i.jsx)("div", {
            className: v.il,
            children: a ? (0, i.jsx)(d.A, {
                className: l()(v.Ki, v.$_),
                controls: !0,
                src: e
            }) : (0, i.jsx)("img", {
                className: l()(v.Sl, v.$_),
                src: e,
                alt: n
            })
        })
    };

function h(t) {
    c.A.pop(), (0, _.r)({
        id: "explicit-media-false-positive-modal",
        text: x.intl.string(x.t.gFsTKu)
    }), t()
}

function p(t) {
    let {
        channelId: e,
        messageId: n,
        isReportFalsePositiveLoading: s,
        analyticsContext: l,
        attachmentPreview: r,
        embedPreview: c,
        onConfirmPress: d,
        transitionState: u,
        onClose: _
    } = t, E = a.useCallback(() => {
        (0, I.hv)({
            action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
            channelId: e,
            messageId: n,
            context: l
        }), _()
    }, [e, n, l, _]), v = a.useCallback(() => {
        d?.(), (0, I.hv)({
            action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: e,
            messageId: n,
            context: l
        })
    }, [e, n, l, d]);
    return a.useEffect(() => {
        (0, I.hv)({
            action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: e,
            messageId: n,
            context: l
        })
    }, [e, n, l]), (0, i.jsxs)(o.Modal, {
        transitionState: u,
        onClose: _,
        title: x.intl.string(x.t.TPpVkI),
        subtitle: x.intl.string(x.t["z4du/I"]),
        actions: [{
            text: x.intl.string(x.t["ETE/oC"]),
            onClick: E,
            variant: "secondary",
            disabled: s
        }, {
            text: x.intl.string(x.t["cY+Oob"]),
            onClick: v,
            loading: s,
            disabled: s
        }],
        children: [null != r && (0, i.jsx)(m, {
            attachment: r
        }), null != c && (0, i.jsx)(T, {
            embed: c
        })]
    })
}