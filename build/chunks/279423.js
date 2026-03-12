/** chunk id: 279423 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(158954),
    l = n(964486),
    r = n(933297),
    a = n(224497);

function o(e) {
    let {
        notice: t
    } = e, {
        noticeType: n,
        useText: r
    } = t, a = r();
    return (0, l.Ay)(() => {
        t.trackView?.()
    }), (0, i.jsx)(s.wx6, {
        type: n,
        children: a
    })
}

function d(e) {
    let {
        notice: t
    } = e, {
        notice: n
    } = t;
    return (0, i.jsx)(n, {})
}

function c(e) {
    let {
        notice: t
    } = e;
    switch (t.type) {
        case r.lT.INLINE_NOTICE:
            return (0, i.jsx)(o, {
                notice: t
            });
        case r.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, i.jsx)(d, {
                notice: t
            })
    }
}

function u(e) {
    let {
        notice: t
    } = e;
    return (0, i.jsx)("div", {
        className: a.l,
        children: (0, i.jsx)(c, {
            notice: t
        })
    })
}