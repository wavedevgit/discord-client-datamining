/** chunk id: 788593 params = (module,exports,require) **/
n.d(t, {
    A: () => I,
    R: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(409626),
    u = n(692969),
    g = n(958805),
    _ = n(61881),
    m = n(985018),
    f = n(496527);

function x(e) {
    let {
        imageSrc: t,
        gameName: n
    } = e, [l, s] = a.useState(!1), r = n ?? m.intl.string(m.t.GIWFlF);
    return l || null == t ? (0, i.jsx)("div", {
        role: "img",
        "aria-label": r,
        className: f.Np,
        children: (0, i.jsx)(c.Text, {
            variant: "text-xxs/medium",
            lineClamp: 3,
            "aria-hidden": !0,
            children: r
        })
    }) : (0, i.jsx)("img", {
        src: t,
        alt: r,
        className: f.$_,
        onError: () => s(!0),
        onLoad: () => s(!1)
    })
}

function p(e) {
    let {
        imageSrc: t,
        gameName: n,
        applicationId: l,
        userId: p,
        className: I,
        hideTooltip: A = !1,
        coverRef: h
    } = e, v = (0, r.bG)([_.A], () => _.A.hasUnsavedChanges()), E = (0, u.A)({
        location: "GameCover",
        applicationId: l,
        source: d.Ob.UserProfile,
        sourceUserId: p,
        trackEntryPointImpression: !0
    }), j = n ?? m.intl.string(m.t.GIWFlF), T = m.intl.formatToPlainString(m.t["8QLQB+"], {
        gameName: j
    }), b = a.useCallback(e => {
        if (v) {
            e.preventDefault(), e.stopPropagation(), g.A.notifyUnsavedWidgets();
            return
        }
        E?.(e)
    }, [v, E]), C = e => A ? e : (0, i.jsx)(o.m, {
        text: j,
        ariaHidden: !0,
        children: e
    });
    return C(null == E ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: h,
            className: I,
            tabIndex: -1,
            children: (0, i.jsx)(x, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(c.DUT, {
        innerRef: h,
        onClick: b,
        "aria-label": T,
        className: s()(f.vk, I),
        children: (0, i.jsx)(x, {
            imageSrc: t,
            gameName: n
        })
    }))
}

function I(e) {
    let {
        applicationId: t,
        userId: n,
        className: a,
        disableInteraction: l = !1,
        hideTooltip: r,
        coverRef: o,
        ...d
    } = e, u = s()(f.PY, a);
    return l ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: o,
            className: u,
            tabIndex: -1,
            children: (0, i.jsx)(x, {
                ...d
            })
        })
    }) : (0, i.jsx)(p, {
        className: u,
        applicationId: t,
        userId: n,
        hideTooltip: r,
        coverRef: o,
        ...d
    })
}