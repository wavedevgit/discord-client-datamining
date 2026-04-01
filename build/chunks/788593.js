/** chunk id: 788593 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    R: () => f
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
    m = n(958805),
    g = n(61881),
    p = n(985018),
    x = n(496527);

function f(e) {
    let {
        imageSrc: t,
        gameName: n
    } = e, [l, s] = a.useState(!1), r = n ?? p.intl.string(p.t.GIWFlF);
    return l || null == t ? (0, i.jsx)("div", {
        role: "img",
        "aria-label": r,
        className: x.Np,
        children: (0, i.jsx)(c.Text, {
            variant: "text-xxs/medium",
            lineClamp: 3,
            "aria-hidden": !0,
            children: r
        })
    }) : (0, i.jsx)("img", {
        src: t,
        alt: r,
        className: x.$_,
        onError: () => s(!0),
        onLoad: () => s(!1)
    })
}

function _(e) {
    let {
        imageSrc: t,
        gameName: n,
        applicationId: l,
        userId: _,
        className: h,
        hideTooltip: A = !1,
        coverRef: I
    } = e, v = (0, r.bG)([g.A], () => g.A.hasUnsavedChanges()), j = (0, u.A)({
        location: "GameCover",
        applicationId: l,
        source: d.Ob.UserProfile,
        sourceUserId: _,
        trackEntryPointImpression: !0
    }), E = n ?? p.intl.string(p.t.GIWFlF), T = p.intl.formatToPlainString(p.t["8QLQB+"], {
        gameName: E
    }), N = a.useCallback(e => {
        if (v) {
            e.preventDefault(), e.stopPropagation(), m.A.notifyUnsavedWidgets();
            return
        }
        j?.(e)
    }, [v, j]), C = e => A ? e : (0, i.jsx)(o.m, {
        text: E,
        ariaHidden: !0,
        children: e
    });
    return C(null == j ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: I,
            className: h,
            tabIndex: -1,
            children: (0, i.jsx)(f, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(c.DUT, {
        innerRef: I,
        onClick: N,
        "aria-label": T,
        className: s()(x.vk, h),
        children: (0, i.jsx)(f, {
            imageSrc: t,
            gameName: n
        })
    }))
}

function h(e) {
    let {
        applicationId: t,
        userId: n,
        className: a,
        disableInteraction: l = !1,
        hideTooltip: r,
        coverRef: o,
        ...d
    } = e, u = s()(x.PY, a);
    return l ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: o,
            className: u,
            tabIndex: -1,
            children: (0, i.jsx)(f, {
                ...d
            })
        })
    }) : (0, i.jsx)(_, {
        className: u,
        applicationId: t,
        userId: n,
        hideTooltip: r,
        coverRef: o,
        ...d
    })
}