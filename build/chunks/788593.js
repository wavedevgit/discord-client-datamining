/** chunk id: 788593 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    R: () => f
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(990078),
    o = n(397927),
    c = n(409626),
    d = n(692969),
    u = n(207803),
    g = n(485745),
    _ = n(985018),
    m = n(522500);

function f(e) {
    let {
        imageSrc: t,
        gameName: n
    } = e, [l, s] = a.useState(!1), r = n ?? _.intl.string(_.t.GIWFlF);
    return l || null == t ? (0, i.jsx)("div", {
        role: "img",
        "aria-label": r,
        className: m.Np,
        children: (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            lineClamp: 3,
            "aria-hidden": !0,
            children: r
        })
    }) : (0, i.jsx)("img", {
        src: t,
        alt: r,
        className: m.$_,
        onError: () => s(!0),
        onLoad: () => s(!1)
    })
}

function x(e) {
    let {
        imageSrc: t,
        gameName: n,
        applicationId: l,
        userId: x,
        className: p,
        hideTooltip: I = !1,
        coverRef: A
    } = e, h = (0, g.A)(), E = (0, d.A)({
        location: "GameCover",
        applicationId: l,
        source: c.Ob.UserProfile,
        sourceUserId: x,
        trackEntryPointImpression: !0
    }), v = n ?? _.intl.string(_.t.GIWFlF), j = _.intl.formatToPlainString(_.t["8QLQB+"], {
        gameName: v
    }), T = a.useCallback(e => {
        if (h) {
            e.preventDefault(), e.stopPropagation(), (0, u.VQ)();
            return
        }
        E?.(e)
    }, [h, E]), N = e => I ? e : (0, i.jsx)(r.m, {
        text: v,
        ariaHidden: !0,
        children: e
    });
    return N(null == E ? (0, i.jsx)(o.vN3, {
        children: (0, i.jsx)("div", {
            ref: A,
            className: p,
            tabIndex: -1,
            children: (0, i.jsx)(f, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(o.DUT, {
        innerRef: A,
        onClick: T,
        "aria-label": j,
        className: s()(m.vk, p),
        children: (0, i.jsx)(f, {
            imageSrc: t,
            gameName: n
        })
    }))
}

function p(e) {
    let {
        applicationId: t,
        userId: n,
        className: a,
        disableInteraction: l = !1,
        hideTooltip: r,
        coverRef: c,
        ...d
    } = e, u = s()(m.PY, a);
    return l ? (0, i.jsx)(o.vN3, {
        children: (0, i.jsx)("div", {
            ref: c,
            className: u,
            tabIndex: -1,
            children: (0, i.jsx)(f, {
                ...d
            })
        })
    }) : (0, i.jsx)(x, {
        className: u,
        applicationId: t,
        userId: n,
        hideTooltip: r,
        coverRef: c,
        ...d
    })
}