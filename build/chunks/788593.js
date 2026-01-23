/** Chunk was on 42944 **/
/** chunk id: 788593, original params: e,a,n (module,exports,require) **/
n.d(a, {
    A: () => j,
    R: () => g
}), n(896048);
var t = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(409626),
    u = n(692969),
    m = n(958805),
    p = n(61881),
    f = n(985018),
    v = n(461349);

function x(e) {
    for (var a = 1; a < arguments.length; a++) {
        var n = null != arguments[a] ? arguments[a] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), t.forEach(function(a) {
            var t;
            t = n[a], a in e ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[a] = t
        })
    }
    return e
}

function g(e) {
    let {
        imageSrc: a,
        gameName: n
    } = e, [i, r] = l.useState(!1), s = null != n ? n : f.intl.string(f.t.GIWFlF);
    return i || null == a ? (0, t.jsx)("div", {
        role: "img",
        "aria-label": s,
        className: v.Np,
        children: (0, t.jsx)(c.Text, {
            variant: "text-xxs/medium",
            lineClamp: 3,
            "aria-hidden": !0,
            children: s
        })
    }) : (0, t.jsx)("img", {
        src: a,
        alt: s,
        className: v.$_,
        onError: () => r(!0),
        onLoad: () => r(!1)
    })
}

function A(e) {
    let {
        imageSrc: a,
        gameName: n,
        applicationId: i,
        userId: x,
        className: A,
        hideTooltip: j = !1,
        coverRef: h
    } = e, I = (0, s.bG)([p.A], () => p.A.hasUnsavedChanges()), N = (0, u.A)({
        location: "GameCover",
        applicationId: i,
        source: d.Ob.UserProfile,
        sourceUserId: x,
        trackEntryPointImpression: !0
    }), b = null != n ? n : f.intl.string(f.t.GIWFlF), E = f.intl.formatToPlainString(f.t["8QLQB+"], {
        gameName: b
    }), O = l.useCallback(e => {
        if (I) {
            e.preventDefault(), e.stopPropagation(), m.A.notifyUnsavedWidgets();
            return
        }
        null == N || N(e)
    }, [I, N]), y = e => j ? e : (0, t.jsx)(o.m, {
        text: b,
        ariaHidden: !0,
        children: e
    });
    return y(null == N ? (0, t.jsx)(c.vN3, {
        children: (0, t.jsx)("div", {
            ref: h,
            className: A,
            tabIndex: -1,
            children: (0, t.jsx)(g, {
                imageSrc: a,
                gameName: n
            })
        })
    }) : (0, t.jsx)(c.DUT, {
        innerRef: h,
        onClick: O,
        "aria-label": E,
        className: r()(v.vk, A),
        children: (0, t.jsx)(g, {
            imageSrc: a,
            gameName: n
        })
    }))
}

function j(e) {
    let {
        applicationId: a,
        userId: n,
        className: l,
        disableInteraction: i = !1,
        hideTooltip: s,
        coverRef: o
    } = e, d = function(e, a) {
        if (null == e) return {};
        var n, t, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) t = n[l], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            return i
        }
        if (i = function(e, a) {
                if (null == e) return {};
                var n, t, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (t = 0; t < i.length; t++) n = i[t], !(a.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, a), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) t = n[l], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
        return i
    }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]), u = r()(v.PY, l);
    return i ? (0, t.jsx)(c.vN3, {
        children: (0, t.jsx)("div", {
            ref: o,
            className: u,
            tabIndex: -1,
            children: (0, t.jsx)(g, x({}, d))
        })
    }) : (0, t.jsx)(A, x({
        className: u,
        applicationId: a,
        userId: n,
        hideTooltip: s,
        coverRef: o
    }, d))
}