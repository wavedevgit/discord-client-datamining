/** chunk id: 788593, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    R: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(409626),
    u = n(692969),
    g = n(958805),
    m = n(61881),
    x = n(985018),
    f = n(461349);

function p(e) {
    let {
        imageSrc: t,
        gameName: n
    } = e, [a, s] = l.useState(!1), r = n ?? x.intl.string(x.t.GIWFlF);
    return a || null == t ? (0, i.jsx)("div", {
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

function h(e) {
    let {
        imageSrc: t,
        gameName: n,
        applicationId: a,
        userId: h,
        className: _,
        hideTooltip: A = !1,
        coverRef: I
    } = e, j = (0, r.bG)([m.A], () => m.A.hasUnsavedChanges()), v = (0, u.A)({
        location: "GameCover",
        applicationId: a,
        source: d.Ob.UserProfile,
        sourceUserId: h,
        trackEntryPointImpression: !0
    }), E = n ?? x.intl.string(x.t.GIWFlF), T = x.intl.formatToPlainString(x.t["8QLQB+"], {
        gameName: E
    }), b = l.useCallback(e => {
        if (j) {
            e.preventDefault(), e.stopPropagation(), g.A.notifyUnsavedWidgets();
            return
        }
        v?.(e)
    }, [j, v]), N = e => A ? e : (0, i.jsx)(o.m, {
        text: E,
        ariaHidden: !0,
        children: e
    });
    return N(null == v ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: I,
            className: _,
            tabIndex: -1,
            children: (0, i.jsx)(p, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(c.DUT, {
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
        className: l,
        disableInteraction: a = !1,
        hideTooltip: r,
        coverRef: o,
        ...d
    } = e, u = s()(f.PY, l);
    return a ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: o,
            className: u,
            tabIndex: -1,
            children: (0, i.jsx)(p, {
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