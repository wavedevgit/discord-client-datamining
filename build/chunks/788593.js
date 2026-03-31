/** chunk id: 788593 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
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
    g = n(958805),
    m = n(61881),
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

function h(e) {
    let {
        imageSrc: t,
        gameName: n,
        applicationId: l,
        userId: h,
        className: _,
        hideTooltip: A = !1,
        coverRef: I
    } = e, j = (0, r.bG)([m.A], () => m.A.hasUnsavedChanges()), E = (0, u.A)({
        location: "GameCover",
        applicationId: l,
        source: d.Ob.UserProfile,
        sourceUserId: h,
        trackEntryPointImpression: !0
    }), v = n ?? p.intl.string(p.t.GIWFlF), T = p.intl.formatToPlainString(p.t["8QLQB+"], {
        gameName: v
    }), b = a.useCallback(e => {
        if (j) {
            e.preventDefault(), e.stopPropagation(), g.A.notifyUnsavedWidgets();
            return
        }
        E?.(e)
    }, [j, E]), C = e => A ? e : (0, i.jsx)(o.m, {
        text: v,
        ariaHidden: !0,
        children: e
    });
    return C(null == E ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: I,
            className: _,
            tabIndex: -1,
            children: (0, i.jsx)(f, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(c.DUT, {
        innerRef: I,
        onClick: b,
        "aria-label": T,
        className: s()(x.vk, _),
        children: (0, i.jsx)(f, {
            imageSrc: t,
            gameName: n
        })
    }))
}

function _(e) {
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
    }) : (0, i.jsx)(h, {
        className: u,
        applicationId: t,
        userId: n,
        hideTooltip: r,
        coverRef: o,
        ...d
    })
}