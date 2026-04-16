/** chunk id: 369254 params = (module,exports,require) **/
n.d(t, {
    A: () => O,
    Z: () => N
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(397927),
    s = n(930125),
    d = n(338717),
    u = n(282108),
    h = n(776231),
    c = n(302031),
    m = n(644447),
    p = n(203982),
    g = n(515718),
    f = n(700331),
    x = n(454290),
    A = n(536763),
    y = n(976247),
    w = n(358731),
    C = n(215050),
    E = n(597351),
    v = n(608214),
    I = n(652215),
    j = n(985018),
    M = n(420165);

function S(e) {
    let {
        children: t,
        isObscured: n,
        src: a
    } = e, [o, s] = r.useState(!1), u = r.useCallback(() => {
        s(e => !e)
    }, []);
    return n ? (0, i.jsx)(c.Bs.Provider, {
        value: o,
        children: (0, i.jsx)(c.Ay, {
            type: c.Ay.Types.ATTACHMENT,
            reason: d.Oc.EXPLICIT_CONTENT,
            obscured: !0,
            isSingleMosaicItem: !0,
            onToggleObscurity: u,
            children: e => (0, i.jsx)("div", {
                className: l()(M.JT, {
                    [M.Qr]: e
                }),
                children: t(e)
            })
        }, a)
    }) : (0, i.jsx)(i.Fragment, {
        children: t(!1)
    })
}

function N(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, g.eJ)(e)) return void(0, h.yt)(e.url);
    let n = (0, m.E)({
        proxyURL: e.proxyUrl,
        url: e.url
    });
    (0, A.A)({
        src: n,
        width: e.width,
        height: e.height,
        hasMultiple: t,
        options: e
    })
}

function O(e) {
    let {
        items: t,
        onIndexChange: n,
        startIndex: a = 0,
        enabledContentHarmTypeFlags: d = 0,
        shouldHideMediaOptions: h = !1
    } = e, [c, m] = r.useState(a), g = r.useRef(a), {
        zoomed: A,
        setZoomed: N
    } = (0, x.Q)(), O = r.useCallback(e => {
        var i;
        m(e = (e % (i = t.length) + i) % i), g.current = e, n?.(e), N(!1)
    }, [n, t, N]);
    r.useEffect(() => {
        let e = () => O(g.current + 1),
            t = () => O(g.current - 1);
        return p._.subscribe(I.jej.MODAL_CAROUSEL_NEXT, e), p._.subscribe(I.jej.MODAL_CAROUSEL_PREV, t), () => {
            p._.unsubscribe(I.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(I.jej.MODAL_CAROUSEL_PREV, t)
        }
    }, [O, N]);
    let P = t[c],
        _ = (0, u.qo)({
            type: s.D.GenericMedia,
            media: P
        }, d),
        T = h ? e => {
            e.stopPropagation(), e.preventDefault()
        } : () => f.l.markActionPerformed(f.N.CONTEXT_MENU_OPENED),
        U = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(w.Ay, {
            children: e => U ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(E.A, {
                    onClick: e => {
                        e.stopPropagation(), p._.dispatch(I.jej.MODAL_CAROUSEL_PREV)
                    },
                    icon: o.Zge,
                    tooltip: j.intl.string(j.t.vgfxaA),
                    className: l()(M.vi, e)
                }), (0, i.jsx)(E.A, {
                    onClick: e => {
                        e.stopPropagation(), p._.dispatch(I.jej.MODAL_CAROUSEL_NEXT)
                    },
                    icon: o.KS6,
                    tooltip: j.intl.string(j.t.XiOHRX),
                    className: l()(M.f8, e)
                })]
            }) : void 0
        }), (0, i.jsx)(y.A, {
            items: t,
            currentIndex: c,
            children: (e, t) => (0, i.jsx)(S, {
                isObscured: !A && _,
                src: P.url,
                children: n => (0, i.jsx)(v.Ay, {
                    media: P,
                    maxWidth: e,
                    maxHeight: t,
                    obscured: n,
                    onContextMenu: T
                })
            })
        }), U && (0, i.jsx)(w.Ay, {
            children: e => (0, i.jsx)(C.A, {
                items: t,
                currentIndex: c,
                onGalleryItemClick: O,
                className: e,
                enabledContentHarmTypeFlags: d
            })
        })]
    })
}