/** chunk id: 987482, original params: e,t,r (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => k
}), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(481613),
    o = r.n(s),
    c = r(607399),
    u = r(247775),
    d = r(311907),
    p = r(732955),
    m = r(397927),
    f = r(315982),
    g = r(961350),
    _ = r(287809),
    b = r(954571),
    x = r(53505),
    j = r(652215),
    y = r(985018),
    O = r(386144);
let v = [{
        getOs: () => y.intl.string(y.t.NK5ySJ),
        icon: O.Bt,
        url: () => (0, x.oW)("osx", !1),
        platformKey: 0
    }, {
        getOs: () => y.intl.string(y.t.OvKGE6),
        icon: O.KF,
        url: () => (0, x.oW)("win", !1),
        platformKey: 1
    }, {
        getOs: () => y.intl.string(y.t.dJB4PN),
        icon: O.pS,
        url: [{
            url: () => (0, x.oW)("linux", !1, "deb"),
            getText: () => y.intl.string(y.t.Sodsus)
        }, {
            url: () => (0, x.oW)("linux", !1, "tar.gz"),
            getText: () => y.intl.string(y.t.G3U6IV)
        }],
        platformKey: 2
    }],
    h = [{
        getOs: () => y.intl.string(y.t.wCVyNT),
        icon: O.s4,
        url: () => j.AMi.IOS,
        platformKey: 3
    }, {
        getOs: () => y.intl.string(y.t.wuQpJD),
        icon: O.yA,
        url: () => j.AMi.ANDROID,
        platformKey: 4
    }],
    w = e => {
        let {
            os: t,
            url: r,
            onClick: i
        } = e, l = a.useRef(null), [s, o] = a.useState(!1), c = a.useCallback(e => {
            let {
                closePopout: a
            } = e;
            return Array.isArray(r) ? (0, n.jsx)(m.W1t, {
                "data-menu-migrated": !0,
                navId: "download-app-menu",
                "aria-label": y.intl.string(y.t["+1H47t"]),
                onClose: a,
                onSelect: void 0,
                children: r.map(e => (0, n.jsx)(m.Drp, {
                    id: e.url(),
                    label: e.getText(),
                    action: () => i(t, e.url())
                }, e.url()))
            }) : null
        }, [t, r, i]);
        return Array.isArray(r) ? (0, n.jsx)(m.YNO, {
            renderPopout: c,
            targetElementRef: l,
            align: "left",
            position: "bottom",
            onRequestOpen: () => o(!0),
            onRequestClose: () => o(!1),
            children: e => {
                var t, r;
                return (0, n.jsx)(p.$nd, (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({}, e), r = r = {
                    buttonRef: l,
                    text: y.intl.string(y.t["1WjMbC"]),
                    variant: "primary",
                    size: "sm",
                    fullWidth: !0,
                    icon: s ? p.jQp : p.g8p,
                    iconPosition: "end"
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        }) : (0, n.jsx)(p.$nd, {
            text: y.intl.string(y.t["1WjMbC"]),
            onClick: () => i(t, r()),
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            role: "link"
        })
    },
    N = e => {
        let {
            platform: t,
            onClick: r,
            onMouseEnter: a,
            isActive: i
        } = e, {
            getOs: s,
            icon: o,
            url: c,
            platformKey: u
        } = t, d = s(), p = l()(O.Kk, o);
        return (0, n.jsx)("li", {
            className: l()(O.iD, {
                [O.vu]: i
            }),
            onMouseEnter: () => a(u),
            children: (0, n.jsxs)("div", {
                className: O.FG,
                children: [(0, n.jsxs)("div", {
                    className: O.aA,
                    children: [(0, n.jsx)("div", {
                        className: p
                    }), (0, n.jsx)("div", {
                        className: l()(O.vu, p)
                    })]
                }), (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(m.Heading, {
                        className: O.$r,
                        variant: "heading-lg/semibold",
                        children: d
                    }), (0, n.jsx)("div", {
                        className: O.l6,
                        children: (0, n.jsx)(w, {
                            os: d,
                            url: c,
                            onClick: r
                        })
                    })]
                })]
            })
        })
    };

function k(e) {
    let {
        source: t,
        onClose: r,
        transitionState: i
    } = e, s = (0, d.bG)([_.default], () => _.default.getCurrentUser()), x = (0, d.bG)([g.default], () => g.default.getFingerprint()), w = null == s || s.isClaimed(), [k, A] = a.useState(function() {
        var e;
        switch (null == (e = o().os) ? void 0 : e.family) {
            case "OS X":
                return 0;
            case "Windows":
                return 1;
            case "Ubuntu":
            case "Debian":
            case "Fedora":
            case "Red Hat":
            case "SuSE":
            case "Linux":
                return 2;
            case "iOS":
                return 3;
            case "Android":
                return 4;
            default:
                return
        }
    }());

    function K(e, n) {
        (null != u.getToken() || null != x) && b.default.track(j.HAw.DOWNLOAD_APP, {
            platform: e,
            ptb: !1,
            released: !0,
            has_e_mail: w,
            referring_location: t,
            qr_code: !1
        }), w ? window.open(n, "_blank") : (r(), f.R())
    }

    function P(e) {
        A(e)
    }
    return a.useEffect(() => {
        b.default.track(j.HAw.OPEN_MODAL, {
            type: "Download App",
            source: {
                location: t
            }
        })
    }, [t]), (0, n.jsx)(p.aFV, {
        title: y.intl.string(y.t["BK8LK+"]),
        actions: void 0,
        onClose: r,
        transitionState: i,
        preview: (0, n.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: y.intl.format(y.t["RJS+1P"], {})
        }),
        children: (0, n.jsxs)("div", {
            className: O.kL,
            children: [!c.Fr && (0, n.jsxs)("div", {
                className: O.Fp,
                children: [(0, n.jsx)(m.Heading, {
                    variant: "heading-md/normal",
                    color: "text-subtle",
                    className: O.wx,
                    children: y.intl.string(y.t["0KK0bP"])
                }), (0, n.jsx)("ul", {
                    className: l()(O.Bn, O.Fw),
                    children: v.map(e => (0, n.jsx)(N, {
                        isActive: k === e.platformKey,
                        platform: e,
                        onClick: K,
                        onMouseEnter: P
                    }, e.platformKey))
                })]
            }), (0, n.jsxs)("div", {
                className: O.Fp,
                children: [!c.Fr && (0, n.jsx)(m.Heading, {
                    variant: "heading-md/normal",
                    color: "text-subtle",
                    className: O.wx,
                    children: y.intl.string(y.t.RdSNWa)
                }), (0, n.jsx)("ul", {
                    className: l()(O.Bn, O.f$),
                    children: h.map(e => (0, n.jsx)(N, {
                        isActive: k === e.platformKey,
                        platform: e,
                        onClick: K,
                        onMouseEnter: P
                    }, e.platformKey))
                })]
            })]
        })
    })
}