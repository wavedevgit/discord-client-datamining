/** chunk id: 788593 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    R: () => p
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(409626),
    u = n(692969),
    g = n(958805),
    m = n(61881),
    x = n(985018),
    f = n(522500);

function p(e) {
    let {
        imageSrc: t,
        gameName: n
    } = e, [l, s] = a.useState(!1), r = n ?? x.intl.string(x.t.GIWFlF);
    return l || null == t ? (0, i.jsx)("div", {
        role: "img",
        "aria-label": r,
        className: f.Np,
        children: (0, i.jsx)(d.Text, {
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

function h(e) {
    let {
        imageSrc: t,
        gameName: n,
        applicationId: l,
        userId: h,
        className: _,
        hideTooltip: A = !1,
        coverRef: I
    } = e, j = (0, r.bG)([m.A], () => m.A.hasUnsavedChanges()), v = (0, u.A)({
        location: "GameCover",
        applicationId: l,
        source: c.Ob.UserProfile,
        sourceUserId: h,
        trackEntryPointImpression: !0
    }), E = n ?? x.intl.string(x.t.GIWFlF), T = x.intl.formatToPlainString(x.t["8QLQB+"], {
        gameName: E
    }), b = a.useCallback(e => {
        if (j) {
            e.preventDefault(), e.stopPropagation(), g.A.notifyUnsavedWidgets();
            return
        }
        v?.(e)
    }, [j, v]), C = e => A ? e : (0, i.jsx)(o.m, {
        text: E,
        ariaHidden: !0,
        children: e
    });
    return C(null == v ? (0, i.jsx)(d.vN3, {
        children: (0, i.jsx)("div", {
            ref: I,
            className: _,
            tabIndex: -1,
            children: (0, i.jsx)(p, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(d.DUT, {
        innerRef: I,
        onClick: b,
        "aria-label": T,
        className: s()(f.vk, _),
        children: (0, i.jsx)(p, {
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
        ...c
    } = e, u = s()(f.PY, a);
    return l ? (0, i.jsx)(d.vN3, {
        children: (0, i.jsx)("div", {
            ref: o,
            className: u,
            tabIndex: -1,
            children: (0, i.jsx)(p, {
                ...c
            })
        })
    }) : (0, i.jsx)(h, {
        className: u,
        applicationId: t,
        userId: n,
        hideTooltip: r,
        coverRef: o,
        ...c
    })
}