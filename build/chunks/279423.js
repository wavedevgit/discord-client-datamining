/** Chunk was on 60667 **/
/** chunk id: 279423, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(158954),
    l = n(964486),
    s = n(933297),
    a = n(471675);

function o(e) {
    let {
        notice: t
    } = e, {
        noticeType: n,
        useText: s
    } = t, a = s();
    return (0, l.Ay)(() => {
        var e;
        null == (e = t.trackView) || e.call(t)
    }), (0, r.jsx)(i.wx6, {
        type: n,
        children: a
    })
}

function c(e) {
    let {
        notice: t
    } = e, {
        notice: n
    } = t;
    return (0, r.jsx)(n, {})
}

function d(e) {
    let {
        notice: t
    } = e;
    switch (t.type) {
        case s.W.INLINE_NOTICE:
            return (0, r.jsx)(o, {
                notice: t
            });
        case s.W.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, {
                notice: t
            })
    }
}

function u(e) {
    let {
        notice: t
    } = e;
    return (0, r.jsx)("div", {
        className: a.l,
        children: (0, r.jsx)(d, {
            notice: t
        })
    })
}