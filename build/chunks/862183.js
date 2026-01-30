/** chunk id: 862183, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(442433),
    s = n(611010),
    l = n(735991),
    c = n(297486),
    u = n(346446),
    d = n(717048),
    f = n(448137),
    p = n(262547),
    _ = n(291071);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e) {
    var t;
    let {
        command: n,
        application: h,
        onClick: g,
        query: E,
        searchResultsPosition: y
    } = e, b = i.useCallback(e => {
        if ((0, l.$B)(h)) {
            let t = h instanceof s.Ay ? h : s.Ay.createFromServer(h);
            (0, o.jA)(e, e => (0, r.jsx)(u.A, m({
                application: t
            }, e)))
        }
    }, [h]), {
        iconURL: O,
        name: v,
        description: A
    } = i.useMemo(() => (0, l.X2)(h, {
        fakeAppIconURL: _
    }), [h]), I = i.useMemo(() => {
        var e;
        let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : A;
        return null == t ? null : (0, c.SD)(t, void 0)
    }, [A, null == n ? void 0 : n.displayDescription]), {
        trackSearchResultsItemImpressionRef: S
    } = (0, f.A)({
        applicationId: h.id,
        commandId: null == n ? void 0 : n.id,
        query: E,
        searchResultsPosition: y
    });
    return (0, r.jsx)(a.DUT, {
        className: p.vk,
        innerRef: e => {
            S.current = e
        },
        onClick: g,
        onContextMenu: b,
        children: (0, r.jsxs)(a.M1G, {
            className: p.ao,
            children: [(0, r.jsx)(d.A, {
                src: O,
                className: p.Kk,
                "aria-hidden": !0,
                rendersPlaceholder: !0
            }), (0, r.jsxs)("div", {
                className: p.Jn,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: null != (t = null == n ? void 0 : n.displayName) ? t : v
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    lineClamp: 1,
                    children: I
                })]
            }), null != n ? (0, r.jsx)(a.Text, {
                className: p.Pn,
                variant: "text-sm/normal",
                color: "text-subtle",
                children: v
            }) : null, (0, r.jsx)("div", {
                className: p.V1
            })]
        })
    })
}