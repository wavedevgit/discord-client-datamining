/** chunk id: 788593 params = (module,exports,require) **/
n.d(t, {
    A: () => I,
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
    m = n(958805),
    g = n(61881),
    f = n(985018),
    x = n(496527);

function p(e) {
    let {
        imageSrc: t,
        gameName: n
    } = e, [a, s] = l.useState(!1), r = n ?? f.intl.string(f.t.GIWFlF);
    return a || null == t ? (0, i.jsx)("div", {
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
        applicationId: a,
        userId: _,
        className: I,
        hideTooltip: h = !1,
        coverRef: A
    } = e, E = (0, r.bG)([g.A], () => g.A.hasUnsavedChanges()), T = (0, u.A)({
        location: "GameCover",
        applicationId: a,
        source: d.Ob.UserProfile,
        sourceUserId: _,
        trackEntryPointImpression: !0
    }), v = n ?? f.intl.string(f.t.GIWFlF), j = f.intl.formatToPlainString(f.t["8QLQB+"], {
        gameName: v
    }), C = l.useCallback(e => {
        if (E) {
            e.preventDefault(), e.stopPropagation(), m.A.notifyUnsavedWidgets();
            return
        }
        T?.(e)
    }, [E, T]), N = e => h ? e : (0, i.jsx)(o.m, {
        text: v,
        ariaHidden: !0,
        children: e
    });
    return N(null == T ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: A,
            className: I,
            tabIndex: -1,
            children: (0, i.jsx)(p, {
                imageSrc: t,
                gameName: n
            })
        })
    }) : (0, i.jsx)(c.DUT, {
        innerRef: A,
        onClick: C,
        "aria-label": j,
        className: s()(x.vk, I),
        children: (0, i.jsx)(p, {
            imageSrc: t,
            gameName: n
        })
    }))
}

function I(e) {
    let {
        applicationId: t,
        userId: n,
        className: l,
        disableInteraction: a = !1,
        hideTooltip: r,
        coverRef: o,
        ...d
    } = e, u = s()(x.PY, l);
    return a ? (0, i.jsx)(c.vN3, {
        children: (0, i.jsx)("div", {
            ref: o,
            className: u,
            tabIndex: -1,
            children: (0, i.jsx)(p, {
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