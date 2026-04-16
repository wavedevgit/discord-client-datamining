/** chunk id: 987482 params = (module,exports,require) **/
a.r(e), a.d(e, {
    default: () => k
});
var n = a(627968),
    l = a(64700),
    i = a(503698),
    r = a.n(i),
    s = a(481613),
    o = a.n(s),
    c = a(607399),
    d = a(247775),
    u = a(311907),
    p = a(732955),
    m = a(397927),
    _ = a(315982),
    f = a(961350),
    x = a(287809),
    g = a(954571),
    h = a(53505),
    j = a(652215),
    v = a(985018),
    N = a(982085);
let w = [{
        getOs: () => v.intl.string(v.t.NK5ySJ),
        icon: N.Bt,
        url: () => (0, h.oW)("osx", !1),
        platformKey: 0
    }, {
        getOs: () => v.intl.string(v.t.OvKGE6),
        icon: N.KF,
        url: () => (0, h.oW)("win", !1),
        platformKey: 1
    }, {
        getOs: () => v.intl.string(v.t.dJB4PN),
        icon: N.pS,
        url: [{
            url: () => (0, h.oW)("linux", !1, "deb"),
            getText: () => v.intl.string(v.t.Sodsus)
        }, {
            url: () => (0, h.oW)("linux", !1, "tar.gz"),
            getText: () => v.intl.string(v.t.G3U6IV)
        }],
        platformKey: 2
    }],
    b = [{
        getOs: () => v.intl.string(v.t.wCVyNT),
        icon: N.s4,
        url: () => j.AMi.IOS,
        platformKey: 3
    }, {
        getOs: () => v.intl.string(v.t.wuQpJD),
        icon: N.yA,
        url: () => j.AMi.ANDROID,
        platformKey: 4
    }],
    y = t => {
        let {
            os: e,
            url: a,
            onClick: i
        } = t, r = l.useRef(null), [s, o] = l.useState(!1), c = l.useCallback(t => {
            let {
                closePopout: l
            } = t;
            return Array.isArray(a) ? (0, n.jsx)(m.W1t, {
                "data-menu-migrated": !0,
                navId: "download-app-menu",
                "aria-label": v.intl.string(v.t["+1H47t"]),
                onClose: l,
                onSelect: void 0,
                children: a.map(t => (0, n.jsx)(m.Drp, {
                    id: t.url(),
                    label: t.getText(),
                    action: () => i(e, t.url())
                }, t.url()))
            }) : null
        }, [e, a, i]);
        return Array.isArray(a) ? (0, n.jsx)(m.YNO, {
            renderPopout: c,
            targetElementRef: r,
            align: "left",
            position: "bottom",
            onRequestOpen: () => o(!0),
            onRequestClose: () => o(!1),
            children: t => (0, n.jsx)(p.$nd, {
                ...t,
                buttonRef: r,
                text: v.intl.string(v.t["1WjMbC"]),
                variant: "primary",
                size: "sm",
                fullWidth: !0,
                icon: s ? p.jQp : p.g8p,
                iconPosition: "end"
            })
        }) : (0, n.jsx)(p.$nd, {
            text: v.intl.string(v.t["1WjMbC"]),
            onClick: () => i(e, a()),
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            role: "link"
        })
    },
    A = t => {
        let {
            platform: e,
            onClick: a,
            onMouseEnter: l,
            isActive: i
        } = t, {
            getOs: s,
            icon: o,
            url: c,
            platformKey: d
        } = e, u = s(), p = r()(N.Kk, o);
        return (0, n.jsx)("li", {
            className: r()(N.iD, {
                [N.vu]: i
            }),
            onMouseEnter: () => l(d),
            children: (0, n.jsxs)("div", {
                className: N.FG,
                children: [(0, n.jsxs)("div", {
                    className: N.aA,
                    children: [(0, n.jsx)("div", {
                        className: p
                    }), (0, n.jsx)("div", {
                        className: r()(N.vu, p)
                    })]
                }), (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(m.Heading, {
                        className: N.$r,
                        variant: "heading-lg/semibold",
                        children: u
                    }), (0, n.jsx)("div", {
                        className: N.l6,
                        children: (0, n.jsx)(y, {
                            os: u,
                            url: c,
                            onClick: a
                        })
                    })]
                })]
            })
        })
    };

function k(t) {
    let {
        source: e,
        onClose: a,
        transitionState: i
    } = t, s = (0, u.bG)([x.default], () => x.default.getCurrentUser()), h = (0, u.bG)([f.default], () => f.default.getFingerprint()), y = null == s || s.isClaimed(), [k, K] = l.useState(function() {
        switch (o().os?.family) {
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

    function O(t, n) {
        (null != d.getToken() || null != h) && g.default.track(j.HAw.DOWNLOAD_APP, {
            platform: t,
            ptb: !1,
            released: !0,
            has_e_mail: y,
            referring_location: e,
            qr_code: !1
        }), y ? window.open(n, "_blank") : (a(), _.R())
    }

    function C(t) {
        K(t)
    }
    return l.useEffect(() => {
        g.default.track(j.HAw.OPEN_MODAL, {
            type: "Download App",
            source: {
                location: e
            }
        })
    }, [e]), (0, n.jsx)(p.aFV, {
        title: v.intl.string(v.t["BK8LK+"]),
        actions: void 0,
        onClose: a,
        transitionState: i,
        preview: (0, n.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: v.intl.format(v.t["RJS+1P"], {})
        }),
        children: (0, n.jsxs)("div", {
            className: N.kL,
            children: [!c.Fr && (0, n.jsxs)("div", {
                className: N.Fp,
                children: [(0, n.jsx)(m.Heading, {
                    variant: "heading-md/normal",
                    color: "text-subtle",
                    className: N.wx,
                    children: v.intl.string(v.t["0KK0bP"])
                }), (0, n.jsx)("ul", {
                    className: r()(N.Bn, N.Fw),
                    children: w.map(t => (0, n.jsx)(A, {
                        isActive: k === t.platformKey,
                        platform: t,
                        onClick: O,
                        onMouseEnter: C
                    }, t.platformKey))
                })]
            }), (0, n.jsxs)("div", {
                className: N.Fp,
                children: [!c.Fr && (0, n.jsx)(m.Heading, {
                    variant: "heading-md/normal",
                    color: "text-subtle",
                    className: N.wx,
                    children: v.intl.string(v.t.RdSNWa)
                }), (0, n.jsx)("ul", {
                    className: r()(N.Bn, N.f$),
                    children: b.map(t => (0, n.jsx)(A, {
                        isActive: k === t.platformKey,
                        platform: t,
                        onClick: O,
                        onMouseEnter: C
                    }, t.platformKey))
                })]
            })]
        })
    })
}