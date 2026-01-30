/** chunk id: 632441, original params: e,t,r (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => C
}), r(896048);
var n = r(627968),
    l = r(64700),
    u = r(158954),
    i = r(311907),
    s = r(397927),
    a = r(734057),
    c = r(287809),
    o = r(562153),
    f = r(798286),
    d = r(814278),
    E = r(636153),
    y = r(204459),
    b = r(665691),
    A = r(998759),
    p = r(50299),
    g = r(82821),
    O = r(75811),
    _ = r(930840);
r(603266);
var S = r(652215),
    m = r(985018),
    R = r(42768);

function T(e) {
    let {
        badgeText: t,
        badgeColor: r
    } = e, u = l.useRef(t), i = l.useRef(r);
    return (0, n.jsx)(s.LpS, {
        text: u.current,
        color: i.current
    })
}

function C(e) {
    var t, r;
    let {
        transitionState: C,
        userId: v,
        channelId: h,
        onClose: j
    } = e, N = (0, i.bG)([c.default], () => c.default.getUser(v)), I = (0, i.bG)([a.A], () => {
        var e;
        return null == (e = a.A.getChannel(h)) ? void 0 : e.getGuildId()
    }), w = o.Ay.useName(I, null, N), {
        fingerprint: x,
        userKey: U
    } = (0, p.R)({
        userId: v
    }), F = (0, A.z)({
        fingerprintBase64: x,
        chunkSize: 5,
        desiredLength: 45
    }), P = l.useCallback(() => {
        (0, f.Hb)({
            userId: v,
            channelId: h
        })
    }, [h, v]), k = (0, b.UF)({
        userId: v,
        channelId: h
    });
    (0, y.w)({
        channelId: h,
        userId: v,
        nickname: w,
        onAlertOpen: j
    });
    let {
        isCurrentUserKeyPersistent: D,
        isOtherUserKeyPersistent: K,
        loading: M
    } = (0, E.q)({
        userId: v
    }), V = l.useCallback(() => {
        null != U && ((0, d.bk)(v, U, K, h, S.ThZ.E2EE_USER_VERIFY_MODAL), j())
    }, [U, v, K, h, j]), L = l.useCallback(() => {
        null != U && ((0, d.Dh)(v, U, K), j())
    }, [U, v, K, j]), [G, Y] = l.useMemo(() => k ? [m.intl.string(m.t.UNUuem), s.LU0.colors.BACKGROUND_BRAND.css] : [m.intl.string(m.t.y2b7CA), s.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [k]), z = l.useMemo(() => (0, d.Z1)({
        isCurrentUserKeyPersistent: D,
        isOtherUserKeyPersistent: K,
        otherUserNickname: w
    }), [D, K, w]), B = (0, g.H)({
        userId: v,
        keyToOmit: U
    });
    l.useEffect(() => {
        (0, f.HJ)({
            userId: v,
            channelId: h
        })
    }, [h, v]);
    let H = {
            transitionState: C,
            title: m.intl.string(m.t["/WPGnF"]),
            subtitle: m.intl.format(m.t.oc2kce, {
                username: w
            })
        },
        q = (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("div", {
                className: R.Ot,
                children: [B > 0 && (0, n.jsx)(s.po8, {
                    messageType: s.YCn.INFO,
                    className: R.Ht,
                    children: m.intl.format(m.t.uZDkz0, {
                        count: B
                    })
                }), (0, n.jsxs)("div", {
                    className: R.wx,
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "text-sm/bold",
                        color: "text-strong",
                        children: m.intl.string(m.t["/WPGnF"])
                    }), null != F && (0, n.jsx)(_.c, {
                        className: R.nJ,
                        chunks: F,
                        color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        onCopy: P
                    }), (0, n.jsx)("div", {
                        className: R.ub,
                        children: null == F ? (0, n.jsx)(s.y$y, {
                            className: R.u1,
                            type: s.tVU.SPINNING_CIRCLE
                        }) : (0, n.jsx)(T, {
                            badgeText: G,
                            badgeColor: Y
                        })
                    })]
                }), (0, n.jsx)(O.j, {
                    className: R.aY,
                    chunks: F,
                    columns: 3
                })]
            }), (0, n.jsx)(s.Text, {
                className: R.qr,
                variant: "text-sm/normal",
                color: "text-muted",
                children: z
            })]
        }),
        Z = {
            text: k ? m.intl.string(m.t["Osb+/n"]) : m.intl.string(m.t["0tvNAn"]),
            disabled: null == F || M,
            onClick: k ? L : V
        },
        J = {
            text: m.intl.string(m.t["ETE/oC"]),
            onClick: j,
            variant: "secondary"
        };
    return (0, n.jsx)(u.Modal, (t = function(e) {
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
    }({
        onClose: j
    }, H), r = r = {
        actions: [J, Z],
        children: q
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